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
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers'
import { add } from 'date-fns/esm'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Link } from 'gatsby'
import { Editor } from '@tinymce/tinymce-react'
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { FileCopy } from '@material-ui/icons'
import { useCopyToClipboard } from 'react-use'
import { ROUTE_NAMES } from '../../pages/app'

const CREATE_FILE_REQUEST = gql`
    mutation CreateFileRequest($expiration: AWSDateTime!, $title: String, $details: String, $required: Boolean) {
        createFileRequest(input: { expiration: $expiration, title: $title, details: $details, required: $required }) {
            id
            title
            expiration
            details
            required
        }
    }
`

type Inputs = {
    expiration: Date
    title: string
    details: string
    required: boolean
}

const NewPublicAssignment: React.FC = () => {
    const { register, handleSubmit, errors, setValue } = useForm<Inputs>()
    const [createFileRequest, { error, data }] = useMutation(CREATE_FILE_REQUEST)
    const [details, setDetails] = useState<string | null>('')
    const [required, setRequired] = useState<boolean>(true)
    const [expiration, setExpiration] = useState<Date | null>(add(new Date(), { weeks: 1 }))
    const [showCopySuccessAlert, setShowCopySuccessAlert] = useState<boolean>(false)
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard()

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

    const onSubmit = (inputData: Inputs) => {
        return createFileRequest({
            variables: {
                expiration: inputData.expiration?.toISOString(),
                title: inputData.title,
                details: inputData.details,
                required: inputData.required,
            },
        })
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.newAssignment]} />
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: '1rem' }}>
                    <Typography variant="h5" component="h5" gutterBottom>
                        New Assignment
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={4}>
                            {error && (
                                <Grid item xs={12}>
                                    <Error errorMessage={error} />
                                </Grid>
                            )}
                            {data?.createFileRequest?.id && (
                                <Grid item xs={12} md={9}>
                                    <Link
                                        to={ROUTE_NAMES.newPublicSubmission.getPath({
                                            assignmentId: data.createFileRequest.id,
                                        })}
                                    >
                                        {window.origin}
                                        {ROUTE_NAMES.newPublicSubmission.getPath({
                                            assignmentId: data.createFileRequest.id,
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
                                                    assignmentId: data.createFileRequest.id,
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
                                    initialValue=""
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
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default NewPublicAssignment
