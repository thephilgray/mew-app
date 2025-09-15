import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, CircularProgress, Divider, Grid,  IconButton,  InputLabel, Link, Paper, TextField, Typography, Switch, FormControlLabel } from '@mui/material'
import { makeStyles } from 'tss-react/mui';
import { updateMembershipService, updateProfile, updateProfileService } from '../../graphql/d3/mutations'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import {  GridColDef } from '@mui/x-data-grid';
import { Add, Delete,  OpenInNew, Save } from '@mui/icons-material'
import { format } from 'date-fns/esm'
import GroupGuard from '../Auth/GroupGuard'
import { Group, ROUTES } from '../../constants'
import { useProfile, useUser } from '../../auth/hooks'
import { getProfile } from '../../auth/hooks.queries';
import AppBreadcrumbs from '../AppBreadcrumbs';
import { v4 as uuidv4 } from 'uuid';
import { navigate } from 'gatsby';
import { getCloudFrontURL } from '../../utils';
import ImagePicker, { uploadImage } from '../ImagePicker';
import { useLocation } from 'react-use';
import ConnectMailchimpButton from '../ConnectMailchimpButton';
import Loading from '../Loading';

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
    notificationSettings: {
        emailDigest: {
            enabled: boolean
        }
    }
    featuredSubmissions: any[]
    curatedPlaylists: any[]
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
    } = useQuery(gql`
    query GetProfile($email: String!) {
      getProfile(email: $email) {
        id
        email
        name
        displayName
        links {
          id
          text
          url
        }
        avatar
        bio
        sub
        notificationSettings {
          emailDigest {
            enabled
          }
        }
        features {
          mailchimp {
            enabled
          }
        }
        apiKeys {
          items {
            id
            keyName
            profileID
            email
            createdAt
          }
        }
        submissions {
          items {
            id
            name
            artist
          }
        }
        playlists {
          items {
            id
            title
          }
        }
        featuredSubmissions {
          items {
            id
            fileRequestSubmission {
              id
            }
          }
        }
        curatedPlaylists {
          items {
            id
            playlist {
              id
            }
          }
        }
      }
    }
  `, {
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
        watch,
        reset,
        formState: {
            errors: editProfileFormErrors,
        } } = useForm<EditProfileForm>({
            defaultValues: {
                bio: '',
                displayName: '',
                name: '',
                notificationSettings: {
                    emailDigest: {
                        enabled: true
                    }
                },
                featuredSubmissions: [],
                curatedPlaylists: []
            }
        })

    useEffect(() => {
        if (profile) {
            const featuredSubmissions = profile?.submissions?.items
                .filter(submission => profile?.featuredSubmissions?.items
                    .some(featured => featured.fileRequestSubmission.id === submission.id)) || []
            const curatedPlaylists = profile?.playlists?.items
                .filter(playlist => profile?.curatedPlaylists?.items
                    .some(curated => curated.playlist.id === playlist.id)) || []
            reset({ ...profile, featuredSubmissions, curatedPlaylists });
        }
    }, [profile, reset]);

    const { fields: linkFields, append: appendLink, prepend, remove: removeLink, swap, move, insert } = useFieldArray({
        control: editProfileFormControl,
        name: "links",
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

    const [createProfileFeaturedSubmissions] = useMutation(gql`
        mutation CreateProfileFeaturedSubmissions($input: CreateProfileFeaturedSubmissionsInput!) {
            createProfileFeaturedSubmissions(input: $input) { id }
        }
    `)
    const [deleteProfileFeaturedSubmissions] = useMutation(gql`
        mutation DeleteProfileFeaturedSubmissions($input: DeleteProfileFeaturedSubmissionsInput!) {
            deleteProfileFeaturedSubmissions(input: $input) { id }
        }
    `)
    const [createProfileCuratedPlaylists] = useMutation(gql`
        mutation CreateProfileCuratedPlaylists($input: CreateProfileCuratedPlaylistsInput!) {
            createProfileCuratedPlaylists(input: $input) { id }
        }
    `)
    const [deleteProfileCuratedPlaylists] = useMutation(gql`
        mutation DeleteProfileCuratedPlaylists($input: DeleteProfileCuratedPlaylistsInput!) {
            deleteProfileCuratedPlaylists(input: $input) { id }
        }
    `)

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
                notificationSettings: inputData.notificationSettings,
                ...inputData?.links && { links: inputData?.links?.map(({ id, url, text }) => ({ id, url, text })) }
            }
        }

        const initialFeaturedSubmissions = profile?.featuredSubmissions?.items || []
        const newFeaturedSubmissions = inputData.featuredSubmissions || []
        const submissionsToAdd = newFeaturedSubmissions.filter(s => !initialFeaturedSubmissions.some(i => i.fileRequestSubmission.id === s.id))
        const submissionsToRemove = initialFeaturedSubmissions.filter(i => !newFeaturedSubmissions.some(s => s.id === i.fileRequestSubmission.id))

        await Promise.all(submissionsToAdd.map(s => createProfileFeaturedSubmissions({ variables: { input: { profileId: profile.id, fileRequestSubmissionId: s.id } } })))
        await Promise.all(submissionsToRemove.map(s => deleteProfileFeaturedSubmissions({ variables: { input: { id: s.id } } })))

        const initialCuratedPlaylists = profile?.curatedPlaylists?.items || []
        const newCuratedPlaylists = inputData.curatedPlaylists || []
        const playlistsToAdd = newCuratedPlaylists.filter(p => !initialCuratedPlaylists.some(i => i.playlist.id === p.id))
        const playlistsToRemove = initialCuratedPlaylists.filter(i => !newCuratedPlaylists.some(p => p.id === i.playlist.id))

        await Promise.all(playlistsToAdd.map(p => createProfileCuratedPlaylists({ variables: { input: { profileId: profile.id, playlistId: p.id } } })))
        await Promise.all(playlistsToRemove.map(p => deleteProfileCuratedPlaylists({ variables: { input: { id: p.id } } })))

        return updateProfileRequest({ variables }).then(() =>
            navigate(ROUTES.profile.path))
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
            valueFormatter: ({ value = '' }: ColDef) => value && format(new Date(value), 'MM/dd/yyyy H:mm'),
        },
    ]

    const keyNameFormatter = (str: string) => str.toUpperCase().replace(/[^a-zA-Z0-9_.-]/g, '_')

    if (getProfileLoading) return <Loading />

    return <Grid container spacing={3}>
        <Grid item xs={12}>
            <AppBreadcrumbs
                paths={[ROUTES.home, ROUTES.profile]}
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
                                inputProps={{ maxLength: 90 }}
                            />
                            <TextField
                                label="Display Name"
                                {...registerEditProfileForm('displayName', { required: false, pattern: /^((?!\/).)*$/i })}
                                fullWidth
                                variant="standard"
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{ maxLength: 25 }}
                                helperText={`${25 - (watch('displayName')?.length || 0)} characters remaining.`}
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
                                inputProps={{ maxLength: 1000 }}
                                helperText={`${1000 - (watch('bio')?.length || 0)} characters remaining.`}
                            />

                            <Controller
                                name="featuredSubmissions"
                                control={editProfileFormControl}
                                render={({ field }) => {
                                    const { onChange, value } = field;
                                    return (
                                        <Autocomplete
                                            multiple
                                            options={profile?.submissions?.items || []}
                                            getOptionLabel={(option) => `${option.artist} - ${option.name}`}
                                            value={value || []}
                                            isOptionEqualToValue={(option, value) => option.id === value.id}
                                            onChange={(e, newValue) => {
                                                onChange(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="standard"
                                                    label="Featured Tracks"
                                                    placeholder="Select tracks"
                                                />
                                            )}
                                        />
                                    );
                                }}
                            />

                            <Controller
                                name="curatedPlaylists"
                                control={editProfileFormControl}
                                render={({ field }) => {
                                    const { onChange, value } = field;
                                    return (
                                        <Autocomplete
                                            multiple
                                            options={profile?.playlists?.items || []}
                                            getOptionLabel={(option) => option.title}
                                            value={value || []}
                                            isOptionEqualToValue={(option, value) => option.id === value.id}
                                            onChange={(e, newValue) => {
                                                onChange(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="standard"
                                                    label="Curated Playlists"
                                                    placeholder="Select playlists"
                                                />
                                            )}
                                        />
                                    );
                                }}
                            />

                            <InputLabel>Links</InputLabel>
                            {linkFields.length ? linkFields.map((item, index) => (
                                <Paper key={item.id} sx={{ p: '.125em 1em', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <TextField {...registerEditProfileForm(`links.${index}.url`, {
                                        required: "Valid URL is required",
                                        pattern: {
                                            value: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/,
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
                                        <OpenInNew />
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
                            <Grid item xs={12}>
                                <section className={classes.section}>
                                    <Typography variant="h5" component="h2">
                                        Notification Settings
                                    </Typography>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                {...registerEditProfileForm('notificationSettings.emailDigest.enabled')}
                                                color="primary"
                                                checked={watch('notificationSettings.emailDigest.enabled')}
                                            />
                                        }
                                        label="Email Digests"
                                    />
                                </section>
                            </Grid>
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
        </GroupGuard>
    </Grid>;
}

export default EditProfile
