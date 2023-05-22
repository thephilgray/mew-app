/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { gql, useQuery } from '@apollo/react-hooks'
import { Add, AdminPanelSettings, Assignment, AssignmentLateRounded, AssignmentTurnedInRounded, Check, CheckBoxOutlineBlankRounded, CheckBoxRounded, MusicNote, People, Person, PlayArrowTwoTone, Settings } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, createStyles, Grid, Grow, IconButton, styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui';
import { Link, navigate } from 'gatsby'
import Error from '../Error'
import format from 'date-fns/format'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'
import { isPast } from 'date-fns/esm'
import { getWorkshop } from '../../graphql/queries'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'
import { compareDesc, differenceInSeconds } from 'date-fns'
import { useUser } from '../../auth/hooks';
import If from '../If';
import { getCloudFrontURL } from '../../utils';



const useStyles = makeStyles()(() => (
    {
        tableWrapper: {
            width: '100%',
        }
    }),
);



const Timer = ({ deadline }) => {
    // borrowed code
    // source: https://codesandbox.io/s/omydy?file=/src/App.js:184-1186
    const ONE_DAY = 60 * 60 * 24;
    const ONE_HOUR = 60 * 60;
    const ONE_MINUTE = 60;
    const [currentTime, setCurrentTime] = React.useState(new Date().getTime());

    const diffInSeconds = differenceInSeconds(deadline, currentTime);

    const getCoundown = () => {
        if (diffInSeconds <= 1) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
        const days = Math.floor(diffInSeconds / ONE_DAY);
        const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
        const minutes = Math.floor(
            (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE
        );
        const seconds =
            diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
        const zeroPad = val => val < 10 ? `0${val}` : val
        return {
            days,
            hours,
            minutes: zeroPad(minutes),
            seconds: zeroPad(seconds)
        };
    };

    const countdown = React.useMemo(getCoundown, [currentTime]);

    React.useEffect(() => {
        setInterval(() => {
            const now = new Date().getTime();
            setCurrentTime(now);
        }, 1000);
    }, []);

    return <Typography variant="body2" color="error">
        <span><strong>{countdown.days}</strong> day{countdown.days === 1 ? '' : 's'}</span> <span><strong>{countdown.hours}</strong>hr{countdown.hours === 1 ? '' : 's'}</span> <span><strong>{countdown.minutes}</strong>:</span><span><strong>{countdown.seconds}</strong></span>
    </Typography>

}

const Assignments: React.FC<{ workshopId?: string }> = ({ workshopId = '' }) => {
    const { classes } = useStyles()
    const user = useUser()
    const [viewAdmin, setViewAdmin] = React.useState(true)
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

    const columns: GridColDef[] = [
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

    if (error) return <Error errorMessage={error} />
    if (loading) return <p>Loading assignments....</p>

    const items = data?.getWorkshop?.fileRequests?.items || []
    const rows = items.map(
        (item: { id: string; title: string; expiration: string; required: boolean; createdAt: string, artwork: { path: string } }) => {
            const submissions = item?.submissions?.items
                ? item?.submissions?.items
                : []

            const artwork = item?.artwork?.path && getCloudFrontURL(item.artwork.path)
            const mySubmissions = submissions.filter(submission => submission?.email === user.email)
            return {
                ...item,
                submissions,
                status: !isPast(new Date(item.expiration as string)) ? 'ACTIVE' : 'EXPIRED',
                mySubmissions: mySubmissions,
                artwork
            }
        },
    )

    const StyledGrid = styled(Grid)`
    &:hover
        transform: scale(1.025);
    }`

    const AssignmentList = ({ items }) =>
        items.map((row) => (
            <StyledGrid item xs={12} key={row.id}>
                <Link to={ROUTE_NAMES.assignment.getPath({ assignmentId: String(row.id) })} style={{ textDecoration: 'initial' }}>
                    <Card
                        sx={{
                            backgroundImage: row?.artwork ? `linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.85)), url(${row.artwork})` : '',
                            backgroundSize: 'cover'
                        }}
                    >
                        <CardContent sx={{ opacity: row.status === 'EXPIRED' ? '50%' : '100%' }}>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        {row.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} justifyContent="flex-end" style={{ textAlign: 'right' }}>
                                    {(() => {
                                        if (row.mySubmissions.length > 0) {
                                            return <><AssignmentTurnedInRounded color="success" sx={{ verticalAlign: "bottom" }} /></>
                                        }
                                        else if (row.status === 'EXPIRED') {
                                            return <><AssignmentLateRounded color="error" sx={{ verticalAlign: "bottom" }} /></>
                                        }
                                        return <Assignment color="warning" sx={{ verticalAlign: "bottom" }} />

                                    })()
                                    }
                                    {" "}
                                    Due: {format(new Date(String(row.expiration)), `E, MM/dd/yy hh:mm`)}
                                    <If condition={row.status !== 'EXPIRED' && !row.mySubmissions.length}>
                                        <Timer deadline={new Date(row.expiration)} />
                                    </If>
                                </Grid>
                                <Grid item xs={12}>
                                    <div dangerouslySetInnerHTML={{ __html: row.details }} style={{ width: '100%' }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions sx={{ float: 'right' }}>
                            {row.status === 'ACTIVE' ? (
                                <Button
                                    color="primary"
                                    variant="contained"
                                    aria-label="New Submission"
                                    // component={Link}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        navigate(ROUTE_NAMES.newPublicSubmission.getPath({ assignmentId: row.id }))
                                    }
                                    }
                                    startIcon={<Add />}
                                >
                                    Submit
                                </Button>
                            ) : null}
                            {row.status === 'EXPIRED' ? (
                                <Button
                                    color="success"
                                    variant="contained"
                                    aria-label="Playlist"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        navigate(ROUTE_NAMES.playlist.getPath({ assignmentId: row.id }))
                                    }}
                                    startIcon={<PlayArrowTwoTone />}
                                >
                                    Play
                                </Button>
                            ) : null}
                        </CardActions>
                    </Card>
                </Link>
            </StyledGrid>
        ))

    const upcomingAssignments = rows
        .filter((row) => row.status === 'ACTIVE')
        .sort((a, b) => compareDesc(new Date(a.expiration), new Date(b.expiration)))
    const pastDueAssignments = rows
        .filter((row) => row.status != 'ACTIVE')
        .sort((a, b) => compareDesc(new Date(a.expiration), new Date(b.expiration)))

    const assignmentsView = (
        <>
            <Grid item xs={12} sx={{ mt: 4 }}>
                <Grid container spacing={2}>
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
                <Grid item xs={12} sx={{ mt: 4 }}>
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
                        <Grid item xs={12}>
                            <ToggleButtonGroup
                                exclusive
                                value={!!viewAdmin ? "admin" : "member"}
                                onChange={(e, value) =>
                                    setViewAdmin(value === "admin")}
                                sx={{ float: "right" }}>
                                { }
                                <ToggleButton value="member" aria-label="Member View">Member View <Person /></ToggleButton>
                                <ToggleButton value="admin" aria-label="Admin View">Admin View <AdminPanelSettings /></ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <If condition={!!viewAdmin}>
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
                                    size="large">
                                    <Settings />
                                </IconButton>
                                <IconButton
                                    color="secondary"
                                    aria-label="Members"
                                    component={Link}
                                    to={ROUTE_NAMES.members.getPath({ workshopId })}
                                    size="large">
                                    <People />
                                </IconButton>
                                <IconButton
                                    color="secondary"
                                    aria-label="New Assignment"
                                    component={Link}
                                    to={ROUTE_NAMES.newAssignment.getPath({ workshopId })}
                                    size="large">
                                    <Add />
                                </IconButton>
                            </Grid>
                        </If>
                    </Grid>
                </Grid>
            </GroupGuard>
            <GroupGuard groups={[Group.admin]} fallbackContent={assignmentsView}>
                <If condition={!!viewAdmin}>
                    <Grid item xs={12} className={classes.tableWrapper}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            disableRowSelectionOnClick={true}
                            onRowClick={(params: GridRowParams) =>
                                navigate(ROUTE_NAMES.assignment.getPath({ assignmentId: String(params.row.id) }))
                            }
                            initialState={{
                                sorting: {
                                    sortModel: [{ field: 'expiration', sort: 'desc' }],
                                },
                            }}
                            autoHeight
                        />
                    </Grid>
                </If>
                <If condition={!viewAdmin}>
                    <Grid item xs={12}>
                        {assignmentsView}
                    </Grid>
                </If>
            </GroupGuard>
        </Grid>
    );
}

export default Assignments
