import * as React from 'react'
import { Amplify, Auth } from 'aws-amplify'
import { createAuthLink } from 'aws-appsync-auth-link'
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import awsconfig from '../aws-exports'
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'

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
    
    const httpLink = new HttpLink({ uri: url });

    const cleanTypeName = new ApolloLink((operation, forward) => {
        if (operation.variables) {
          const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
          operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
        }
        return forward(operation).map((data) => {
          return data;
        });
      });

    const link = ApolloLink.from([
        cleanTypeName,
        createAuthLink({ url, region, auth }),
        createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
    ]);
    const client = new ApolloClient({
        link,
        cache: new InMemoryCache(),
    })

    return <ApolloProvider client={client as any}>{element}</ApolloProvider>
}
