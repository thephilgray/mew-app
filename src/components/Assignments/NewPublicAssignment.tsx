import React, { useState, useEffect } from 'react';
import {
    Grid,
    Button,
    Paper,
    TextField,
    Switch,
    FormControlLabel,
    InputLabel,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';
import { add } from 'date-fns/esm';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Link, navigate } from 'gatsby';
import { Editor } from '@tinymce/tinymce-react';
import Error from '../Error';
import AppBreadcrumbs from '../AppBreadcrumbs';
import { useCopyToClipboard } from 'react-use';
import ImagePicker, { uploadImage } from '../ImagePicker';
import { v4 as uuidv4 } from 'uuid';
import { createFileRequest as createFileRequestMutation } from '../../graphql/mutations';
import { ROUTES } from '../../constants';
import { getWorkshop } from '../../graphql/queries';
import { formatDateTimeInDefaultTimeZone } from '../../utils';

type Inputs = {
    expiration: Date;
    title: string;
    details: string;
    required: boolean;
    artworkPath: string;
    artworkCredit: string;
    startDate: Date;
    playlistStartDate: Date;
    playlistExternalUrl: String;
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
    const { data: getWorkshopData } = useQuery(gql(getWorkshop), {
        variables: { id: workshopId },
    })
    const [createFileRequest, { error, data }] = useMutation(gql(createFileRequestMutation));
    const [details, setDetails] = useState<string>('');
    const [required, setRequired] = useState<boolean>(true);
    const [expiration, setExpiration] = useState<Date | null>(
        add(new Date(), { weeks: 1 })
    );
    const [startDate, setStartDate] = useState<Date | null>(
        new Date()
    )
    const [playlistStartDate, setPlaylistStartDate] = useState<Date | null>(
        add(new Date(), { weeks: 1 })
    )
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
        setValue('startDate', startDate);
        register('startDate');
    }, [startDate]);

    useEffect(() => {
        setValue('playlistStartDate', playlistStartDate);
        register('playlistStartDate');
    }, [playlistStartDate]);

    useEffect(() => {
        setValue('details', details);
        register('details');
    }, [details]);

    useEffect(() => {
        setValue('required', required);
        register('required');
    }, [required]);

    useEffect(() => {
        if (data?.createFileRequest?.id) {
            navigate(ROUTES.assignment.getPath({ assignmentId: data.createFileRequest.id }))
        }

    }, [data])

    const onSubmit = async (inputData: Inputs) => {
        let ARTWORK_UPLOAD_PATH
        let ID
        if (image) {
            ID = uuidv4()
            ARTWORK_UPLOAD_PATH = `workshops/${workshopId}/artwork-${ID}.jpg`
            await uploadImage({ image, uploadPath: ARTWORK_UPLOAD_PATH, filename: 'artwork.jpg' })
        }

        const input = {
            type: 'FileRequest',
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
            },
            ...inputData.startDate && { startDate: inputData.startDate?.toISOString() },
            ...inputData.playlistStartDate && { playlistStartDate: inputData.playlistStartDate?.toISOString() },
            playlistExternalUrl: inputData.playlistExternalUrl
        };


        return createFileRequest({
            variables: {
                input
            },
        });
    };

    return (
        <Grid container spacing={2} sx={{ pb: 4 }}>
            <Grid item xs={12}>
                <AppBreadcrumbs
                    workshop={getWorkshopData?.getWorkshop}
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
                            <Grid item xs={12} sm={6}>
                                <DateTimePicker
                                    label="Scheduled Start"
                                    onChange={date => setStartDate(date)}
                                    value={startDate}
                                    slotProps={{
                                        textField: {
                                            helperText: <>{formatDateTimeInDefaultTimeZone(startDate)}</>
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DateTimePicker
                                    label="Expiration"
                                    onChange={date => setExpiration(date)}
                                    value={expiration}
                                    error={!!errors.expiration}
                                    slotProps={{
                                        textField: {
                                            helperText: !!errors.expiration ? <>Start date is required</> : <>{formatDateTimeInDefaultTimeZone(expiration)}</>
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <fieldset style={{ padding: '1em' }}>
                                    <legend>Playlist Override Options</legend>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} sm={6}>
                                            <DateTimePicker
                                                label="Playlist Start"
                                                onChange={date => setPlaylistStartDate(date)}
                                                value={playlistStartDate}
                                                slotProps={{
                                                    textField: {
                                                        helperText: <>{formatDateTimeInDefaultTimeZone(playlistStartDate)}</>
                                                    }
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="External Playlist URL"
                                                {...register('playlistExternalUrl')}
                                                inputProps={{ maxLength: 500 }}
                                                helperText={`${500 - (watch('playlistExternalUrl')?.length || 0)} characters remaining.`}
                                            />
                                        </Grid>
                                    </Grid>
                                </fieldset>
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
