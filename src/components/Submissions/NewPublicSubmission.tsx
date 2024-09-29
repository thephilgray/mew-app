import React, { useState, useEffect, useRef, PropsWithChildren, useMemo } from 'react'
import { Grid, TextField, IconButton, Button, Paper, Typography, LinearProgress, FormGroup, FormControlLabel, Switch, InputLabel, Autocomplete, Chip, Avatar, Alert } from '@mui/material'
import { API, graphqlOperation, Storage } from 'aws-amplify'
import { RouteComponentProps } from '@reach/router'
import { CloudUpload, CheckCircle, WarningRounded, PlayArrow, Edit } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import { FileDrop } from 'react-file-drop'
import { green } from '@mui/material/colors'
import { isPast, isFuture } from 'date-fns/esm'
import { useBeforeUnload } from 'react-use'
import { v4 as uuidv4 } from 'uuid'
import ConfettiExplosion from 'react-confetti-explosion';

import Error from '../Error'
import { createFileRequestSubmission } from './submissions.queries'
import { getFileRequest as getFileRequestQuery } from '../../graphql/queries'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { useProfile, useUser, useViewAdmin } from '../../auth/hooks'
import If from '../If'
import ImagePicker, { uploadImage } from '../ImagePicker'
import { GiveFeedback } from './GiveFeedback'
import { getBreakoutGroupByMembership, getCloudFrontURL, getDisplayName, getFileDuration, searchMembersFilterOptions } from '../../utils'
import uniqBy from 'lodash/uniqBy'
import { Link, navigate } from 'gatsby'
import { ACCEPTED_FILETYPES, ROUTES } from '../../constants'
import Loading from '../Loading'
import { StyledFileDropWrapper } from './StyledFileDropWrapper'

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

type AudioFileBlob = Blob & { name: string }

const NewPublicSubmission: React.FC<
    PropsWithChildren<RouteComponentProps<{ assignmentId: string; extensionCode?: string }>>
