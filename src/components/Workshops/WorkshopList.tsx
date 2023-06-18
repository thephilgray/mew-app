import { useQuery } from '@apollo/react-hooks'
import { Avatar, AvatarGroup, Chip, Typography } from '@mui/material'
import gql from 'graphql-tag'
import * as React from 'react'
import { useUserHasMembership, useViewAdmin } from '../../auth/hooks'
import { listWorkshops } from '../../graphql/queries'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { getCloudFrontURL } from '../../utils'
import If from '../If'
import format from 'date-fns/format'
import { CalendarMonth } from '@mui/icons-material'
import { random } from 'lodash'
import { compareDesc } from "date-fns"
import CardGrid from '../CardGrid'
import { ROUTE_NAMES } from '../../pages/app'

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

        const activeWorkshopsWithSlots = activeWorkshops.map(item => ({
            ...item,
            link: ROUTE_NAMES.assignments.getPath(item.id),
            chipContent: <If condition={item?.status !== "Active"}><Chip label="Inactive" color="error" sx={{ mt: 1, ml: 1 }} /></If>,
            rightOverlayContent: <><Avatar sx={{ mr: 1 }} >
                <CalendarMonth />
            </Avatar>
                <Typography variant="body2" color="whitesmoke">
                    {item?.startDate ? format(new Date(String(item?.startDate)), `M/dd/yy`) : format(new Date(String(item?.createdAt)), `M/dd/yy`)}{item?.endDate ? format(new Date(String(item?.endDate)), `– M/dd/yy`) : ''}
                </Typography></>,
            artwork: item?.artwork,
            bottomContent: <Grid item sx={{ ml: 'auto' }}>
                <Typography variant="body2" color="text.secondary">
                    {/* Members<br /> */}
                </Typography>
                <MembersAvatarGroup memberships={item?.memberships.items} />
            </Grid>,
            active: item?.status === 'Active'
        }))

        return <CardGrid items={activeWorkshopsWithSlots} />
    }

    return <p>Loading...</p>
}
