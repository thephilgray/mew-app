import React, { useContext, useEffect, useState } from 'react'
import { submissionsByEmail } from './MySubmissions.queries'
import { useUser } from '../../auth/hooks'
import { gql, useQuery } from '@apollo/react-hooks'
import { Box, Button, Chip, Grid, IconButton, SortDirection, Tooltip } from '@mui/material'
import { DataGridWrapper } from '../DataGridWrapper'
import { DataGrid, GridOverlay, GridColDef } from '@mui/x-data-grid'
import { Typography } from '@mui/material'
import { format, compareDesc } from 'date-fns';
import { getCloudFrontURL } from '../../utils'
import { OpenInNew, PlayArrow, PlayArrowTwoTone as PlayArrowIcon } from '@mui/icons-material'
import Loading from '../Loading'
import Error from '../Error'
import { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import mewAppLogo from '../../assets/mewlogo.png'
import { AudioPlayerContext } from '../AudioPlayer/audio-player.context'
import { Link } from 'gatsby'
import { FEEDBACK_CATEGORIES, ROUTES } from '../../constants'

function MySubmissions() {
  const user = useUser()
  const { setAudioLists, setCurrentIndex, playlistId: globalPlaylistId, setPlaylistId: setGlobalPlaylistId, playerRef } = useContext(AudioPlayerContext)
  const [songs, setSongs] = useState([]);
  const [songsLoading, setSongsLoading] = useState(false);
  const PLAYLIST_ID = 'MY_SUBMISSIONS';
  const { data, loading, error } = useQuery(gql(submissionsByEmail), {
    variables: {
      email: user?.email,
      limit: 1000
    },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    if (data?.submissionsByEmail?.items?.length && !songs.length) {
      setSongsLoading(true)
      const seenFileIds: string[] = []

      const sortedSongs = data.submissionsByEmail.items.reduce((acc, curr, index) => {
        // @ts-ignore
        const { name, fileId, artist, id, artwork, lyrics, workshopId, duration, requestFeedback, profile, fileRequestId, workshop, createdAt, fileRequest, feedbackRequestCategories } = curr
        // don't add nonexistent or duplicate files to the playlist
        if (fileId && !seenFileIds.includes(fileId)) {
          const songFilePath = `${fileRequestId}/${fileId}`
          const musicSrc = getCloudFrontURL(songFilePath)
          // const trackDuration = await fetchDuration(musicSrc)
          // const fileAccessURL = await Storage.get(songFilePath, { expires: 86400 })
          const song = {
            id,
            musicSrc,
            trackDuration: duration,
            name,
            artwork,
            cover: artwork?.path && getCloudFrontURL(artwork.path) || workshop?.artwork?.path && getCloudFrontURL(workshop?.artwork?.path) || mewAppLogo,
            singer: artist,
            profile,
            fileId,
            submissionId: id,
            lyrics,
            workshopId,
            assignmentId: fileRequestId,
            requestFeedback,
            createdAt,
            assignmentTitle: fileRequest?.title,
            feedbackRequestCategories
          }
          seenFileIds.push(fileId)
          return acc.concat(song)
        } else {
          return acc;
        }
      }, [])
        .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
        .map((song, index) => ({ ...song, index }))

      setSongs(sortedSongs)
      setSongsLoading(false)
    }
  }, [data])


  const play = (index) => {
    if (index > -1) {
      setCurrentIndex(index)
    }
    if (globalPlaylistId != PLAYLIST_ID) {
      setAudioLists(songs)
      setGlobalPlaylistId(PLAYLIST_ID)
    }
  }

  const sortModel = [
    {
      field: 'createdAt',
      sort: 'desc' as SortDirection,
    },
  ];

  const columns: GridColDef[] = [
    {
      field: 'index',
      headerName: 'Listen',
      width: 100,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      renderCell: ({ row, value = '' }) => <IconButton onClick={() => play(row.index)}><PlayArrowIcon /></IconButton>
    },
    {
      field: 'singer',
      headerName: 'Artist Byline',
      width: 200,
    },
    {
      field: 'name',
      headerName: 'Song Title',
      width: 300,
    },
    {
      field: 'createdAt',
      headerName: 'Submitted',
      type: 'date',
      width: 160,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      valueFormatter: ({ value = '' }: ColDef) =>
        value && format(new Date(value), 'MM/dd/yyyy H:mm'),
    },
    {
      field: 'assignmentId',
      headerName: 'Assignment',
      width: 300,
      renderCell: ({ row, value = {} }) => value ? <Link to={ROUTES.assignment.getPath({ assignmentId: value })}>{row.assignmentTitle}</Link> : null
    },
    // {
    //   field: 'comments',
    //   headerName: 'Comments',
    //   width: 100,
    //   valueFormatter: ({ value }) => value?.items?.length || 0
    // },
    {
      field: 'artwork',
      headerName: 'Artwork',
      width: 100,
      renderCell: ({ row, value = {} }) => value ? <a target="_blank" href={getCloudFrontURL(value?.path)}><OpenInNew /></a> : null
    },
    {
      field: 'lyrics',
      headerName: 'Lyrics',
      width: 200,
    },
    {
      field: 'feedbackRequestCategories',
      headerName: 'Feedback Categories',
      width: 300,
      renderCell: ({ value = [] }) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {value.map((cat) => {
            const category = FEEDBACK_CATEGORIES.find(c => c.label === cat)
            return (
              <Tooltip title={category?.description || ''} key={category.label}>
                <Chip label={category.label} size="small" />
              </Tooltip>
            )
          })}
        </Box>
      )
    }
  ];

  if (loading || songsLoading) return <Loading />;
  if (error) return <Error errorMessage={error.message} />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">My Submissions</Typography>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <DataGridWrapper>
          <DataGrid
            slots={{
              noRowsOverlay: () => <GridOverlay>
                <Typography>You haven't submitted anything yet.</Typography>
              </GridOverlay>
            }}
            autoHeight
            checkboxSelection={false}
            rows={songs}
            columns={columns}
            sortModel={sortModel}
            initialState={{
              sorting: {
                sortModel: [{ field: 'createdAt', sort: 'desc' }],
              },
            }}
          />
        </DataGridWrapper>
      </Grid>
    </Grid>


  )
}

export default MySubmissions