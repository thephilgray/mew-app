/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, ButtonGroup, CircularProgress, Grid, IconButton, Snackbar, Typography } from '@material-ui/core'
import { DataGrid, Columns, SortDirection, ColDef, SelectionChangeParams } from '@material-ui/data-grid'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { format } from 'date-fns'
import { useCopyToClipboard } from 'react-use'
import { CloudDownload, FileCopy, Add, Assessment, Edit } from '@material-ui/icons'
import { API, Storage, graphqlOperation } from 'aws-amplify'
import { uniqBy, pipe, map } from 'lodash/fp'
import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'
import { processDownload } from '../../graphql/mutations'

const GET_FILE_REQUEST = gql`
    query GetFileRequest($id: ID!) {
        getFileRequest(id: $id) {
            id
            title
            createdAt
            expiration
            _deleted
            submissions(limit: 200) {
                items {
                    id
                    artist
                    email
                    createdAt
                    name
                    fileId
                    fileExtension
                }
            }
        }
    }
`

const Submissions: React.FC<{ assignmentId: string }> = ({ assignmentId = '' }) => {
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard()
    const [showCopySuccessAlert, setShowCopySuccessAlert] = useState<boolean>(false)
    const [downloadLoading, setDownloadLoading] = useState<boolean>(false)
    // const [songs, setSongs] = useState({})
    const [audioLists, setAudioLists] = useState<Array<ReactJkMusicPlayerAudioListProps>>([])
    const [selectedRows, setSelectedRows] = useState<string[]>([])

    const { loading, error, data } = useQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
        pollInterval: 10000,
    })

    const rows = data?.getFileRequest?.submissions?.items || []

    useEffect(() => {
        if (copyToClipboardState.value) {
            setShowCopySuccessAlert(true)
        }
    }, [copyToClipboardState])

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
                        const fileAccessURL = await Storage.get(songFilePath, { expires: 60 })
                        songs.push({ musicSrc: fileAccessURL.toString(), name, cover: '', singer: artist })
                        seenFileIds.push(fileId)
                    }
                }
                setAudioLists(songs)
            }
        }
        addSongsToPlaylist()
    }, [data])

    const downloadBlob = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename || 'download'
        const clickHandler = () => {
            setTimeout(() => {
                URL.revokeObjectURL(url)
                a.removeEventListener('click', clickHandler)
            }, 150)
        }
        a.addEventListener('click', clickHandler, false)
        a.click()
        return a
    }

    const onDownloadSelected = async () => {
        setDownloadLoading(true)
        const uniqByFileId = uniqBy('fileId')
        const mapFields = map(({ fileId = '', artist = '', name = '', fileExtension = '' }) => ({
            fileId,
            title: `${artist} - ${name}.${fileExtension}`,
        }))
        const rowData = rows.filter((row: { id: string }) => selectedRows.includes(row.id))
        const selectFileData = pipe(uniqByFileId, mapFields)
        const songData = selectFileData(rowData)
        console.log({ songData })

        try {
            await API.graphql({
                ...graphqlOperation(processDownload, {
                    assignmentId,
                    songData,
                }),
            })

            const submissionsZip = await Storage.get(`downloads/${assignmentId}.zip`, { download: true })
            const filename = data?.getFileRequest?.title ? data.getFileRequest.title : assignmentId
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            downloadBlob(submissionsZip.Body, `${filename}.zip`)
        } catch (error) {
            console.error(error)
        }
        setDownloadLoading(false)
    }

    const downloadReport = () => {
        const filename = data?.getFileRequest?.title ? data.getFileRequest.title : assignmentId
        const rows =
            data?.getFileRequest?.submissions?.items &&
            data.getFileRequest.submissions.items
                .map(
                    ({
                        artist,
                        email,
                        name,
                        createdAt,
                    }: {
                        artist: string
                        email: string
                        name: string
                        createdAt: Date
                    }) =>
                        [artist, email, name, format(new Date(createdAt), 'MM/dd/yyyy H:mm')].map((str?: string) =>
                            str === null ? '' : `\"${str}\"`,
                        ),
                )
                .join('\r\n')

        const headings = ['Artist', 'Email', 'Song', 'Uploaded'].join() + '\r\n'

        const content = headings.concat(rows)

        const file = new File([content], `${filename}.csv`, { type: 'data:text/csv;charset=utf-8' })
        downloadBlob(file, `${filename}.csv`)
    }

    const columns: Columns = [
        {
            field: 'artist',
            headerName: 'Artist Byline',
            width: 200,
        },
        {
            field: 'name',
            headerName: 'Song Title',
            width: 300,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 300,
        },
        {
            field: 'createdAt',
            headerName: 'Submitted',
            type: 'date',
            width: 160,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            valueFormatter: ({ value = '' }: ColDef) => value && format(new Date(value), 'MM/dd/yyyy H:mm'),
        },
    ]

    const sortModel = [
        {
            field: 'createdAt',
            sort: 'desc' as SortDirection,
        },
    ]

    if (error) return <Error errorMessage={error} />
    if (loading) return <CircularProgress />
    if (!loading && !data?.getFileRequest?.submissions?.items)
        return <p>Assignment does not exist or has been deleted.</p>
    return (
        <Grid container spacing={3}>
            {audioLists.length ? (
                <ReactJkMusicPlayer
                    mode="full"
                    preload
                    audioLists={audioLists}
                    autoHiddenCover
                    autoPlay={false}
                    autoPlayInitLoadPlayList={false}
                    quietUpdate
                    spaceBar
                    showMediaSession
                    showThemeSwitch={false}
                    showDownload={false}
                    showPlayMode={false}
                    defaultVolume={1}
                    // volumeFade={{ fadeIn: 0, fadeOut: 0 }}
                    showMiniProcessBar={false}
                />
            ) : null}
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignment]} />
            </Grid>
            {data?.getFileRequest?._deleted ? (
                <Grid item xs={12}>
                    <p>This assignment has been deleted.</p>
                </Grid>
            ) : (
                <>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6" component="h3">
                                    Submissions for{' '}
                                    <Link to={ROUTE_NAMES.newPublicSubmission.getPath({ assignmentId })}>
                                        <em>
                                            {data?.getFileRequest.title ? (
                                                data.getFileRequest.title
                                            ) : (
                                                <>
                                                    {window.origin}
                                                    {ROUTE_NAMES.newPublicSubmission.getPath({ assignmentId })}
                                                </>
                                            )}
                                        </em>
                                    </Link>
                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        open={showCopySuccessAlert}
                                        color="success"
                                        autoHideDuration={3000}
                                        message="Link to assignment copied to clipboard."
                                        onClose={() => setShowCopySuccessAlert(false)}
                                    />
                                    <IconButton
                                        color="secondary"
                                        aria-label="Close"
                                        component="span"
                                        onClick={() =>
                                            copyToClipboard(
                                                `${window.origin}${ROUTE_NAMES.newPublicSubmission.getPath({
                                                    assignmentId,
                                                })}`,
                                            )
                                        }
                                    >
                                        <FileCopy />
                                    </IconButton>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12} style={{ textAlign: 'right' }}>
                                <ButtonGroup color="primary" aria-label="contained primary button group">
                                    <Button variant="outlined" color="primary" component={Link} to={`edit`}>
                                        <Edit style={{ marginRight: '.25em' }} />
                                        Edit
                                    </Button>
                                    {data.getFileRequest.submissions.items.length && (
                                        <Button variant="outlined" color="primary" onClick={downloadReport}>
                                            <Assessment style={{ marginRight: '.25em' }} />
                                            Download Report
                                        </Button>
                                    )}
                                    {data.getFileRequest.submissions.items.length && (
                                        <Button variant="outlined" color="primary" onClick={onDownloadSelected}>
                                            {downloadLoading ? (
                                                <>
                                                    Downloading...
                                                    <CircularProgress size={20} />
                                                </>
                                            ) : (
                                                <>
                                                    <CloudDownload style={{ marginRight: '.25em' }} />
                                                    Download Selected
                                                </>
                                            )}
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component={Link}
                                        to={ROUTE_NAMES.newPublicSubmission.getPath({ assignmentId })}
                                    >
                                        <Add />
                                        New Submission
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ height: 600, width: '100%' }}>
                        <DataGrid
                            checkboxSelection
                            rows={rows}
                            columns={columns}
                            pageSize={25}
                            disableSelectionOnClick={true}
                            sortModel={sortModel}
                            // eslint-disable-next-line
                            // tslint:disable-next-line
                            onSelectionChange={(selection: SelectionChangeParams) =>
                                setSelectedRows(selection.rowIds.map(String))
                            }
                        />
                    </Grid>
                </>
            )}
        </Grid>
    )
}

export default Submissions
