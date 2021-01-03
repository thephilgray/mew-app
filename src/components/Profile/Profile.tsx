import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../../utils/auth'
const Profile = (): JSX.Element => {
    const user = getCurrentUser()
    if (!user) return <>{null}</>
    return (
        <div>
            <h1>Profile Details</h1>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            <Link to="/app">Home</Link>
        </div>
    )
}

export default Profile
