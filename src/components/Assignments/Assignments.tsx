import React, { useEffect } from 'react';
import { Button, CardActions, Grid, Typography } from '@mui/material'
import { Add, Assignment, AssignmentLateRounded, AssignmentTurnedInRounded, PlayArrowTwoTone } from '@mui/icons-material'
import { SvgSkullCrossbonesSolid } from 'react-line-awesome-svg'
import CardGrid, { SkeletonCardGrid } from '../CardGrid';
import If from '../If';
import { getCloudFrontURL } from '../../utils';
import { isPast } from 'date-fns/esm'
import { compareDesc } from 'date-fns'
import format from 'date-fns/format'
import Timer from './Timer';
import { ROUTES } from '../../constants'
import { navigate } from 'gatsby'
import { useProfile, useUser } from '../../auth/hooks';
import Error from '../Error';
import { gql, useLazyQuery, useQuery } from '@apollo/react-hooks';
import { listFileRequests, fileRequestsByWorkshopId } from '../../graphql/queries';

type AssignmentsProps = {

};

const Assignments: React.FC<AssignmentsProps> = ({ workshopId }) => {
  const user = useUser()
  const { profile } = useProfile()
  const [fetchWorkshopAssignments, { data: fetchWorkshopAssignmentsData, error: fetchWorkshopAssignmentsError, loading: fetchWorkshopAssignmentsLoading }] = useLazyQuery(
    gql(fileRequestsByWorkshopId.replace('submissions {', 'submissions(limit: 5000) {')),
    {
      variables: { workshopId: workshopId },
    },
  )
  const [fetchAssignments, { data: fetchAssignmentsData, loading: fetchAssignmentsLoading, error: fetchAssignmentsError }] = useLazyQuery(
    gql(listFileRequests.replace('submissions {', 'submissions(limit: 5000) {'))
  )


  useEffect(() => {
    if (workshopId && !fetchWorkshopAssignmentsData && !fetchWorkshopAssignmentsLoading && !fetchWorkshopAssignmentsError) {
      fetchWorkshopAssignments()
    } else if (!!profile && !fetchAssignmentsLoading && !fetchAssignmentsError && !fetchAssignmentsData) {
      const workshopIds = profile?.memberships?.items
        ?.filter(item => item.status === "ACTIVE")
        ?.map(item => item.workshopId) || []
      // variables: { filter: { workshopId: { eq: workshopId } } },
      fetchAssignments({
        variables: {
          // TODO: do not limit, paginate
          limit: 500,
          filter: {
            or: workshopIds.map(workshopId => ({ workshopId: { eq: workshopId } })),
          },
        },
      })
    }

  }, [workshopId, profile])

  if (fetchWorkshopAssignmentsError || fetchWorkshopAssignmentsError) return <Error errorMessage={fetchWorkshopAssignmentsError || fetchWorkshopAssignmentsError} />
  // if (!profile || fetchWorkshopAssignmentsLoading || fetchAssignmentsLoading) return <SkeletonCardGrid numberOfItems={12} />

  const data = workshopId ? fetchWorkshopAssignmentsData?.fileRequestsByWorkshopId : fetchAssignmentsData?.listFileRequests


  const items = data?.items || []
  const rows = items.map(
    (item: { id: string; title: string; expiration: string; required: boolean; createdAt: string, artwork: { path: string } }) => {
      const submissions = item?.submissions?.items
        ? item?.submissions?.items
        : []

      const artwork = item?.artwork || item?.workshop?.artwork
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
    rightOverlayContent: (() => {
      const turnedIn = item.mySubmissions.length > 0;
      const missed = !turnedIn && item.status === 'EXPIRED'
      const dueSoon = !turnedIn && item.status !== 'EXPIRED';

      const dueDate = <strong>
        {format(new Date(String(item.expiration)), `${dueSoon ? 'E, ' : ''}MM/dd/yy${dueSoon ? ' hh:mm' : ''}`)}
      </strong>

      if (turnedIn) {
        return <>
          <AssignmentTurnedInRounded sx={{ verticalAlign: 'bottom', color: 'palegreen' }} />
          <Typography variant="body2" color="whitesmoke">
            {dueDate}
          </Typography>
        </>
      }
      else if (missed) {
        return <>
          <SvgSkullCrossbonesSolid fill='whitesmoke' fontSize={24} />
          <Typography variant="body2" color="whitesmoke">
            {dueDate}
          </Typography>
        </>
      }
      return <>
        <Assignment sx={{ verticalAlign: 'middle', color: 'yellow', mr: 1 }} />
        <Typography variant="body2" color="whitesmoke" align='right'>
          {dueDate}<br />
          <Timer deadline={new Date(item.expiration)} />
        </Typography>
      </>

    })(),
    // active: item.status === 'ACTIVE',
    description: <div dangerouslySetInnerHTML={{ __html: item.details }} style={{ width: '100%' }} />,
    link: ROUTES.assignment.getPath({ assignmentId: item.id }),
    bottomContent: <CardActions sx={{ float: 'right' }}>
      <If condition={item.status === 'ACTIVE'}>
        <Button
          color="primary"
          // variant="contained"
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
          // variant="contained"
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

  return <Grid container>

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
        <Grid item xs={12}>
          {data ? <CardGrid items={withCardGridProps(upcomingAssignments)} /> : <SkeletonCardGrid numberOfItems={12} />}

        </Grid>
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
          <Grid item xs={12}>
            {data ? <CardGrid items={withCardGridProps(pastDueAssignments)} /> : <SkeletonCardGrid numberOfItems={12} />}
          </Grid>
        </Grid>
      </Grid>
    ) : null}
  </Grid>
}
export default Assignments;