> = ({ assignmentId = '', extensionCode = '' }) => {
    const [upload, setUpload] = useState<AudioFileBlob | null>(null)
    const [fileRequestData, setFileRequestData] = useState<{
        expiration: string
        title: string
        details: string
        workshopId: string
    } | null>(null)

    const user = useUser()
    const { profile, loading: profileLoading } = useProfile()
    const [viewAdmin] = useViewAdmin()
    const [loading, setLoading] = useState<boolean>(true)
    const [submitLoading, setSubmitLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const [uploadSuccess, setUploadSuccess] = useState<boolean>(false)
    const [uploadProgress, setUploadProgress] = useState({ loaded: 0, total: 1 })
    const [uploadAreaMessage, setUploadAreaMessage] = useState('Drop your track')
    const [expiration, setExpiration] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [showPlaylist, setShowPlaylist] = useState<boolean>(false)
    const [feedbackGiven, setFeedbackGiven] = useState<number>(0)
    const [submitters, setSubmitters] = useState([])
    const [duration, setDuration] = useState(0)
    const [extensionCodeActive, setExtensionCodeActive] = useState<boolean>(false)
    // const [stemsUsed, setStemsUsed] = useState([])

    const { breakoutGroupId } = useMemo((): { breakoutGroupId?: string } => {
        if (fileRequestData) {
            const workshop = fileRequestData?.workshop
            return {
                breakoutGroupId: getBreakoutGroupByMembership(workshop, user)?.id
            }
        } else {
            return { breakoutGroupId: '' }
        }

    }, [fileRequestData, user])

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        getValues,
        formState: {
            errors,
        },
    } = useForm<Inputs>({
        defaultValues: useMemo(() => {
            return {
                email: user?.email || '',
                artist: getDisplayName(profile),
                requestFeedback: !!user,
                // addStems: false
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

    const hasStarted = fileRequestData?.startDate ? isPast(new Date(fileRequestData?.startDate)) : true
    const isValid = viewAdmin || extensionCodeActive || Boolean(expiration && !isPast(new Date(expiration)) && hasStarted)
    const previousUserSubmission = fileRequestData?.submissions?.items?.find(item => item.email === (profile?.email || watch('email')))

    useEffect(() => {
        console.log({ errors })

    }, [errors])

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
                        if (currentExtension && isFuture(new Date(currentExtension.expiration))) {
                            setExtensionCodeActive(true);
                        }
                
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

    const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!(e.target as HTMLInputElement).files && !(e.target as HTMLInputElement).files?.length) return
        // convert image file to base64 string
        const file = (e.target as HTMLInputElement).files?.[0]
        if (file && ACCEPTED_FILETYPES.includes(file.type)) {
            let fileDuration;
            try {
                fileDuration = await getFileDuration(file)
                if (fileDuration > 0) {
                    setDuration(fileDuration)
                } else {
                    throw 'empty or unsupported file'
                }

            } catch (error) {
                // something went wrong
                console.error(error)
                setUpload(null)
                return setUploadAreaMessage('For some unknown reason, this file is not supported. For best results, convert to mp3.')
            }
            setUpload(file)
            setUploadAreaMessage(file.name)
        }
        else {
            setUpload(null)
            setUploadAreaMessage(`File must be of type: ${ACCEPTED_FILETYPES.join(', ')}`)
        }
    }

    const handleOnDrop = async (files: FileList | null) => {
        if (!files) {
            return
        }
        const file = files[0]
        if (ACCEPTED_FILETYPES.includes(file.type) && files?.length) {
            let fileDuration;
            try {
                fileDuration = await getFileDuration(file)
                if (fileDuration > 0) {
                    setDuration(fileDuration)
                } else {
                    throw 'empty or unsupported file'
                }

            } catch (error) {
                // something went wrong
                console.error(error)
                setUpload(null)
                return setUploadAreaMessage('For some unknown reason, this file is not supported. For best results, convert to mp3.')
            }
            setUpload(file)
            setUploadAreaMessage(file.name)
        } else {
            setUpload(null)
            setUploadAreaMessage(`File must be of type: ${ACCEPTED_FILETYPES.join(', ')}`)
        }
    }

    useEffect(() => {
        if (profile && submitters.length === 0) {
            setSubmitters([{ email: profile.email, displayName: profile.displayName, name: profile.name, avatar: profile.avatar }])
        }
        if (profile && !watch('artist')) {
            setValue('artist', getDisplayName(profile))
        }
    }, [profile])

    const onSubmit = async (values: Inputs) => {
        setSubmitLoading(true)
        const { name, artist, email, lyrics, requestFeedback } = values
        const fileId = uuidv4()
        const keyValues = [assignmentId, fileId]
        const key = keyValues.map(encodeURIComponent).join('/')
        const emails = !!profile ? submitters.map(item => item.email) : email.split(',').map((email) => email.toLowerCase().trim())
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
                            duration,
                            breakoutGroupId,
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
            // TODO: createSubmissionStems for each submission
        }

        setUploadSuccess(true)
        setSubmitLoading(false)
    }

    const setSubmittersAutocompleteOnChange = (e, value = []) => {
        if (viewAdmin) {
            // admins can submit on behalf of others without including themselves
            setSubmitters(value)
        } else {
            // nonadmins cannot submit for others except as collaborators
            setSubmitters(
                [
                    profile,
                    ...value.filter(option => option?.email !== profile?.email)

                ])
        }
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
                                <FormControlLabel control={<Switch {...register("addLyrics")} color="secondary" />} label="Add liner notes" />
                                {/* <FormControlLabel control={<Switch {...register("addStems")} color="secondary" />} label="Add stems used" /> */}
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
                        <If condition={!!profile?.email} fallbackContent={<TextField
                            variant="standard"
                            required
                            fullWidth
                            label="Email"
                            {...register('email', {
                                required: !profile?.email,
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
                            } />}>

                            <Autocomplete
                                onChange={setSubmittersAutocompleteOnChange}
                                value={submitters}
                                multiple
                                getOptionDisabled={option => submitters.map(item => item.email).includes(option.email)}
                                options={uniqBy(fileRequestData?.workshop?.memberships?.items?.map(({ profile }) =>
                                    ({ email: profile.email, displayName: profile.displayName, name: profile.name, avatar: profile.avatar })) || [], 'email')}
                                getOptionLabel={getDisplayName}
                                isOptionEqualToValue={(option, value) => option.email === value.email}
                                filterOptions={searchMembersFilterOptions}
                                renderTags={(tagValue, getTagProps) =>
                                    tagValue.map((option, index) => (
                                        <Chip
                                            avatar={<Avatar src={option.avatar && getCloudFrontURL(option.avatar)} alt={getDisplayName(option)} />}
                                            label={getDisplayName(option)}
                                            {...getTagProps({ index })}
                                            disabled={!viewAdmin && (option?.email == profile?.email)}
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Submitter(s)"
                                        variant="standard"
                                    />
                                )}
                            />
                        </If>

                    </Grid>
                    {/* <If condition={!!user && !!watch("addStems")}>
                        <Grid item xs={12}>

                            <Autocomplete
                                onChange={(e, value = []) => setStemsUsed(value)}
                                value={stemsUsed}
                                multiple
                                getOptionLabel={option => `${option?.stem?.title} – ${getDisplayName(option?.stem?.creator)}`}
                                options={profile?.downloadedStems?.items || []}
                                renderTags={(tagValue, getTagProps) =>
                                    tagValue.map((option, index) => (
                                        <Chip
                                            key={option?.id}
                                            label={`${option?.stem?.title} – ${getDisplayName(option?.stem?.creator)}`}
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Stems used"
                                        variant="standard"
                                    />
                                )}
                            />
                        </Grid>
                    </If> */}
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
                    <If condition={watch("addLyrics")}>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                multiline
                                rows={6}
                                fullWidth
                                label="Liner Notes"
                                {...register('lyrics')}
                                inputProps={{ maxLength: 5000 }}
                                helperText={`${5000 - (watch('lyrics')?.length || 0)} characters remaining`}

                            />
                        </Grid>
                    </If>
                    <Grid item xs={12}>
                        <Button disabled={
                            loading ||
                            submitLoading ||
                            !upload ||
                            (profile?.email ? !submitters.length : !watch('email')) ||
                            !watch('artist') ||
                            !watch('name') ||
                            !!errors.artist ||
                            !!errors.name ||
                            !!errors.email
                        } type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                            Submit
                        </Button>
                    </Grid>
                </Grid >
            </form >
        )
    }

    if (submitLoading && uploadProgress.loaded) {
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
            <>
                <ConfettiExplosion />
                <Grid container spacing={4} >
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <CheckCircle fontSize="large" htmlColor={green[500]} />
                        <Typography variant="h6">Success</Typography>
                        <Alert severity="info" icon={<Edit />} sx={{ margin: 'auto', maxWidth: '500px' }}>
                            <Typography>You can edit your submission(s) in <Link to={ROUTES.assignment.getPath({ assignmentId })}>My Submissions</Link>.</Typography>
                        </Alert>
                    </Grid>
                    <If condition={!!user} >
                        <Grid item xs={12}>
                            <Typography variant="h3" sx={{ textAlign: 'center' }}>
                                Give Feedback
                            </Typography>
                            <Alert sx={{ mt: 1 }} severity="success">Great job submitting something! Since you are so on top of things, you are invited to listen to up to 3 tracks and offer feedback before the playlist drops. Press the Begin button below to get started. Press Quit to exit. You can resume giving feedback in <Link to={ROUTES.assignment.getPath({ assignmentId })}>My Submissions</Link>. <em>Hint: if no one has requested feedback yet, there's nothing to do here.</em></Alert>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Button sx={{ mr: 1 }} size="large" endIcon={<PlayArrow />} variant="contained" color="success" onClick={() => setShowPlaylist(true)}>{!feedbackGiven ? 'Begin' : 'Resume'}</Button>
                            <Button size="large" onClick={() => navigate(ROUTES.assignment.getPath({ assignmentId }))}>Quit</Button>
                        </Grid>
                    </If>
                </Grid>
            </>
        )
    }

    if (!!user && showPlaylist && fileRequestData) {
        content = <GiveFeedback
            fileRequestData={fileRequestData}
            feedbackGiven={feedbackGiven}
            setFeedbackGiven={setFeedbackGiven}
            setShowPlaylist={setShowPlaylist}
            showPlaylist={showPlaylist}
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
            <If condition={!loading && !user}>
                <Grid item xs={12}>
                    <Alert severity="info">
                        <Link to={ROUTES.assignment.getPath({ assignmentId })}>Sign in</Link> for more features, including managing your submissions.
                    </Alert>
                </Grid>
            </If>
            <If condition={!loading && !!previousUserSubmission && !uploadSuccess}>
                <Grid item xs={12}>
                    <Alert severity="warning">
                        You've already submitted to this assignment. Are you sure you want to submit again? You can still <Link to={ROUTES.editPublicSubmission.getPath({ submissionId: previousUserSubmission?.id })}>edit your previous submission</Link>.
                    </Alert>
                </Grid>
            </If>
            <If condition={user}>
                <Grid item xs={12}>
                    <AppBreadcrumbs
                        paths={[ROUTES.home, ROUTES.workshop,
                        {
                            path: ROUTES.assignment.getPath({ assignmentId }),
                            name: fileRequestData?.title || assignmentId,
                        },
                        ROUTES.assignment]}
                        workshop={fileRequestData?.workshop}
                        workshopId={fileRequestData?.workshopId}
                    />
                </Grid>
            </If>
            <If condition={!loading} fallbackContent={<Loading />}>
                <Grid item xs={12}>
                    <Paper style={{ padding: '1rem' }}>{content}</Paper>
                </Grid>
            </If>
        </Grid>
    )
}

export default NewPublicSubmission
