/* eslint-disable react/display-name */
import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { AssignmentTurnedIn } from '@material-ui/icons'
import { Button, ButtonGroup, Typography } from '@material-ui/core'
import { DataGrid, Columns, RowParams, SortDirection } from '@material-ui/data-grid'
import { submissions } from '../../data'

const Submissions: React.FC<{ assignmentId: string }> = ({ assignmentId = '' }) => {
    const columns: Columns = [
        {
            field: 'title',
            headerName: 'Title',
            width: 400,
        },
        {
            field: 'submitted',
            headerName: 'Submitted',
            type: 'date',
            width: 130,
        },
        {
            field: 'complete',
            headerName: 'Complete',
            renderCell: ({ row = { submitted: false } }) => (row.submitted ? <AssignmentTurnedIn /> : <></>),
            width: 100,
        },
    ]

    const sortModel = [
        {
            field: 'submitted',
            sort: 'desc' as SortDirection,
        },
    ]

    return (
        <div>
            <Typography variant="h6" component="h3">
                Submissions
            </Typography>
            <div style={{ textAlign: 'right' }}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Link to={`/app/assignments/${assignmentId}/submissions/new`}>
                        <Button>New Submission</Button>
                    </Link>
                </ButtonGroup>
            </div>
            <div style={{ height: 375, width: '100%' }}>
                <DataGrid
                    rows={submissions}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick={true}
                    onRowClick={(params: RowParams) =>
                        navigate(`/app/assignments/${assignmentId}/submissions/${params.row.id}`)
                    }
                    sortModel={sortModel}
                />
            </div>
        </div>
    )
}

export default Submissions
