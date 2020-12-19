import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'
const Home = (): JSX.Element => {
    const user = getCurrentUser()
    if (!user) return <>{null}</>
    return (
        <div>
            <h1>Profile Details</h1>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <Link to="/app/home">Home</Link>
        </div>
    )
}

export default Home
