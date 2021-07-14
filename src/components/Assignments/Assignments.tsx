/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, Columns, RowParams, SortDirection } from '@material-ui/data-grid'
import { gql, useQuery } from '@apollo/react-hooks'
import { Add, Check, People } from '@material-ui/icons'
import { createStyles, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Link, navigate } from 'gatsby'
import Error from '../Error'
import format from 'date-fns/format'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'
import { isPast } from 'date-fns/esm'
import { RoleGuard } from '../../auth/auth.context'

const QUERY_FILE_REQUESTS = gql`
    query LIST_FILE_REQUESTS {
        listFileRequests {
            items {
                title
                id
                submissions(limit: 200) {
                    items {
                        id
                    }
                }
                expiration
                createdAt
                required
                _deleted
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
            width: 320,
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
            width: 150,
            valueFormatter: ({ value = '' }) => format(new Date(String(value)), `MM-dd-yyyy hh:mm`),
        },
        {
            field: 'required',
            headerName: 'Required',
            type: 'boolean',
            // eslint-disable-next-line react/display-name
            renderCell: ({ value = '' }) => (value ? <Check /> : <></>),
            width: 100,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
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

    const items = data?.listFileRequests?.items || []
    const rows = items
        .filter(({ _deleted }: { _deleted: boolean }) => !_deleted)
        .map((item: { title: string; expiration: string; required: boolean; createdAt: string; submissions: [] }) => ({
            ...item,
            status: Boolean(!isPast(new Date(item.expiration as string))) ? 'ACTIVE' : 'EXPIRED',
        }))
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home]} />
            </Grid>
            <RoleGuard roles={['Admin']}>
                <Grid item xs={12} style={{ paddingBottom: 0 }}>
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography variant="h5" component="h5" gutterBottom>
                                Assignments
                            </Typography>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: 'right' }}>
                            <IconButton
                                color="secondary"
                                aria-label="Members"
                                component={Link}
                                to={ROUTE_NAMES.members.path}
                            >
                                <People />
                            </IconButton>
                            <IconButton
                                color="secondary"
                                aria-label="New Assignment"
                                component={Link}
                                to={ROUTE_NAMES.newAssignment.path}
                            >
                                <Add />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </RoleGuard>
            <RoleGuard roles={['Admin']}>
                <Grid item xs={12} className={classes.tableWrapper}>
                    <DataGrid
                        rows={rows}
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
            </RoleGuard>
        </Grid>
    )
}

export default Assignments
