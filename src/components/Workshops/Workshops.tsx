import { Button, Grid, Typography } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import { Group, ROUTES } from '../../constants'
import GroupGuard from '../Auth/GroupGuard'
import WorkshopsList from './WorkshopList'

export default function Workshops() {
    const notInGroupContent = <p>You do not have access to this content.</p>
    return (
        <Grid container spacing={2}>
            {/* <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTES.home]} />
            </Grid> */}
            <Grid item xs={6} sx={{ pt: 4 }}>
                <Typography variant="h4" component="h2">Workshops</Typography>

            </Grid>
            <GroupGuard groups={[Group.admin]}>
                <Grid item xs={6}>
                    <Button
                        component={Link}
                        to={ROUTES.newWorkshop.path}
                        variant="contained"
                        color="primary"
                        style={{ float: 'right' }}
                    >
                        Create New
                    </Button>
                </Grid>
            </GroupGuard>
            <GroupGuard groups={[Group.admin, Group.member]} fallbackContent={notInGroupContent}>
                <Grid item xs={12}>
                    <WorkshopsList />
                </Grid>
            </GroupGuard>
        </Grid>
    )
}
