/* Amplify Params - DO NOT EDIT
API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT
API_MEWAPP_GRAPHQLAPIIDOUTPUT
API_MEWAPP_GRAPHQLAPIKEYOUTPUT
ENV
REGION
Amplify Params - DO NOT EDIT */

/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios')
const gql = require('graphql-tag')
const graphql = require('graphql')
const _ = require('lodash')
const { print } = graphql

const listSubmissions = gql`
    query ListSubmissions {
        listFileRequestSubmissions {
            items {
                email
                artist
            }
        }
    }
`

// export enum MemberStatus {
//     ENROLLED
//     UNENROLLED
//     PENDING
// }

const createMember = gql`
    mutation CreateMember($email: String!, $artist: String, $status: String) {
        createMember(input: { email: $email, artist: $artist, status: $status }) {
            email
            artist
            status
        }
    }
`
exports.handler = async () => {
    try {
        const graphqlData = await axios({
            url: process.env.API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT,
            method: 'post',
            headers: {
                'x-api-key': process.env.API_MEWAPP_GRAPHQLAPIKEYOUTPUT,
            },
            data: {
                query: print(listSubmissions),
            },
        })

        const { items } = graphqlData.data.data.listFileRequestSubmissions

        const createMembers = async ({ artist, email }) =>
            axios({
                url: process.env.API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT,
                method: 'post',
                headers: {
                    'x-api-key': process.env.API_MEWAPP_GRAPHQLAPIKEYOUTPUT,
                },
                data: {
                    query: print(createMember),
                    variables: {
                        email,
                        artist,
                        status: 'ENROLLED',
                    },
                },
            })

        const promises = _.uniqBy(items, 'email').map(createMembers)
        const data = await Promise.all(promises)

        return data.map((d) => d.data.errors)
        return data.map((d) => d.data.data.email)
    } catch (error) {
        console.error(error)
        return null
    }
}
