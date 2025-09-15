import React, { useEffect, useRef, useCallback } from 'react';
import { Button, CardActions, Grid, Typography, CircularProgress } from '@mui/material'
import { Add, Assignment, AssignmentTurnedInRounded, OpenInBrowser, PlayArrowTwoTone } from '@mui/icons-material'
import { SvgSkullCrossbonesSolid } from 'react-line-awesome-svg'
import CardGrid, { SkeletonCardGrid } from '../CardGrid';
import If from '../If';
import { isPast } from 'date-fns/esm'
import { compareDesc } from 'date-fns'
import format from 'date-fns/format'
import Timer from './Timer';
import { ROUTES } from '../../constants'
import { navigate } from 'gatsby'
import { useProfile, useUser, useViewAdmin } from '../../auth/hooks';
import { gql, useLazyQuery } from '@apollo/react-hooks';
// import { listFileRequests } from '../../graphql/queries';

const listFileRequests = `
  query ListFileRequests(
    $filter: ModelFileRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startDate
        expiration
        title
        details
        required
        artwork {
          id
          path
          credit
        }
        submissions {
          items {
            id
            fileRequestId
            artist
            name
            email
            profile {
              email
              id
            }
          }
        }
        workshop {
          artwork {
            id
            path
            credit
          }
        }
      }
    }
  }`;

type AssignmentsProps = {

};

const Assignments: React.FC<AssignmentsProps> = ({ workshopId, fileRequests }) => {
  const user = useUser()
  const { profile } = useProfile()
  const [viewAdmin] = useViewAdmin()
  const loader = useRef(null);
  const [fetchAssignments, { data: fetchAssignmentsData, loading: fetchAssignmentsLoading, error: fetchAssignmentsError, fetchMore }] = useLazyQuery(
    gql(listFileRequests)
  )

  const handleObserver = useCallback((entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      if (fetchAssignmentsData?.listFileRequests?.nextToken && !fetchAssignmentsLoading) {
        fetchMore({
          variables: {
            nextToken: fetchAssignmentsData.listFileRequests.nextToken
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return {
              ...prev,
              listFileRequests: {
                ...prev.listFileRequests,
                items: [...prev.listFileRequests.items, ...fetchMoreResult.listFileRequests.items],
                nextToken: fetchMoreResult.listFileRequests.nextToken
              }
            };
          }
        });
      }
    }
  }, [fetchAssignmentsData, fetchAssignmentsLoading, fetchMore]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, [handleObserver]);


  useEffect(() => {
    if (!fileRequests && !!profile && !fetchAssignmentsLoading && !fetchAssignmentsError && !fetchAssignmentsData) {
      const workshopIds = profile?.memberships?.items
        ?.filter(item => item.status === "ACTIVE")
        ?.map(item => item.workshopId) || []
      fetchAssignments({
        variables: {
          limit: 20,
          filter: {
            or: workshopIds.map(workshopId => ({ workshopId: { eq: workshopId } })),
          },
        },
      })
    }

  }, [workshopId, profile])


  const data = workshopId ? fileRequests : fetchAssignmentsData?.listFileRequests


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
    .filter((row) => viewAdmin || isPast(new Date(row.startDate as string)))
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
          aria-label="New Submission"
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
      <If condition={
        !!viewAdmin ||
        (
          item.status === 'EXPIRED'
          && (item?.playlistStartDate ? isPast(new Date(item.playlistStartDate)) : true)
        )
      }>
        <Button
          color="success"
          // variant="contained"
          disabled={!item?.submissions?.length}
          aria-label="Playlist"
          href={item?.playlistExternalUrl}
          target={item?.playlistExternalUrl ? "_blank" : "_self"}
          onClick={(e) => {
            e.stopPropagation()
            if (!item?.playlistExternalUrl) {
              e.preventDefault()
              navigate(ROUTES.assignmentPlaylist.getPath({ assignmentId: item.id }))
            }
          }}
          startIcon={item?.playlistExternalUrl ? <OpenInBrowser /> : <PlayArrowTwoTone />}
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
    <div ref={loader}>
      {fetchAssignmentsLoading && <CircularProgress />}
    </div>
  </Grid>
}
export default Assignments;