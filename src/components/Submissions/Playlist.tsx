/* eslint-disable react/display-name */
import React, { useEffect, useState, PropsWithChildren, useContext } from 'react'
import { CircularProgress, Grid, Typography, Card, CardContent, CardMedia, Box, IconButton, useTheme } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import useColorThief from 'use-color-thief';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { API } from 'aws-amplify'
import { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/lib/styles/index.less'
import './playlist.css'
import mewAppLogo from '../../assets/mewlogo.png'

import { ROUTES } from '../../constants'
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { useUser } from '../../auth/hooks'
import { Pause, PlayArrow as PlayArrowIcon, SkipNext as SkipNextIcon, SkipPrevious as SkipPreviousIcon } from '@mui/icons-material'
import { FeedbackSection } from '../Feedback'
import { getFileRequest } from '../../graphql/queries'
import If from '../If';
import { getCloudFrontURL } from '../../utils';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { AudioPlayerContext } from '../AudioPlayer/audio-player.context';

const GET_FILE_REQUEST = gql(getFileRequest.replace('submissions {', 'submissions(limit: 1000) {'))

const Playlist: React.FC<PropsWithChildren<RouteComponentProps<{ assignmentId: string }>>> = ({
    assignmentId = '',
}) => {
    const { audioLists, setAudioLists, currentIndex, setCurrentIndex, isPlaying, setIsPlaying, playerRef } = useContext(AudioPlayerContext)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<{
        expiration: string
        title: string
        details: string
        workshopId: string
    } | null>(null)
    const [error, setError] = useState(null)
    const theme = useTheme();
    const user = useUser()
    const loggedIn = !!user
    // Authenticated user access
    const { loading: authLoading, error: authError, data: authData } = useQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
        // pollInterval: 10000,
    })

    const PLAYLIST_ARTWORK = data?.artwork?.path && getCloudFrontURL(data.artwork.path) || mewAppLogo;
    const SONG_ARTWORK = audioLists[currentIndex]?.cover;
    const { color, palette } = useColorThief(PLAYLIST_ARTWORK, {
        format: 'hex',
        colorCount: 10,
        quality: 10,
    });

    // Authenticated user access
    useEffect(() => {
        if (loggedIn) {
            if (authData?.getFileRequest && !data) {
                setData(authData.getFileRequest)
            }
            if (authError && !error) {
                // @ts-ignore
                setError(authError)
            }
            if (loading) {
                setLoading(authLoading)
            }
        }
    }, [authLoading, authError, authData])

    // Anonymous access
    useEffect(() => {
        async function getFileRequest() {
            // Switch authMode to API_KEY
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const { data: fileRequestData } = await API.graphql({
                    query: GET_FILE_REQUEST,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    authMode: 'API_KEY',
                    variables: {
                        id: assignmentId,
                    },
                })
                setData(fileRequestData?.getFileRequest)
            } catch (err) {
                // @ts-ignore
                setError(err)
            }

            setLoading(false)
        }

        if (assignmentId && !loggedIn) {
            getFileRequest()
        }
    }, [])

    useEffect(() => {
        async function addSongsToPlaylist() {
            const songs: Array<ReactJkMusicPlayerAudioListProps> = []
            const seenFileIds: string[] = []
            // @ts-ignore
            if (!audioLists.length && data?.submissions?.items) {
                // @ts-ignore
                for (let index = 0; index < data.submissions.items.length; index++) {
                    // @ts-ignore
                    const { name, fileId, artist, id, artwork, lyrics } = data.submissions.items[index]
                    // don't add nonexistent or duplicate files to the playlist
                    if (fileId && !seenFileIds.includes(fileId)) {
                        const songFilePath = `${assignmentId}/${fileId}`
                        // const fileAccessURL = await Storage.get(songFilePath, { expires: 86400 })
                        songs.push({
                            musicSrc: getCloudFrontURL(songFilePath),
                            name,
                            cover: artwork?.path && getCloudFrontURL(artwork.path) || PLAYLIST_ARTWORK || mewAppLogo,
                            singer: artist,
                            fileId,
                            submissionId: id,
                            lyrics
                        })
                        seenFileIds.push(fileId)
                    }
                }
                setAudioLists(songs)
            }
        }
        addSongsToPlaylist()
    }, [data])

    if (error) return <Error errorMessage={error} />
    if (loading) return <CircularProgress />
    // @ts-ignore
    if (!loading && !data?.submissions?.items) return <p>Assignment does not exist or has been deleted.</p>


    return (
        <Grid container spacing={3} style={{ minHeight: '90 vh' }} >
            <If condition={loggedIn}>
                <Grid item xs={12}>
                    <AppBreadcrumbs
                        paths={[
                            ROUTES.home,
                            ROUTES.workshop,
                            {
                                path: ROUTES.assignment.getPath({ assignmentId }),
                                name: data?.title || assignmentId,
                            },
                            ROUTES.assignmentPlaylist,
                        ]}
                        workshopId={data?.workshopId}
                    />
                </Grid>
            </If>
            <If condition={!!audioLists.length}>
                <AudioPlayer assignmentId={assignmentId} />
            </If>

            <If condition={!!audioLists?.[currentIndex]}>
                <Grid item xs={12}>
                    <Card sx={{ display: 'flex', height: '380px', backgroundImage: palette ? `linear-gradient(${palette[0]}80, ${palette[1]}80), url(${PLAYLIST_ARTWORK})` : '', backgroundSize: 'cover' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="h2" variant="h5" color="white" style={{ lineHeight: "37px", backgroundColor: "rgba(0,0,0,.8)", fontWeight: 100, padding: "4px 7px" }}>
                                    {audioLists?.[currentIndex]?.name?.toString()}
                                </Typography>
                                <Typography component="h3" variant="subtitle1" color="#ccc" style={{ lineHeight: 1.2, backgroundColor: "rgba(0,0,0,.8)", fontWeight: 100, marginTop: "4px", padding: "2px 7px 3px" }}>
                                    {audioLists?.[currentIndex]?.singer?.toString()}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, mb: 2, pl: 1, backgroundColor: "rgba(0,0,0,.8)" }}>
                                <IconButton aria-label="previous" onClick={() => playerRef.current.playPrev()}>
                                    {theme.direction === 'rtl' ? <SkipNextIcon sx={{ color: "#fff" }} /> : <SkipPreviousIcon sx={{ color: "#fff" }} />}
                                </IconButton>
                                {
                                    !!isPlaying ?
                                        <IconButton aria-label="pause" onClick={() => {
                                            playerRef.current.pause()
                                        }
                                        }>
                                            <Pause sx={{ color: "#fff", height: 38, width: 38 }} />
                                        </IconButton>
                                        : <IconButton aria-label="play" onClick={() => {
                                            playerRef.current.play()
                                        }}>
                                            <PlayArrowIcon sx={{ color: "#fff", height: 38, width: 38 }} />
                                        </IconButton>


                                }
                                <IconButton aria-label="next" onClick={() => playerRef.current.playNext()}>
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon sx={{ color: "#fff" }} /> : <SkipNextIcon sx={{ color: "#fff" }} />}
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{ alignSelf: 'center', marginLeft: 'auto', paddingRight: '0.5em' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 340, height: 340 }}
                                image={SONG_ARTWORK}
                                alt={`${audioLists?.[currentIndex]?.name?.toString()} by ${audioLists?.[
                                    currentIndex
                                ]?.singer?.toString()}`}
                            />

                        </Box>
                    </Card>
                </Grid >
                <If condition={!!audioLists?.[currentIndex]?.lyrics}></If>
                <Grid item xs={12}>
                    <pre>
                        <Typography variant="body2">
                            {audioLists?.[currentIndex]?.lyrics}
                        </Typography>
                    </pre>
                </Grid>
                <If condition={!!loggedIn}>
                    <Grid item xs={12}>
                        <FeedbackSection
                            assignmentId={assignmentId}
                            submissionId={audioLists?.[currentIndex]?.submissionId}
                            showToggle={false}
                        />
                    </Grid>
                </If>
            </If>
        </Grid >
    )
}

export default Playlist
