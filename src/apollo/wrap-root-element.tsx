import * as React from 'react'
import { Amplify, Auth } from 'aws-amplify'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloLink } from 'apollo-link'
import { createAuthLink } from 'aws-appsync-auth-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import awsconfig from '../aws-exports'
import ApolloClient from 'apollo-client'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapRootElement = ({ element }) => {
    Amplify.configure(awsconfig)
    const url = awsconfig.aws_appsync_graphqlEndpoint
    const region = awsconfig.aws_appsync_region
    const auth = {
        type: awsconfig.aws_appsync_authenticationType,
        jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
    }
    const link = ApolloLink.from([createAuthLink({ url, region, auth }), createHttpLink({ uri: url })])
    const client = new ApolloClient({
        link,
        cache: new InMemoryCache(),
    })

    return <ApolloProvider client={client as any}>{element}</ApolloProvider>
}
