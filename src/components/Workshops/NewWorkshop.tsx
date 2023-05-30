import { useMutation } from '@apollo/react-hooks'
import { Grid, Typography } from '@mui/material'
import { navigate } from 'gatsby'
import gql from 'graphql-tag'
import React, { useEffect, useState } from 'react'
import { createWorkshop, updateMembershipService } from '../../graphql/mutations'
import { ROUTE_NAMES } from '../../pages/app'
import AppBreadcrumbs from '../AppBreadcrumbs'
import WorkshopForm from './WorkshopForm'
import { add } from 'date-fns'
import { useUser } from '../../auth/hooks'
import { v4 as uuidv4 } from 'uuid';
import { uploadImage } from '../ImagePicker'


export default function NewWorkshop() {
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
    const [requestCreateNewWorkshop, workshopResponse] = useMutation(gql(createWorkshop))
    const [requestUpdateMembershipService, updateMembershipServiceResponse] = useMutation(gql(updateMembershipService))
    const onUpdateMembershipService = async ({ action, membershipPayload, workshopId }) => {
        await requestUpdateMembershipService({
            variables: {
                workshopId,
                action,
                ...(membershipPayload && { payloads: [membershipPayload] }),
            },
        })
    }
    // @ts-ignore
    const onCreateNewWorkshopSubmitHandler = async (event) => {
        event.preventDefault()

        // if (formState.enableMailchimpIntegration) {
        //   // TODO
        // }

        const ID = uuidv4()
        const ARTWORK_UPLOAD_PATH = `workshops/artwork-${ID}.jpg`
        if (formState.image) {
            await uploadImage({ image: formState.image, uploadPath: ARTWORK_UPLOAD_PATH, filename: 'artwork.jpg' })
        }

        await requestCreateNewWorkshop({
            variables: {
                input: {
                    name: formState.name,
                    description: formState.description,
                    status: formState.status,
                    email: formState.email,
                    startDate: formState.startDate,
                    endDate: formState.endDate,
                    ...formState.image && {
                        artwork: {
                            id: ID,
                            credit: formState.artworkCredit,
                            path: ARTWORK_UPLOAD_PATH
                        }
                    },

                    // @ts-ignore
                    passes: parseInt(formState.passes),
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
                },
            },
        })

        if (formState.enableMailchimpIntegration) {
            // call syncMembers
        }
    }

    useEffect(() => {
        if (workshopResponse?.data?.createWorkshop?.id) {
            if (formState.email && !updateMembershipServiceResponse.called) {
                onUpdateMembershipService({
                    action: 'ADD_MEMBERSHIP',
                    membershipPayload: {
                        emailAddress: formState.email
                    },
                    workshopId: workshopResponse.data.createWorkshop.id
                }).then(() => {
                    navigate(ROUTE_NAMES.assignments.getPath({ workshopId: workshopResponse.data.createWorkshop.id }))
                })
            }
            else {
                navigate(ROUTE_NAMES.assignments.getPath({ workshopId: workshopResponse.data.createWorkshop.id }))
            }
        }
    }, [workshopResponse])

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.newWorkshop]} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h5" component="h5" gutterBottom>
                        Workshop Settings
                    </Typography>
                </Grid>
                <WorkshopForm
                    onSubmit={onCreateNewWorkshopSubmitHandler}
                    formState={formState}
                    setFormState={setFormState}
                />
            </Grid>
        </div>
    )
}
