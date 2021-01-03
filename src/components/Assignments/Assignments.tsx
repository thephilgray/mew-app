/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, Columns, RowParams, SortDirection } from '@material-ui/data-grid'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Check } from '@material-ui/icons'
import { assignments } from '../../data'
import { Button, Grid } from '@material-ui/core'
import { Link, navigate } from 'gatsby'

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
    query MyQuery {
        listAssignments {
            items {
                id
                title
                details
                required
                startDate
                createdAt
            }
        }
    }
`

const Assignments: React.FC = (): JSX.Element => {
    const { loading, error, data } = useQuery(APOLLO_QUERY)
    console.log({ loading, error, data })
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
            renderCell: ({ value = '' }) => (value ? <Check /> : <></>),
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
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'right' }}>
                <Button variant="contained" color="primary" component={Link} to={'/app/assignments/new'}>
                    New Assignment
                </Button>
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
                <DataGrid
                    rows={assignments}
                    columns={columns}
                    // pageSize={5}
                    disableSelectionOnClick={true}
                    onRowClick={(params: RowParams) => navigate(`/app/assignments/${params.row.id}`)}
                    sortModel={sortModel}
                    autoHeight
                    autoPageSize
                />
            </Grid>
        </Grid>
    )
}

export default Assignments
