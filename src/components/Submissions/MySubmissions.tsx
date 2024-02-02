import React from 'react'
import { submissionsByEmail } from '../../graphql/d3/queries'
import { useUser } from '../../auth/hooks'
import { gql, useQuery } from '@apollo/react-hooks'
import { Grid, SortDirection } from '@mui/material'
import { DataGridWrapper } from '../DataGridWrapper'
import { DataGrid, GridOverlay, GridColDef } from '@mui/x-data-grid'
import { Typography } from '@mui/material'
import { format } from 'date-fns';
import { getCloudFrontURL } from '../../utils'
import { OpenInNew } from '@mui/icons-material'
import SimplePlayer, { SimplePlayerButton } from '../AudioPlayer/SimplePlayer'
import Loading from '../Loading'
import Error from '../Error'

function MySubmissions() {
  const user = useUser()
  const { data, loading, error } = useQuery(gql(submissionsByEmail), {
    variables: {
      email: user?.email,
      limit: 1000
    },
    fetchPolicy: 'no-cache'
  })


  const sortModel = [
    {
      field: 'createdAt',
      sort: 'desc' as SortDirection,
    },
  ];

  const columns: GridColDef[] = [
    {
      field: 'play',
      headerName: 'Listen',
      width: 100,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      renderCell: ({ row, value = '' }) => <SimplePlayerButton audioPath={`${row.fileRequestId}/${row.fileId}`} />
    },
    {
      field: 'artist',
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
    }
  ];

  if (loading) return <Loading />;
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
        <SimplePlayer />
        <DataGridWrapper>
          <DataGrid
            slots={{
              noRowsOverlay: () => <GridOverlay>
                <Typography>You haven't submitted anything yet.</Typography>
              </GridOverlay>
            }}
            autoHeight
            checkboxSelection={false}
            rows={data?.submissionsByEmail?.items || []}
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