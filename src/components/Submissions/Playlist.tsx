/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Storage } from 'aws-amplify'
import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/lib/styles/index.less'

import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'

const GET_FILE_REQUEST = gql`
    query GetFileRequest($id: ID!) {
        getFileRequest(id: $id) {
            id
            title
            expiration
            _deleted
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

    const { loading, error, data } = useQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
        pollInterval: 10000,
    })

    // TODO: figure out how to download from player with filename
    // const downloadPresignedUrl = ({ src, filename }: { src: string; filename: string }) => {
    //     const a = document.createElement('a')
    //     a.href = src
    //     a.download = filename || 'download'
    //     const clickHandler = () => {
    //         setTimeout(() => {
    //             URL.revokeObjectURL(src)
    //             a.removeEventListener('click', clickHandler)
    //         }, 150)
    //     }
    //     a.addEventListener('click', clickHandler, false)
    //     a.click()
    //     return a
    // }

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
                        songs.push({ musicSrc: fileAccessURL.toString(), name, cover: '', singer: artist })
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
        <Grid container spacing={3}>
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
                    showMediaSession
                    showThemeSwitch={false}
                    showPlayMode={true}
                    defaultVolume={1}
                    // volumeFade={{ fadeIn: 0, fadeOut: 0 }}
                    showMiniProcessBar={false}
                    showDownload={false}
                    // customDownloader={downloadPresignedUrl}
                />
            ) : null}
            <Grid item xs={12}>
                <AppBreadcrumbs
                    paths={[
                        ROUTE_NAMES.home,
                        {
                            path: ROUTE_NAMES.assignment.getPath({ assignmentId }),
                            name: data?.getFileRequest?.title || assignmentId,
                        },
                        ROUTE_NAMES.playlist,
                    ]}
                />
            </Grid>
            {data?.getFileRequest?._deleted ? (
                <Grid item xs={12}>
                    <p>This assignment has been deleted.</p>
                </Grid>
            ) : (
                <Grid item xs={12}>
                    <p>Playlist page</p>
                </Grid>
            )}
        </Grid>
    )
}

export default Playlist
