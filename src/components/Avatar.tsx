import React from 'react'
import { Link } from "gatsby"
import { ROUTES } from "../constants"
import { getCloudFrontURL, getDisplayName } from "../utils"
import { Avatar, Box, Typography } from "@mui/material"

export const HostDisplay = ({ host, sizes = {} }) => {
    return <Link to={ROUTES.viewProfile.getPath({ profileId: host?.id })} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 1, ...sizes }} src={host?.avatar && getCloudFrontURL(host?.avatar)} alt={getDisplayName(host)} />
            <Typography variant="body2" color="text.secondary">
                Host<br /> {getDisplayName(host)}
            </Typography>
        </Box>
    </Link>
}

export const LinkedMemberAvatar = ({ profile, sizes = {} }) => {
    return <Link to={ROUTES.viewProfile.getPath({ profileId: profile?.id })} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 1, ...sizes }} src={profile?.avatar && getCloudFrontURL(profile?.avatar)} alt={getDisplayName(profile)} />
            <Typography variant="body2" color="text.secondary">
                {getDisplayName(profile)}
            </Typography>
        </Box>
    </Link>
}

