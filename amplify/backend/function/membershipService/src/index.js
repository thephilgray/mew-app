/* Amplify Params - DO NOT EDIT
	API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_MEWAPP_GRAPHQLAPIIDOUTPUT
	API_MEWAPP_GRAPHQLAPIKEYOUTPUT
	AUTH_MEWAPPACDC5D0E_USERPOOLID
	ENV
	FUNCTION_MEWPROFILESERVICE_NAME
	REGION
Amplify Params - DO NOT EDIT */

const crypto = require('crypto')
const AWS = require('aws-sdk')
const mailchimp = require("@mailchimp/mailchimp_marketing")
const AWSAppSyncClient = require('aws-appsync').default
require('cross-fetch/polyfill')
const GRAPHQL_ENDPOINT = process.env.API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT
const gql = require('graphql-tag')

const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

AWS.config.update({
  region: AWS_REGION,
  credentials: new AWS.Credentials(
    process.env.AWS_ACCESS_KEY_ID,
    process.env.AWS_SECRET_ACCESS_KEY,
    process.env.AWS_SESSION_TOKEN
  ),
});

const credentials = AWS.config.credentials;

const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({
  region: process.env.REGION
});

const listCognitoUsers = async () => {
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#listUsers-property
  
  const listUsersParams =  {
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID, /* required */
    AttributesToGet: [
      'email',
      'sub',
      'name'
    ],
    // Filter: 'STRING_VALUE',
    // Limit: 'NUMBER_VALUE',
    // PaginationToken: 'STRING_VALUE'
  };
  const response = await cognitoidentityserviceprovider.listUsers(listUsersParams).promise();
  return response.Users;
}

const signupUser = async ({email, name}) => {
  
  var params = {
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID,
    Username: email, /* required */
    MessageAction: 'SUPPRESS',
    UserAttributes: [
      {
        Name: 'name',
        Value: name 
    },
     {
        Name: 'email',
        Value: email
    },
     {
        Name: 'email_verified',
        Value: 'true'
    }
    ]
  };
  const result =  await cognitoidentityserviceprovider.adminCreateUser(params).promise();

  // maybe we need to adminSetUserPassword?
  return result;
}

const addUserToGroup = async ({groupName, userName}) => {
  var params = {
    GroupName: groupName, /* required */
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID, /* required */
    Username: userName /* required */
  };
  const result = await cognitoidentityserviceprovider.adminAddUserToGroup(params).promise();
  return result;
}




const appSyncClient = new AWSAppSyncClient({
    url: GRAPHQL_ENDPOINT,
    region: process.env.REGION,
    auth: {
        type: 'AWS_IAM',
        credentials,
        // type: 'API_KEY',
        // apiKey: process.env.API_MEWAPP_GRAPHQLAPIKEYOUTPUT,
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
mutation UpdateMembership($membershipId: ID!, $status: String, $contactId: String, $emailAddress: String, $fullName: String, $mailchimpId: String, $mailchimpStatus: String, $uniqueEmailId: String, $tags: [MailchimpTagInput]) {
  updateMembership(
    input: {id: $membershipId, status: $status, mailchimp: {contactId: $contactId, emailAddress: $emailAddress, fullName: $fullName, id: $mailchimpId, status: $mailchimpStatus, uniqueEmailId: $uniqueEmailId, tags: $tags}}
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


let cognitoUsers
async function ensureCognitoUser({email, name}){
  if(!cognitoUsers){
    try {
      console.log('getting cognito users')
      cognitoUsers = await listCognitoUsers()
      console.log('success: getting cognito users')
    } catch (error) {
      console.log('error getting cognito users')
      console.log(error)
      return undefined;
    }
  }

  let currentCognitoUser = cognitoUsers.find(user => user.Attributes.some(attribute => attribute.Value ===  email))

  if(!currentCognitoUser){
    try {
      console.log('attempting to sign up user.')
      const currentCognitoUserResult = await signupUser({email, name})
      currentCognitoUser = currentCognitoUserResult.User
      console.log('success: sign up user.')
      
    } catch (error) {
      console.log('error signing up user')
      console.log(error);
      return undefined;
    }
    // push into local state
    cognitoUsers.push(currentCognitoUser)
  }
  return currentCognitoUser;
}

async function setUserPassword({userName}){
  var params = {
    Password: crypto.randomBytes(30).toString('hex'), /* required */
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID, /* required */
    Username: userName, /* required */
    Permanent: true
  };
  await cognitoidentityserviceprovider.adminSetUserPassword(params).promise();
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

            for await (const {id: mailchimpId, tags: mailchimpTags, email_address: emailAddress, unique_email_id: uniqueEmailId, contact_id: contactId, full_name: fullName, status: mailchimpStatus} of mailchimpMembers) {

                    const member = getWorkshopResult.data.getWorkshop.memberships.items.find(item => item.email === emailAddress)
                    const status = mailchimpTags.some(item => item.name && item.name.toUpperCase() === 'OUT') ? 'OUT' : 'ACTIVE'
                    const isActive = status === 'ACTIVE'
                    console.log({member, status})
                    let cognitoUser;
                    
                    if(isActive){
                      cognitoUser = await ensureCognitoUser({email:emailAddress, name: fullName })
                      if(cognitoUser && cognitoUser.UserStatus != 'CONFIRMED'){
                        console.log('a user exists but is not confirmed.')
                        console.log({cognitoUser})
                        try {
                          await setUserPassword({userName:cognitoUser.Username})
                        } catch (error) {
                          console.log('error with setting user password')
                          console.log(error)
                        }
                        try {
                          await addUserToGroup({groupName: 'member', userName:cognitoUser.Username})
                        } catch (error) {
                          console.log('error with adding user to member group')
                          console.log(error)
                        }
                      }
                      console.log('could not add user member group')
                    }

                    const baseMembershipVariables = {                       
                        contactId,
                        emailAddress,
                        fullName,
                        mailchimpId,
                        // "subscribed", "unsubscribed", "cleaned", "pending", "transactional", or "archived"
                        mailchimpStatus,
                        uniqueEmailId,
                        // MEW specifically uses mailchimp tags for membership status
                        status,
                        tags: mailchimpTags
                    }


                    if(!member){
                        // if not a member, 
                        // maybe ensure auth signup first
                        
                        const ensureProfileResult = await ensureProfile({email: emailAddress, name: fullName, ...cognitoUser && {sub: cognitoUser.Username}});

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
                      const ensureProfileResult = await ensureProfile({email: emailAddress, name: fullName, ...cognitoUser && {sub: cognitoUser.Username}});
                      console.log({ensureProfileResult});
                  }
                    
                    // if a member but mailchimp info not saved && !member.mailchimp
                    // or just update membership
                    if(member){
                        // update membership
                        const updateMembershipVariables = {
                            ...baseMembershipVariables,
                            membershipId: member.id
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
