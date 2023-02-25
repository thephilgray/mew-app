/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, Columns, RowParams, SortDirection } from '@material-ui/data-grid'
import { gql, useQuery } from '@apollo/react-hooks'
import { Add, Check, MusicNote, People, PlayArrowTwoTone, Settings } from '@material-ui/icons'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    createStyles,
    Grid,
    IconButton,
    makeStyles,
    Typography,
} from '@material-ui/core'
import { Link, navigate } from 'gatsby'
import Error from '../Error'
import format from 'date-fns/format'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'
import { isPast } from 'date-fns/esm'
import { getWorkshop } from '../../graphql/queries'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'
import { compareDesc } from 'date-fns'

const useStyles = makeStyles(() =>
    createStyles({
        tableWrapper: {
            width: '100%',
        },
    }),
)

const Assignments: React.FC<{ workshopId?: string }> = ({ workshopId = '' }) => {
    const classes = useStyles()
    const { loading, error, data, refetch } = useQuery(
        gql(getWorkshop.replace('submissions {', 'submissions(limit: 5000) {')),
        {
            variables: { id: workshopId },
        },
    )
    let workshop
    if (data && data.getWorkshop) {
        workshop = data.getWorkshop
    }

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
            renderCell: ({ value = [] }) => value && <span>{value.length}</span>,
        },
        {
            field: 'createdAt',
            headerName: 'Created',
            type: 'string',
            width: 130,
            valueFormatter: ({ value = '' }) => format(new Date(String(value)), `MM - dd - yyyy`),
        },
        {
            field: 'expiration',
            headerName: 'Due',
            type: 'string',
            width: 150,
            valueFormatter: ({ value = '' }) => format(new Date(String(value)), `MM - dd - yyyy hh: mm`),
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

    const items = data?.getWorkshop?.fileRequests?.items || []
    const rows = items.map(
        (item: { id: string; title: string; expiration: string; required: boolean; createdAt: string }) => ({
            ...item,
            submissions: data?.getWorkshop?.submissions?.items
                ? data.getWorkshop.submissions.items
                      // @ts-ignore
                      .filter((submission) => submission?.fileRequestId === item.id)
                : [],
            status: !isPast(new Date(item.expiration as string)) ? 'ACTIVE' : 'EXPIRED',
        }),
    )

    const AssignmentList = ({ items }) =>
        items.map((row) => (
            <Grid item xs={12} key={row.id}>
                <Card>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography gutterBottom variant="h5" component="h3">
                                    {row.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} justify="flex-end" style={{ textAlign: 'right' }}>
                                Due: {format(new Date(String(row.expiration)), `E, MM/dd/yy hh:mm`)}
                            </Grid>
                            <Grid item xs={12}>
                                <div dangerouslySetInnerHTML={{ __html: row.details }} style={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        {row.status === 'ACTIVE' ? (
                            <Button
                                color="secondary"
                                aria-label="New Submission"
                                // component={Link}
                                onClick={() =>
                                    navigate(ROUTE_NAMES.newPublicSubmission.getPath({ assignmentId: row.id }))
                                }
                                startIcon={<Add />}
                            >
                                Submit
                            </Button>
                        ) : null}
                        {row.status === 'EXPIRED' ? (
                            <Button
                                color="secondary"
                                aria-label="Playlist"
                                onClick={() => navigate(ROUTE_NAMES.playlist.getPath({ assignmentId: row.id }))}
                                startIcon={<MusicNote />}
                            >
                                Listen
                            </Button>
                        ) : null}
                    </CardActions>
                </Card>
            </Grid>
        ))

    const upcomingAssignments = rows
        .filter((row) => row.status === 'ACTIVE')
        .sort((a, b) => compareDesc(new Date(a.expiration), new Date(b.expiration)))
    const pastDueAssignments = rows
        .filter((row) => row.status != 'ACTIVE')
        .sort((a, b) => compareDesc(new Date(a.expiration), new Date(b.expiration)))

    const assignmentsView = (
        <>
            <Grid item xs={12}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">
                            Upcoming
                        </Typography>
                    </Grid>
                    {upcomingAssignments.length > 0 ? (
                        <AssignmentList items={upcomingAssignments} />
                    ) : (
                        <Grid item xs={12}>
                            <Typography>There are currently no upcoming assignments.</Typography>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            {pastDueAssignments.length > 0 ? (
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2">
                                Past Due
                            </Typography>
                        </Grid>
                        <AssignmentList items={pastDueAssignments} />
                    </Grid>
                </Grid>
            ) : null}
        </>
    )

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignments]} workshop={workshop} />
            </Grid>
            <GroupGuard groups={[Group.admin]}>
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
                                aria-label="Workshop Settings"
                                component={Link}
                                to={ROUTE_NAMES.editWorkshop.getPath({ workshopId })}
                            >
                                <Settings />
                            </IconButton>
                            <IconButton
                                color="secondary"
                                aria-label="Members"
                                component={Link}
                                to={ROUTE_NAMES.members.getPath({ workshopId })}
                            >
                                <People />
                            </IconButton>
                            <IconButton
                                color="secondary"
                                aria-label="New Assignment"
                                component={Link}
                                to={ROUTE_NAMES.newAssignment.getPath({ workshopId })}
                            >
                                <Add />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </GroupGuard>
            <GroupGuard groups={[Group.admin]} fallbackContent={assignmentsView}>
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
            </GroupGuard>
        </Grid>
    )
}

export default Assignments
