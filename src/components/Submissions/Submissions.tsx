/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, ButtonGroup, CircularProgress, Grid, IconButton, Snackbar, Typography } from '@material-ui/core'
import { DataGrid, Columns, SortDirection, ColDef } from '@material-ui/data-grid'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { format } from 'date-fns'
import { useCopyToClipboard } from 'react-use'
import { FileCopy } from '@material-ui/icons'
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'
import { API, Storage, graphqlOperation } from 'aws-amplify'

const GET_FILE_REQUEST = gql`
    query GetFileRequest($id: ID!) {
        getFileRequest(id: $id) {
            id
            title
            createdAt
            expiration
            submissions {
                items {
                    id
                    artist
                    audio
                    email
                    createdAt
                    name
                }
            }
        }
    }
`
const PROCESS_DOWNLOAD = gql`
    mutation ProcessDownload($assignmentId: ID!) {
        processDownload(assignmentId: $assignmentId)
    }
`

const Submissions: React.FC<{ assignmentId: string }> = ({ assignmentId = '' }) => {
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard()
    const [showCopySuccessAlert, setShowCopySuccessAlert] = useState<boolean>(false)
    const [downloadLoading, setDownloadLoading] = useState<boolean>(false)
    const { loading, error, data } = useQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
        pollInterval: 10000,
    })

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

    const onDownloadAll = async () => {
        setDownloadLoading(true)
        try {
            await API.graphql({
                ...graphqlOperation(PROCESS_DOWNLOAD, {
                    assignmentId,
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

    const columns: Columns = [
        {
            field: 'artist',
            headerName: 'Artist',
            width: 170,
        },
        {
            field: 'name',
            headerName: 'Title',
            width: 200,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
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
        {
            field: 'audio',
            headerName: 'Track',
            type: 'string',
            width: 200,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            renderCell: ({ value = '' }: ColDef) => {
                const filename = decodeURIComponent(value.split('/').slice(-1))
                return filename
            },
        },
    ]

    const sortModel = [
        {
            field: 'createdAt',
            sort: 'desc' as SortDirection,
        },
    ]

    if (error) return <Error errorMessage={error} />
    if (loading || !data?.getFileRequest?.submissions?.items) return <CircularProgress />
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignment]} />
            </Grid>
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
                                        `${window.origin}${ROUTE_NAMES.newPublicSubmission.getPath({ assignmentId })}`,
                                    )
                                }
                            >
                                <FileCopy />
                            </IconButton>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} style={{ textAlign: 'right' }}>
                        <ButtonGroup color="primary" aria-label="contained primary button group">
                            {data.getFileRequest.submissions.items.length && (
                                <Button variant="outlined" color="primary" onClick={onDownloadAll}>
                                    {downloadLoading ? (
                                        <>
                                            Downloading...
                                            <CircularProgress size={20} />
                                        </>
                                    ) : (
                                        'Download All'
                                    )}
                                </Button>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                to={ROUTE_NAMES.newPublicSubmission.getPath({ assignmentId })}
                            >
                                New Submission
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={data.getFileRequest.submissions.items}
                    columns={columns}
                    autoHeight
                    autoPageSize
                    disableSelectionOnClick={true}
                    sortModel={sortModel}
                />
            </div>
        </Grid>
    )
}

export default Submissions
