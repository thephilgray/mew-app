/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { CircularProgress, Grid, Typography, useTheme, Card, CardContent, CardMedia } from '@material-ui/core'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Storage } from 'aws-amplify'
import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/lib/styles/index.less'
import mewAppLogo from '../../assets/mewlogo.png'

import { EXTENSIONS_BY_FILETYPE } from '../../constants'
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'
import { ColorModeContext } from '../Layout/Theme'

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

const Playlist: React.FC<{ assignmentId: string }> = ({ assignmentId = '' }) => {
    const [audioLists, setAudioLists] = useState<Array<ReactJkMusicPlayerAudioListProps>>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const theme = useTheme();
    const { togglePalette } = React.useContext(ColorModeContext);

    const { loading, error, data } = useQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
        pollInterval: 10000,
    })

    const downloadPresignedUrl = ({ src, filename }: { src: string; filename: string }) => {
        const metaData = audioLists[currentIndex]
        if (!metaData.musicSrc) return;
        // @ts-ignore
        return fetch(metaData.musicSrc)
            .then(response => {
                return response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    const contentType = response.headers.get("Content-Type")
                    // @ts-ignore
                    const extension = EXTENSIONS_BY_FILETYPE[contentType || 'audio/mpeg']
                    a.href = url;
                    a.download = `${metaData.name} - ${metaData.singer}${extension}`
                    a.click();
                });
            });
    }

    useEffect(() => {
        async function addSongsToPlaylist() {
            const songs: Array<ReactJkMusicPlayerAudioListProps> = []
            const seenFileIds: string[] = []
            if (!audioLists.length && data?.getFileRequest?.submissions?.items) {
                for (let index = 0; index < data.getFileRequest.submissions.items.length; index++) {
                    const { name, fileId, artist } = data.getFileRequest.submissions.items[index]
                    // don't add nonexistent or duplicate files to the playlist
                    if (fileId && !seenFileIds.includes(fileId)) {
                        const songFilePath = `${assignmentId}/${fileId}`
                        const fileAccessURL = await Storage.get(songFilePath, { expires: 86400 })
                        songs.push({ musicSrc: fileAccessURL.toString(), name, cover: mewAppLogo, singer: artist })
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
    if (!loading && !data?.getFileRequest?.submissions?.items)
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
                    customDownloader={downloadPresignedUrl}
                />
            ) : null}
            <Grid item xs={12}>
                <AppBreadcrumbs
                    paths={[
                        ROUTE_NAMES.home,
                        ROUTE_NAMES.assignments,
                        {
                            path: ROUTE_NAMES.assignment.getPath({ assignmentId }),
                            name: data?.getFileRequest?.title || assignmentId,
                        },
                        ROUTE_NAMES.playlist,
                    ]}
                    workshopId={data?.getFileRequest?.workshopId}
                />
            </Grid>
            {data?.getFileRequest?._deleted ? (
                <Grid item xs={12}>
                    <p>This assignment has been deleted.</p>
                </Grid>
            ) : (
                <Grid item xs={12}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Song cover image"
                            height="200"
                            image={audioLists?.[currentIndex]?.cover?.toString()}
                            title={`${audioLists?.[currentIndex]?.name?.toString()} by ${audioLists?.[currentIndex]?.singer?.toString()}`}
                        />
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
