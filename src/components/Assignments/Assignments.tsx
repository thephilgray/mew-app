/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { gql, useQuery } from '@apollo/react-hooks'
import { Add, AdminPanelSettings, Assignment, AssignmentLateRounded, AssignmentTurnedInRounded, Check, CheckBoxOutlineBlankRounded, CheckBoxRounded, MusicNote, People, Person, PlayArrowTwoTone, Settings } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, createStyles, Grid, Grow, IconButton, styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui';
import { Link, navigate } from 'gatsby'
import Error from '../Error'
import format from 'date-fns/format'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { isPast } from 'date-fns/esm'
import { getWorkshop } from '../../graphql/queries'
import GroupGuard from '../Auth/GroupGuard'
import { Group, ROUTES } from '../../constants'
import { compareDesc, differenceInSeconds } from 'date-fns'
import { useUser, useViewAdmin } from '../../auth/hooks';
import If from '../If';
import { getCloudFrontURL } from '../../utils';
import CardGrid from '../CardGrid';
import { HostDisplay, WorkshopDates } from '../Workshops/WorkshopList';

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
    const [viewAdmin] = useViewAdmin()
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

    const upcomingAssignments = rows
        .filter((row) => row.status === 'ACTIVE')
        .sort((a, b) => compareDesc(new Date(a.expiration), new Date(b.expiration)))
    const pastDueAssignments = rows
        .filter((row) => row.status != 'ACTIVE')
        .sort((a, b) => compareDesc(new Date(a.expiration), new Date(b.expiration)))

    const withCardGridProps = items => items.map(item => ({
        ...item,
        name: item?.title,
        active: true,
        belowOverlayContent: <If condition={item.status !== 'EXPIRED' && !item.mySubmissions.length}>
            <div style={{ textAlign: 'right', width: '100%', backgroundColor: 'rgba(255,255,255,.9)', padding: '0.25em' }}>
                <Timer deadline={new Date(item.expiration)} />
            </div>
        </If>,
        rightOverlayContent: <>{(() => {
            if (item.mySubmissions.length > 0) {
                return <><AssignmentTurnedInRounded color="success" sx={{ verticalAlign: "bottom" }} /></>
            }
            else if (item.status === 'EXPIRED') {
                return <><AssignmentLateRounded color="error" sx={{ verticalAlign: "bottom" }} /></>
            }
            return <Assignment color="warning" sx={{ verticalAlign: "bottom" }} />

        })()
        }{' '}
            <Typography variant="body2" color="whitesmoke">
                Due: {format(new Date(String(item.expiration)), `E, MM/dd/yy hh:mm`)}
            </Typography>
        </>,
        // active: item.status === 'ACTIVE',
        description: <div dangerouslySetInnerHTML={{ __html: item.details }} style={{ width: '100%' }} />,
        link: ROUTES.assignment.getPath({ assignmentId: item.id }),
        bottomContent: <CardActions sx={{ float: 'right' }}>
            <If condition={item.status === 'ACTIVE'}>
                <Button
                    color="primary"
                    variant="contained"
                    aria-label="New Submission"
                    // component={Link}
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        navigate(ROUTES.newPublicSubmission.getPath({ assignmentId: item.id }))
                    }
                    }
                    startIcon={<Add />}
                >
                    Submit
                </Button>
            </If>
            <If condition={item.status === 'EXPIRED'}>
                <Button
                    color="success"
                    variant="contained"
                    disabled={!item?.submissions?.length}
                    aria-label="Playlist"
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        navigate(ROUTES.assignmentPlaylist.getPath({ assignmentId: item.id }))
                    }}
                    startIcon={<PlayArrowTwoTone />}
                >
                    Play
                </Button>
            </If>
        </CardActions>
    }))

    const assignmentsView = (
        <>
            <Grid item xs={12}>
                <Card>
                    <CardMedia
                        image={data?.getWorkshop?.artwork ? getCloudFrontURL(data?.getWorkshop?.artwork?.path) : ''}
                        title={data?.getWorkshop?.name}
                    >
                        <CardContent sx={{ backgroundColor: "rgba(0,0,0,.7)", color: 'whitesmoke' }}>
                            <div style={{ float: 'right' }}>
                                <WorkshopDates workshop={data?.getWorkshop} />
                            </div>
                            <Typography variant="h4" component="h1">{data?.getWorkshop?.name}</Typography>
                        </CardContent>
                    </CardMedia>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={3}>
                                <HostDisplay sizes={{ height: 80, width: 80 }} host={data?.getWorkshop?.host} />
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Typography variant="body1">
                                    {data?.getWorkshop?.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h2">
                            Upcoming
                        </Typography>
                    </Grid>
                    {/* {upcomingAssignments.length > 0 ? (
                        <AssignmentList items={upcomingAssignments} />
                    ) : (
                        <Grid item xs={12}>
                            <Typography>There are currently no upcoming assignments.</Typography>
                        </Grid>
                    )} */}
                    <CardGrid items={withCardGridProps(upcomingAssignments)} />
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
                        <CardGrid items={withCardGridProps(pastDueAssignments)} />
                    </Grid>
                </Grid>
            ) : null}
        </>
    )

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTES.home, ROUTES.workshop]} workshop={workshop} />
            </Grid>
            <GroupGuard groups={[Group.admin]}>
                <Grid item xs={12} style={{ paddingBottom: 0 }}>
                    <Grid container>
                        <If condition={!!viewAdmin}>
                            <Grid item xs={6} md={8}>
                                <Typography variant="h5" component="h5" gutterBottom>
                                    Assignments
                                </Typography>
                            </Grid>

                            <Grid item xs={6} md={4} style={{ textAlign: 'right' }}>
                                <IconButton
                                    color="secondary"
                                    aria-label="Workshop Settings"
                                    component={Link}
                                    to={ROUTES.editWorkshop.getPath({ workshopId })}
                                    size="large">
                                    <Settings />
                                </IconButton>
                                <IconButton
                                    color="secondary"
                                    aria-label="Members"
                                    component={Link}
                                    to={ROUTES.workshopMembers.getPath({ workshopId })}
                                    size="large">
                                    <People />
                                </IconButton>
                                <IconButton
                                    color="secondary"
                                    aria-label="New Assignment"
                                    component={Link}
                                    to={ROUTES.newAssignment.getPath({ workshopId })}
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
                                navigate(ROUTES.assignment.getPath({ assignmentId: String(params.row.id) }))
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
