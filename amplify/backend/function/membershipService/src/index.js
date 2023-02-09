
/* Amplify Params - DO NOT EDIT
	API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_MEWAPP_GRAPHQLAPIIDOUTPUT
	API_MEWAPP_GRAPHQLAPIKEYOUTPUT
	AUTH_MEWAPPACDC5D0E_USERPOOLID
	ENV
	FUNCTION_MEWPROFILESERVICE_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk')
const mailchimp = require("@mailchimp/mailchimp_marketing");
const AWSAppSyncClient = require('aws-appsync').default
require('cross-fetch/polyfill')
const GRAPHQL_ENDPOINT = process.env.API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT
const gql = require('graphql-tag')


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

const getWorkshop = /* GraphQL */ gql`
query GetWorkshop($id: ID!) {
    getWorkshop(id: $id) {
      id
      name
      fileRequests {
        items {
          id
          expiration
          title
          details
          required
          workshopId
        }
      }
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          comments
          workshopId
        }
      }
      status
      passes
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          serverPrefix
        }
      }
      memberships {
        items {
          id
          workshopId
          email
          status
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            tags {
              id
              name
            }
            }
            _version
            _deleted
        }
      },
    }
  }
`;

const createMembership = /* GraphQL */ gql`
mutation CreateMembership($workshopId: ID!, $emailAddress:String!, $status: String, $contactId:String, $fullName:String, $mailchimpId:String, $mailchimpStatus: String, $uniqueEmailId:String, $tags: [MailchimpTagInput]) {
    createMembership(input: {workshopId: $workshopId, email: $emailAddress, status: $status, mailchimp: {
      contactId:$contactId,
      emailAddress:$emailAddress,
      fullName:$fullName,
      id:$mailchimpId,
      status:$mailchimpStatus,
      uniqueEmailId:$uniqueEmailId,
      tags: $tags
    }}) {
      id
      email
      status
      mailchimp{
        emailAddress
        id
        status
      }
    }
  }
  `;


const updateMembership = /* GraphQL */ gql`
mutation UpdateMembership($membershipId: ID!, $status: String, $version: Int, $contactId: String, $emailAddress: String, $fullName: String, $mailchimpId: String, $mailchimpStatus: String, $uniqueEmailId: String, $tags: [MailchimpTagInput]) {
  updateMembership(
    input: {id: $membershipId, status: $status, _version: $version, mailchimp: {contactId: $contactId, emailAddress: $emailAddress, fullName: $fullName, id: $mailchimpId, status: $mailchimpStatus, uniqueEmailId: $uniqueEmailId, tags: $tags}}
  ) {
    id
    status
    mailchimp {
      id
      fullName
      emailAddress
    }
  }
}
`;


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

// const getMembershipsByWorkshopId = /* GraphQL */ gql`
// query MembershipsByWorkshopId($workshopId:ID!) {
//   membershipsByWorkshopId(workshopId: $workshopId){
//     items{
//       email
//     }
//   }
// }`

async function getApiKey(Name){
    const ssm = new AWS.SSM({region: process.env.REGION});
    const params = {
        Name,
        WithDecryption: true
    
    }
    const getParameterResult = await ssm.getParameter(params).promise()
    return getParameterResult.Parameter.Value
}

async function getMailchimpMembers({apiKeyName, serverPrefix, listId}){
    const apiKey = await getApiKey(apiKeyName)

    mailchimp.setConfig({
        apiKey,
        server: serverPrefix,
      });

     await mailchimp.lists.getListMembersInfo(listId);
     const response = await mailchimp.lists.getListMembersInfo(listId);
     return response.members;
}

