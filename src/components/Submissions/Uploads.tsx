import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import {
    Grid,
    TextField,
    IconButton,
    Button,
    Paper,
    Typography,
    CircularProgress,
    LinearProgress,
} from '@material-ui/core'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { RouteComponentProps } from '@reach/router'
import { CloudUpload, CheckCircle, WarningRounded } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { FileDrop } from 'react-file-drop'
import styled from '@emotion/styled'
import { green } from '@material-ui/core/colors'
import gql from 'graphql-tag'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { isPast } from 'date-fns/esm'
import { useBeforeUnload } from 'react-use'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import awsconfig from '../../aws-exports.js'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { aws_user_files_s3_bucket_region: region, aws_user_files_s3_bucket: bucket } = awsconfig

import Error from '../Error'

const GET_FILE_REQUEST = gql`
    query GetFileRequest($id: ID!) {
        getFileRequest(id: $id) {
            expiration
            title
            details
        }
    }
`

const CREATE_PUBLIC_SUBMISSION = gql`
    mutation CreateFileRequestSubmission(
        $audio: String = ""
        $fileRequestId: ID = ""
        $email: String = ""
        $artist: String = ""
        $name: String = ""
    ) {
        createFileRequestSubmission(
            input: { fileRequestId: $fileRequestId, audio: $audio, email: $email, artist: $artist, name: $name }
        ) {
            id
            audio
        }
    }
`

type Inputs = {
    name: string
    artist: string
    email: string
    upload: Blob
}

const StyledFileDropWrapper = styled.div`
    border: 1px solid black;
    width: 600;
    color: black;
    padding: 1rem;

    .file-drop {
        /* relatively position the container bc the contents are absolute */
        position: relative;
        height: 100px;
        width: 100%;
    }

    .file-drop > .file-drop-target {
        /* basic styles */
        position: absolute;
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
const Uploads: React.FC<PropsWithChildren<RouteComponentProps<{ assignmentId: string }>>> = ({ assignmentId = '' }) => {
    const [upload, setUpload] = useState<Blob | undefined>()
    const [fileRequestData, setFileRequestData] = useState<{
        expiration: string
        title: string
        details: string
    } | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false)
    const [uploadProgress, setUploadProgress] = useState({ loaded: 0, total: 1 })
    const [uploadAreaMessage, setUploadAreaMessage] = useState('Drop your track')
    const { register, handleSubmit, errors, setValue } = useForm<Inputs>()
    const fileInputRef = useRef(null)
    useBeforeUnload(!!uploadProgress.loaded && loading, 'Upload in progress. Are you sure you want to exit?')

    const isValid = Boolean(fileRequestData?.expiration && !isPast(new Date(fileRequestData.expiration)))
    const ACCEPTED_FILETYPES = [
        'audio/wav',
        'audio/s-wav',
        'audio/x-wav',
        'audio/aiff',
        'audio/x-aiff',
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
                    query: GET_FILE_REQUEST,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    authMode: 'API_KEY',
                    variables: {
                        id: assignmentId,
                    },
                })

                if (data?.getFileRequest?.expiration) {
                    setFileRequestData(data.getFileRequest)
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
        register({ name: 'upload' })
    }, [upload])

    const onTargetClick = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fileInputRef?.current?.click()
    }

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!(e.target as HTMLInputElement).files && !(e.target as HTMLInputElement).files?.length) return
        // convert image file to base64 string
        const file = (e.target as HTMLInputElement).files?.[0]
        if (file) {
            setUpload(file)
            setUploadAreaMessage(file.name)
        }
    }

    const handleOnDrop = (files: FileList | null) => {
        if (!files) {
            return
        }
        const file = files[0]
        if (ACCEPTED_FILETYPES.includes(file.type)) {
            files?.length && setUpload(files[0])
            setUploadAreaMessage(file.name)
        } else {
            setUploadAreaMessage(`File must be of type: ${ACCEPTED_FILETYPES.join(', ')}`)
        }
    }

    const onSubmit = async (values: Inputs) => {
        setLoading(true)
        const { name, artist, email } = values
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const key = `${assignmentId}/${email}/${artist}/${name}/${upload?.name}`

        try {
            await Storage.put(key, upload, {
                contentType: upload?.type,
                progressCallback: setUploadProgress,
            })

            await API.graphql({
                ...graphqlOperation(CREATE_PUBLIC_SUBMISSION, {
                    fileRequestId: assignmentId,
                    artist,
                    name,
                    email,
                    audio: `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`,
                }),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                authMode: 'API_KEY',
            })

            setUploadSuccess(true)
        } catch (err) {
            setError(err)
        }

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
                    <Grid item xs={12}>
                        <input
                            type="file"
                            name="filename"
                            id="audioUpload"
                            accept={ACCEPTED_FILETYPES.join()}
                            onChange={handleFileSelected}
                            ref={fileInputRef}
                            hidden
                        />
                        {!!errors.upload && <p>Upload is required</p>}

                        <StyledFileDropWrapper>
                            <FileDrop onTargetClick={onTargetClick} onDrop={handleOnDrop}>
                                <IconButton color="primary" aria-label="audio upload" component="span">
                                    <CloudUpload fontSize="large" />
                                </IconButton>
                                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore */}
                                {uploadAreaMessage}
                            </FileDrop>
                        </StyledFileDropWrapper>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Email"
                            name="email"
                            inputRef={register({ required: true })}
                            error={!!errors.email}
                            helperText={!!errors.email && <>Email is required</>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            label="Artist Name"
                            name="artist"
                            inputRef={register({ required: true })}
                            error={!!errors.artist}
                            helperText={!!errors.artist && <>Artist name is required</>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            label="Song Name"
                            name="name"
                            inputRef={register({ required: true })}
                            error={!!errors.name}
                            helperText={!!errors.name && <>Song name is required</>}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

    if (loading) {
        content = <CircularProgress />
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
            <div style={{ textAlign: 'center' }}>
                <CheckCircle fontSize="large" htmlColor={green[500]} />
                <Typography variant="h6">Success</Typography>
            </div>
        )
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
            <Grid item xs={12}>
                <Paper style={{ padding: '1rem' }}>{content}</Paper>
            </Grid>
        </Grid>
    )
}

export default Uploads
