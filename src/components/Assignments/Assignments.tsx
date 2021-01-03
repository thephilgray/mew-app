/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, Columns, RowParams, SortDirection } from '@material-ui/data-grid'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Check } from '@material-ui/icons'
import { Button, createStyles, Grid, makeStyles } from '@material-ui/core'
import { Link, navigate } from 'gatsby'
import Error from '../Error'
import format from 'date-fns/format'

const LIST_ASSIGNMENTS = gql`
    query ListAssignments {
        listAssignments {
            items {
                id
                title
                details
                required
                startDate
                endDate
                createdAt
            }
        }
    }
`

const useStyles = makeStyles(() =>
    createStyles({
        tableWrapper: {
            width: '100%',
        },
    }),
)

const Assignments: React.FC = (): JSX.Element => {
    const classes = useStyles()
    const { loading, error, data } = useQuery(LIST_ASSIGNMENTS)
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
            field: 'startDate',
            headerName: 'Start',
            type: 'string',
            width: 130,
            valueFormatter: ({ value = '' }) => format(new Date(String(value)), `MM-dd-yyyy`),
        },
        {
            field: 'endDate',
            headerName: 'Due',
            type: 'string',
            width: 130,
            valueFormatter: ({ value = '' }) => format(new Date(String(value)), `MM-dd-yyyy`),
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
            field: 'endDate',
            sort: 'desc' as SortDirection,
        },
    ]
    if (error) return <Error errorMessage={error} />
    if (loading) return <p>Loading assignments....</p>
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'right' }}>
                <Button variant="contained" color="primary" component={Link} to={'/app/assignments/new'}>
                    New Assignment
                </Button>
            </Grid>
            <Grid item xs={12} className={classes.tableWrapper}>
                <DataGrid
                    rows={data.listAssignments.items}
                    columns={columns}
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
