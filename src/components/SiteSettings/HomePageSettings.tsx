import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import HomePageSettingsForm from './HomePageSettingsForm';
import Loading from '../Loading';

const HomePageSettings = () => {
  // TODO: Replace with actual data fetching from the backend
  const loading = false;
  const data = {
    getHomePageSettings: {
      id: 'singleton',
      projectExplanation: 'This is a placeholder project explanation.',
      featuredWorkshopID: '1',
    },
  };

  const initialState = {
    projectExplanation: '',
    featuredWorkshopID: '',
  };

  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    if (data?.getHomePageSettings) {
      setFormState({
        projectExplanation: data.getHomePageSettings.projectExplanation,
        featuredWorkshopID: data.getHomePageSettings.featuredWorkshopID,
      });
    }
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement the mutation to save the form data
    console.log('Form submitted:', formState);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5" gutterBottom>
            Home Page Settings
          </Typography>
        </Grid>
        {loading ? (
          <Loading />
        ) : (
          <HomePageSettingsForm
            formState={formState}
            setFormState={setFormState}
            onSubmit={handleSubmit}
          />
        )}
      </Grid>
    </div>
  );
};

export default HomePageSettings;
