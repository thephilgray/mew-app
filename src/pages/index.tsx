import * as React from 'react'
import Amplify from 'aws-amplify'
import Layout from '../components/Layout/Layout'
import { Link } from 'gatsby'
import config from '../aws-exports'
import { isLoggedIn } from '../utils/auth'
import { navigate } from '@reach/router'
Amplify.configure(config)

const IndexPage: React.FC = (): JSX.Element => {
    if (isLoggedIn()) navigate('/app/home')
    return (
        <Layout>
            <title>Home Page</title>
            <p>
                Create a new account: <Link to="/app/signup">Sign Up</Link>
            </p>
            <Link to="/app/login">Sign In</Link>
            <br />
        </Layout>
    )
}

export default IndexPage
