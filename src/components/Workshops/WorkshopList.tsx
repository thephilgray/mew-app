import { useQuery } from '@apollo/react-hooks'
import { Avatar, AvatarGroup, Box, Chip, Paper, Typography } from '@mui/material'
import gql from 'graphql-tag'
import * as React from 'react'
import { useUserHasMembership, useViewAdmin } from '../../auth/hooks'
import { listWorkshops } from '../../graphql/queries'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { getCloudFrontURL, getDisplayName } from '../../utils'
import If from '../If'
import format from 'date-fns/format'
import { CalendarMonth } from '@mui/icons-material'
import { random } from 'lodash'
import { compareDesc } from "date-fns"
import CardGrid, { SkeletonCardGrid } from '../CardGrid'
import { Link } from 'gatsby'
import { ROUTES } from '../../constants'
import { HostDisplay } from '../Avatar'

export const MembersAvatarGroup = ({ memberships }) => {
    // show random set of avatars each time
    const total = memberships.length;
    const randomIndex = random(total - 1)
    const getAlt = member => getDisplayName(member?.profile)
    return memberships.length ? <><Typography variant='body2'>Members</Typography>
        <AvatarGroup total={total} sx={{ justifyContent: 'start', flexWrap: 'wrap' }}>
            {memberships.slice((randomIndex < total - 4 ? randomIndex : Math.max(randomIndex - 4, 0)), total).map(member => (
                <Avatar alt={getAlt(member)} src={member?.profile?.avatar && getCloudFrontURL(member?.profile?.avatar)} key={member.id} />
            ))}
        </AvatarGroup></> : null
}

export const WorkshopDates = ({ workshop }) => {
    return <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ mr: 1, mb: 1 }} >
            <CalendarMonth />
        </Avatar>
        <Typography variant="body2" color="whitesmoke">
            {workshop?.startDate ? format(new Date(String(workshop?.startDate)), `M/dd/yy`) : format(new Date(String(workshop?.createdAt)), `M/dd/yy`)}{workshop?.endDate ? format(new Date(String(workshop?.endDate)), `– M/dd/yy`) : ''}
        </Typography></Box>
}


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



        const activeWorkshopsWithSlots = activeWorkshops.map(item => ({
            ...item,
            link: ROUTES.workshop.getPath(item.id),
            chipContent: <If condition={item?.status !== "Active"}><Chip label="Inactive" color="error" sx={{ mt: 1, ml: 1 }} /></If>,
            rightOverlayContent: <WorkshopDates workshop={item} />,
            artwork: item?.artwork,
            bottomContent: <Grid container spacing={1} sx={{ mt: 1, alignItems: 'center' }}>
                <If condition={!!item?.host && item?.host?.id}>
                    <Grid item>
                        <HostDisplay host={item.host} />
                    </Grid>
                </If>
                <If condition={!!item?.memberships?.items?.length}>
                    <Grid item sx={{ ml: 'auto' }}>
                        <Typography variant="body2" color="text.secondary">
                        </Typography>
                        <MembersAvatarGroup memberships={item.memberships.items} />
                    </Grid>
                </If>
            </Grid >,
            active: item?.status === 'Active',
            link: ROUTES.workshop.getPath({ workshopId: item?.id })
        }))

        return <CardGrid items={activeWorkshopsWithSlots} />
    }
    return <SkeletonCardGrid numberOfItems={6} />
}
