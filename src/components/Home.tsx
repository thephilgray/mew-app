import * as React from 'react'
import { Link } from 'gatsby'

const Home: React.FC = () => (
    <div>
        <h1>Workshops</h1>
        <p>
            You are now logged in!
            <Link to="/app/profile">View profile</Link>
        </p>
        <p>
            You are now logged in!
            <Link to="/app/assignments">Assignments</Link>
        </p>
    </div>
)

export default Home
