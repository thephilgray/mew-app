import React, { useState, useEffect } from 'react'
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
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { add } from 'date-fns/esm'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Link, navigate } from 'gatsby'
import { API } from 'aws-amplify'
import { Editor } from '@tinymce/tinymce-react'
import { v4 as uuidv4 } from 'uuid';
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { FileCopy } from '@mui/icons-material'
import { useCopyToClipboard } from 'react-use'
import { ROUTE_NAMES } from '../../pages/app'
import * as mutations from '../../graphql/mutations'
import { getFileRequest as getFileRequestQuery } from '../../graphql/queries'
import ImagePicker, { uploadImage } from '../ImagePicker';
import { getCloudFrontURL } from '../../utils';

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
}

const EditPublicAssignment: React.FC<{ workshopId: string, assignmentId: string }> = ({ workshopId = '', assignmentId = '' }) => {
    const { data: { getFileRequest } = {}, loading, error } = useQuery(gql(getFileRequestWithNoLimit), {
        variables: { id: assignmentId },
    })
    const {
        register,
        handleSubmit,
        setValue,
        getValues,

        formState: {
            errors,
        },
    } = useForm<Inputs>()
    const [details, setDetails] = useState<string>('')
    const [required, setRequired] = useState<boolean>(true)
    const [expiration, setExpiration] = useState<Date | null>(add(new Date(), { weeks: 1 }))
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
            setRequired(getFileRequest.required)
            setValue('artworkCredit', getFileRequest.artwork?.credit)
        }
    }, [getFileRequest])

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
                    }
                },
            },
        })
        // then redirect
        navigate(ROUTE_NAMES.assignment.getPath({ assignmentId }))
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
        navigate(ROUTE_NAMES.home.path)
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
                        ROUTE_NAMES.home,
                        ROUTE_NAMES.assignments,
                        { path: ROUTE_NAMES.assignment.getPath({ assignmentId }), name: getValues().title },
                        ROUTE_NAMES.editAssignment,
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
                                        to={ROUTE_NAMES.newPublicSubmission.getPath({
                                            assignmentId: getFileRequest.id,
                                        })}
                                    >
                                        {window.origin}
                                        {ROUTE_NAMES.newPublicSubmission.getPath({
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
                                                `${window.origin}${ROUTE_NAMES.newPublicSubmission.getPath({
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
                                    helperText={!!errors.title && <>Title is required</>} />
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
                                <TextField fullWidth label="Title/Credit" {...register('artworkCredit')} InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={6}>
                                <DatePicker
                                    fullWidth
                                    autoOk
                                    error={!!errors.expiration}
                                    inputVariant="outlined"
                                    variant="inline"
                                    inputFormat="MM/dd/yyyy"
                                    label="Expiration"
                                    helperText={!!errors.expiration && <>Start date is required</>}
                                    onChange={(date) => setExpiration(date)}
                                    value={expiration}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TimePicker
                                    id="due-time-picker"
                                    fullWidth
                                    label="Time"
                                    value={expiration}
                                    inputVariant="outlined"
                                    autoOk
                                    variant="inline"
                                    onChange={setExpiration}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
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
                </Paper>
            </Grid>
        </Grid>
    );
}

export default EditPublicAssignment
