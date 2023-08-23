
import { gql, useMutation, useQuery } from '@apollo/react-hooks'
import React, { useEffect, useRef, useState } from 'react'
import { getFileRequestSubmission } from '../../graphql/d3/queries'
import { isPast } from 'date-fns';
import { v4 as uuidv4 } from 'uuid'
import { useUser, useViewAdmin } from '../../auth/hooks';
import If from '../If';
import { Alert, Button, CircularProgress, FormControlLabel, FormGroup, Grid, IconButton, InputLabel, LinearProgress, Switch, TextField, Typography } from '@mui/material';
import { ACCEPTED_FILETYPES, ROUTES } from '../../constants';
import AppBreadcrumbs from '../AppBreadcrumbs';
import { useForm } from 'react-hook-form';
import { useBeforeUnload } from 'react-use';
import { StyledFileDropWrapper } from './StyledFileDropWrapper';
import { FileDrop } from 'react-file-drop';
import { CheckCircle, CloudUpload, Save } from '@mui/icons-material';
import ImagePicker, { uploadImage } from '../ImagePicker';
import { getCloudFrontURL, getFileDuration } from '../../utils';
import { Storage } from 'aws-amplify';
import { updateFileRequestSubmission } from '../../graphql/d3/mutations';
import { green } from '@mui/material/colors';
import ConfettiExplosion from 'react-confetti-explosion';

type Props = {
  submissionId: string
}
type AudioFileBlob = Blob & { name: string }

type Inputs = {
  name: string
  artist: string
  upload: AudioFileBlob
  requestFeedback: boolean
  artwork: {
    id: string
    path: string
    credit: string
  }
  lyrics: string
}

