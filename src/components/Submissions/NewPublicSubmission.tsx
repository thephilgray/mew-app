import React, { useState, useEffect, useRef, PropsWithChildren, useMemo } from 'react'
import { Grid, TextField, IconButton, Button, Paper, Typography, CircularProgress, LinearProgress, FormGroup, FormControlLabel, Switch, InputLabel } from '@mui/material'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { RouteComponentProps } from '@reach/router'
import { CloudUpload, CheckCircle, WarningRounded, Feedback, ArrowRight, PlayArrow } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { FileDrop } from 'react-file-drop'
import styled from '@emotion/styled'
import { green } from '@mui/material/colors'
import { Theme } from '@mui/material/styles'
import { isPast } from 'date-fns/esm'
import { useBeforeUnload } from 'react-use'
import { v4 as uuidv4 } from 'uuid'

import Error from '../Error'
import { createFileRequestSubmission } from '../../graphql/mutations'
import { getFileRequest as getFileRequestQuery } from '../../graphql/queries'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { useUser } from '../../auth/hooks'
import If from '../If'
import { ROUTE_NAMES } from '../../pages/app'
import ImagePicker, { uploadImage } from '../ImagePicker'
import Playlist from './Playlist'
import { Submission } from './Submission'

type Inputs = {
    name: string
    artist: string
    email: string
    upload: AudioFileBlob
    requestFeedback: boolean
    artwork: {
        id: string
        path: string
        credit: string
    }
    lyrics: string
    addArtwork: boolean
    addLyrics: boolean
}

const StyledFileDropWrapper = styled.div`
    border: 1px solid black;
    // width: 600;
    color: black;
    padding: 1rem;
    height: 100%;
    display: flex;
    align-items: center;

    .file-drop {
        /* relatively position the container bc the contents are absolute */
        position: relative;
        minHeight: 100px;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .file-drop > .file-drop-target {
        /* basic styles */
        // position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 2px;

        /* horizontally and vertically center all content */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        text-align: center;
    }

    .file-drop > .file-drop-target.file-drop-dragging-over-frame {
        /* overlay a black mask when dragging over the frame */
        border: none;
        background-color: rgba(0, 0, 0, 0.15);
        box-shadow: none;
        z-index: 50;
        opacity: 1;

        /* typography */
        color: white;
    }

    .file-drop > .file-drop-target.file-drop-dragging-over-target {
        /* turn stuff orange when we are dragging over the target */
        color: ${({ theme }: { theme?: Theme }) => theme?.palette.primary.main};
        box-shadow: ${({ theme }: { theme?: Theme }) => `0 0 13px 3px ${theme?.palette.primary.main}`};
    }
`

type AudioFileBlob = Blob & { name: string }

const NewPublicSubmission: React.FC<
    PropsWithChildren<RouteComponentProps<{ assignmentId: string; extensionCode?: string }>>
