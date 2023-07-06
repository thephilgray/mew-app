/* eslint-disable react/display-name */
import React, { useEffect, useState, PropsWithChildren, useContext, useRef } from 'react'
import { CircularProgress, Grid, Typography, Card, CardContent, CardMedia, Box, IconButton, useTheme, ButtonGroup, Button, Menu, MenuItem, Modal, Select, InputLabel, FormControl, Snackbar } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import useColorThief from 'use-color-thief';
import gql from 'graphql-tag'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { API } from 'aws-amplify'
import { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/lib/styles/index.less'
import './playlist.css'
import mewAppLogo from '../../assets/mewlogo.png'
import orderBy from 'lodash/orderBy'
import { ROUTES } from '../../constants'
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { useProfile, useUser } from '../../auth/hooks'
import { Close, CopyAll, Edit, MoreVert, Pause, PlayArrow as PlayArrowIcon, PlaylistAdd, SkipNext as SkipNextIcon, SkipPrevious as SkipPreviousIcon } from '@mui/icons-material'
import { FeedbackSection } from '../Feedback'
import { getFileRequest, getPlaylist, listPlaylists } from '../../graphql/queries'
import If from '../If';
import { getCloudFrontURL } from '../../utils';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { AudioPlayerContext, useClonePlaylist } from '../AudioPlayer/audio-player.context';
import { navigate } from 'gatsby';
import { createTrack } from '../../graphql/mutations';

const GET_FILE_REQUEST = gql(getFileRequest.replace('submissions {', 'submissions(limit: 1000) {'))

const Playlist: React.FC<PropsWithChildren<RouteComponentProps<{ assignmentId: string, playlistId: string }>>> = ({
    assignmentId = '',
    playlistId
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
    const { profile } = useProfile()
    const [addToPlaylistSelection, setAddToPlaylistSelection] = useState('new')
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    // Authenticated user access

    const [fetchGetFileRequest, { loading: fetchGetFileRequestLoading, error: fetchGetFileRequestError, data: fetchGetFileRequestData }] = useLazyQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
    })
    const [fetchGetPlaylist, { loading: fetchGetPlaylistLoading, error: fetchGetPlaylistError, data: fetchGetPlaylistData }] = useLazyQuery(gql(getPlaylist), {
        variables: { id: playlistId },
    })
    const [fetchListPlaylists, { loading: fetchListPlaylistsLoading, error: fetchListPlaylistsError, data: fetchListPlaylistsData }] = useLazyQuery(gql(listPlaylists), {
        variables: {
            filter: {
                playlistOwnerId: { eq: profile?.email }
            }
        },
    })

    const [fetchCreateTrack, { loading: fetchCreateTrackLoading, error: fetchCreateTrackError, data: fetchCreateTrackData }] = useMutation(gql(createTrack))

    const { setClonedPlaylistItems } = useClonePlaylist()

    // clones playlist or current track to a new playlist
    // TODO: rename, confusing
    const handleClonePlaylist = (currentTrack = false) => {
        let items
        if (assignmentId) {
            items = data?.submissions?.items
            if (currentTrack) {
                const { submissionId } = audioLists[currentIndex]
                items = items.filter(submission => submission.id === submissionId)
            }
            setClonedPlaylistItems(items.map((submission, i) => ({
                submission,
                id: submission.id,
                fileRequestSubmissionID: submission.id,
                order: i,
                create: true
            })))
        }
        else if (playlistId) {
            items = data?.tracks?.items;
            if (currentTrack) {
                const { submissionId } = audioLists[currentIndex]
                items = items.filter(track => track?.submission?.id === submissionId)
            }
            setClonedPlaylistItems(items.map((track, i) => ({
                ...track,
                order: i,
                create: true
            })))
        }
        navigate(ROUTES.newPlaylist.path)
    }

    const playlistMenuRef = useRef()
    const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false)
    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


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
            if (assignmentId && !fetchGetFileRequestLoading && !fetchGetFileRequestError && !fetchGetFileRequestData) {
                fetchGetFileRequest()
            }
            else if (playlistId && !fetchGetPlaylistLoading && !fetchGetPlaylistError && !fetchGetPlaylistData) {
                fetchGetPlaylist()
            }
        }

    }, [assignmentId, playlistId, loggedIn])

    useEffect(() => {
        if (loggedIn) {
            if (assignmentId) {
                if (fetchGetFileRequestData?.getFileRequest && !data) {
                    // lazy hack for now; we can just conditionally load this as playlistId
                    if (fetchGetFileRequestData?.getFileRequest?.playlist?.id) {
                        navigate(ROUTES.playlist.getPath({ playlistId: fetchGetFileRequestData?.getFileRequest?.playlist?.id }))
                    }
                    else {
                        setData(fetchGetFileRequestData.getFileRequest)
                    }
                }
                if (fetchGetFileRequestError && !error) {
                    // @ts-ignore
                    setError(fetchGetFileRequestError)
                }
                if (loading) {
                    setLoading(fetchGetFileRequestLoading)
                }
            } else if (playlistId) {
                if (fetchGetPlaylistData?.getPlaylist && !data) {
                    setData(fetchGetPlaylistData.getPlaylist)
                }
                if (fetchGetPlaylistError && !error) {
                    // @ts-ignore
                    setError(fetchGetPlaylistError)
                }
                if (loading) {
                    setLoading(fetchGetPlaylistLoading)
                }
            }
        }
    }, [fetchGetFileRequestLoading, fetchGetFileRequestError, fetchGetFileRequestData, fetchGetPlaylistData, fetchGetPlaylistLoading, fetchGetPlaylistError])

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
            if (assignmentId) {
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
            } else if (playlistId) {
                // @ts-ignore
                if (!audioLists.length && data?.tracks?.items) {
                    // @ts-ignore
                    for (let index = 0; index < data.tracks.items.length; index++) {
                        // @ts-ignore
                        const { submission, order } = data.tracks.items[index];
                        const { name, fileId, artist, id, artwork, lyrics, fileRequestId } = submission
                        // don't add nonexistent or duplicate files to the playlist
                        if (fileId && !seenFileIds.includes(fileId)) {
                            const songFilePath = `${fileRequestId}/${fileId}`
                            // const fileAccessURL = await Storage.get(songFilePath, { expires: 86400 })
                            songs.push({
                                order,
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
                    const sortedSongs = orderBy(songs, 'order')
                    setAudioLists(sortedSongs)
                }
            }
        }
        addSongsToPlaylist()
    }, [data])

    const onSubmitAddToPlaylist = async (e) => {
        e.preventDefault()
        if (!addToPlaylistSelection) {
            // just clone the current track 
            handleClonePlaylist(true)
        } else {
            const { submissionId } = audioLists[currentIndex]
            await fetchCreateTrack({
                variables: {
                    input: {
                        order: addToPlaylistSelection?.tracks?.items?.length,
                        trackSubmissionId: submissionId,
                        playlistTracksId: addToPlaylistSelection?.id
                    }
                }
            })
            setSnackbarOpen(true)
            setAddToPlaylistModalOpen(false)
        }
    }

    if (error) return <Error errorMessage={error} />
    if (loading || fetchGetFileRequestLoading || fetchGetPlaylistLoading) return <CircularProgress />
    if (!loading && !data && (fetchGetFileRequestData || fetchGetPlaylistData)) return <CircularProgress />
    if (!loading && !data && !(fetchGetFileRequestData || fetchGetPlaylistData)) return <p>Playlist does not exist.</p>
    // @ts-ignore
    if (!loading && data && (data?.submissions?.items || data?.tracks?.items) && !(data?.submissions?.items?.length || data?.tracks?.items?.length)) return <p>Playlist has no tracks.</p>


    return (
        <Grid container spacing={3} style={{ minHeight: '90 vh' }} >
            <If condition={loggedIn}>
                <Grid item xs={12}>
                    <AppBreadcrumbs
                        paths={assignmentId ? [
                            ROUTES.home,
                            ROUTES.workshop,
                            {
                                path: ROUTES.assignment.getPath({ assignmentId }),
                                name: data?.title || assignmentId,
                            },
                            ROUTES.assignmentPlaylist,
                        ] : [ROUTES.home, ROUTES.playlists, { name: data?.title }]}
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
                                image={SONG_ARTWORK}
                                alt={`${audioLists?.[currentIndex]?.name?.toString()} by ${audioLists?.[
                                    currentIndex
                                ]?.singer?.toString()}`}
                            />

                        </Box>
                        <Box sx={{ float: 'right', m: 1 }}>
                            <IconButton
                                onClick={() => setPlaylistMenuOpen(!playlistMenuOpen)}
                                ref={playlistMenuRef}
                                sx={{
                                    backgroundColor: 'rgba(0,0,0,.75)',
                                    '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                                }}>
                                <MoreVert color='secondary'></MoreVert>
                            </IconButton>
                            <Menu
                                anchorEl={playlistMenuRef.current}
                                open={playlistMenuOpen}
                                onClose={() => setPlaylistMenuOpen(false)}>
                                <MenuItem onClick={() => {
                                    fetchListPlaylists()
                                    setAddToPlaylistModalOpen(true)
                                    setPlaylistMenuOpen(false)
                                }}>
                                    <PlaylistAdd sx={{ mr: 1 }} />
                                    Add track to playlist
                                </MenuItem>
                                <MenuItem onClick={() => handleClonePlaylist()}>
                                    <CopyAll sx={{ mr: 1 }} />
                                    Clone playlist
                                </MenuItem>
                                <If condition={playlistId && profile?.email === data?.playlistOwnerId}>
                                    <MenuItem onClick={() => navigate(ROUTES.editPlaylist.getPath({ playlistId: data?.id }))}>
                                        <Edit sx={{ mr: 1 }} />
                                        Edit Playlist
                                    </MenuItem>
                                </If>
                            </Menu>
                            <Modal open={addToPlaylistModalOpen} onClose={() => setAddToPlaylistModalOpen(false)}>
                                <Box sx={modalStyle}>
                                    <IconButton sx={{ float: 'right', m: 1, position: 'absolute', right: 0, top: 0 }} onClick={() => setAddToPlaylistModalOpen(false)}>
                                        <Close />
                                    </IconButton>
                                    <form onSubmit={onSubmitAddToPlaylist}>
                                        <FormControl fullWidth sx={{ pt: 2 }}>
                                            <InputLabel id="modal-playlist-select">My playlists</InputLabel>
                                            <Select labelId="modal-playlist-select" label="My playlists" value={addToPlaylistSelection} onChange={e => setAddToPlaylistSelection(e.target.value)}>
                                                <MenuItem value="">
                                                    <em>Create New</em>
                                                </MenuItem>
                                                {fetchListPlaylistsData?.listPlaylists?.items.map(playlist => (
                                                    <MenuItem value={playlist} key={playlist.id}>
                                                        {playlist.title}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <Button type="submit" fullWidth>{addToPlaylistSelection ? 'Add' : 'Create New'}</Button>
                                    </form>
                                </Box>
                            </Modal>
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
            </If >
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{ zIndex: 3000 }}
                open={snackbarOpen}
                onClose={() => setSnackbarOpen(false)}
                color={fetchCreateTrackData ? "success" : "error"}
                autoHideDuration={3000}
                message={fetchCreateTrackData ? `Successfully added track to playlist` : `Could not add track to playlist.`}
            />
        </Grid >
    )
}

export default Playlist
