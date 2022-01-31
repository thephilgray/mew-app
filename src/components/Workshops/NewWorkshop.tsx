import { useMutation } from '@apollo/react-hooks';
import { Grid, Typography } from '@material-ui/core';
import { navigate } from 'gatsby';
import gql from 'graphql-tag';
import React, { useEffect, useState } from 'react';
import { createWorkshop } from '../../graphql/mutations';
import { ROUTE_NAMES } from '../../pages/app';
import AppBreadcrumbs from '../AppBreadcrumbs';
import WorkshopForm from './WorkshopForm';


export default () => {
  const initialState = {
    name: '',
    status: 'Active',
    passes: 0,
    apiKey: '',
    serverPrefix: '',
    listId: '',
    enableMailchimpIntegration: false
  };

  const [formState, setFormState] = useState(initialState)
  const [requestCreateNewWorkshop, workshopResponse] = useMutation(gql(createWorkshop))
  // @ts-ignore
  const onCreateNewWorkshopSubmitHandler = event => {
    event.preventDefault()

    // if (formState.enableMailchimpIntegration) {
    //   // TODO
    // }

    return requestCreateNewWorkshop({
      variables: {
        input: {
          name: formState.name,
          status: formState.status,
          // @ts-ignore
          passes: parseInt(formState.passes),
        }
      }
    })
  }

  useEffect(() => {

    if (workshopResponse?.data?.createWorkshop?.id) {
      navigate(ROUTE_NAMES.assignments.getPath({ workshopId: workshopResponse.data.createWorkshop.id }))
    }

  }, [workshopResponse])

  return <div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBreadcrumbs
          paths={[ROUTE_NAMES.home, ROUTE_NAMES.newWorkshop]}
        ></AppBreadcrumbs>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h5" component="h5" gutterBottom>
          Workshop Settings
        </Typography>
      </Grid>
      <WorkshopForm onSubmit={onCreateNewWorkshopSubmitHandler} formState={formState} setFormState={setFormState} />
    </Grid>
  </div >;

}