> = ({ assignmentId = '', extensionCode = '' }) => {
    const [upload, setUpload] = useState<AudioFileBlob | undefined>()
    const [fileRequestData, setFileRequestData] = useState<{
        expiration: string
        title: string
        details: string
        workshopId: string
    } | null>(null)

    const user = useUser()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false)
    const [uploadProgress, setUploadProgress] = useState({ loaded: 0, total: 1 })
    const [uploadAreaMessage, setUploadAreaMessage] = useState('Drop your track')
    const [expiration, setExpiration] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [showPlaylist, setShowPlaylist] = useState<boolean>(false)
    const [feedbackGiven, setFeedbackGiven] = useState<number>(0)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        getValues,
        formState: {
            errors,
        },
    } = useForm<Inputs>({
        defaultValues: useMemo(() => {
            return {
                email: user?.email || '',
                artist: user?.name || '',
                requestFeedback: !!user,
            }
        }, [user])
    })
    const fileref = useRef(null)
    useBeforeUnload(!!uploadProgress.loaded && loading, 'Upload in progress. Are you sure you want to exit?')

    const validationMessages = {
        email: {
            required: <>Email is required.</>,
            pattern: <>Must be valid email or emails separated by commas.</>,
        },
        artist: {
            required: <>Artist name is required</>,
            pattern: <>Artist name cannot contain the following characters: /</>,
        },
        name: {
            required: <>Song name is required</>,
            pattern: <>Song name cannot contain the following characters: /</>,
        },
    }

    const isValid = Boolean(expiration && !isPast(new Date(expiration)))

    const ACCEPTED_FILETYPES = [
        // 'audio/wav',
        // 'audio/s-wav',
        // 'audio/x-wav',
        // 'audio/aiff',
        // 'audio/x-aiff',
        'audio/mpeg',
        'audio/mp3',
        'audio/mpeg3',
        'audio/mpg',
        'audio/x-mp3',
        'audio/x-mpeg',
        'audio/x-mpeg3',
        'audio/x-mpg',
        'audio/mp4',
        'audio/m4a',
        'audio/x-m4a',
        'audio/ogg',
    ]

    useEffect(() => {
        async function getFileRequest() {
            // Switch authMode to API_KEY
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const { data } = await API.graphql({
                    query: getFileRequestQuery,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    authMode: 'API_KEY',
                    variables: {
                        id: assignmentId,
                    },
                })

                if (data?.getFileRequest?.expiration) {
                    setFileRequestData(data.getFileRequest)

                    // validate extension code
                    if (extensionCode) {
                        const [currentExtension] = data?.getFileRequest?.extensions?.items.filter(
                            (x: { id: string }) => x.id === extensionCode,
                        )
                        setExpiration(currentExtension.expiration || data.getFileRequest.expiration)
                    } else {
                        setExpiration(data.getFileRequest.expiration)
                    }
                }
            } catch (err) {
                console.log(err)
            }

            setLoading(false)
        }

        if (assignmentId) {
            getFileRequest()
        }
    }, [])

    useEffect(() => {
        setValue('upload', upload)
        register('upload', { required: true })
    }, [upload])

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

    const onSubmit = async (values: Inputs) => {
        setLoading(true)
        const { name, artist, email, lyrics, requestFeedback } = values
        const fileId = uuidv4()
        const keyValues = [assignmentId, fileId]
        const key = keyValues.map(encodeURIComponent).join('/')
        const emails = email.split(',').map((email) => email.toLowerCase().trim())
        const fileExtension = upload?.name.split('.').pop()

        let ARTWORK_UPLOAD_PATH
        let ID
        if (image) {
            ID = uuidv4()
            ARTWORK_UPLOAD_PATH = `submissions/${assignmentId}/artwork-${ID}.jpg`
            await uploadImage({ image, uploadPath: ARTWORK_UPLOAD_PATH, filename: 'artwork.jpg' })
        }

        try {
            await Storage.put(key, upload, {
                contentType: upload?.type,
                progressCallback: setUploadProgress,
            })
        } catch (err) {
            setLoading(false)
            // @ts-ignore
            setError(err)
            return
        }

        for (let index = 0; index < emails.length; index++) {
            try {
                await API.graphql({
                    ...graphqlOperation(createFileRequestSubmission, {
                        input: {
                            fileId,
                            fileRequestId: assignmentId,
                            artist,
                            name,
                            email: emails[index],
                            fileExtension,
                            workshopId: fileRequestData?.workshopId,
                            ...image && {
                                artwork: {
                                    id: ID,
                                    // credit: inputData.artworkCredit,
                                    credit: '',
                                    path: ARTWORK_UPLOAD_PATH
                                }
                            },
                            lyrics,
                            requestFeedback
                        },
                    }),
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    authMode: 'API_KEY',
                })
            } catch (err) {
                setLoading(false)
                // @ts-ignore
                setError(err)
                return
            }
        }

        setUploadSuccess(true)
        setLoading(false)
    }

    let content

    if (isValid) {
        content = (
            <form id="upload-form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    {fileRequestData?.title && (
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2">
                                {fileRequestData.title}
                            </Typography>
                        </Grid>
                    )}
                    {fileRequestData?.details && (
                        <Grid item xs={12}>
                            <div
                                dangerouslySetInnerHTML={{ __html: fileRequestData.details }}
                                style={{ width: '100%' }}
                            />
                        </Grid>
                    )}
                    <If condition={user}>
                        <Grid item xs={12}>
                            <FormGroup>
                                <InputLabel>Options</InputLabel>
                                <FormControlLabel control={<Switch {...register("addArtwork")} color="secondary" />} label="Add artwork" />
                                <FormControlLabel control={<Switch {...register("addLyrics")} color="secondary" />} label="Add lyrics" />
                                <FormControlLabel control={<Switch defaultChecked={true} {...register("requestFeedback")} color="secondary" />} label="Request feedback" />
                            </FormGroup>
                        </Grid>
                    </If>
                    <Grid item xs={12} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={watch("addArtwork") ? 6 : 12} >
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
                            <If condition={watch("addArtwork")} >
                                <Grid item xs={12} md={6}>
                                    <div style={{ border: '1px solid black', padding: '1rem' }}>
                                        <InputLabel sx={{ textAlign: 'center' }}>Artwork</InputLabel>
                                        <ImagePicker onChange={e => setImage(e.image)} maxWidth={500} maxHeight={500} width={300} height={300} />
                                    </div>
                                </Grid>
                            </If>

                        </Grid>



                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            required
                            fullWidth
                            label="Email"
                            {...register('email', {
                                required: true,
                                pattern: /^([\w+-.%]+@[\w-.]+\.[A-Za-z]+)(, ?[\w+-.%]+@[\w-.]+\.[A-Za-z]+)*$/,
                            })}
                            error={!!errors.email}
                            helperText={
                                errors.email ? (
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    validationMessages.email[errors.email.type]
                                ) : (
                                    <>
                                        Separate multiple email addresses with a comma (<kbd>,</kbd>)
                                    </>
                                )
                            } />
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
                            helperText={!!errors.artist && validationMessages.artist[errors.artist.type]} />
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
                            helperText={!!errors.name && validationMessages.name[errors.name.type]} />
                    </Grid>
                    <If condition={watch("addLyrics")}>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                multiline
                                rows={6}
                                fullWidth
                                label="Lyrics"
                                {...register('lyrics')}
                            />
                        </Grid>
                    </If>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid >
            </form >
        )
    }

    if (loading) {
        content = (
            <div style={{ textAlign: 'center' }}>
                <CircularProgress />
            </div>
        )
    }
    if (loading && uploadProgress.loaded) {
        const progress = (uploadProgress.loaded / uploadProgress.total) * 100
        content = (
            <div style={{ textAlign: 'center', padding: '1rem' }}>
                <Typography variant="h6">Upload in progress. Please be patient.</Typography>
                <LinearProgress value={progress || 0} variant="determinate" />
            </div>
        )
    }

    if (error && !loading) {
        content = (
            <div style={{ textAlign: 'center' }}>
                <Error errorMessage={error} />
            </div>
        )
    }

    if (uploadSuccess && !loading) {
        content = (
            <Grid container spacing={4} >
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <CheckCircle fontSize="large" htmlColor={green[500]} />
                    <Typography variant="h6">Success</Typography>
                </Grid>
                <If condition={!!user && watch("requestFeedback") && !feedbackGiven} >
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{ textAlign: 'center' }}>
                            Give Feedback
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button size="large" endIcon={<PlayArrow />} variant="contained" onClick={() => setShowPlaylist(true)}>BEGIN</Button>
                    </Grid>
                </If>
            </Grid>
        )
    }

    if (!!user && showPlaylist && fileRequestData) {
        content = <Submission
            fileRequestData={fileRequestData}
            feedbackGiven={feedbackGiven}
            setFeedbackGiven={setFeedbackGiven}
            setShowPlaylist={setShowPlaylist}
        />
    }

    if (!isValid && !loading) {
        content = (
            <div style={{ textAlign: 'center' }}>
                <WarningRounded fontSize="large" color="error" />
                <Typography variant="h6">That link is not valid or has expired.</Typography>
            </div>
        )
    }
    return (
        <Grid container spacing={2}>
            {user ? <Grid item xs={12}>
                <AppBreadcrumbs
                    paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignments,
                    {
                        path: ROUTE_NAMES.assignment.getPath({ assignmentId }),
                        name: fileRequestData?.title || assignmentId,
                    },
                    ROUTE_NAMES.assignment]}
                    workshopId={fileRequestData?.workshopId}
                />
            </Grid> : null}
            {/* <Grid item xs={12}>
                <FormControlLabel control={<Switch value={uploadSuccess} onChange={() => {
                    if (uploadSuccess) {
                        setShowPlaylist(false)
                    }
                    setUploadSuccess(!uploadSuccess)
                }} color="secondary" />} label="Temporary dev toggle" />
            </Grid> */}
            <Grid item xs={12}>
                <Paper style={{ padding: '1rem' }}>{content}</Paper>
            </Grid>
        </Grid>
    )
}

export default NewPublicSubmission
