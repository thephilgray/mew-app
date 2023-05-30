import { useMutation, useQuery } from '@apollo/react-hooks'
import { CircularProgress, Grid, Typography } from '@mui/material'
import { navigate } from 'gatsby'
import gql from 'graphql-tag'
import React, { useEffect, useState } from 'react'
import { updateMembershipService, updateWorkshop } from '../../graphql/mutations'
import { getWorkshop } from '../../graphql/queries'
import { ROUTE_NAMES } from '../../pages/app'
import AppBreadcrumbs from '../AppBreadcrumbs'
import WorkshopForm from './WorkshopForm'
import { add } from 'date-fns'
import { useUser } from '../../auth/hooks'
import { v4 as uuidv4 } from 'uuid';
import { uploadImage } from '../ImagePicker'


export default function EditWorkshop({ workshopId = '' }) {
    const { loading, error, data, refetch } = useQuery(gql(getWorkshop), {
        variables: { id: workshopId },
    })

    const user = useUser()

    const initialState = {
        name: '',
        description: '',
        status: 'Active',
        passes: 0,
        apiKey: '',
        serverPrefix: '',
        startDate: new Date(),
        endDate: add(new Date(), { months: 3 }),
        email: user?.email || '',
        image: '',
        artwork: null,
        artworkCredit: '',
        listId: '',
        enableMailchimpIntegration: false,
    }

    const [formState, setFormState] = useState(initialState)
    // @ts-ignore
    const updateForm = (newValues) =>
        setFormState((prevState) => ({
            ...(prevState || {}),
            ...newValues,
        }))

    const [requestUpdateMembershipService, updateMembershipServiceResponse] = useMutation(gql(updateMembershipService))
    const onUpdateMembershipService = async ({ action, membershipPayload }) => {
        await requestUpdateMembershipService({
            variables: {
                workshopId,
                action,
                ...(membershipPayload && { payloads: [membershipPayload] }),
            },
        })
    }

    useEffect(() => {
        if (data?.getWorkshop) {
            updateForm({
                name: data.getWorkshop.name,
                description: data.getWorkshop.description,
                startDate: new Date(data.getWorkshop.startDate),
                endDate: new Date(data.getWorkshop.endDate),
                email: data.getWorkshop.email || user?.email,
                artwork: data.getWorkshop.artwork,
                status: data.getWorkshop.status,
                passes: data.getWorkshop.passes || 0,
                apiKeyName: data.getWorkshop.features?.mailchimp?.apiKeyName || '',
                serverPrefix: data.getWorkshop.features?.mailchimp?.serverPrefix || '',
                listId: data.getWorkshop.features?.mailchimp?.listId || '',
                enableMailchimpIntegration: data.getWorkshop.features?.mailchimp?.enabled || false,
            })
        }
    }, [data])


    const ARTWORK_DOWNLOAD_PATH = formState?.artwork?.path

    const [requestUpdateWorkshop, workshopResponse] = useMutation(gql(updateWorkshop))
    // @ts-ignore
    const onUpdateWorkshopSubmitHandler = async (event) => {
        event.preventDefault()
        const ID = uuidv4()
        const ARTWORK_UPLOAD_PATH = `workshops/${workshopId}/artwork-${ID}.jpg`
        if (formState.image && !formState.image.includes(ARTWORK_DOWNLOAD_PATH)) {
            await uploadImage({ image: formState.image, uploadPath: ARTWORK_UPLOAD_PATH, filename: 'artwork.jpg' })
        }
        // TODO: if email, ensure membership for host


        await requestUpdateWorkshop({
            variables: {
                input: {
                    id: workshopId,
                    name: formState.name,
                    description: formState.description,
                    status: formState.status,
                    email: formState.email,
                    startDate: formState.startDate,
                    endDate: formState.endDate,
                    // @ts-ignore
                    passes: parseInt(formState.passes),
                    ...formState.image && !formState.image.includes(ARTWORK_DOWNLOAD_PATH) && {
                        artwork: {
                            id: ID,
                            credit: formState.artworkCredit,
                            path: ARTWORK_UPLOAD_PATH
                        }
                    },
                    ...(formState.enableMailchimpIntegration && {
                        features: {
                            mailchimp: {
                                enabled: formState.enableMailchimpIntegration,
                                apiKeyName: formState.apiKeyName,
                                serverPrefix: formState.serverPrefix,
                                listId: formState.listId,
                            },
                        },
                    }),
                    // if it was enabled but now we're disabling it
                    ...(data?.getWorkshop?.features?.mailchimp?.enabled &&
                        !formState.enableMailchimpIntegration && {
                        features: {
                            mailchimp: {
                                enabled: false,
                            },
                        },
                    }),
                },
            },
        })




        if (formState.enableMailchimpIntegration) {
            // call syncMembers
        }
    }

    useEffect(() => {
        if (workshopResponse.error) {
            console.log(workshopResponse.error)
        }
        if (workshopResponse.data) {
            if (formState.email && formState.email !== data?.getWorkshop?.email && !updateMembershipServiceResponse.called) {
                onUpdateMembershipService({
                    action: 'ADD_MEMBERSHIP',
                    membershipPayload: {
                        emailAddress: formState.email
                    },
                }).then(() => {
                    navigate(ROUTE_NAMES.assignments.getPath({ workshopId }))
                })
            }
            else {
                navigate(ROUTE_NAMES.assignments.getPath({ workshopId }))
            }
        }
    }, [workshopResponse])

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AppBreadcrumbs
                        paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignments, ROUTE_NAMES.editWorkshop]}
                        workshop={data?.getWorkshop}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h5" component="h5" gutterBottom>
                        Workshop Settings
                    </Typography>
                </Grid>
                {loading ? <CircularProgress /> : <WorkshopForm
                    formState={formState}
                    setFormState={setFormState}
                    onSubmit={onUpdateWorkshopSubmitHandler}
                />}

            </Grid>
        </div>
    )
}