export default function EditPublicSubmission({ submissionId }: Props) {
  const { loading, error: getError, data } = useQuery(gql(getFileRequestSubmission),
    { variables: { id: submissionId } })
  const [updateFileRequestSubmissionRequest, { loading: updateLoading, error: updateError, data: updateData }] =
    useMutation(gql(updateFileRequestSubmission))
  const [viewAdmin] = useViewAdmin()
  const user = useUser()

  const isMine = !!viewAdmin || user?.email === data?.getFileRequestSubmission?.email
  const isExpired = data?.getFileRequestSubmission?.expiration
    ? isPast(new Date(data.getFileRequestSubmission.expiration as string))
    : false;
  const isActive = !!viewAdmin || !isExpired

  console.log({ data, isExpired, isMine, isActive })

  // form stuff

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    getValues,
    reset,
    formState: {
      errors,
    },
  } = useForm<Inputs>()


  const validationMessages = {
    artist: {
      required: <>Artist name is required</>,
      pattern: <>Artist name cannot contain the following characters: /</>,
    },
    name: {
      required: <>Song name is required</>,
      pattern: <>Song name cannot contain the following characters: /</>,
    },
  }


  // upload state
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState({ loaded: 0, total: 1 })
  const [uploadAreaMessage, setUploadAreaMessage] = useState('Drop your track to replace what you previously uploaded. Leave empty to keep previous upload.')
  const [image, setImage] = useState<string>('')
  const [upload, setUpload] = useState<AudioFileBlob | undefined>()
  const [submitLoading, setSubmitLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const fileref = useRef(null)
  useBeforeUnload(!!uploadProgress.loaded && loading, 'Upload in progress. Are you sure you want to exit?')
  const progress = (uploadProgress?.loaded / uploadProgress?.total) * 100

  // upload handlers

  const onTargetClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    fileref?.current?.click()
  }

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!(e.target as HTMLInputElement).files && !(e.target as HTMLInputElement).files?.length) return
    // convert image file to base64 string
    const file = (e.target as HTMLInputElement).files?.[0]
    if (file && ACCEPTED_FILETYPES.includes(file.type)) {
      setUpload(file)
      setUploadAreaMessage(file.name)
    }
  }

  const handleOnDrop = (files: FileList | null) => {
    if (!files) {
      return
    }
    const file = files[0]
    if (ACCEPTED_FILETYPES.includes(file.type) && files?.length) {
      setUpload(file)
      setUploadAreaMessage(file.name)
    } else {
      setUploadAreaMessage(`File must be of type: ${ACCEPTED_FILETYPES.join(', ')}`)
    }
  }

  // setup form
  useEffect(() => {
    // set the initial values from the server
    reset({
      name: data?.getFileRequestSubmission?.name,
      artist: data?.getFileRequestSubmission?.artist,
      lyrics: data?.getFileRequestSubmission?.lyrics || '',
      requestFeedback: data?.getFileRequestSubmission?.requestFeedback,
    })
    // note we don't currently set upload since there's no preview just overwrite
  }, [data])

  const ARTWORK_DOWNLOAD_PATH = data?.getFileRequestSubmission?.artwork?.path

  const onSubmit = async (values) => {
    setSubmitLoading(true)
    const assignmentId = data?.getFileRequestSubmission?.fileRequestId
    const { name, artist, lyrics, requestFeedback } = values

    // note: we create new files in storage to avoid hitting old cached versions

    let NEW_ARTWORK_ID
    let NEW_ARTWORK_UPLOAD_PATH
    let OLD_ARTWORK_PATH

    if (image) {
      // store the old image id
      OLD_ARTWORK_PATH = ARTWORK_DOWNLOAD_PATH
      // upload new image with new id
      NEW_ARTWORK_ID = uuidv4()
      NEW_ARTWORK_UPLOAD_PATH = `submissions/${assignmentId}/artwork-${NEW_ARTWORK_ID}.jpg`
      await uploadImage({ image, uploadPath: NEW_ARTWORK_UPLOAD_PATH, filename: 'artwork.jpg' })
    }

    let NEW_AUDIO_ID
    let NEW_AUDIO_UPLOAD_PATH
    let NEW_AUDIO_FILE_EXTENSION
    let NEW_AUDIO_DURATION
    let OLD_AUDIO_UPLOAD_PATH

    if (upload) {
      // store the old audio id
      OLD_AUDIO_UPLOAD_PATH = `${assignmentId}/${data?.getFileRequestSubmission?.fileId}`
      NEW_AUDIO_ID = uuidv4()
      NEW_AUDIO_UPLOAD_PATH = [assignmentId, NEW_AUDIO_ID].map(encodeURIComponent).join('/')
      NEW_AUDIO_FILE_EXTENSION = upload?.name.split('.').pop()

      try {
        NEW_AUDIO_DURATION = await getFileDuration(upload)
      } catch (error) {
        // something went wrong
        console.log(error)
        NEW_AUDIO_DURATION = 0
      }

      try {
        await Storage.put(NEW_AUDIO_UPLOAD_PATH, upload, {
          contentType: upload?.type,
          progressCallback: setUploadProgress,
        })
      } catch (err) {
        // @ts-ignore
        setError(err)
        return
      }
      console.log({ upload })
      // upload new audio with new id
    }

    // update the submission with any new values
    await updateFileRequestSubmissionRequest({
      variables: {
        input: {
          id: submissionId,
          name,
          artist,
          lyrics,
          requestFeedback,
          // image is optionally updated
          ...image && !image.includes(OLD_ARTWORK_PATH) && {
            artwork: {
              id: NEW_ARTWORK_ID,
              // credit: inputData.artworkCredit,
              credit: '',
              path: NEW_ARTWORK_UPLOAD_PATH
            }
          },
          // audio upload is optionally updated
          ...upload && {
            fileId: NEW_AUDIO_ID,
            fileExtension: NEW_AUDIO_FILE_EXTENSION,
            duration: NEW_AUDIO_DURATION
          }

        }
      }
    })

    // TODO: on behalf of multi-submitters, make sure to look up other fileRequestSubmissions that have the same fileId and update them as well

    if (OLD_ARTWORK_PATH) {
      // clean up the old image
      await Storage.remove(OLD_ARTWORK_PATH)
    }

    if (OLD_AUDIO_UPLOAD_PATH) {
      // clean up the old audio
      await Storage.remove(OLD_AUDIO_UPLOAD_PATH)
    }

    setUploadSuccess(true)
    setSubmitLoading(false)
  }


  return (
    <If condition={!loading} fallbackContent={<CircularProgress />}>
      <Grid container spacing={2}>
        <If condition={data && !getError}
          fallbackContent={<Grid item xs={12}><Typography>{getError?.message || 'Something went wrong.'}</Typography></Grid>}>
          <If condition={isActive && isMine}
            fallbackContent={<Grid item xs={12}><Typography>You do not have access to edit this.</Typography></Grid>}>
            <Grid item xs={12}>
              <AppBreadcrumbs
                paths={[
                  ROUTES.home,
                  ROUTES.workshop,
                  ROUTES.assignment,
                  ROUTES.editPublicSubmission
                ]}
                workshop={data?.getFileRequestSubmission?.workshop}
                workshopId={data?.getFileRequestSubmission?.workshopId}
                assignment={data?.getFileRequestSubmission?.fileRequest}
              />
            </Grid>
            <If condition={!submitLoading} fallbackContent={<Grid item xs={12}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <Typography variant="h6">Upload in progress. Please be patient.</Typography>
                <LinearProgress value={progress || 0} variant="determinate" />
              </div>
            </Grid>}>
              <If condition={!uploadSuccess} fallbackContent={<>
                <ConfettiExplosion />
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <CheckCircle fontSize="large" htmlColor={green[500]} />
                  <Typography variant="h6">Successfully updated!</Typography>
                </Grid></>}>
                <Grid item xs={12}>
                  <Alert severity='info'>Currently, if you submitted with multiple submitters, an admin or the other submitters will also need to update their versions of the submission separately.</Alert>
                </Grid>
                <Grid item xs={12}>
                  <form id="edit-upload-form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormGroup>
                          <InputLabel>Options</InputLabel>
                          <FormControlLabel control={<Switch defaultChecked={true} {...register("requestFeedback")} color="secondary" />} label="Request feedback" />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          variant="standard"
                          required
                          fullWidth
                          label="Artist Byline"
                          InputLabelProps={{ shrink: true }}
                          {...register('artist', { required: true, pattern: /^((?!\/).)*$/i })}
                          error={!!errors.artist}
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore
                          helperText={!!errors.artist && validationMessages.artist[errors.artist.type]}
                          inputProps={{ maxLength: 90 }}

                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          variant="standard"
                          required
                          fullWidth
                          label="Song Title"
                          {...register('name', { required: true, pattern: /^((?!\/).)*$/i })}
                          error={!!errors.name}
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore
                          inputProps={{
                            autoComplete: 'off',
                            maxLength: 90
                          }}
                          helperText={!!errors.name ?
                            validationMessages.name[errors.name.type] :
                            `${90 - (watch('name')?.length || 0)} characters remaining`}

                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="standard"
                          multiline
                          rows={6}
                          fullWidth
                          label="Lyrics"
                          {...register('lyrics')}
                          inputProps={{ maxLength: 5000 }}
                          helperText={`${5000 - (watch('lyrics')?.length || 0)} characters remaining`}

                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <input
                          type="file"
                          name="filename"
                          id="audioUpload"
                          accept={ACCEPTED_FILETYPES.join()}
                          onChange={handleFileSelected}
                          ref={fileref}
                          hidden
                        />
                        <StyledFileDropWrapper>
                          <FileDrop onTargetClick={onTargetClick} onDrop={handleOnDrop}>
                            <IconButton color="primary" aria-label="audio upload" component="span" size="large">
                              <CloudUpload fontSize="large" />
                            </IconButton>
                            {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore */}
                            {!!errors.upload && !upload && (
                              <Typography color="error">Upload is required!</Typography>
                            )}
                            <Typography>{uploadAreaMessage}</Typography>
                          </FileDrop>
                        </StyledFileDropWrapper>

                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div style={{ border: '1px solid black', padding: '1rem' }}>
                          <InputLabel sx={{ textAlign: 'center' }}>Artwork (not droppable yet. sorry!)</InputLabel>
                          <ImagePicker imageURL={ARTWORK_DOWNLOAD_PATH && getCloudFrontURL(ARTWORK_DOWNLOAD_PATH)} onChange={e => setImage(e.image)} maxWidth={500} maxHeight={500} width={300} height={300} />
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant='contained'
                          startIcon={<Save />}
                          fullWidth>
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>

              </If>
            </If>
          </If>
        </If >
      </Grid >
    </If >
  )
}