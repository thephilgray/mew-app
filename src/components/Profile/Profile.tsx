import React from 'react'
import { getCurrentUser } from '../../auth/utils'
import { Typography } from '@material-ui/core'

const Profile = (): JSX.Element => {
    const user = getCurrentUser()
    if (!user) return <>{null}</>
    return (
        <div>
            <Typography variant="h5" component="h2">
                Profile Details
            </Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Typography variant="body1">Name: {user.name}</Typography>
        </div>
    )
}

export default Profile
