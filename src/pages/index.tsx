import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage: React.FC = (): JSX.Element => {
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
