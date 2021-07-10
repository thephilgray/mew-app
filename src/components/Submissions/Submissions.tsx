/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { CircularProgress, Grid, IconButton, Snackbar, Typography } from '@material-ui/core'
import { DataGrid, Columns, SortDirection, ColDef, SelectionChangeParams } from '@material-ui/data-grid'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { format } from 'date-fns'
import { useCopyToClipboard } from 'react-use'
import { CloudDownload, FileCopy, Add, Assessment, Edit, PlayArrowTwoTone } from '@material-ui/icons'
import { API, Storage, graphqlOperation } from 'aws-amplify'
import { uniqBy, pipe, map } from 'lodash/fp'

import AppBreadcrumbs from '../AppBreadcrumbs'
import Error from '../Error'
import Menu from '../Menu'
import { processDownload } from '../../graphql/mutations'
import { ROUTE_NAMES } from '../../pages/app'

const GET_FILE_REQUEST = gql`
    query GetFileRequest($id: ID!) {
        getFileRequest(id: $id) {
            id
            title
            details
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
    const [showDownloadSelectedSuccessAlert, setShowDownloadSelectedSuccessAlert] = useState<boolean>(false)
    const [showDownloadReportSuccessAlert, setShowDownloadReportSuccessAlert] = useState<boolean>(false)
    const [downloadLoading, setDownloadLoading] = useState<boolean>(false)
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
        setShowDownloadSelectedSuccessAlert(true)
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
        setShowDownloadReportSuccessAlert(true)
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

    const menuItems = [
        {
            icon: <Assessment />,
            text: 'Download Report',
            key: 'downloadReport',
            onClick: downloadReport,
        },
        {
            icon: downloadLoading ? <CircularProgress size={20} color="secondary" /> : <CloudDownload />,
            text: downloadLoading ? 'Downloading...' : 'Download Selected',
            key: 'downloadSelected',
            onClick: onDownloadSelected,
        },
    ]

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignment]} />
            </Grid>
            {data?.getFileRequest?._deleted ? (
                <Grid item xs={12}>
                    <p>This assignment has been deleted.</p>
                </Grid>
            ) : (
                <>
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
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={showDownloadSelectedSuccessAlert}
                        color="success"
                        autoHideDuration={3000}
                        message="Successfully downloaded selected tracks."
                        onClose={() => setShowDownloadSelectedSuccessAlert(false)}
                    />
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={showDownloadReportSuccessAlert}
                        color="success"
                        autoHideDuration={3000}
                        message="Successfully downloaded report."
                        onClose={() => setShowDownloadReportSuccessAlert(false)}
                    />
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography variant="h6" component="h3">
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
                                </Typography>
                            </Grid>
                            <Grid item xs={4} style={{ textAlign: 'right' }}>
                                <IconButton
                                    color="secondary"
                                    aria-label="Copy"
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
                                <IconButton color="secondary" aria-label="Edit" component={Link} to="edit">
                                    <Edit />
                                </IconButton>
                            </Grid>
                            {data?.getFileRequest?.details && (
                                <Grid item xs={12}>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: data?.getFileRequest.details }}
                                        style={{ width: '100%' }}
                                    />
                                </Grid>
                            )}
                            <Grid item xs={6}>
                                <Typography variant="h6" component="h3">
                                    Submissions
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <IconButton
                                    color="secondary"
                                    aria-label="Playlist"
                                    component={Link}
                                    to={ROUTE_NAMES.playlist.getPath({ assignmentId })}
                                >
                                    <PlayArrowTwoTone />
                                </IconButton>
                                <IconButton
                                    color="secondary"
                                    aria-label="New Submission"
                                    component={Link}
                                    to={ROUTE_NAMES.newPublicSubmission.getPath({ assignmentId })}
                                >
                                    <Add />
                                </IconButton>
                                {data.getFileRequest.submissions.items.length && <Menu items={menuItems} />}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ minHeight: 600, width: '100%' }}>
                        <DataGrid
                            checkboxSelection
                            rows={rows}
                            columns={columns}
                            pageSize={100}
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
