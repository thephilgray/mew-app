import { Button, Grid, IconButton, Typography, Chip, Avatar } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';
import { EXTENSIONS_BY_FILETYPE, ROUTES } from '../../constants';
import { DataGridWrapper } from '../DataGridWrapper';
import { DataGrid } from '@mui/x-data-grid';
import { listStems } from '../../graphql/queries';
import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import SimplePlayer, { SimplePlayerButton } from '../AudioPlayer/SimplePlayer';
import If from '../If';
import { Download } from '@mui/icons-material';
import MidiPlayer from 'react-midi-player';
import { getCloudFrontURL } from '../../utils';
import { useDownload } from '../AudioPlayer/audio-player.context';
import { createSavedStems } from '../../graphql/mutations';
import { useProfile } from '../../auth/hooks';

const DownloadStem = ({ stem }) => {
  const { profile } = useProfile()
  const [fetchCreateSavedStems, { data, loading, error }] = useMutation(gql(createSavedStems))
  const download = useDownload({
    filename: stem?.title,
    filePath: stem.filePath
  })

  const clickHandler = e => {
    download()
    fetchCreateSavedStems({
      variables: {
        input: {
          profileID: profile?.email,
          stemID: stem?.id
        }
      }
    })
  }
  return (
    <IconButton><Download onClick={clickHandler}></Download></IconButton>
  )
}


type StemsProps = {

};

const Stems: React.FC<StemsProps> = () => {
  const { data, loading, error, refetch } = useQuery(gql(listStems), {
    // TODO: this is just to handle writes to ensure user can see what they just uploaded
    fetchPolicy: 'network-only'
  })
  const rows = data?.listStems?.items
  console.log({ rows })
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      width: 300
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
      width: 180
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
      // renderCell: ({ value = '' }) => 
    },
    {
      field: 'creator',
      headerName: 'Creator',
      renderCell: ({ value = {} }) => <Link to={ROUTES.viewProfile.getPath({ profileId: value?.id })}><Avatar src={getCloudFrontURL(value?.avatar)}></Avatar></Link>
    },
    {
      field: 'filePath',
      headerName: 'Listen',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      renderCell: ({ row, value = '' }) => row.fileExtension === 'audio/midi' ? <MidiPlayer src={getCloudFrontURL(value)} /> : <SimplePlayerButton audioPath={value} />
    },
    {
      // TODO:
      field: 'download',
      headerName: 'Use',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      renderCell: ({ row, value = '' }) => <DownloadStem stem={row}></DownloadStem>
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