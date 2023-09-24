import React from 'react';
import { Map, Marker } from "pigeon-maps"
import { getCloudFrontURL, getDisplayName } from '../../utils';
import AppBreadcrumbs from '../AppBreadcrumbs';
import { ROUTES } from '../../constants';
import { Avatar, Grid } from '@mui/material';
import AddMyLocationButton from './AddMyLocationButton';
import { gql, useQuery } from '@apollo/client';
import { compareAsc } from 'date-fns';
import { membershipsByWorkshopId } from './members.queries';

type MapProps = {

};

const MembersMap: React.FC<MapProps> = ({ workshopId = '' }) => {
  const { loading, error, data, refetch } = useQuery(gql(membershipsByWorkshopId), { variables: { workshopId } })
  const membersWithLocation = data?.membershipsByWorkshopId?.items?.map(({ profile, id }) => ({ ...profile, key: id }))?.sort((a, b) => compareAsc(new Date(a.updatedAt), new Date(b.updatedAt)))?.filter(p => p.location)
  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <AppBreadcrumbs
        paths={[ROUTES.home, ROUTES.workshop, ROUTES.workshopMembersMap]}
        workshopId={workshopId}
      />
    </Grid>
    <Grid item xs={12}>
      <AddMyLocationButton onSaveLocation={refetch} />
    </Grid>
    <Grid item xs={12}>
      <Map height={500} defaultZoom={1}>
        {membersWithLocation && membersWithLocation.map((memberProfile) => (
          <Marker key={memberProfile?.key} width={40} height={40} anchor={[Number(memberProfile.location.latitude), Number(memberProfile.location.longitude)]}>
            <Avatar
              src={memberProfile?.avatar && getCloudFrontURL(memberProfile?.avatar)}
              alt={getDisplayName(memberProfile)}
            />
          </Marker>
        ))}
      </Map>
    </Grid>
  </Grid>


}
export default MembersMap;