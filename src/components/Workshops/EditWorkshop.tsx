import { useMutation, useQuery } from '@apollo/react-hooks'
import { Grid, Typography } from '@material-ui/core'
import { navigate } from 'gatsby'
import gql from 'graphql-tag'
import React, { useEffect, useState } from 'react'
import { updateWorkshop } from '../../graphql/mutations'
import { getWorkshop } from '../../graphql/queries'
import { ROUTE_NAMES } from '../../pages/app'
import AppBreadcrumbs from '../AppBreadcrumbs'
import WorkshopForm from './WorkshopForm'

export default function EditWorkshop({ workshopId = '' }) {
    const { loading, error, data, refetch } = useQuery(gql(getWorkshop), {
        variables: { id: workshopId },
    })

    const initialState = {
        name: '',
        status: 'Active',
        passes: 0,
        apiKey: '',
        serverPrefix: '',
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

    useEffect(() => {
        if (data?.getWorkshop) {
            updateForm({
                name: data.getWorkshop.name,
                status: data.getWorkshop.status,
                passes: data.getWorkshop.passes || 0,
                apiKeyName: data.getWorkshop.features?.mailchimp?.apiKeyName || '',
                serverPrefix: data.getWorkshop.features?.mailchimp?.serverPrefix || '',
                listId: data.getWorkshop.features?.mailchimp?.listId || '',
                enableMailchimpIntegration: data.getWorkshop.features?.mailchimp?.enabled || false,
            })
        }
    }, [data])

    const [requestUpdateWorkshop, workshopResponse] = useMutation(gql(updateWorkshop))
    // @ts-ignore
    const onUpdateWorkshopSubmitHandler = async (event) => {
        event.preventDefault()

        await requestUpdateWorkshop({
            variables: {
                input: {
                    id: workshopId,
                    name: formState.name,
                    status: formState.status,
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
                    // if it was enabled but now we're disabling it
                    ...(data?.getWorkshop?.features?.mailchimp?.enabled &&
                        !formState.enableMailchimpIntegration && {
                            features: {
                                mailchimp: {
                                    enabled: false,
                                },
                            },
                        }),
                    _version: data.getWorkshop._version,
                },
            },
        })

        if (formState.enableMailchimpIntegration) {
            // call syncMembers
        }
    }

    useEffect(() => {
        if (workshopResponse.data) {
            console.log(workshopResponse.data)
            console.log(workshopResponse.error)
            navigate(ROUTE_NAMES.assignments.getPath({ workshopId }))
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
                <WorkshopForm
                    formState={formState}
                    setFormState={setFormState}
                    onSubmit={onUpdateWorkshopSubmitHandler}
                />
            </Grid>
        </div>
    )
}
