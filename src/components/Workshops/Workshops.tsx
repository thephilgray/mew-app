import { Button } from '@material-ui/core';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react'
import { ROUTE_NAMES } from '../../pages/app';
import AppBreadcrumbs from '../AppBreadcrumbs';

import WorkshopsList from './WorkshopList';

export default function Workshops() {
  return <div>
    <AppBreadcrumbs paths={[ROUTE_NAMES.home]}></AppBreadcrumbs>
    <Button
      component={Link}
      to={ROUTE_NAMES.newWorkshop.path}
      variant="contained"
      color="primary"
      style={{ float: 'right' }}>
      Create New
    </Button>
    <WorkshopsList />

  </div >;
}
