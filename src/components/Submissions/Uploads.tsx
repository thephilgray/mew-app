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
import { API, Storage } from 'aws-amplify'
import { RouteComponentProps } from '@reach/router'
import { CloudUpload, CheckCircle, WarningRounded } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { FileDrop } from 'react-file-drop'
import styled from '@emotion/styled'
import { green } from '@material-ui/core/colors'
import gql from 'graphql-tag'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { isPast } from 'date-fns/esm'
import Error from '../Error'

const GET_FILE_REQUEST = gql`
    query GetFileRequest($id: ID!) {
        getFileRequest(id: $id) {
            expiration
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
    padding: 20;

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
const Uploads: React.FC<PropsWithChildren<RouteComponentProps<{ fileRequestId: string }>>> = ({
    fileRequestId = '',
}) => {
    const [upload, setUpload] = useState<Blob | undefined>()
    const [expiration, setExpiration] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false)
    const [uploadProgress, setUploadProgress] = useState({ loaded: 0, total: 1 })
    const [uploadAreaMessage, setUploadAreaMessage] = useState('Drop your track')
    const { register, handleSubmit, errors, setValue } = useForm<Inputs>()
    const fileInputRef = useRef(null)

    const ACCEPTED_FILETYPES = [
        'audio/wav',
        'audio/flac',
        'audio/x-aiff',
        'audio/aiff',
        'audio/mpeg',
        'audio/aac',
        'audio/ogg',
        'audio/3gpp',
        'audio/3gpp2',
        // TODO: support complete list of mimetypes accepted by SoundCloud: WAV, FLAC, AIFF, ALAC, MP3, AAC, Ogg / Vorbis, MP4, MP2, M4A, 3GP, 3G2, MJ2, AMR, WMA
    ]

    const isValid = Boolean(expiration && !isPast(new Date(expiration)))

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
                        id: fileRequestId,
                    },
                })
                if (data?.getFileRequest?.expiration) {
                    setExpiration(data.getFileRequest.expiration)
                }
            } catch (err) {
                console.log(err)
            }

            setLoading(false)
        }

        if (fileRequestId) {
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

    const onSubmit = (values: Inputs) => {
        const { name, artist, email } = values
        setLoading(true)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return Storage.put(`${fileRequestId}/${email}/${artist}/${name}/${upload?.name}`, upload, {
            contentType: 'audio/*',
            progressCallback: setUploadProgress,
        })
            .then(() => {
                setUploadSuccess(true)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    let content

    if (isValid) {
        content = (
            <form id="upload-form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
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
                            label="Song Name"
                            name="name"
                            inputRef={register({ required: true })}
                            error={!!errors.name}
                            helperText={!!errors.name && <>Song name is required</>}
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
            <>
                <Typography variant="h6">Upload in progress. Please be patient.</Typography>
                <LinearProgress value={progress || 0} variant="determinate" />
            </>
        )
    }

    if (error && !loading) {
        content = (
            <>
                <Error errorMessage={error} />
            </>
        )
    }

    if (uploadSuccess && !loading) {
        content = (
            <>
                <CheckCircle fontSize="large" htmlColor={green[500]} />
                <Typography variant="h6">Success</Typography>
            </>
        )
    }
    if (!isValid && !loading) {
        content = (
            <>
                <WarningRounded fontSize="large" color="error" />
                <Typography variant="h6">That link is not valid or has expired.</Typography>
            </>
        )
    }
    return (
        <Paper style={{ padding: '1rem' }}>
            <div
                style={{
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                {content}
            </div>
        </Paper>
    )
}

export default Uploads
