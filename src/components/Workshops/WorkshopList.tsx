import { useQuery } from '@apollo/react-hooks'
import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Paper, Typography, styled } from '@mui/material'
import { Link } from 'gatsby'
import gql from 'graphql-tag'
import * as React from 'react'
import { useUserHasMembership, useViewAdmin } from '../../auth/hooks'
import { Group } from '../../constants'
import { listWorkshops } from '../../graphql/queries'
import GroupGuard from '../Auth/GroupGuard'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { getCloudFrontURL } from '../../utils'
import If from '../If'
import format from 'date-fns/format'
import { CalendarMonth } from '@mui/icons-material'
import { random } from 'lodash'
import watercolor from '../../assets/watercolor.png'
import { compareDesc, compareAsc } from "date-fns"

export default function WorkshopList() {
    const { loading, error, data, refetch } = useQuery(gql(listWorkshops))
    const [viewAdmin] = useViewAdmin()

    if (data) {
        const workshops = [...data.listWorkshops.items]

        const activeWorkshops = workshops
            .filter(({ id }) => viewAdmin || useUserHasMembership(id))
            .filter(({ status }) => (status === 'Active' || viewAdmin))
            .sort((a, b) => a?.status?.localeCompare(b.status) || compareDesc(new Date(a.startDate || a.createdAt), new Date(b.startDate || b.createdAt)))


        // const inactiveWorkshops = workshops
        //     .filter(({ id }) => viewAdmin || useUserHasMembership(id))
        //     .filter(({ status }) => status !== 'Active')


        const MembersAvatarGroup = ({ memberships }) => {
            // show random set of avatars each time
            const total = memberships.length;
            const randomIndex = random(total - 1)
            const getAlt = member => member?.profile?.displayName || member?.profile?.name || member?.profile?.email
            return <AvatarGroup total={total}>
                {memberships.slice((randomIndex < total - 4 ? randomIndex : Math.max(randomIndex - 4, 0)), total).map(member => (
                    <Avatar alt={getAlt(member)} src={getCloudFrontURL(member?.profile?.avatar)} />
                ))}
            </AvatarGroup>
        }


        const Items = ({ items = [] }) =>
            items.length > 0 ? (
                items.map(({ name = '', id, status, artwork, host, description, startDate, endDate, createdAt, memberships }) => (
                    <Grid xs={12} sm={6} key={id} sx={{ opacity: status === 'Active' ? '100%' : '50%' }} >
                        <Link to={`workshops/${id}`} style={{ textDecoration: 'none' }}>

                            <Card >
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={artwork?.path ? getCloudFrontURL(artwork.path) : watercolor}
                                    title={artwork?.credit || 'artwork'}
                                >
                                    <If condition={status !== "Active"}><Chip label="Inactive" color="error" sx={{ mt: 1, ml: 1 }} /></If>
                                    <Paper sx={{ display: 'flex', alignItems: 'center', p: 1, float: 'right', justifySelf: 'flex-end', background: 'rgba(0, 0, 0, 0.7)' }} elevation={0}>
                                        <Avatar sx={{ mr: 1 }} >
                                            <CalendarMonth />
                                        </Avatar>
                                        <Typography variant="body2" color="whitesmoke">
                                            {startDate ? format(new Date(String(startDate)), `M/dd/yy`) : format(new Date(String(createdAt)), `M/dd/yy`)}{endDate ? format(new Date(String(endDate)), `– M/dd/yy`) : ''}
                                        </Typography>
                                    </Paper>

                                </CardMedia>
                                <CardContent sx={{ minHeight: 200 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {name}
                                    </Typography>

                                    <If condition={!!description}>
                                        <Typography variant="body2" color="text.secondary" sx={{
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            '-webkit-line-clamp': '3', /* number of lines to show */
                                            'lineClamp': '3',
                                            '-webkit-box-orient': 'vertical',
                                        }}>
                                            {description}
                                        </Typography>
                                    </If>
                                    <Grid container spacing={1} sx={{ mt: 1 }}>
                                        <If condition={!!host}>
                                            <Grid item>
                                                <Paper sx={{ display: 'flex', alignItems: 'center', mb: 2 }} elevation={0}>
                                                    <Avatar sx={{ mr: 1 }} src={getCloudFrontURL(host?.avatar)} alt={host?.displayName || host?.name || host?.email?.split('@')[0]} />
                                                    <Typography variant="body2" color="text.secondary">
                                                        Host<br />
                                                        {host?.displayName || host?.name || host?.email?.split('@')[0]}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        </If>


                                        <If condition={memberships?.items?.length > 0}>
                                            <Grid item sx={{ ml: 'auto' }}>
                                                <Typography variant="body2" color="text.secondary">
                                                    {/* Members<br /> */}
                                                </Typography>
                                                <MembersAvatarGroup memberships={memberships.items} />
                                            </Grid>
                                        </If>


                                    </Grid>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid >
                ))
            ) : (
                <Grid item xs={12}>
                    <Typography>None found.</Typography>
                </Grid>
            )

        return (
            // <Grid container spacing={3}>
            //     <Grid item>
            //         <Grid container spacing={3}>
            //             <Grid item xs={12}>
            //                 <Typography variant="h5" component="h5">
            //                     Active
            //                 </Typography>
            //             </Grid>
            //             {/* @ts-ignore */}
            //             <Items items={activeWorkshops} />
            //         </Grid>
            //     </Grid>
            //     <GroupGuard groups={[Group.admin]}>
            //         <Grid item>
            //             <Grid container spacing={3}>
            //                 <Grid item xs={12}>
            //                     <Typography variant="h5" component="h5">
            //                         Inactive
            //                     </Typography>
            //                 </Grid>
            //                 {/* @ts-ignore */}
            //                 <Items items={inactiveWorkshops} />
            //             </Grid>
            //         </Grid>
            //     </GroupGuard>
            // </Grid>
            <Grid container minHeight={375} spacing={{ xs: 2, md: 3 }} >
                <Items items={activeWorkshops}></Items>
            </Grid>
        )
    }

    return <p>Loading...</p>
}
