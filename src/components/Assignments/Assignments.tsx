/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, Columns, RowParams, SortDirection } from '@material-ui/data-grid'
import { navigate } from '@reach/router'

import { CheckBox } from '@material-ui/icons'
import { assignments } from '../../data'

const Assignments: React.FC<{ workshopId: string }> = ({ workshopId = '' }): JSX.Element => {
    const columns: Columns = [
        {
            field: 'title',
            headerName: 'Assignment',
            width: 400,
        },
        {
            field: 'submissions',
            headerName: 'Submissions',
            width: 120,
            type: 'number',
            renderCell: ({ value = '', row = { members: '', id: '' } }) => (
                <span>
                    {value} / {row.members}
                </span>
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

    const sortModel = [
        {
            field: 'due',
            sort: 'desc' as SortDirection,
        },
    ]

    return (
        <DataGrid
            rows={assignments}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick={true}
            onRowClick={(params: RowParams) => navigate(`/app/${workshopId}/assignments/${params.row.id}`)}
            sortModel={sortModel}
        />
    )
}

export default Assignments
