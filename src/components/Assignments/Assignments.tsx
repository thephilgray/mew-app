/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, Columns, RowParams, SortDirection } from '@material-ui/data-grid'
import { gql, useQuery } from '@apollo/react-hooks'
import { Check } from '@material-ui/icons'
import { Button, createStyles, Grid, makeStyles } from '@material-ui/core'
import { Link, navigate } from 'gatsby'
import Error from '../Error'
import format from 'date-fns/format'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'

const QUERY_FILE_REQUESTS = gql`
    query LIST_FILE_REQUESTS {
        listFileRequests {
            items {
                title
                id
                submissions {
                    items {
                        id
                    }
                }
                expiration
                createdAt
                required
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
    const { loading, error, data, refetch } = useQuery(QUERY_FILE_REQUESTS)

    React.useEffect(() => {
        refetch()
    }, [])
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            renderCell: ({ value = { items: [] } }) => value?.items && <span>{value.items.length}</span>,
        },
        {
            field: 'createdAt',
            headerName: 'Created',
            type: 'string',
            width: 130,
            valueFormatter: ({ value = '' }) => format(new Date(String(value)), `MM-dd-yyyy`),
        },
        {
            field: 'expiration',
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
            field: 'expiration',
            sort: 'desc' as SortDirection,
        },
    ]
    if (error) return <Error errorMessage={error} />
    if (loading) return <p>Loading assignments....</p>
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home]} />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'right' }}>
                <Button variant="contained" color="primary" component={Link} to={ROUTE_NAMES.newAssignment.path}>
                    New Assignment
                </Button>
            </Grid>
            <Grid item xs={12} className={classes.tableWrapper}>
                <DataGrid
                    rows={data.listFileRequests.items}
                    columns={columns}
                    disableSelectionOnClick={true}
                    onRowClick={(params: RowParams) =>
                        navigate(ROUTE_NAMES.assignment.getPath({ assignmentId: String(params.row.id) }))
                    }
                    sortModel={sortModel}
                    autoHeight
                    autoPageSize
                />
            </Grid>
        </Grid>
    )
}

export default Assignments
