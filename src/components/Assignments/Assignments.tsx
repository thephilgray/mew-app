/* eslint-disable react/display-name */
import * as React from 'react'
import { Link } from 'gatsby'
import { DataGrid, Columns } from '@material-ui/data-grid'

import { compareDesc } from 'date-fns'
import { CheckBox } from '@material-ui/icons'
import { assignments } from '../../data'

const Assignments: React.FC<{ workshopId: string }> = ({ workshopId = '' }): JSX.Element => {
    const columns: Columns = [
        {
            field: 'title',
            headerName: 'Assignment',
            width: 400,
            // eslint-disable-next-line react/display-name
            renderCell: (params) => {
                return <Link to={`/app/${workshopId}/assignments/${params.row.id}`}>{params.value}</Link>
            },
        },
        {
            field: 'submissions',
            headerName: 'Submissions',
            width: 120,
            type: 'number',
            renderCell: ({ value = '', row = { members: '', id: '' } }) => (
                <Link to={`/app/${workshopId}/assignments/${row.id}`}>
                    {value} / {row.members}
                </Link>
            ),
        },
        {
            field: 'start',
            headerName: 'Start',
            type: 'date',
            width: 130,
        },
        {
            field: 'due',
            headerName: 'Due',
            type: 'date',
            width: 130,
        },
        {
            field: 'required',
            headerName: 'Required',
            type: 'boolean',
            // eslint-disable-next-line react/display-name
            renderCell: ({ value = '' }) => (value ? <CheckBox /> : <></>),
            width: 100,
        },
    ]

    const rows = assignments.sort((a, b) => compareDesc(a.due, b.due))

    return <DataGrid rows={rows} columns={columns} pageSize={5} disableSelectionOnClick={true} />
}

export default Assignments
