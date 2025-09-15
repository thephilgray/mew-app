import React from 'react';
import {
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const HomePageSettingsForm = ({ formState, setFormState, onSubmit }) => {
  const workshops = [{ id: '1', name: 'Workshop 1' }, { id: '2', name: 'Workshop 2' }];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="projectExplanation"
            label="Project Explanation"
            multiline
            rows={4}
            value={formState.projectExplanation}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="featured-workshop-label">Featured Workshop</InputLabel>
            <Select
              labelId="featured-workshop-label"
              id="featured-workshop-select"
              name="featuredWorkshopID"
              value={formState.featuredWorkshopID}
              onChange={handleInputChange}
            >
              {workshops.map((workshop) => (
                <MenuItem key={workshop.id} value={workshop.id}>
                  {workshop.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default HomePageSettingsForm;
