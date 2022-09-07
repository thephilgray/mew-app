/* eslint-disable react/display-name */
import React, { useEffect, useState, PropsWithChildren } from 'react'
import { CircularProgress, Grid, Typography, Card, CardContent, CardMedia } from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { API, Storage } from 'aws-amplify'
import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/lib/styles/index.less'
import mewAppLogo from '../../assets/mewlogo.png'

import { EXTENSIONS_BY_FILETYPE } from '../../constants'
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'
import { isLoggedIn } from '../../auth/utils'

const GET_FILE_REQUEST = gql`
    query GetFileRequest($id: ID!) {
        getFileRequest(id: $id) {
            id
            workshopId
            title
            expiration
            _deleted
            playlistArtwork {
                id
                credit {
                    artists
                    title
                    artistLinks
                }
            }
            submissions(limit: 200) {
                items {
                    id
                    artist
                    email
                    name
                    fileId
                    fileExtension
                }
            }
        }
    }
`

const Playlist: React.FC<PropsWithChildren<RouteComponentProps<{ assignmentId: string }>>> = ({ assignmentId = '' }) => {
    const [audioLists, setAudioLists] = useState<Array<ReactJkMusicPlayerAudioListProps>>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<{
        expiration: string
        title: string
        details: string
        workshopId: string
        _deleted: boolean
    } | null>(null)
    const [error, setError] = useState(null)
    const loggedIn = isLoggedIn()

    // Authenticated user access
    const { loading: authLoading, error: authError, data: authData } = useQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
        pollInterval: 10000,
    })

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
                setData(fileRequestData?.getFileRequest);

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

    const download = async () => {
        const metaData = audioLists[currentIndex]
        if (!metaData.fileId) return;
        const songFilePath = `${assignmentId}/${metaData.fileId}`
        const result = await Storage.get(songFilePath, { download: true });
        // @ts-ignore
        let url = window.URL.createObjectURL(result.Body);
        let a = document.createElement('a');
        // @ts-ignore
        const contentType = result.ContentType
        // @ts-ignore
        const extension = EXTENSIONS_BY_FILETYPE[contentType || 'audio/mpeg']
        a.href = url;
        a.download = `${metaData.name} - ${metaData.singer}${extension}`
        const clickHandler = () => {
            setTimeout(() => {
                URL.revokeObjectURL(url);
                a.removeEventListener('click', clickHandler);
            }, 150);
        };
        a.addEventListener('click', clickHandler, false);
        a.click();
    }

    useEffect(() => {
        async function addSongsToPlaylist() {
            const songs: Array<ReactJkMusicPlayerAudioListProps> = []
            const seenFileIds: string[] = []
            // @ts-ignore
            if (!audioLists.length && data?.submissions?.items) {
                // @ts-ignore
                for (let index = 0; index < data.submissions.items.length; index++) {
                    // @ts-ignore
                    const { name, fileId, artist } = data.submissions.items[index]
                    // don't add nonexistent or duplicate files to the playlist
                    if (fileId && !seenFileIds.includes(fileId)) {
                        const songFilePath = `${assignmentId}/${fileId}`
                        const fileAccessURL = await Storage.get(songFilePath, { expires: 86400 })
                        songs.push({ musicSrc: fileAccessURL.toString(), name, cover: mewAppLogo, singer: artist, fileId })
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
    if (!loading && !data?.submissions?.items)
        return <p>Assignment does not exist or has been deleted.</p>
    return (
        <Grid container spacing={3} style={{ minHeight: '90 vh' }}>
            {audioLists.length ? (
                <ReactJkMusicPlayer
                    mode="full"
                    // mobileMediaQuery="(max-width: 2000px)"
                    preload
                    audioLists={audioLists}
                    autoPlay={false}
                    autoPlayInitLoadPlayList={false}
                    quietUpdate
                    spaceBar
                    onPlayIndexChange={setCurrentIndex}
                    showMediaSession
                    showThemeSwitch={false}
                    showPlayMode={true}
                    defaultVolume={1}
                    // volumeFade={{ fadeIn: 0, fadeOut: 0 }}
                    showMiniProcessBar={false}
                    showDownload={true}
                    // @ts-ignore
                    customDownloader={download}
                />
            ) : null}
            {loggedIn ? <Grid item xs={12}>
                <AppBreadcrumbs
                    paths={[
                        ROUTE_NAMES.home,
                        ROUTE_NAMES.assignments,
                        {
                            path: ROUTE_NAMES.assignment.getPath({ assignmentId }),
                            name: data?.title || assignmentId,
                        },
                        ROUTE_NAMES.playlist,
                    ]}
                    workshopId={data?.workshopId}
                />
            </Grid> : null}
            {data?._deleted ? (
                <Grid item xs={12}>
                    <p>This assignment has been deleted.</p>
                </Grid>
            ) : (
                <Grid item xs={12}>
                    <Card>
                        {audioLists?.[currentIndex]?.cover?.toString() ? <CardMedia
                            component="img"
                            alt="Song cover image"
                            height="200"
                            image={audioLists?.[currentIndex]?.cover?.toString()}
                            title={`${audioLists?.[currentIndex]?.name?.toString()} by ${audioLists?.[currentIndex]?.singer?.toString()}`}
                        /> : null}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {audioLists?.[currentIndex]?.name?.toString()}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {audioLists?.[currentIndex]?.singer?.toString()}
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            )}
        </Grid>
    )
}

export default Playlist
