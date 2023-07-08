/* eslint-disable react/display-name */
import * as React from 'react'
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { gql, useQuery } from '@apollo/react-hooks'
import { Add, Check, People, Settings } from '@mui/icons-material'
import { Grid, IconButton, Typography, CardContent, CardMedia, Card, Chip, Box, } from '@mui/material'
import { makeStyles } from 'tss-react/mui';
import { Link, navigate } from 'gatsby'
import Error from '../Error'
import format from 'date-fns/format'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { isPast } from 'date-fns/esm'
import { getWorkshop } from '../../graphql/queries'
import GroupGuard from '../Auth/GroupGuard'
import { Group, ROUTES } from '../../constants'
import { useUser, useViewAdmin } from '../../auth/hooks';
import If from '../If';
import { getCloudFrontURL } from '../../utils';
import Assignments from '../Assignments/Assignments'
import { HostDisplay, MembersAvatarGroup, WorkshopDates } from '../Workshops/WorkshopList';
import Loading from '../Loading';
import sumBy from 'lodash/sumBy'
import { DataGridWrapper } from '../DataGridWrapper';

const useStyles = makeStyles()(() => (
    {
        tableWrapper: {
            width: '100%',
        }
    }),
);


const Workshop: React.FC<{ workshopId?: string }> = ({ workshopId = '' }) => {
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
    if (loading) return <Loading />

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

    const memberships = data?.getWorkshop?.memberships?.items
    const totalSubmissions = sumBy(rows, r => r.submissions.length) || '0'
    const myTotalSubmissions = sumBy(rows, r => r.mySubmissions.length) || '0'
    const myTotalComplete = sumBy(rows, r => r.mySubmissions.length > 0 && r.required) || '0'
    const totalRequired = sumBy(rows, 'required') || '0'

    const AssignmentsView = () => <>
        <Grid item xs={12}>
            <Assignments workshopId={workshopId} />
        </Grid>
    </>

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTES.home, ROUTES.workshop]} workshop={workshop} />
            </Grid>
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
                                <Grid container spacing={2} justifyContent={'flex-start'}>
                                    <Grid item xs={12}>
                                        <If condition={!!data?.getWorkshop?.host?.id}>
                                            <HostDisplay sizes={{ height: 80, width: 80 }} host={data?.getWorkshop?.host} />
                                        </If>
                                    </Grid>
                                    <If condition={!!memberships}>
                                        <Grid item xs={12}><MembersAvatarGroup memberships={memberships} /></Grid>

                                    </If>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="body1">
                                    {data?.getWorkshop?.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3}>

                                <Box p={2} textAlign='center'>
                                    <Typography lineHeight={0} variant='overline' align='center'>
                                        Assignments Complete
                                    </Typography>
                                    <Typography variant='h6' align='center'>
                                        {myTotalComplete} of {totalRequired}
                                    </Typography>
                                    <Typography lineHeight={0} variant='overline' align='center'>
                                        All Submissions
                                    </Typography>
                                    <Typography variant='h6' align='center'>
                                        {totalSubmissions}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <GroupGuard groups={[Group.admin]}>
                <Grid item xs={12} sx={{ pb: 0 }}>
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
            <GroupGuard groups={[Group.admin]} fallbackContent={<AssignmentsView />
            }>
                <If condition={!!viewAdmin}>
                    <Grid item xs={12} className={classes.tableWrapper}>
                        <DataGridWrapper>
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
                        </DataGridWrapper>
                    </Grid>
                </If>
                <If condition={!viewAdmin}>
                    <AssignmentsView />
                </If>
            </GroupGuard>
        </Grid>
    );
}

export default Workshop
