import { useQuery } from '@apollo/react-hooks'
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import gql from 'graphql-tag'
import * as React from 'react'
import { listWorkshops } from '../../graphql/queries'

export default function WorkshopList() {
    const { loading, error, data, refetch } = useQuery(gql(listWorkshops))

    if (data) {
        const workshops = [...data.listWorkshops.items]

        const activeWorkshops = workshops.filter(({ status }) => status === 'Active')
        const inactiveWorkshops = workshops.filter(({ status }) => status !== 'Active')

        const Items = ({ items = [] }) =>
            items.length > 0 ? (
                items.map(({ name = '', id, status }) => (
                    <Grid item xs={12} key={id}>
                        <a href={`workshops/${id}`} style={{ textDecoration: 'none' }}>
                            <Box>
                                <Paper elevation={status === 'Active' ? 1 : 0} style={{ padding: '1em' }}>
                                    {name}
                                </Paper>
                            </Box>
                        </a>
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
            </Grid>
        )
    }

    return <p>Loading...</p>
}
