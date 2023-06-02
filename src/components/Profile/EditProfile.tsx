import React, { useEffect, useState, useRef } from 'react'
import { Box, Button, CircularProgress, Divider, Grid, Icon, IconButton, InputBase, InputLabel, Link, List, ListItem, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui';
import { updateMembershipService, updateProfile, updateProfileService } from '../../graphql/mutations'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { useFieldArray, useForm } from 'react-hook-form'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Add, Close, Delete, Launch, Mail, Save } from '@mui/icons-material'
import { format } from 'date-fns/esm'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'
import { useProfile, useUser } from '../../auth/hooks'
import { getProfile } from '../../graphql/queries';
import AppBreadcrumbs from '../AppBreadcrumbs';
import { ROUTE_NAMES } from '../../pages/app';
import { v4 as uuidv4 } from 'uuid';
import { navigate } from 'gatsby';
import { getCloudFrontURL } from '../../utils';
import ImagePicker, { uploadImage } from '../ImagePicker';
import If from '../If';
import { useLocation } from 'react-use';
import ConnectMailchimpButton from '../ConnectMailchimpButton';

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
    const { profile: profileInState, refetch: refetchProfile } = useProfile()
    const [keyName, setKeyName] = useState<string>('')
    const [key, setKey] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [connectLoading, setConnectLoading] = useState<boolean>(false)
    const location = useLocation()

    const query = new URLSearchParams(location.search);
    const code = query.get("code");
    const OAUTH_CALLBACK = `${location.protocol}//${location.host}/app/profile/edit`
    const MAILCHIMP_CLIENT_ID = process.env.GATSBY_MAILCHIMP_CLIENT_ID

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

    const [
        updateMembershipServiceRequest,
        { error: updateMembershipServiceError, data: updateMembershipServiceData, called: updateMembershipServiceRequestCalled },
    ] = useMutation(gql(updateMembershipService))

    useEffect(() => {
        refetchProfile()
    }, [])

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

    useEffect(() => {
        if (!updateMembershipServiceRequestCalled && code) {
            setConnectLoading(true)
            updateMembershipServiceRequest({
                variables: {
                    workshopId: "profile",
                    action: "CONNECT_MAILCHIMP",
                    payloads: [
                        {
                            emailAddress: user.email,
                            mailchimpOauthCode: code,
                            mailchimpOauthCallback: OAUTH_CALLBACK,
                            mailchimpClientId: MAILCHIMP_CLIENT_ID

                        }
                    ]

                }
            }).then(() => getProfileRefetch().then(() => {
                setConnectLoading(false)
                navigate(location.pathname)
            }))

        }
    }, [updateMembershipServiceRequestCalled, code])

    const onSubmitEditProfileForm = async (inputData) => {
        const imageUpdated = image && !image.includes(profile?.avatar);
        if (imageUpdated) {
            await uploadImage({
                uploadPath: AVATAR_UPLOAD_PATH,
                filename: 'avatar.jpg',
                image
            })
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
                                <ImagePicker
                                    imageURL={profile?.avatar && getCloudFrontURL(AVATAR_DOWNLOAD_PATH)}
                                    width={200}
                                    height={200}
                                    maxHeight={300}
                                    maxWidth={300}
                                    isAvatar
                                    onChange={(e) => setImage(e.image)} />
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
                                    <IconButton component="a" target="_blank" alt="open link" href={getEditProfileFormValues(`links.${index}.url`)}>
                                        <Launch />
                                    </IconButton>
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
            <Grid item xs={12} sx={{ mt: 2 }}>
                <section className={classes.section}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h2">
                                Your Connected Apps
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.tableWrapper}>
                            <ConnectMailchimpButton
                                mailchimpEnabled={!!profile?.features?.mailchimp?.enabled}
                                connectLoading={connectLoading}
                                callback={getProfileRefetch}
                            />
                        </Grid>
                    </Grid>
                </section>
            </Grid>
            {/* <Grid item xs={12}>
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
            </Grid> */}
        </GroupGuard>
    </Grid >;
}

export default EditProfile
