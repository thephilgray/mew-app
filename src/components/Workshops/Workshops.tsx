import { Button } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import { Group } from '../../constants'
import { ROUTE_NAMES } from '../../pages/app'
import AppBreadcrumbs from '../AppBreadcrumbs'
import GroupGuard from '../Auth/GroupGuard'

import WorkshopsList from './WorkshopList'

export default function Workshops() {
    const notInGroupContent = <p>You do not have access to this content.</p>
    return (
        <div>
            <AppBreadcrumbs paths={[ROUTE_NAMES.home]} />
            <GroupGuard groups={[Group.admin]}>
                <Button
                    component={Link}
                    to={ROUTE_NAMES.newWorkshop.path}
                    variant="contained"
                    color="primary"
                    style={{ float: 'right' }}
                >
                    Create New
                </Button>
            </GroupGuard>
            <GroupGuard groups={[Group.admin, Group.member]} fallbackContent={notInGroupContent}>
                <WorkshopsList />
            </GroupGuard>
        </div>
    )
}