async function ensureProfile({email, sub, name}){
    // const lambda = new AWS.Lambda({region: process.env.REGION})
    // const params = {
    //     FunctionName: process.env.FUNCTION_MEWPROFILESERVICE_NAME,
    //     InvocationType: 'RequestResponse',
    //     Payload: JSON.stringify({email, sub, name})
        
    // }
    // return lambda.invoke(params).promise()

    let profile

    const graphqlData = await appSyncClient.query({query: getProfile, variables: {email}})

    profile = graphqlData && graphqlData.data && graphqlData.data.getProfile
    console.log(`${JSON.stringify(graphqlData.data)}`)

    if (!profile) {
        console.log(`NO EXISTING PROFILE.`)

        let createGraphqlData
        try {

            const variables = {
                    email,
                    ...sub && {sub},
                    ...name && {name},
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
    return profile
}



/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const {action, workshopId} = event.arguments;

    const variables = {
        id: workshopId
    };

    const getWorkshopResult = await appSyncClient.query({ query: getWorkshop, variables })

    // get Workshop
    let enableMailchimpIntegration = getWorkshopResult.data && getWorkshopResult.data.getWorkshop && getWorkshopResult.data.getWorkshop.features && getWorkshopResult.data.getWorkshop.features.mailchimp && getWorkshopResult.data.getWorkshop.features.mailchimp.enabled
    let apiKeyName
    let serverPrefix
    let listId
    let mailchimpMembers

    if(enableMailchimpIntegration){
        const mailchimpSettings = getWorkshopResult.data.getWorkshop.features.mailchimp;
        serverPrefix = mailchimpSettings.serverPrefix
        listId = mailchimpSettings.listId
        apiKeyName = mailchimpSettings.apiKeyName
    }

    switch (action) {
        case 'SYNC_MEMBERS_WITH_MAILCHIMP':
            if(!enableMailchimpIntegration) break;
            mailchimpMembers = await getMailchimpMembers({apiKeyName, serverPrefix, listId})
            console.log({mailchimpMembers})

            for await (const {id: mailchimpId, tags: mailchimpTags, email_address: emailAddress, unique_email_id: uniqueEmailId, contact_id: contactId, full_name: fullName, status: mailchimpStatus} of mailchimpMembers) {

                    const member = getWorkshopResult.data.getWorkshop.memberships.items.find(item => item.email === emailAddress)
                    console.log(apiKeyName)

                    const baseMembershipVariables = {                       
                        contactId,
                        emailAddress,
                        fullName,
                        mailchimpId,
                        // "subscribed", "unsubscribed", "cleaned", "pending", "transactional", or "archived"
                        mailchimpStatus,
                        uniqueEmailId,
                        // MEW specifically uses mailchimp tags for membership status
                        status: mailchimpTags.some(item => item.name && item.name.toUpperCase() === 'OUT') ? 'OUT' : 'ACTIVE',
                        tags: mailchimpTags
                    }

                    if(!member || member._deleted){
                        // if not a member, 
                        // maybe ensure auth signup first
                        const ensureProfileResult = await ensureProfile({email: emailAddress, name: fullName});
                        console.log({ensureProfileResult});
                        
                        // create membership
                        const createMembershipVariables = {
                            ...baseMembershipVariables,
                            workshopId,
                        }

                        const createMembershipResult = await appSyncClient.mutate({mutation: createMembership, variables: createMembershipVariables})
                        console.log({createMembershipResult});
                    }

                    if(member && !member.profile){
                      console.log('ensure profile')
                      // ensure profile
                      const ensureProfileResult = await ensureProfile({email: emailAddress, name: fullName});
                      console.log({ensureProfileResult});
                  }

                    
                    // if a member but mailchimp info not saved && !member.mailchimp
                    // or just update membership
                    if(member){
                        // update membership
                        const updateMembershipVariables = {
                            ...baseMembershipVariables,
                            membershipId: member.id,
                            version: member._version
                        }

                        const updateMembershipResult = await appSyncClient.mutate({mutation: updateMembership, variables: updateMembershipVariables})
                        console.log({updateMembershipResult})
                    }
    
                    // otherwise do nothing
                }
            

   
            break;
    
        default:
            break;
    }

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
