/* Amplify Params - DO NOT EDIT
    API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT
    API_MEWAPP_GRAPHQLAPIIDOUTPUT
    API_MEWAPP_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

// TODO: update profile

// request payload might include:
// - name
//     - avatar
//     - bio
//     - apiKey

// {
//     name: 'sdfd', avatar: 'sdfdssdfdsfd', bio: 'sdfdsfsdfdsfds', apiKeys: [
//         keyName: 'sdfdsfdsfdfd', action: 'delete']
// }

// check if there's already a profile
//     - yes, update path
//         - no, create path

// check if there's apiKey in the request payload
//     - yes, do the below


// action === 'delete'
const axios = require('axios')
const gql = require('graphql-tag')
const { print } = require('graphql')
// const { omitBy, isNil } = require('lodash')
const GRAPHQL_ENDPOINT = process.env.API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT

const AWS = require('aws-sdk')
const AWSAppSyncClient = require('aws-appsync').default
require('cross-fetch/polyfill')

// const mockCredentials = {
//     accessKeyId: 'ASIAVJKIAM-AuthRole',
//     secretAccessKey: 'fake',
// }

// const credentials = AWS.config.credentials || mockCredentials

const appSyncClient = new AWSAppSyncClient({
    url: GRAPHQL_ENDPOINT,
    region: process.env.REGION,
    auth: {
        // type: 'AWS_IAM',
        // credentials,
        type: 'API_KEY',
        apiKey: process.env.API_MEWAPP_GRAPHQLAPIKEYOUTPUT,
    },
    disableOffline: true,
})

const getProfile = /* GraphQL */ gql`
    query GetProfile($email: String!) {
        getProfile(email: $email){
            email
            id
            name
            avatar
            bio
            createdAt
            updatedAt
        }
}`

const createProfile = /* GraphQL */ gql`
    mutation CreateProfile($email: String!, $sub: String, $name: String, $bio: String, $avatar: String) {
        createProfile(input: { email: $email, sub: $sub, name: $name, bio: $bio, avatar: $avatar }) {
            id
        }
    }
`

const createApiKey = /* GraphQL */ gql`
    mutation CreateApiKey($keyName: String!, $email: String!, $profileID: ID!){
        createAPIKey(input: {keyName: $keyName, email: $email, profileID: $profileID}) {
            id  
        }
    }
`
const deleteApiKey = /* GraphQL */ gql`
    mutation DeleteAPIKey($keyName: String!, $email: String!, $profileID: ID!){
        deleteAPIKey(input: {keyName: $keyName, email: $email, profileID: $profileID}) {
            id  
        }
    }
`

const axiosOptions = {  
    url: GRAPHQL_ENDPOINT,
    method: 'post',
    headers: {
        'x-api-key': process.env.API_MEWAPP_GRAPHQLAPIKEYOUTPUT,
        'Content-Type': 'application/json',
    },
}


async function saveApiKey(email, profileID, apiKeyUpdate){

    // save key to parameter store
    let error;
    const params = {
        Name: `/mewapp-${process.env.ENV}/${profileID}/${apiKeyUpdate.keyName}`,
        Value: apiKeyUpdate.key,
        Overwrite: false,
        Type: 'SecureString'
    };

    try {
        const ssm = new AWS.SSM({region: process.env.REGION});

        if(apiKeyUpdate.action === 'ADD') {
            await ssm.putParameter(params).promise()
        }

        if(apiKeyUpdate.action === 'DELETE') {
            await ssm.deleteParameter({Name: params.Name}).promise()
        }
    
} catch (exception) {
    console.error(`Something went wrong with SSM action ${apiKeyUpdate.action} for parameter named ${params.Name}`)
    error = exception;
}

if(error){
    return {error}
}

console.log(`Successfully completed SSM action ${apiKeyUpdate.action} for parameter named ${params.Name}`)

// api createApiKey with profileID and keyName

let crudApiKeyResult;

try {
    let variables;
    

    if(apiKeyUpdate.action === 'ADD') {
        variables = {
            keyName: params.Name,
            email,
            profileID
        };

        crudApiKeyResult = await appSyncClient.mutate({ mutation: createApiKey, variables })
    }

    if(apiKeyUpdate.action === 'DELETE') {
        variables = {
            keyId: apiKeyUpdate.keyId
        };
        
        crudApiKeyResult = await appSyncClient.mutate({ mutation: deleteApiKey, variables })
    }
    
} catch (exception) {
    console.error(`Something went wrong with ${apiKeyUpdate.action} the API Key named ${params.Name} to profile.`);
    error = exception;
}

console.log(`Successfully ${apiKeyUpdate.action} API Key with parameter named ${params.Name} to profile.`)

if(error){
    return {error}
}

// crudApiKeyResult.data.createApiKey
return crudApiKeyResult;
}


async function ensureProfile(event) {
    console.log({event});
    const { email, sub, name, bio, apiKeyUpdate, avatar } = event.arguments
    let profile

    const graphqlData = await axios({
        ...axiosOptions,
        data: {
            query: print(getProfile),
            variables: {
                email
            },
        },
    })

    profile = graphqlData && graphqlData.data && graphqlData.data.data && graphqlData.data.data.getProfile && graphqlData.data.data.getProfile
    console.log(`${JSON.stringify(graphqlData.data)}`)

    if (!profile) {
        console.log(`NO EXISTING PROFILE.`)

        let createGraphqlData
        try {

            const variables = {
                    email,
                    ...sub && {sub},
                    ...name && {name},
                    ...bio && {bio},
                    ...avatar && {avatar}
            }

            createGraphqlData = await appSyncClient.mutate({ mutation: createProfile, variables })

            console.log(createGraphqlData)
            console.log(createGraphqlData.data.errors)
            if (createGraphqlData.data.errors || !createGraphqlData.data.createProfile) {
                throw createGraphqlData.data.errors
            }
            profile = createGraphqlData.data.createProfile
        } catch (error) {
            console.log('ERROR with createProfileQuery')
            throw error
        }
    }
    
    console.log(profile)

    if(apiKeyUpdate && apiKeyUpdate.keyName && apiKeyUpdate.key){
        let saveApiKeyResult;
        
        try {
            saveApiKeyResult = await saveApiKey(email, profile.id, apiKeyUpdate);
            console.error(saveApiKeyResult);

            if(saveApiKeyResult.error){
                // handle errors
                console.error(saveApiKeyResult.error);
            }
    
            if(saveApiKeyResult.data){
                // handle success
                console.log(saveApiKeyResult.data.createApiKey);
            }
            
        } catch (error) {
            console.error(error);
        }

    }

    return profile
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`)
    // check if profile exists
    let profile
    try {
        profile = await ensureProfile(event)
    } catch (error) {
        console.log(`ERROR: ${JSON.stringify(error)}`)
        return {
            statusCode: 400,
            //  Uncomment below to enable CORS requests
            //  headers: {
            //      "Access-Control-Allow-Origin": "*",
            //      "Access-Control-Allow-Headers": "*"
            //  },
            body: 'Could not lookup or create profile: ' + JSON.stringify(error),
        }
    }


    // 

    return {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: JSON.stringify(profile),
    }
}
