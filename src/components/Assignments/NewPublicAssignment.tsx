import React, { useState, useEffect } from 'react';
import {
    Grid,
    Button,
    Paper,
    TextField,
    Switch,
    FormControlLabel,
    Snackbar,
    IconButton,
    InputLabel,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { add } from 'date-fns/esm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'gatsby';
import { Editor } from '@tinymce/tinymce-react';
import Error from '../Error';
import AppBreadcrumbs from '../AppBreadcrumbs';
import { FileCopy } from '@mui/icons-material';
import { useCopyToClipboard } from 'react-use';
import ImagePicker, { uploadImage } from '../ImagePicker';
import { v4 as uuidv4 } from 'uuid';
import { createFileRequest as createFileRequestMutation } from '../../graphql/mutations';
import { ROUTES } from '../../constants';


type Inputs = {
    expiration: Date;
    title: string;
    details: string;
    required: boolean;
    artworkPath: string;
    artworkCredit: string;
};

const NewPublicAssignment: React.FC<{ workshopId?: string }> = ({
    workshopId = '',
}) => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const [createFileRequest, { error, data }] = useMutation(gql(createFileRequestMutation));
    const [details, setDetails] = useState<string>('');
    const [required, setRequired] = useState<boolean>(true);
    const [expiration, setExpiration] = useState<Date | null>(
        add(new Date(), { weeks: 1 })
    );
    const [showCopySuccessAlert, setShowCopySuccessAlert] =
        useState<boolean>(false);
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard();
    const [image, setImage] = useState<string>('')

    useEffect(() => {
        if (copyToClipboardState.value) {
            setShowCopySuccessAlert(true);
        }
    }, [copyToClipboardState]);

    useEffect(() => {
        setValue('expiration', expiration);
        register('expiration', { required: true });
    }, [expiration]);

    useEffect(() => {
        setValue('details', details);
        register('details');
    }, [details]);

    useEffect(() => {
        setValue('required', required);
        register('required');
    }, [required]);

    const onSubmit = async (inputData: Inputs) => {
        let ARTWORK_UPLOAD_PATH
        let ID
        if (image) {
            ID = uuidv4()
            ARTWORK_UPLOAD_PATH = `workshops/${workshopId}/artwork-${ID}.jpg`
            await uploadImage({ image, uploadPath: ARTWORK_UPLOAD_PATH, filename: 'artwork.jpg' })
        }
        return createFileRequest({
            variables: {
                input: {
                    expiration: inputData.expiration?.toISOString(),
                    title: inputData.title,
                    details: details,
                    required: required,
                    workshopId,
                    ...image && {
                        artwork: {
                            id: ID,
                            credit: inputData.artworkCredit,
                            path: ARTWORK_UPLOAD_PATH
                        }
                    }
                }
            },
        });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AppBreadcrumbs
                    workshopId={workshopId}
                    paths={[
                        ROUTES.home,
                        ROUTES.workshop,
                        ROUTES.newAssignment,
                    ]}
                />
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ padding: '1rem' }}>
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
                                        to={ROUTES.newPublicSubmission.getPath({
                                            assignmentId: data.createFileRequest.id,
                                        })}
                                    >
                                        {window.origin}
                                        {ROUTES.newPublicSubmission.getPath({
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
                                                `${window.origin
                                                }${ROUTES.newPublicSubmission.getPath({
                                                    assignmentId: data.createFileRequest.id,
                                                })}`
                                            )
                                        }
                                        size="large"
                                    >
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
                                    helperText={
                                        !!errors.title ?
                                            'Title is required' :
                                            `${90 - (watch('title')?.length || 0)} characters remaining`}
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
                                    cloudChannel="5"
                                    value={details}
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image imagetools charmap print preview anchor',
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
                                <ImagePicker width={200} height={200} maxHeight={500} maxWidth={500} onChange={e => setImage(e.image)} />
                                <TextField
                                    fullWidth
                                    label="Title/Credit"
                                    {...register('artworkCredit')}
                                    inputProps={{ maxLength: 90 }}
                                    helperText={`${90 - (watch('artworkCredit')?.length || 0)} characters remaining.`}
                                />
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
                                    helperText={
                                        !!errors.expiration && <>Start date is required</>
                                    }
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
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ float: 'right' }}
                                >
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default NewPublicAssignment;
