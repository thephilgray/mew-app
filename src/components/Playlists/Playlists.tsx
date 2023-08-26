import React, { useEffect } from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/react-hooks';
import { useProfile, useViewAdmin } from '../../auth/hooks';
import CardGrid, { SkeletonCardGrid } from '../CardGrid';
import If from '../If';
import { ROUTES } from '../../constants';
import { Alert, Button, Chip, Divider, Grid, IconButton, Typography } from '@mui/material';
import { format } from 'date-fns'
import isPast from 'date-fns/isPast'
import { Link, navigate } from 'gatsby';
import { compareDesc } from "date-fns"
import { EditRounded } from '@mui/icons-material';

const playlistsByDate = /* GraphQL */ `
  query PlaylistsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playlistsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
          }
        }
        owner {
          email
          id
          name
          displayName
        }
        public
        title
        artwork {
          id
          path
          credit
        }
        type
        createdAt
        id
        updatedAt
        profilePlaylistsId
        playlistOwnerId
      }
    }
  }
`;

const listFileRequests = /* GraphQL */ `
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
        artwork {
          id
          path
          credit
        }
        workshop {
          id
          artwork {
            id
            path
            credit
          }
        }
        workshopId
        playlist {
          tracks {
            items {
              order
              id
              createdAt
              updatedAt
              playlistTracksId
              trackSubmissionId
            }
          }
          owner {
            email
            id
            name
            displayName
            links {
              id
              text
              url
            }
            avatar
            bio
            sub
            createdAt
            updatedAt
          }
          public
          title
          artwork {
            id
            path
            credit
          }
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
        }
        playlistStartDate
        playlistExternalUrl
        type
        createdAt
        updatedAt
        fileRequestPlaylistId
      }
    }
  }
`;
type PlaylistsProps = {

};

const Playlists: React.FC<PlaylistsProps> = () => {
  const { profile } = useProfile()
  const [viewAdmin] = useViewAdmin()
  const [fetchPlaylistsByDate, { data, loading, error }] = useLazyQuery(gql(playlistsByDate), {
    variables: {
      limit: 500,
      type: "Playlist",
      sortDirection: "DESC",
      filter: {
        or: [
          { public: { eq: true } },
          { playlistOwnerId: { eq: profile?.email } }
        ]
      }
    }
  })

  const [fetchAssignments, { data: fetchAssignmentsData, loading: fetchAssignmentsLoading, error: fetchAssignmentsError }] = useLazyQuery(
    gql(listFileRequests)
  )

  const fetchMyAssignments = () => {
    const workshopIds = profile?.memberships?.items
      ?.filter(item => item.status === "ACTIVE")
      ?.map(item => item.workshopId) || []
    // variables: { filter: { workshopId: { eq: workshopId } } },
    return fetchAssignments({
      variables: {
        limit: 500,
        filter: {
          or: workshopIds.map(workshopId => ({ workshopId: { eq: workshopId } })),
        }
      },
    })
  }

  useEffect(() => {
    if (profile?.email && !data && !loading && !error) {
      fetchPlaylistsByDate()
      fetchMyAssignments()
    }
  }, [profile])


  const sortFn = (a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt))

  const groupedStandardPlaylists = data?.playlistsByDate?.items.reduce((acc, curr) => {
    if (curr?.playlistOwnerId === profile?.email) {
      acc.mine.push(curr)
    }
    if (curr?.public) {
      acc.public.push(curr)
    }

    return acc;

  }, { mine: [], public: [], assignment: [] })

  const assignmentPlaylists = fetchAssignmentsData?.listFileRequests?.items?.map(item => item.playlist ?
    ({
      ...item.playlist,
      playlistStartDate: item.playlistStartDate,
      playlistExternalUrl: item.playlistExternalUrl
    }) :
    ({
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
      playlistStartDate: item.playlistStartDate,
      playlistExternalUrl: item.playlistExternalUrl,
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
    .filter(playlist => viewAdmin || (playlist?.playlistStartDate ? isPast(new Date(playlist.playlistStartDate)) : true))
    .sort(sortFn)


  return <Grid container spacing={2}>
    <Grid item xs={8} my={2}>
      <Typography variant="h5">My Playlists</Typography>
    </Grid>
    <Grid item xs={4} my={2}>
      <Button component={Link} to={ROUTES.newPlaylist.path} sx={{ float: 'right' }} variant="contained">Create</Button>
    </Grid>
    <Grid item xs={12}>
      <Alert severity="info">Did you know you can create your own playlists? Press the create button above to start an empty playlist. As you listen to other playlists, click the three dots to either clone or add a track to one of your playlists you already created. Come back here to edit your playlists by clicking on the pink pencil icon.</Alert>
    </Grid>
    <If condition={!!groupedStandardPlaylists?.mine?.length}>
      <Grid item xs={12}>
        <CardGrid items={groupedStandardPlaylists?.mine?.sort(sortFn)?.map(item => ({
          topContent: <IconButton sx={{ float: 'right' }} color="secondary" onClick={(e) => {
            e.stopPropagation()
            navigate(ROUTES.editPlaylist.getPath({ playlistId: item?.id }))
          }}><EditRounded /></IconButton>,
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
    <Divider sx={{ mb: 2 }} variant="middle" />

    <Grid item xs={12} my={2}>
      <Typography variant="h5">Assignment Playlists</Typography>
    </Grid>
    <Grid item xs={12}>
      <If condition={!fetchAssignmentsLoading && assignmentPlaylists}
        fallbackContent={<SkeletonCardGrid numberOfItems={6} />}>
        <CardGrid items={assignmentPlaylists?.map(item => ({
          ...item,
          ...viewAdmin && !item.default && {
            topContent: <IconButton sx={{ float: 'right' }} color="secondary" onClick={(e) => {
              e.stopPropagation()
              navigate(ROUTES.editPlaylist.getPath({ playlistId: item?.id }))
            }}><EditRounded /></IconButton>
          },
          active: true,
          name: item?.title,
          link: item.default ? ROUTES.assignmentPlaylist.getPath({ assignmentId: item?.id }) : ROUTES.playlist.getPath({ playlistId: item?.id }),
          externalLink: item.playlistExternalUrl,
          bottomContent: <><Typography>
            {item?.tracks?.items?.length} tracks
          </Typography>
            <Typography sx={{ float: 'right' }} textAlign="right" variant="caption"><em>updated {format(new Date(item?.updatedAt), 'MM-dd-yy')}</em></Typography>
          </>
        }))} />
      </If>
    </Grid>
    <Divider sx={{ mb: 2 }} variant="middle" />

    <If condition={groupedStandardPlaylists?.public?.length}>
      <Grid item xs={12} my={2}>
        <Typography variant='h5'>Public Playlists</Typography>
      </Grid>
      <Grid item xs={12}>
        <CardGrid items={groupedStandardPlaylists?.public?.sort(sortFn)?.map(item => ({
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