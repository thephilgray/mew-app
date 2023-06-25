import React, { useEffect } from 'react';
import { Button, CardActions, Grid, Typography } from '@mui/material'
import { Add, Assignment, AssignmentLateRounded, AssignmentTurnedInRounded, PlayArrowTwoTone } from '@mui/icons-material'

import CardGrid from '../CardGrid';
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
          filter: {
            or: workshopIds.map(workshopId => ({ workshopId: { eq: workshopId } })),
          }
        },
      })
    }

  }, [workshopId, profile])

  const data = workshopId ? fetchWorkshopAssignmentsData?.fileRequestsByWorkshopId : fetchAssignmentsData?.listFileRequests

  if (fetchWorkshopAssignmentsError || fetchWorkshopAssignmentsError) return <Error errorMessage={fetchWorkshopAssignmentsError || fetchWorkshopAssignmentsError} />
  if (fetchWorkshopAssignmentsLoading || fetchAssignmentsLoading) return <p>Loading assignments....</p>

  const items = data?.items || []
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
          <CardGrid items={withCardGridProps(upcomingAssignments)} />
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
            <CardGrid items={withCardGridProps(pastDueAssignments)} />
          </Grid>
        </Grid>
      </Grid>
    ) : null}
  </Grid>
}
export default Assignments;