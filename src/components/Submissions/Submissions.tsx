/* eslint-disable react/display-name */
import * as React from 'react'
import { Link } from 'gatsby'
import { AssignmentTurnedIn } from '@material-ui/icons'
import { Button, ButtonGroup } from '@material-ui/core'
import { compareDesc } from 'date-fns'
import { DataGrid, Columns, RowParams } from '@material-ui/data-grid'
import { navigate } from '@reach/router'
import { submissions } from '../../data'

const Submissions: React.FC<{ workshopId: string; assignmentId: string }> = ({
    workshopId = '',
    assignmentId = '',
}) => {
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

    const rows = submissions.sort((a, b) => compareDesc(a.submitted, b.submitted))

    return (
        <div>
            <h2>Submissions</h2>
            <div style={{ textAlign: 'right' }}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Link to={`/app/${workshopId}/assignments/${assignmentId}/submissions/new`}>
                        <Button>New Submission</Button>
                    </Link>
                </ButtonGroup>
            </div>
            <div style={{ height: 375, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick={true}
                    onRowClick={(params: RowParams) =>
                        navigate(`/app/${workshopId}/assignments/${assignmentId}/submissions/${params.row.id}`)
                    }
                />
            </div>
        </div>
    )
}

export default Submissions
