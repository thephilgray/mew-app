import React, { useEffect, useState, useRef } from 'react'
import { Avatar, Box, Button, CircularProgress, Divider, Grid, IconButton, InputBase, InputLabel, List, ListItem, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui';
import { updateProfile, updateProfileService } from '../../graphql/mutations'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { useFieldArray, useForm } from 'react-hook-form'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Add, Close, Delete, Launch, Save } from '@mui/icons-material'
import { format } from 'date-fns/esm'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'
import { useProfile, useUser } from '../../auth/hooks'
import { getProfile } from '../../graphql/queries';
import AppBreadcrumbs from '../AppBreadcrumbs';
import { ROUTE_NAMES } from '../../pages/app';
import { Storage } from 'aws-amplify';
import Resizer from "react-image-file-resizer";
import { v4 as uuidv4 } from 'uuid';
import { navigate } from 'gatsby';
import { getCloudFrontURL } from '../../utils';

Storage.configure({ track: true });

type APIKeyForm = {
    keyName: string
    key: string
}

type Link = {
    id: string
    text: string
    url: string
}

type EditProfileForm = {
    email: string
    name: string
    displayName: string
    links: [Link]
    avatar: string
    bio: string
}

const useStyles = makeStyles()((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    section: {
        marginBottom: theme.spacing(2),
    },
}));

