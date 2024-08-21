import { useMutation } from '@apollo/react-hooks'
import { Grid, Typography } from '@mui/material'
import { navigate } from 'gatsby'
import gql from 'graphql-tag'
import React, { useEffect, useState } from 'react'
import { createWorkshop, updateMembershipService } from '../../graphql/d3/mutations'
import AppBreadcrumbs from '../AppBreadcrumbs'
import WorkshopForm from './WorkshopForm'
import { add } from 'date-fns'
import { useProfile, useUser } from '../../auth/hooks'
import { v4 as uuidv4 } from 'uuid';
import { uploadImage } from '../ImagePicker'
import { ROUTES } from '../../constants'

export default function NewWorkshop() {
    const user = useUser()
    const { profile } = useProfile()

    const initialState = {
        name: '',
        description: '',
        status: 'Active',
        passes: 0,
        startDate: new Date(),
        endDate: add(new Date(), { months: 3 }),
        email: user?.email || '',
        image: '',
        artwork: null,
        artworkCredit: '',
        listId: '',
        sessionTag: '',
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
                                apiKeyName: profile?.features?.mailchimp?.apiKeyName,
                                serverPrefix: profile?.features?.mailchimp?.serverPrefix,
                                listId: formState.listId,
                                sessionTag: formState.sessionTag,
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
                    action: formState.enableMailchimpIntegration ? 'ADD_MAILCHIMP_SUBSCRIPTION' : 'ADD_MEMBERSHIP',
                    membershipPayload: {
                        emailAddress: formState.email
                    },
                    workshopId: workshopResponse.data.createWorkshop.id
                }).then(() => {
                    navigate(ROUTES.workshop.getPath({ workshopId: workshopResponse.data.createWorkshop.id }))
                })
            }
            else {
                navigate(ROUTES.workshop.getPath({ workshopId: workshopResponse.data.createWorkshop.id }))
            }
        }
    }, [workshopResponse])

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AppBreadcrumbs paths={[ROUTES.home, ROUTES.newWorkshop]} />
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
