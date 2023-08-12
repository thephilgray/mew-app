import React, { useState, useEffect, useMemo } from 'react'
import {
    Typography,
    Grid,
    Button,
    Paper,
    TextField,
    Switch,
    FormControlLabel,
    Snackbar,
    IconButton,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    FormHelperText,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { add } from 'date-fns/esm'
import gql from 'graphql-tag'
import { useLazyQuery, useQuery } from '@apollo/react-hooks'
import { Link, navigate } from 'gatsby'
import { API } from 'aws-amplify'
import { Editor } from '@tinymce/tinymce-react'
import { v4 as uuidv4 } from 'uuid';
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { FileCopy } from '@mui/icons-material'
import { useCopyToClipboard } from 'react-use'
import * as mutations from '../../graphql/mutations'
import { getFileRequest as getFileRequestQuery, playlistsByDate } from '../../graphql/queries'
import ImagePicker, { uploadImage } from '../ImagePicker';
import { getCloudFrontURL } from '../../utils';
import { ROUTES } from '../../constants';
import { useProfile } from '../../auth/hooks';
import If from '../If';
import { DateTimePicker } from '@mui/x-date-pickers';

const getFileRequestWithNoLimit = getFileRequestQuery.replace('submissions {', 'submissions(limit: 1000) {')

type Inputs = {
    expiration: Date
    title: string
    details: string
    required: boolean
    userContent: boolean
    userImage: boolean
    userFeedback: boolean
    artworkCredit: string
    artworkPath: string
    fileRequestPlaylistId: string
    startDate: Date;
    playlistStartDate: Date;
    playlistExternalUrl: String;
}



const EditPublicAssignment: React.FC<{ workshopId: string, assignmentId: string }> = ({ workshopId = '', assignmentId = '' }) => {
    const { profile } = useProfile()
    const { data: { getFileRequest } = {}, loading, error } = useQuery(gql(getFileRequestWithNoLimit), {
        variables: { id: assignmentId },
    })

    const { loading: fetchListPlaylistsLoading, error: fetchListPlaylistsError, data: fetchListPlaylistsData } = useQuery(gql(playlistsByDate), {
        fetchPolicy: 'network-only',
        variables: {
            sortDirection: "DESC",
            type: "Playlist",
            filter: {
                and: [
                    { playlistOwnerId: { eq: profile?.email } }
                ]

            },
            limit: 500
        },
    })

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        watch,
        reset,
        resetField,
        control,

        formState: {
            errors,
        },
    } = useForm<Inputs>(
        {
            // TODO: use default values here instead of a bunch of useStates for setting the initial form state
            defaultValues: {
                fileRequestPlaylistId: getFileRequest?.playlist?.id
            }
        }
    )
    const [details, setDetails] = useState<string>('')
    const [required, setRequired] = useState<boolean>(true)
    const [expiration, setExpiration] = useState<Date | null>(add(new Date(), { weeks: 1 }))
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [playlistStartDate, setPlaylistStartDate] = useState<Date | null>(null)
    const [showCopySuccessAlert, setShowCopySuccessAlert] = useState<boolean>(false)
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard()
    const [openConfirm, setOpenConfirm] = React.useState(false)
    const [image, setImage] = useState<string>('')

    const handleClickOpenConfirm = () => {
        setOpenConfirm(true)
    }

    const handleCloseConfirm = () => {
        setOpenConfirm(false)
    }

    useEffect(() => {
        if (getFileRequest) {
            setDetails(getFileRequest.details)
            setValue('title', getFileRequest.title)
            setExpiration(new Date(getFileRequest.expiration))
            if (getFileRequest.startDate) {
                setStartDate(new Date(getFileRequest.startDate))
            }
            if (getFileRequest.playlistStartDate) {
                setPlaylistStartDate(new Date(getFileRequest.playlistStartDate))
            }
            setRequired(getFileRequest.required)
            setValue('artworkCredit', getFileRequest.artwork?.credit)
            setValue('playlistExternalUrl', getFileRequest.playlistExternalUrl)
        }
    }, [getFileRequest])

    useEffect(() => {
        if (getFileRequest?.playlist?.id && fetchListPlaylistsData) {
            setValue('fileRequestPlaylistId', getFileRequest?.playlist?.id)
        }
    }, [getFileRequest, fetchListPlaylistsData])

    useEffect(() => {
        if (copyToClipboardState.value) {
            setShowCopySuccessAlert(true)
        }
    }, [copyToClipboardState])

    useEffect(() => {
        setValue('expiration', expiration)
        register('expiration', { required: true })
    }, [expiration])

    useEffect(() => {
        setValue('startDate', startDate);
        register('startDate');
    }, [startDate]);

    useEffect(() => {
        setValue('playlistStartDate', playlistStartDate);
        register('playlistStartDate');
    }, [playlistStartDate]);

    useEffect(() => {
        setValue('details', details)
        register('details')
    }, [details])

    useEffect(() => {
        setValue('required', required)
        register('required')
    }, [required])

    const ARTWORK_DOWNLOAD_PATH = getFileRequest?.artwork?.path

    const onSubmit = async (inputData: Inputs) => {

        let ARTWORK_UPLOAD_PATH
        let ID
        if (image && !image.includes(ARTWORK_DOWNLOAD_PATH)) {
            ID = uuidv4()
            ARTWORK_UPLOAD_PATH = `workshops/${workshopId}/artwork-${ID}.jpg`
            await uploadImage({ image, uploadPath: ARTWORK_UPLOAD_PATH, filename: 'artwork.jpg' })
        }
        await API.graphql({
            query: mutations.updateFileRequest,
            variables: {
                input: {
                    id: assignmentId,
                    type: 'FileRequest',
                    expiration: inputData.expiration?.toISOString(),
                    title: inputData.title,
                    details: details,
                    required: required,
                    ...image && !image.includes(ARTWORK_DOWNLOAD_PATH) && {
                        artwork: {
                            id: ID,
                            credit: inputData.artworkCredit,
                            path: ARTWORK_UPLOAD_PATH
                        }
                    },
                    fileRequestPlaylistId: inputData.fileRequestPlaylistId,
                    ...inputData.startDate && { startDate: inputData.startDate?.toISOString() },
                    ...inputData.playlistStartDate && { playlistStartDate: inputData.playlistStartDate?.toISOString() },
                    playlistExternalUrl: inputData.playlistExternalUrl
                },
            },
        })
        // then redirect
        navigate(ROUTES.assignment.getPath({ assignmentId }))
    }

    const deleteAssignment = async () => {
        await API.graphql({
            query: mutations.deleteFileRequest,
            variables: {
                input: {
                    id: assignmentId,
                },
            },
        })
        // then redirect
        navigate(ROUTES.home.path)
    }

    if (error) return <Error errorMessage={error} />
    if (loading) return <CircularProgress />
    if (!loading && !getFileRequest?.submissions?.items) return <p>Assignment does not exist or has been deleted.</p>

    return (
        <Grid container spacing={2}>
            <Dialog
                open={openConfirm}
                onClose={handleCloseConfirm}
                aria-labelledby="delete-confirm"
                aria-describedby="delete-warning"
            >
                <DialogTitle id="delete-confirm">Are you sure you want to delete this assignment?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="confirm you want to delete this assignment">
                        This assignment and {getFileRequest.submissions.items.length} submissions will be permanently
                        lost. Any links to this assignment will be broken. There is no undo/restore.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm} color="primary">
                        No
                    </Button>
                    <Button onClick={deleteAssignment} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid item xs={12}>
                <AppBreadcrumbs
                    paths={[
                        ROUTES.home,
                        ROUTES.workshop,
                        { path: ROUTES.assignment.getPath({ assignmentId }), name: getValues().title },
                        ROUTES.editAssignment,
                    ]}
                    assignmentId={assignmentId}
                    workshopId={getFileRequest?.workshopId}
                />
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: '1rem' }}>
                    <Typography variant="h5" component="h5" gutterBottom>
                        Edit Assignment
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={4}>
                            {error && (
                                <Grid item xs={12}>
                                    <Error errorMessage={error} />
                                </Grid>
                            )}
                            {getFileRequest?.id && !loading && (
                                <Grid item xs={12} md={9}>
                                    <Link
                                        to={ROUTES.newPublicSubmission.getPath({
                                            assignmentId: getFileRequest.id,
                                        })}
                                    >
                                        {window.origin}
                                        {ROUTES.newPublicSubmission.getPath({
                                            assignmentId: getFileRequest.id,
                                        })}
                                    </Link>
                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        open={showCopySuccessAlert}
                                        color="success"
                                        autoHideDuration={3000}
                                        message="Link to assignment copied to clipboard."
                                        onClose={() => setShowCopySuccessAlert(false)}
                                    />
                                    <IconButton
                                        color="secondary"
                                        aria-label="Close"
                                        component="span"
                                        onClick={() =>
                                            copyToClipboard(
                                                `${window.origin}${ROUTES.newPublicSubmission.getPath({
                                                    assignmentId: getFileRequest.id,
                                                })}`,
                                            )
                                        }
                                        size="large">
                                        <FileCopy />
                                    </IconButton>
                                </Grid>
                            )}
                            <Grid item xs={12} md={9}>
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    label="Title"
                                    {...register('title', { required: true })}
                                    error={!!errors.title}
                                    inputProps={{ maxLength: 90 }}
                                    InputLabelProps={{ shrink: true }}
                                    helperText={
                                        !!errors.title ?
                                            'Title is required' :
                                            `${90 - (watch('title')?.length || 0)} characters remaining`
                                    } />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={required}
                                            onChange={(e) => setRequired(e.target.checked)}
                                            name="required"
                                        />
                                    }
                                    label="Required"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Editor
                                    value={details}
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen emoticons',
                                            'insertdatetime media table paste code help wordcount',
                                        ],
                                        toolbar:
                                            'undo redo | formatselect | bold italic forecolor backcolor emoticons | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | image | media | help',
                                    }}
                                    onEditorChange={setDetails}
                                    apiKey="7n5kyei3ttoxuo2wna1yhi1558x6b4e9k4jpuwrusi1ce416"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel>
                                    Artwork
                                </InputLabel>
                                <ImagePicker imageURL={getFileRequest?.artwork && getCloudFrontURL(ARTWORK_DOWNLOAD_PATH)} width={200} height={200} maxHeight={500} maxWidth={500} onChange={e => setImage(e.image)} />
                                <TextField
                                    fullWidth
                                    label="Title/Credit"
                                    {...register('artworkCredit')}
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{ maxLength: 90 }}
                                    helperText={`${90 - (watch('artworkCredit')?.length || 0)} characters remaining.`}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <DateTimePicker
                                    label="Scheduled Start"
                                    onChange={date => setStartDate(date)}
                                    value={startDate}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DateTimePicker
                                    label="Expiration"
                                    onChange={date => setExpiration(date)}
                                    value={expiration}
                                    helperText={!!errors.expiration && <>Start date is required</>}
                                    error={!!errors.expiration}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <fieldset style={{ padding: '1em' }}>
                                    <legend>Playlist Override Options</legend>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12}>
                                            <DateTimePicker
                                                label="Playlist Start"
                                                onChange={date => setPlaylistStartDate(date)}
                                                value={playlistStartDate}
                                            />
                                        </Grid>
                                        <If condition={fetchListPlaylistsData?.playlistsByDate?.items}>
                                            <Grid item xs={12}>
                                                <FormControl fullWidth sx={{ pt: 2 }}>
                                                    <InputLabel id="select-helper-label">Official Playlist</InputLabel>
                                                    <Controller render={({ field }) => (
                                                        <Select labelId="select-helper-label" {...field}>
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            {fetchListPlaylistsData?.playlistsByDate?.items.map(playlist => (
                                                                <MenuItem value={playlist.id} key={playlist.id}>
                                                                    {playlist.title}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>

                                                    )}
                                                        defaultValue={getFileRequest?.playlist?.id}
                                                        name={"fileRequestPlaylistId"}
                                                        control={control}
                                                    >
                                                    </Controller>
                                                    <FormHelperText>This overrides the default playlist. Unset this to use the default playlist.</FormHelperText>
                                                </FormControl>
                                            </Grid>
                                        </If>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="External Playlist URL"
                                                {...register('playlistExternalUrl')}
                                                inputProps={{ maxLength: 500 }}
                                                helperText={<>This overrides the default playlist and the official playlist. Unset this to use the default or official playlist.<br /> {500 - (watch('playlistExternalUrl')?.length || 0)} characters remaining.</>}
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                    </Grid>
                                </fieldset>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{ float: 'left' }}
                                    onClick={handleClickOpenConfirm}
                                >
                                    Delete
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper >
            </Grid >
        </Grid >
    );
}

export default EditPublicAssignment
