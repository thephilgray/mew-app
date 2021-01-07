/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, ButtonGroup, Grid, IconButton, Snackbar, Typography } from '@material-ui/core'
import { DataGrid, Columns, SortDirection } from '@material-ui/data-grid'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { format } from 'date-fns'
import { useCopyToClipboard } from 'react-use'
import { FileCopy } from '@material-ui/icons'
import Error from '../Error'

const SUBMISSION_BY_FILE_REQUEST_ID = gql`
    query SubmissionByFileRequestId($fileRequestId: ID) {
        submissionsByFileRequestId(fileRequestId: $fileRequestId) {
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
`
const Submissions: React.FC<{ assignmentId: string }> = ({ assignmentId = '' }) => {
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard()
    const [showCopySuccessAlert, setShowCopySuccessAlert] = useState<boolean>(false)
    const { loading, error, data } = useQuery(SUBMISSION_BY_FILE_REQUEST_ID, {
        variables: { fileRequestId: assignmentId },
        pollInterval: 10000,
    })

    useEffect(() => {
        if (copyToClipboardState.value) {
            setShowCopySuccessAlert(true)
        }
    }, [copyToClipboardState])

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
            valueFormatter: ({ value = '' }) => value && format(new Date(value), 'MM/dd/yyyy H:mm'),
        },
        {
            field: 'audio',
            headerName: 'Track',
            type: 'string',
            width: 200,
            // eslint-disable-next-line react/display-name
            renderCell: ({ value = '' }) => value && <a href={value}>{value.split('/').pop()}</a>,
        },
    ]

    const sortModel = [
        {
            field: 'createdAt',
            sort: 'desc' as SortDirection,
        },
    ]

    if (loading || !data?.submissionsByFileRequestId?.items) return <>'Loading....'</>
    if (error) return <Error errorMessage={error} />
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" component="h3">
                    Submissions
                </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
                <Link to={`/app/uploads/${assignmentId}`}>
                    {window.location.protocol}
                    {'//'}
                    {window.location.host}/app/uploads/{assignmentId}
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
                            `${window.location.protocol}//${window.location.host}/app/uploads/${assignmentId}`,
                        )
                    }
                >
                    <FileCopy />
                </IconButton>
            </Grid>
            <Grid item xs={12} md={3} style={{ textAlign: 'right' }}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button variant="contained" color="primary" component={Link} to={`/app/uploads/${assignmentId}`}>
                        New Submission
                    </Button>
                </ButtonGroup>
            </Grid>
            <div style={{ height: 375, width: '100%' }}>
                <DataGrid
                    rows={data.submissionsByFileRequestId.items}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick={true}
                    sortModel={sortModel}
                />
            </div>
        </Grid>
    )
}

export default Submissions
