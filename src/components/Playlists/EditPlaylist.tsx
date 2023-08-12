import { Button, ButtonGroup, FormControlLabel, Grid, InputLabel, Paper, Switch, TextField, Typography } from '@mui/material';
import React, { useMemo, useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { createPlaylist, deletePlaylist, updatePlaylist } from '../../graphql/mutations';
import { getCloudFrontURL } from '../../utils';
import ImagePicker, { uploadImage } from '../ImagePicker';
import { gql, useLazyQuery, useMutation } from '@apollo/react-hooks';
import { getPlaylist } from '../../graphql/queries';
import { Delete, Save } from '@mui/icons-material';
import SortableTrackList from './SortableTracklist';
import SimplePlayer from '../AudioPlayer/SimplePlayer';
import If from '../If';
import { useClonePlaylist } from '../AudioPlayer/audio-player.context';
import { mockData } from './data';
import { useProfile } from '../../auth/hooks';
import { navigate } from 'gatsby';
import { ROUTES } from '../../constants';
import { API, graphqlOperation } from 'aws-amplify';
import orderBy from 'lodash/orderBy'

type TypeName = {};

const EditPlaylist: React.FC<TypeName> = ({ playlistId }) => {
  const { clonedPlaylistItems, resetClonedPlaylistItems } = useClonePlaylist()
  const [trackList, setTrackList] = useState(null)
  const [fetchPlaylistByPlaylistId, { data: playlistData, loading: playlistLoading, error: playlistError }] = useLazyQuery(gql(getPlaylist), { variables: { id: playlistId } })
  const [createPlaylistRequest, { error: createPlaylistError, data: createPlaylistData, loading: createPlaylistLoading }] = useMutation(gql(createPlaylist))
  const [updatePlaylistRequest, { error: updatePlaylistError, data: updatePlaylistData, loading: updatePlaylistLoading }] = useMutation(gql(updatePlaylist))
  const [deletePlaylistRequest, { error: deletePlaylistError, data: deletePlaylistData, loading: deletePlaylistLoading }] = useMutation(gql(deletePlaylist))
  const { profile } = useProfile()
  const [saveLoading, setSaveLoading] = useState(false)

  const loading = [
    playlistLoading,
    createPlaylistLoading,
    updatePlaylistLoading,
    deletePlaylistLoading,
    saveLoading]
    .some(Boolean)

  const { register, reset, handleSubmit, control, watch } = useForm({
    defaultValues: useMemo(() => {
      return playlistData?.getPlaylist;
    }, [playlistData])
  })

  useEffect(() => {
    if (clonedPlaylistItems.length && !trackList && !playlistId) {
      const sortedItems = orderBy(clonedPlaylistItems, 'order')
      setTrackList(sortedItems)
    }

    // reset copied playlist items on unmount
    return () => {
      resetClonedPlaylistItems()
    }
  }, [trackList, playlistId])

  useEffect(() => {
    if (!!playlistId && !playlistData && !playlistLoading && !playlistError) {
      fetchPlaylistByPlaylistId()
    }
  }, [playlistId, playlistData, playlistLoading, playlistError, fetchPlaylistByPlaylistId])

  useEffect(() => {
    reset(playlistData?.getPlaylist);
  }, [playlistData?.getPlaylist, reset]);

  useEffect(() => {
    if (updatePlaylistData && !updatePlaylistError) {
      navigate(ROUTES.playlists.path)
    }
  }, [updatePlaylistData])

  useEffect(() => {
    if (playlistId && playlistData?.getPlaylist?.tracks?.items.length && !trackList) {
      const sortedItems = orderBy(playlistData?.getPlaylist?.tracks?.items, 'order')
      setTrackList(sortedItems)
    }
  }, [playlistData, playlistId, trackList])


  const [image, setImage] = useState(null)

  const ARTWORK_DOWNLOAD_PATH = playlistData?.getPlaylist?.artwork?.path
  const onSubmit = async (inputData) => {
    setSaveLoading(true)
    let ID = uuidv4()
    let PLAYLIST_ID = playlistId || ID
    let ARTWORK_UPLOAD_PATH
    let FILE_ID = uuidv4()
    try {
      if (image) {
        ARTWORK_UPLOAD_PATH = `playlists/${PLAYLIST_ID}/artwork-${FILE_ID}.jpg`
        await uploadImage({ image, uploadPath: ARTWORK_UPLOAD_PATH, filename: 'artwork.jpg' })
      }
      if (playlistId) {
        await updatePlaylistRequest({
          variables: {
            input: {
              id: playlistId,
              type: "Playlist",
              public: inputData.public,
              title: inputData.title,
              playlistOwnerId: profile?.email,
              ...image && !image.includes(ARTWORK_DOWNLOAD_PATH) && {
                artwork: {
                  id: FILE_ID,
                  path: ARTWORK_UPLOAD_PATH
                }
              }
            }
          }
        })
      }
      else {
        await createPlaylistRequest({
          variables: {
            input: {
              id: PLAYLIST_ID,
              type: "Playlist",
              public: inputData.public,
              title: inputData.title,
              playlistOwnerId: profile?.email,
              ...image && {
                artwork: {
                  id: FILE_ID,
                  path: ARTWORK_UPLOAD_PATH
                }
              }
            }
          }
        })
      }


      if (trackList?.length) {
        const trackListChanges = trackList.filter(track => track.create || track.update || track.delete)
        const trackListMutations = trackListChanges
          .map(
            (track, i) => {
              if (track.create) {
                return `mutation${i}: createTrack(input: 
                {order: ${track.order}, trackSubmissionId: "${track.submission.id}", playlistTracksId: "${PLAYLIST_ID}"}) { id }`;
              }
              else if (track.update) {
                return `mutation${i}: updateTrack(input: {id: "${track.id}", order: ${track.order}}) { id }`;
              }
              else if (track.delete) {
                return `mutation${i}: deleteTrack(input: {id: "${track.id}"}) { id }`;

              }
            }
          );
        // tracklist: create, update, delete
        if (trackListMutations.length) {
          await API.graphql(graphqlOperation(`mutation updatePlaylistTracks { ${trackListMutations}}`));
        }
      }

    } catch (error) {
      // TODO: handle error
      console.log(error);
    } finally {
      setSaveLoading(false)
    }
    navigate(ROUTES.playlists.path)
  }

  const handleDelete = async () => {
    if (playlistId) {
      await deletePlaylistRequest({ variables: { input: { id: playlistId } } })
    }

    // redirect on success
    navigate(ROUTES.playlists.path)
  }

  return <Grid container spacing={2}>
    <Grid item xs={10} sm={6}>
      <Typography variant="h5" component="h2">Edit Playlist</Typography>
    </Grid>
    <Grid item xs={12} sm={8}>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6}>
            <Typography>Details</Typography>
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup sx={{ float: 'right' }}>
              <Button onClick={handleDelete} disabled={loading} startIcon={<Delete />}>Delete</Button>
              <Button type="submit" disabled={loading} startIcon={<Save />}>Save</Button>
            </ButtonGroup>

          </Grid>
          <Grid item xs={12} sm={6}>
            <ImagePicker imageURL={playlistData?.getPlaylist?.artwork && getCloudFrontURL(ARTWORK_DOWNLOAD_PATH)} width={200} height={200} maxHeight={500} maxWidth={500} onChange={e => setImage(e.image)} />
            <InputLabel sx={{ textAlign: 'center' }}>
              Change image
            </InputLabel>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <TextField
              fullWidth
              label="Playlist Title"
              {...register('title')}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ maxLength: 90 }}
              helperText={`${90 - (watch('title')?.length || 0)} characters remaining.`}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Controller
                name='public'
                control={control}
                defaultValue={false}
                render={({ field: { value, ref, ...field } }) => (
                  <Switch
                    {...field}
                    inputRef={ref}
                    checked={!!value}
                    color="primary"
                  />)} />}
              label={`Show in "Public" feed on playlists page`} />
          </Grid>
        </Grid>
      </form>

    </Grid>
    <Grid item xs={12} sm={8}>
      <Typography>Tracklist</Typography>
    </Grid>
    <Grid item xs={12} sm={8}>
      <If condition={!!trackList && trackList?.length} fallbackContent={<Typography textAlign="center">
        Save any changes on this page and then add tracks from other playlists.
      </Typography>}>
        <SimplePlayer />
        <SortableTrackList trackList={trackList} setTrackList={setTrackList}></SortableTrackList>
      </If>
    </Grid>
  </Grid >
}

export default EditPlaylist;