const EditProfile = (): JSX.Element => {
    const { classes } = useStyles()
    const user = useUser()
    const profileInState = useProfile()
    const [keyName, setKeyName] = useState<string>('')
    const [key, setKey] = useState<string>('')
    const [image, setImage] = useState<string>('')

    const {
        loading: getProfileLoading,
        error: getProfileError,
        data: getProfileData,
        refetch: getProfileRefetch,
    } = useQuery(gql(getProfile), {
        variables: { email: user.email },
        fetchPolicy: 'network-only'

    })
    const profile = getProfileData?.getProfile || profileInState
    const AVATAR_DOWNLOAD_PATH = profile?.avatar;
    const AVATAR_UPLOAD_PATH = `images/${profile?.id}/avatar-${uuidv4()}.jpg`


    const {
        control: editProfileFormControl,
        register: registerEditProfileForm,
        getValues: getEditProfileFormValues,
        handleSubmit: handleEditProfileForm,
        setValue: setEditProfileFormValue,
        formState: {
            errors: editProfileFormErrors,
        } } = useForm<EditProfileForm>({
            values: profile,
            defaultValues: {
                bio: '',
                displayName: '',
                name: '',
            }
        })

    const { fields: linkFields, append: appendLink, prepend, remove: removeLink, swap, move, insert } = useFieldArray({
        control: editProfileFormControl, // control props comes from useForm (optional: if you are using FormContext)
        name: "links", // unique name for your Field Array
    });

    const [apiKeyFormActive, setApiKeyFormActive] = useState<boolean>(false)
    const {
        register: registerApiKeyField,
        handleSubmit: handleApiKeySubmit,
        setValue: setApiKeyFieldValue,
        formState: {
            errors: apiKeyErrors,
        },
    } = useForm<APIKeyForm>()

    const [
        updateProfileRequest,
        { error: updateProfileRequestError, data: updateProfileRequestData, loading: updateProfileRequestLoading },
    ] = useMutation(gql(updateProfile))

    const [
        updateProfileServiceRequest,
        { error: updateProfileServiceError, data: updateProfileServiceData },
    ] = useMutation(gql(updateProfileService))

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                300,
                300,
                "JPEG",
                100,
                0,
                (uri) => {
                    setImage(uri)
                },
                "base64"
            );
        });

    let fileInput = React.createRef();

    const onOpenFileDialog = () => {
        fileInput.current.click();
    };

    const onProcessFile = async (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        try {
            await resizeFile(file);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (profile?.avatar) {
            setImage(getCloudFrontURL(AVATAR_DOWNLOAD_PATH))
        }
    }, [profile])

    useEffect(() => {
        setApiKeyFieldValue('keyName', keyName)
        registerApiKeyField('keyName', { required: true })
    }, [keyName])

    useEffect(() => {
        setApiKeyFieldValue('key', key)
        registerApiKeyField('key', { required: true })
    }, [key])

    useEffect(() => {
        if (updateProfileServiceData) {
            onDismissApiKeyForm()
            getProfileRefetch()
        }
    }, [updateProfileServiceData])

    const onSubmitEditProfileForm = async (inputData) => {
        const imageUpdated = image && !image.includes(profile?.avatar);
        if (imageUpdated) {
            try {
                const imageResult = await fetch(image)
                const blob = await imageResult.blob()
                const file = new File([blob], 'avatar.jpg')
                await Storage.put(AVATAR_UPLOAD_PATH, file, {

                    contentType: "image/jpeg",
                })
            } catch (error) {
                console.log(error)
            }
        }

        const variables = {
            input: {
                email: inputData.email,
                name: inputData.name,
                displayName: inputData.displayName,
                ...imageUpdated && { avatar: AVATAR_UPLOAD_PATH },
                bio: inputData.bio,
                links: inputData.links.map(({ id, url, text }) => ({ id, url, text })) // don't submit _typename
            }
        }

        return updateProfileRequest({ variables }).then(() =>
            navigate(ROUTE_NAMES.profile.path))
    }

    const onSubmitApiKeyForm = (inputData: APIKeyForm) => {
        const variables = {
            email: profile.email,
            sub: profile.sub,
            profileID: profile.id,
            apiKeyUpdate: {
                action: 'ADD',
                keyName,
                key,
            },
        }

        return updateProfileServiceRequest({ variables })
    }

    const onDismissApiKeyForm = () => {
        setKeyName('')
        setKey('')
        setApiKeyFormActive(false)
    }

    const onDeleteApiKey = (selectedKeyName, keyId) => {
        const variables = {
            email: profile.email,
            sub: profile.sub,
            profileID: profile.id,
            apiKeyUpdate: {
                action: 'DELETE',
                keyName: selectedKeyName,
                keyId: keyId,
            },
        }

        return updateProfileServiceRequest({ variables })
    }


    const columns: GridColDef[] = [
        {
            field: 'keyName',
            headerName: 'Key Name',
            width: 500,
            valueFormatter: ({ value = '' }) => value.split('/').splice(-1)[0],
        },
        {
            field: 'createdAt',
            type: 'date',
            headerName: 'Created',
            width: 200,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            valueFormatter: ({ value = '' }: ColDef) => value && format(new Date(value), 'MM/dd/yyyy H:mm'),
        },
        // {
        //     field: 'actions',
        //     headerName: 'Actions',
        //     width: 200,
        //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //     // @ts-ignore
        //     renderCell: ({row}) => {
        //         return (
        //             <IconButton onClick={() => onDeleteApiKey(row.keyName, row.id)} size="large">
        //                 <Delete />
        //             </IconButton>
        //         )
        //     },
        // },
    ]

    const keyNameFormatter = (str: string) => str.toUpperCase().replace(/[^a-zA-Z0-9_.-]/g, '_')

    if (getProfileLoading) return <CircularProgress size={20} color="secondary" />

    return <Grid container spacing={3}>
        <Grid item xs={12}>
            <AppBreadcrumbs
                paths={[ROUTE_NAMES.home, ROUTE_NAMES.profile]}
            />
        </Grid>
        <Grid item xs={12}>
            <section className={classes.section}>
                <Typography variant="h5" component="h2">
                    Profile Details
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            component="form"
                            onSubmit={handleEditProfileForm(onSubmitEditProfileForm)}
                            sx={{
                                alignItems: 'center',
                                width: '100%',
                                borderRadius: 1,
                                bgcolor: 'background.paper',
                                color: 'text.secondary',
                                '& svg': {
                                    m: 1.5,
                                },
                                '& hr': {
                                    mx: 0.5,
                                },
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                label="Email"
                                {...registerEditProfileForm('email')}
                                fullWidth
                                variant="standard"
                                margin="normal"
                                disabled
                                helperText="The email address that was used to register your membership. It cannot be changed."
                                InputLabelProps={{ shrink: true }}
                            />
                            <TextField
                                label="Name"
                                {...registerEditProfileForm('name', { required: true, pattern: /^((?!\/).)*$/i })}
                                autoFocus
                                error={!!editProfileFormErrors.name}
                                fullWidth
                                variant="standard"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />
                            <TextField
                                label="Display Name"
                                {...registerEditProfileForm('displayName', { required: false, pattern: /^((?!\/).)*$/i })}
                                fullWidth
                                variant="standard"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />
                            <Grid item xs={12}>
                                <InputLabel>Avatar</InputLabel>
                                <Box sx={{ p: 1 }}>
                                    <a>
                                        <input
                                            type="file"
                                            onChange={onProcessFile}
                                            ref={fileInput}
                                            hidden={true}
                                            accept="image/*"
                                        />
                                        <Avatar style={{ height: 100, width: 100, cursor: 'pointer' }} src={image} onClick={onOpenFileDialog} />
                                    </a>

                                </Box>
                            </Grid>
                            <TextField
                                label="Bio"
                                {...registerEditProfileForm('bio')}
                                fullWidth
                                multiline
                                rows={4}
                                variant="standard"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                            />

                            <InputLabel>Links</InputLabel>
                            {linkFields.length ? linkFields.map((item, index) => (
                                <Paper key={item.id} sx={{ p: '.125em 1em', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <TextField {...registerEditProfileForm(`links.${index}.url`, {
                                        required: "Valid URL is required",
                                        pattern: {
                                            value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                                            message: "Valid URL is required"
                                        },

                                    })}
                                        error={!!editProfileFormErrors?.links?.[index]}
                                        helperText={editProfileFormErrors?.links?.[index] && editProfileFormErrors.links[index]?.url?.message}
                                        placeholder="Add URL"
                                        inputProps={{ 'aria-label': 'url' }}
                                        sx={{ flex: 'auto' }} />
                                    <TextField {...registerEditProfileForm(`links.${index}.text`)} placeholder="Add Text" inputProps={{ 'aria-label': 'text' }} sx={{ flex: 'auto' }} />
                                    <Divider sx={{ height: 28, m: 0.5, justifySelf: 'flex-end' }} orientation="vertical" />
                                    <IconButton type="button" aria-label="delete" onClick={() => removeLink(index)}>
                                        <Delete />
                                    </IconButton>
                                </Paper>
                            )) : null}
                            <Button type="button" variant="outlined" aria-label="add" onClick={() => appendLink({ url: '', text: '', id: uuidv4() })} startIcon={<Add />}>
                                Add Link
                            </Button>
                            <Button
                                type="submit"
                                color="primary"
                                variant='contained'
                                fullWidth
                                startIcon={updateProfileRequestLoading ? <CircularProgress /> : <Save />}
                                aria-label="Update Profile"
                                size="large">
                                Update Profile
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </section>
        </Grid>
        <GroupGuard groups={[Group.admin]}>
            <Grid item xs={12}>
                <section className={classes.section}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h2">
                                Your API Keys
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'right' }}>
                            <Button
                                variant="contained"
                                disabled={apiKeyFormActive}
                                onClick={() => setApiKeyFormActive(true)}
                            >
                                Add Key
                            </Button>
                        </Grid>
                        {profile && profile.apiKeys && profile.apiKeys.items.length > 0 && (
                            <Grid item xs={12} className={classes.tableWrapper}>
                                <DataGrid
                                    rows={profile?.apiKeys?.items || []}
                                    columns={columns}
                                    disableRowSelectionOnClick={true}
                                    disableColumnSelector
                                    autoHeight
                                />
                            </Grid>
                        )}
                    </Grid>
                    {apiKeyFormActive && (
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box
                                    component="form"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        borderRadius: 1,
                                        bgcolor: 'background.paper',
                                        color: 'text.secondary',
                                        '& svg': {
                                            m: 1.5,
                                        },
                                        '& hr': {
                                            mx: 0.5,
                                        },
                                        '& > :not(style)': { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        label="Key Name"
                                        autoFocus
                                        value={keyName}
                                        onChange={(e) => setKeyName(keyNameFormatter(e.target.value))}
                                        fullWidth
                                        variant="standard"
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Key Value"
                                        value={key}
                                        onChange={(e) => setKey(e.target.value)}
                                        fullWidth
                                        variant="standard"
                                        margin="normal"
                                    />
                                    <IconButton
                                        type="button"
                                        color="secondary"
                                        aria-label="Close"
                                        onClick={onDismissApiKeyForm}
                                        size="large">
                                        <Close />
                                    </IconButton>
                                    <Divider orientation="vertical" flexItem />
                                    <IconButton
                                        type="button"
                                        color="primary"
                                        onClick={handleApiKeySubmit(onSubmitApiKeyForm)}
                                        aria-label="Save"
                                        size="large">
                                        <Save />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                    )}
                </section>
            </Grid>
        </GroupGuard>
    </Grid >;
}

export default EditProfile
