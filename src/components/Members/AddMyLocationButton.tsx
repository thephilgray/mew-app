import { Alert, Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useProfile } from '../../auth/hooks';
import { getGetLocationPromise } from '../../utils';
import { AddLocation, EditLocation } from '@mui/icons-material';
import { updateProfile } from '../../graphql/mutations';
import { gql, useMutation } from '@apollo/client';
import If from '../If';

type AddMyLocationButtonProps = {

};

const AddMyLocationButton: React.FC<AddMyLocationButtonProps> = ({ onSaveLocation }) => {
  const { profile } = useProfile()
  const profileHasLocation = !!profile?.location
  const [updateProfileRequest, { data, error: updateProfileRequestError, loading: updateProfileLoading }] = useMutation(gql(updateProfile))
  const [geoLocationError, setGeoLocationError] = useState(null)
  const [loading, setLoading] = useState(false)

  const saveMyLocation = async () => {
    setLoading(true)
    let position
    try {
      position = await getGetLocationPromise()
    } catch (err) {
      console.error(err)
      setGeoLocationError(err)
    }
    if (position?.lat && position?.lng) {
      try {
        const { lat, lng } = position;
        await updateProfileRequest({
          variables: {
            input: {
              id: profile?.id,
              email: profile?.email,
              location: {
                latitude: lat,
                longitude: lng
              }
            }
          }
        })
        onSaveLocation()
      } catch (err) {
        console.error(err)
        if (!geoLocationError) {
          setGeoLocationError(err)
        }
      }
    }
    setLoading(false)
  }

  return <>
    <If condition={!loading && (geoLocationError || updateProfileRequestError)}>
      <Alert severity='error'>
        {geoLocationError || updateProfileRequestError || 'Something went wrong.'}
      </Alert>
    </If>
    <Alert severity='info'>Your location will be anonymized by up to a few miles by adding some random noise to it before storing.
      <br />
      <Button sx={{ mt: 1 }} variant='outlined' startIcon={loading ? <CircularProgress size={20} /> : (profileHasLocation ? <EditLocation /> : <AddLocation />)}
        onClick={saveMyLocation}>
        {profileHasLocation ? 'Update' : 'Add'} my location
      </Button >
    </Alert>
  </>
}
export default AddMyLocationButton;