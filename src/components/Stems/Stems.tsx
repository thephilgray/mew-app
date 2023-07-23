import { Button, Grid, IconButton, Typography, Chip, Avatar, Tooltip } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';
import { compareDesc } from 'date-fns'
import { EXTENSIONS_BY_FILETYPE, ROUTES } from '../../constants';
import { DataGridWrapper } from '../DataGridWrapper';
import { DataGrid } from '@mui/x-data-grid';
import { listStems } from '../../graphql/queries';
import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import SimplePlayer, { SimplePlayerButton } from '../AudioPlayer/SimplePlayer';
import If from '../If';
import { Delete, Download } from '@mui/icons-material';
import MidiPlayer from 'react-midi-player';
import { getCloudFrontURL, getDisplayName } from '../../utils';
import { useDownload } from '../AudioPlayer/audio-player.context';

import {
  // createSavedStems,
  deleteStem as deleteStemMutation
} from '../../graphql/mutations';
import { useProfile, useViewAdmin } from '../../auth/hooks';

const DownloadStem = ({ stem }) => {
  // const [fetchCreateSavedStems, { data, loading, error }] = useMutation(gql(createSavedStems))
  const download = useDownload({
    filename: stem?.title,
    filePath: stem.filePath
  })

  const clickHandler = e => {
    download()
    // fetchCreateSavedStems({
    //   variables: {
    //     input: {
    //       profileID: profile?.email,
    //       stemID: stem?.id
    //     }
    //   }
    // })
  }
  return (
    <IconButton aria-label='delete stem'><Download onClick={clickHandler}></Download></IconButton>
  )
}

const DeleteStem = ({ stem }) => {
  const { profile } = useProfile()
  const [viewAdmin] = useViewAdmin()
  const [fetchDeleteStem, { data, loading, error }] = useMutation(gql(deleteStemMutation))
  const isMyStem = row => row?.creator?.id === profile?.id
  const clickHandler = e => {
    fetchDeleteStem({
      variables: {
        input: {
          id: stem?.id
        }
      }
    })
  }
  return (
    <If condition={isMyStem(stem) || viewAdmin}><IconButton><Delete onClick={clickHandler}></Delete></IconButton></If>
  )
}


type StemsProps = {

};

const Stems: React.FC<StemsProps> = () => {
  const { profile } = useProfile()
  const { data, loading, error, refetch } = useQuery(gql(listStems), {
    // TODO: this is just to handle writes to ensure user can see what they just uploaded
    fetchPolicy: 'network-only'
  })
  const rows = (data?.listStems?.items ? [...data.listStems.items] : [])
    .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
      renderCell: ({ value = '' }) => value?.length > 40 ? <Tooltip title={value}><span>{value}</span></Tooltip> : value
    },
    {
      field: 'bpm',
      headerName: 'BPM'
    },
    {
      field: 'key',
      headerName: 'Key'
    },
    {
      field: 'scale',
      headerName: 'Scale',
      width: 180,
      renderCell: ({ value = '' }) => value?.length > 40 ? <Tooltip title={value}><span>{value}</span></Tooltip> : value
    },
    {
      field: 'instruments',
      headerName: 'Instruments',
      width: 300,
      renderCell: ({ value = '' }) => value && value.map(instrument => <Chip key={instrument} label={instrument} />)
    },
    {
      field: 'fileExtension',
      headerName: 'Format',
      renderCell: ({ value = '' }) => EXTENSIONS_BY_FILETYPE[value]
    },
    {
      field: 'notes',
      headerName: 'Notes',
      width: 300,
      renderCell: ({ value = '' }) => value?.length > 40 ? <Tooltip title={value}><span>{value}</span></Tooltip> : value
    },
    {
      field: 'artist',
      headerName: 'Artist',
      width: 200,
      renderCell: ({ value = {}, row }) => <Link style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }} to={ROUTES.viewProfile.getPath({ profileId: row?.creator?.id })}><Avatar alt={getDisplayName(row?.creator)} src={getCloudFrontURL(row?.creator?.avatar)} sx={{ mr: 1 }}></Avatar>{value || getDisplayName(profile)}</Link>,
    },
    {
      field: 'filePath',
      headerName: 'Listen',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      renderCell: ({ row, value = '' }) => row.fileExtension === 'audio/midi' ? <MidiPlayer src={getCloudFrontURL(value)} /> : <SimplePlayerButton audioPath={value} />
    },
    {
      field: 'download',
      headerName: 'Actions',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      renderCell: ({ row, value = '' }) => <>
        <DownloadStem stem={row}></DownloadStem>
        <DeleteStem stem={row}></DeleteStem>
      </>
    },
  ];

  return <Grid container spacing={2}>
    <Grid item xs={8} my={2}>
      <Typography variant="h5">Stems</Typography>
    </Grid>
    <Grid item xs={4} my={2}>
      <Button component={Link} to={ROUTES.newStem.path} sx={{ float: 'right' }} variant="contained">Add</Button>
    </Grid>
    <If condition={!!rows}>
      <Grid item xs={12}>
        <SimplePlayer />
        <DataGridWrapper>
          <DataGrid
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick={true}
            onCellClick={(p, e) => e.stopPropagation()}
            initialState={{
              sorting: {
                sortModel: [{ field: 'createdAt', sort: 'desc' }],
              },
            }}
            autoHeight
          />
        </DataGridWrapper>
      </Grid>
    </If>
  </Grid>
}
export default Stems;