import React, { useEffect } from 'react';
import { listFileRequests, listPlaylists } from '../../graphql/queries';
import { gql, useLazyQuery, useQuery } from '@apollo/react-hooks';
import { useProfile, useViewAdmin } from '../../auth/hooks';
import CardGrid from '../CardGrid';
import If from '../If';
import { ROUTES } from '../../constants';
import { Button, Chip, Divider, Grid, Typography } from '@mui/material';
import { format } from 'date-fns'
import groupBy from 'lodash/groupBy'
import chain from 'lodash/chain'
import isPast from 'date-fns/isPast'
import { Link } from 'gatsby';
type PlaylistsProps = {

};

const Playlists: React.FC<PlaylistsProps> = () => {
  const { profile } = useProfile()
  const [viewAdmin] = useViewAdmin()
  const [fetchListPlaylists, { data, loading, error }] = useLazyQuery(gql(listPlaylists), {
    variables: {
      limit: 1000,
      filter: {
        or: [{
          public: { eq: true },
          playlistOwnerId: { eq: profile?.email }
        }]
      }
    }
  })

  const [fetchAssignments, { data: fetchAssignmentsData, loading: fetchAssignmentsLoading, error: fetchAssignmentsError }] = useLazyQuery(
    gql(listFileRequests.replace('submissions {', 'submissions(limit: 5000) {'))
  )

  const fetchMyAssignments = () => {
    const workshopIds = profile?.memberships?.items
      ?.filter(item => item.status === "ACTIVE")
      ?.map(item => item.workshopId) || []
    // variables: { filter: { workshopId: { eq: workshopId } } },
    return fetchAssignments({
      variables: {
        filter: {
          or: workshopIds.map(workshopId => ({ workshopId: { eq: workshopId } })),
        }
      },
    })
  }

  useEffect(() => {
    if (profile?.email && !data && !loading && !error) {
      fetchListPlaylists()
      fetchMyAssignments()
    }
  }, [profile])



  const groupedStandardPlaylists = data?.listPlaylists?.items.reduce((acc, curr) => {
    if (curr?.playlistOwnerId === profile?.email) {
      acc.mine.push(curr)
    }
    if (curr?.public) {
      acc.public.push(curr)
    }

    return acc;

  }, { mine: [], public: [], assignment: [] })

  const assignmentPlaylists = fetchAssignmentsData?.listFileRequests?.items?.map(item => item.playlist || ({
    default: true,
    artwork: item.artwork,
    createdAt: item.createdAt,
    id: item.id,
    owner: item.workshop?.host,
    playlistOwnerId: item.workshop?.host?.email,
    profilePlaylistsId: null,
    public: viewAdmin || isPast(new Date(item.expiration)),
    title: item.title,
    updatedAt: item.expiration,
    tracks: {
      items: item.submissions?.items?.map((submission, i) => ({
        createdAt: item.createdAt,
        id: item.id,
        order: i,
        playlist: null,
        playlistTracksId: '',
        submission: submission,
        trackSubmissionId: item.id
      }))
    }
  }))


  return <Grid container spacing={2}>
    <If condition={groupedStandardPlaylists?.mine?.length}>
      <Grid item xs={8} my={2}>
        <Typography variant="h5">My Playlists</Typography>
      </Grid>
      <Grid item xs={4} my={2}>
        <Button component={Link} to={ROUTES.newPlaylist.path} sx={{ float: 'right' }} variant="contained">Create</Button>
      </Grid>
      <Grid item xs={12}>
        <CardGrid items={groupedStandardPlaylists?.mine?.map(item => ({
          artwork: item?.artwork,
          id: item?.id,
          active: true,
          name: item?.title,
          link: ROUTES.playlist.getPath({ playlistId: item?.id }),
          bottomContent: <><Typography>
            {item?.tracks?.items?.length} tracks
          </Typography>
            <Typography sx={{ float: 'right' }} textAlign="right" variant="caption"><em>updated {format(new Date(item?.updatedAt), 'MM-dd-yy')}</em></Typography>
          </>
        }))} />

      </Grid>
      <Divider sx={{ mb: 2 }} variant="middle" />

    </If>
    <If condition={assignmentPlaylists}>
      <Grid item xs={12} my={2}>
        <Typography variant="h5">Assignment Playlists</Typography>
      </Grid>
      <Grid item xs={12}>
        <CardGrid items={assignmentPlaylists?.map(item => ({
          ...item,
          active: true,
          name: item?.title,
          link: item.default ? ROUTES.assignmentPlaylist.getPath({ assignmentId: item?.id }) : ROUTES.playlist.getPath({ playlistId: item?.id }),
          bottomContent: <><Typography>
            {item?.tracks?.items?.length} tracks
          </Typography>
            <Typography sx={{ float: 'right' }} textAlign="right" variant="caption"><em>updated {format(new Date(item?.updatedAt), 'MM-dd-yy')}</em></Typography>
          </>
        }))} />
      </Grid>
      <Divider sx={{ mb: 2 }} variant="middle" />

    </If>




    <If condition={groupedStandardPlaylists?.public?.length}>
      <Grid item xs={12} my={2}>
        <Typography variant='h5'>Public Playlists</Typography>
      </Grid>
      <Grid item xs={12}>
        <CardGrid items={groupedStandardPlaylists?.public?.map(item => ({
          artwork: item?.artwork,
          id: item?.id,
          active: true,
          name: item?.title,
          link: ROUTES.playlist.getPath({ playlistId: item?.id }),
          bottomContent: <><Typography>
            {item?.tracks?.items?.length} tracks
          </Typography>
            <Typography sx={{ float: 'right' }} textAlign="right" variant="caption"><em>updated {format(new Date(item?.updatedAt), 'MM-dd-yy')}</em></Typography>
          </>
        }))} />

      </Grid>
    </If>
  </Grid >
}
export default Playlists;