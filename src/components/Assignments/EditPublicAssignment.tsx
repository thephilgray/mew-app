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
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers'
import { add } from 'date-fns/esm'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Link, navigate } from 'gatsby'
import { API } from 'aws-amplify'
import { Editor } from '@tinymce/tinymce-react'
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { FileCopy } from '@material-ui/icons'
import { useCopyToClipboard } from 'react-use'
import { ROUTE_NAMES } from '../../pages/app'
import * as mutations from '../../graphql/mutations'

const GET_FILE_REQUEST = gql`
    query GetFileRequest($id: ID!) {
        getFileRequest(id: $id) {
            id
            title
            createdAt
            expiration
            required
            details
            _version
            _deleted
            submissions {
                items {
                    fileRequestId
                }
            }
        }
    }
`

type Inputs = {
    expiration: Date
    title: string
    details: string
    required: boolean
}

const EditPublicAssignment: React.FC<{ assignmentId: string }> = ({ assignmentId = '' }) => {
    const { data: { getFileRequest } = {}, loading, error } = useQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
    })
    const { register, handleSubmit, errors, setValue, getValues } = useForm<Inputs>()
    const [details, setDetails] = useState<string>('')
    const [required, setRequired] = useState<boolean>(true)
    const [expiration, setExpiration] = useState<Date | null>(add(new Date(), { weeks: 1 }))
    const [showCopySuccessAlert, setShowCopySuccessAlert] = useState<boolean>(false)
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard()
    const [openConfirm, setOpenConfirm] = React.useState(false)

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
        }
    }, [getFileRequest])

    useEffect(() => {
        if (copyToClipboardState.value) {
            setShowCopySuccessAlert(true)
        }
    }, [copyToClipboardState])

    useEffect(() => {
        setValue('expiration', expiration)
        register({ name: 'expiration' }, { required: true })
    }, [expiration])

    useEffect(() => {
        setValue('details', details)
        register({ name: 'details' })
    }, [details])

    useEffect(() => {
        setValue('required', required)
        register({ name: 'required' })
    }, [required])

    const onSubmit = async (inputData: Inputs) => {
        await API.graphql({
            query: mutations.updateFileRequest,
            variables: {
                input: {
                    id: assignmentId,
                    expiration: inputData.expiration?.toISOString(),
                    title: inputData.title,
                    details: details,
                    required: required,
                    _version: getFileRequest._version,
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
                    _version: getFileRequest._version,
                },
            },
        })
        // then redirect
        navigate(ROUTE_NAMES.home.path)
    }

    if (error) return <Error errorMessage={error} />
    if (loading) return <CircularProgress />
    if (getFileRequest?._deleted || (!loading && !getFileRequest?.submissions?.items))
        return <p>Assignment does not exist or has been deleted.</p>

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
                        { path: ROUTE_NAMES.assignment.getPath({ assignmentId }), name: getValues().title },
                        ROUTE_NAMES.editAssignment,
                    ]}
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
                                    >
                                        <FileCopy />
                                    </IconButton>
                                </Grid>
                            )}
                            <Grid item xs={12} md={9}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    name="title"
                                    inputRef={register({ required: true })}
                                    error={!!errors.title}
                                    helperText={!!errors.title && <>Title is required</>}
                                />
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
                                    initialValue={details}
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
                            <Grid item xs={6}>
                                <KeyboardDatePicker
                                    fullWidth
                                    autoOk
                                    error={!!errors.expiration}
                                    inputVariant="outlined"
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    label="Expiration"
                                    helperText={!!errors.expiration && <>Start date is required</>}
                                    onChange={(date) => setExpiration(date)}
                                    value={expiration}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <KeyboardTimePicker
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
    )
}

export default EditPublicAssignment
