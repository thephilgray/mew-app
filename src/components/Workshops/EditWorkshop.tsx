import { useMutation, useQuery } from '@apollo/react-hooks';
import { Grid, Typography } from '@material-ui/core';
import { navigate } from 'gatsby';
import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import { updateWorkshop } from '../../graphql/mutations';
import { getWorkshop } from '../../graphql/queries';
import { ROUTE_NAMES } from '../../pages/app';
import AppBreadcrumbs from '../AppBreadcrumbs';
import WorkshopForm from './WorkshopForm';

export default function EditWorkshop({ workshopId = '' }) {
  const { loading, error, data, refetch } = useQuery(gql(getWorkshop), {
    variables: { id: workshopId }
  })

  const initialState = {
    name: '',
    status: 'Active',
    passes: 0,
    apiKey: '',
    serverPrefix: '',
    listId: '',
    enableMailchimpIntegration: false
  }

  const [formState, setFormState] = useState(initialState)
  // @ts-ignore
  const updateForm = (newValues) => setFormState((prevState) => ({
    ...prevState || {},
    ...newValues
  }))

  useEffect(() => {
    if (data?.getWorkshop) {
      updateForm({
        name: data.getWorkshop.name,
        status: data.getWorkshop.status,
        passes: data.getWorkshop.passes || 0,
        // apiKey: data.getWorkshop.integrations?.mailchimp?.apiKey ? 'XXXXXXXX' : '',
        // serverPrefix: data.getWorkshop.integrations?.mailchimp?.serverPrefix,
        // listId: data.getWorkshop.integrations?.mailchimp?.listId,
        // enableMailchimpIntegration: data.getWorkshop.integrations?.mailchimp?.enabled

      })
    }
  }, [data])

  const [requestUpdateWorkshop, workshopResponse] = useMutation(gql(updateWorkshop))
  // @ts-ignore
  const onUpdateWorkshopSubmitHandler = event => {
    event.preventDefault()

    // TODO: check if enableMailchimpIntegration changed from getWorkshop
    // update
    // if (formState.enableMailchimpIntegration) {
    // }

    return requestUpdateWorkshop({
      variables: {
        input: {
          id: workshopId,
          name: formState.name,
          status: formState.status,
          // @ts-ignore
          passes: parseInt(formState.passes),
          _version: data.getWorkshop._version
        }
      }
    })
  }

  useEffect(() => {

    if (workshopResponse.data) {
      console.log(workshopResponse.data)
      console.log(workshopResponse.error)
      navigate(ROUTE_NAMES.assignments.getPath({ workshopId }))
    }
  }, [workshopResponse])



  return <div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignments, ROUTE_NAMES.editWorkshop]} workshop={data?.getWorkshop} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h5" component="h5" gutterBottom>
          Workshop Settings
        </Typography>
      </Grid>
      <WorkshopForm formState={formState} setFormState={setFormState} onSubmit={onUpdateWorkshopSubmitHandler}></WorkshopForm>
    </Grid>
  </div >;
}
