import { useQuery } from '@apollo/react-hooks'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { Link } from 'gatsby'
import gql from 'graphql-tag'
import * as React from 'react'
import { useIsAdmin, useUserHasMembership, useUserInAtLeastOneOfTheseGroups } from '../../auth/hooks'
import { Group } from '../../constants'
import { listWorkshops } from '../../graphql/queries'
import GroupGuard from '../Auth/GroupGuard'

export default function WorkshopList() {
    const { loading, error, data, refetch } = useQuery(gql(listWorkshops))
    const isAdmin = useIsAdmin()

    if (data) {
        const workshops = [...data.listWorkshops.items]

        const activeWorkshops = workshops
            .filter(({ id }) => isAdmin || useUserHasMembership(id))
            .filter(({ status }) => status === 'Active')
        const inactiveWorkshops = workshops
            .filter(({ id }) => isAdmin || useUserHasMembership(id))
            .filter(({ status }) => status !== 'Active')

        const Items = ({ items = [] }) =>
            items.length > 0 ? (
                items.map(({ name = '', id, status }) => (
                    <Grid item xs={12} key={id}>
                        <Link to={`workshops/${id}`} style={{ textDecoration: 'none' }}>
                            <Box>
                                <Paper elevation={status === 'Active' ? 1 : 0} style={{ padding: '1em' }}>
                                    {name}
                                </Paper>
                            </Box>
                        </Link>
                    </Grid>
                ))
            ) : (
                <Grid item xs={12}>
                    <Typography>None found.</Typography>
                </Grid>
            )

        return (
            <Grid container spacing={3}>
                <Grid item>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h5">
                                Active
                            </Typography>
                        </Grid>
                        {/* @ts-ignore */}
                        <Items items={activeWorkshops} />
                    </Grid>
                </Grid>
                <GroupGuard groups={[Group.admin, Group.editor]}>
                    <Grid item>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h5" component="h5">
                                    Inactive
                                </Typography>
                            </Grid>
                            {/* @ts-ignore */}
                            <Items items={inactiveWorkshops} />
                        </Grid>
                    </Grid>
                </GroupGuard>
            </Grid>
        )
    }

    return <p>Loading...</p>
}
