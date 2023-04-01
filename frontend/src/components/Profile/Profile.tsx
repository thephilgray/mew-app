import React, { useEffect, useState } from 'react'
import { Avatar, Badge, Grid, IconButton, TextField, Typography } from '@mui/material'
import { withStyles, makeStyles } from 'tss-react/mui';
// import ImageUploader from '../lib/ImageUploader/ImageUploader'
// import ImageCropper from '../lib/ImageUploader/ImageCropper'
// import mewAppLogo from '../../assets/mewlogo.png'
// import { EditRounded } from '@mui/icons-material'
import { updateProfileService } from '../../../../src/graphql/mutations'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, Divider } from '@mui/material'
import { Close, Delete, Save } from '@mui/icons-material'
import { format } from 'date-fns/esm'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'
import { useProfile, useUser } from '../../auth/hooks'
import { getProfile } from '../../../../src/graphql/queries';

type APIKeyForm = {
    keyName: string
    key: string
}

// const StyledBadge = withStyles(Badge, (theme) => ({
//     badge: {
//         // backgroundColor: '#44b700',
//         // color: '#44b700',
//         boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,

//         '&::after': {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             borderRadius: '50%',
//             border: '1px solid currentColor',
//             content: '""',
//         },
//         '&:hover:after': {
//             animation: '$ripple 1.2s infinite ease-in-out',
//         },
//     },
//     '@keyframes ripple': {
//         '0%': {
//             transform: 'scale(.8)',
//             opacity: 1,
//         },
//         '100%': {
//             transform: 'scale(2.4)',
//             opacity: 0,
//         },
//     },
// }));

// const SmallAvatar = withStyles(Avatar, (theme) => ({
//     root: {
//         width: 22,
//         height: 22,
//         border: `2px solid ${theme.palette.background.paper}`,
//     },
// }));

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
    // tableWrapper: {
    //     height: '400px',
    // },
}));

const Profile = (): JSX.Element => {
    const { classes } = useStyles()
    const user = useUser()

    const {
        loading: getProfileLoading,
        error: getProfileError,
        data: getProfileData,
        refetch: getProfileRefetch,
    } = useQuery(gql(getProfile), {
        variables: { email: user.email },
    })

    const [
        updateProfileServiceRequest,
        { error: updateProfileServiceError, data: updateProfileServiceData },
    ] = useMutation(gql(updateProfileService))

    const profileInState = useProfile()
    const profile = getProfileData?.getProfile || profileInState

    const {
        register: registerApiKeyField,
        handleSubmit: handleApiKeySubmit,
        setValue: setApiKeyFieldValue,

        formState: {
            errors: apiKeyErrors,
        },
    } = useForm<APIKeyForm>()
    const [apiKeyFormActive, setApiKeyFormActive] = useState<boolean>(false)
    const [keyName, setKeyName] = useState<string>('')
    const [key, setKey] = useState<string>('')

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

    const onDismissApiKeyForm = () => {
        setKeyName('')
        setKey('')
        setApiKeyFormActive(false)
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
        //     renderCell: ({ row }) => {
        //         return (
        //             <IconButton onClick={() => onDeleteApiKey(row.keyName, row.id)} size="large">
        //                 <Delete />
        //             </IconButton>
        //         )
        //     },
        // },
    ]

    const keyNameFormatter = (str: string) => str.toUpperCase().replace(/[^a-zA-Z0-9_.-]/g, '_')

    return <>
        <section className={classes.section}>
            <Typography variant="h5" component="h2">
                Profile Details
            </Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Typography variant="body1">Name: {user.name}</Typography>

            {/* <div className={classes.root}>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<EditRounded />}
            >
                <Avatar style={{ height: 100, width: 100 }} alt="Remy Sharp" src={mewAppLogo} />
            </StyledBadge>
            <Badge
                overlap="circular"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<EditRounded />}
            >
                <Avatar style={{ height: 100, width: 100 }} alt="Travis Howard" src={mewAppLogo} />
            </Badge>
        </div>

        <>
            <Grid item xs={12} md={3}>
                <ImageUploader setInputImg={setInputImg} inputImg={inputImg} />
            </Grid>
            {inputImg && (
                <Grid item xs={12}>
                    <ImageCropper getBlob={setImageBlob} inputImg={inputImg} height='400px' width='400px' aspect={1} cropShape='round' />
                </Grid>
            )}
        </> */}
        </section>
        <GroupGuard groups={[Group.admin]}>
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
        </GroupGuard>
    </>;
}

export default Profile
