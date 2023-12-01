/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["MAILCHIMP_API_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
// @ts-check
/* Amplify Params - DO NOT EDIT
	API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_MEWAPP_GRAPHQLAPIIDOUTPUT
	API_MEWAPP_GRAPHQLAPIKEYOUTPUT
	AUTH_MEWAPPACDC5D0E_USERPOOLID
	ENV
	FUNCTION_MEWPROFILESERVICE_NAME
	REGION
Amplify Params - DO NOT EDIT */

const crypto = require('crypto');
const AWS = require('aws-sdk');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const AWSAppSyncClient = require('aws-appsync').default;
require('cross-fetch/polyfill');
const GRAPHQL_ENDPOINT = process.env.API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT;
const gql = require('graphql-tag');

/** GRAPHQL QUERIES */
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
          sessionTag
        }
      }
      memberships(limit: 1000) {
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
      }
    }
  }
`;

const createMembership = /* GraphQL */ gql`
  mutation CreateMembership(
    $workshopId: ID!
    $emailAddress: String!
    $status: String
    $contactId: String
    $fullName: String
    $mailchimpId: String
    $mailchimpStatus: String
    $uniqueEmailId: String
    $tags: [MailchimpTagInput]
  ) {
    createMembership(
      input: {
        workshopId: $workshopId
        email: $emailAddress
        status: $status
        mailchimp: {
          contactId: $contactId
          emailAddress: $emailAddress
          fullName: $fullName
          id: $mailchimpId
          status: $mailchimpStatus
          uniqueEmailId: $uniqueEmailId
          tags: $tags
        }
      }
    ) {
      id
      email
      status
      mailchimp {
        emailAddress
        id
        status
      }
    }
  }
`;

const updateMembership = /* GraphQL */ gql`
  mutation UpdateMembership(
    $membershipId: ID!
    $status: String
    $contactId: String
    $emailAddress: String
    $fullName: String
    $mailchimpId: String
    $mailchimpStatus: String
    $uniqueEmailId: String
    $tags: [MailchimpTagInput]
  ) {
    updateMembership(
      input: {
        id: $membershipId
        status: $status
        mailchimp: {
          contactId: $contactId
          emailAddress: $emailAddress
          fullName: $fullName
          id: $mailchimpId
          status: $mailchimpStatus
          uniqueEmailId: $uniqueEmailId
          tags: $tags
        }
      }
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
    getProfile(email: $email) {
      email
      id
      name
      avatar
      bio
      createdAt
      updatedAt
    }
  }
`;

const createProfile = /* GraphQL */ gql`
  mutation CreateProfile(
    $email: String!
    $sub: String
    $name: String
    $bio: String
    $avatar: String
  ) {
    createProfile(
      input: {
        email: $email
        sub: $sub
        name: $name
        bio: $bio
        avatar: $avatar
      }
    ) {
      id
    }
  }
`;

const updateProfile = /* GraphQL */ gql`
  mutation UpdateProfile($email: String!, $name: String, $sub: String) {
    updateProfile(input: { email: $email, sub: $sub, name: $name }) {
      email
      id
      name
      avatar
      bio
      sub
      apiKeys {
        items {
          id
          keyName
          createdAt
          profileID
          email
          updatedAt
        }
        nextToken
      }
      memberships(limit: 1000) {
        items {
          id
          workshopId
          email
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

const createApiKey = /* GraphQL */ gql`
  mutation CreateApiKey($keyName: String!, $email: String!, $profileID: ID!) {
    createAPIKey(
      input: { keyName: $keyName, email: $email, profileID: $profileID }
    ) {
      id
    }
  }
`;

const deleteApiKey = /* GraphQL */ gql`
  mutation DeleteAPIKey($keyName: String!, $email: String!, $profileID: ID!) {
    deleteAPIKey(
      input: { keyName: $keyName, email: $email, profileID: $profileID }
    ) {
      id
    }
  }
`;

const updateProfileMailchimpIntegrationOnly = /* GraphQL */ gql`
  mutation UpdateProfile(
    $email: String!
    $enabled: Boolean
    $apiKeyName: String
    $serverPrefix: String
  ) {
    updateProfile(
      input: {
        email: $email
        features: {
          mailchimp: {
            enabled: $enabled
            apiKeyName: $apiKeyName
            serverPrefix: $serverPrefix
          }
        }
      }
    ) {
      email
      id
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          serverPrefix
        }
      }
    }
  }
`;

const updateWorkshopMailchimpIntegrationOnly = /* GraphQL */ gql`
  mutation UpdateWorkshop(
    $id: ID!
    $enabled: Boolean
    $apiKeyName: String
    $serverPrefix: String
  ) {
    updateWorkshop(
      input: {
        input: {
          id: $id
          features: {
            mailchimp: {
              enabled: $enabled
              apiKeyName: $apiKeyName
              serverPrefix: $serverPrefix
            }
          }
        }
      }
    ) {
      id
      name
      email
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          serverPrefix
        }
      }
      createdAt
      updatedAt
    }
  }
`;

// const getMembershipsByWorkshopId = /* GraphQL */ gql`
// query MembershipsByWorkshopId($workshopId:ID!) {
//   membershipsByWorkshopId(workshopId: $workshopId){
//     items{
//       email
//     }
//   }
// }`

/** AWS SDK SETUP */

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
  region: process.env.REGION,
});

/** COGNITO FUNCTIONS */

const listCognitoUsers = async () => {
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#listUsers-property

  const listUsersParams = {
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID /* required */,
    // AttributesToGet: ['email', 'sub', 'name'],
    AttributesToGet: null, // get all attributes
    // Filter: 'STRING_VALUE',
    // Limit: 'NUMBER_VALUE',
    // PaginationToken: 'STRING_VALUE'
  };
  let response;
  try {
    response = await cognitoidentityserviceprovider
      .listUsers(listUsersParams)
      .promise();
  } catch (error) {
    console.log(`error with listUsers`);
    console.log(error);
  }
  return response.Users;
};

const signupUser = async ({ email, name }) => {
  var params = {
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID,
    Username: email /* required */,
    MessageAction: 'SUPPRESS',
    UserAttributes: [
      {
        Name: 'name',
        Value: name,
      },
      {
        Name: 'email',
        Value: email,
      },
      {
        Name: 'email_verified',
        Value: 'true',
      },
    ],
  };
  let result;

  try {
    result = await cognitoidentityserviceprovider
      .adminCreateUser(params)
      .promise();
  } catch (error) {
    console.log(`error with adminCreateUser`);
    console.log(error);
  }

  // maybe we need to adminSetUserPassword?
  return result;
};

const disableUserLogin = async ({ email }) => {
  var params = {
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID,
    Username: email /* required */,
  };
  let result;

  try {
    result = await cognitoidentityserviceprovider
      .adminDisableUser(params)
      .promise();
  } catch (error) {
    console.log(`error with adminDisableUser`);
    console.log(error);
  }

  // maybe we need to adminSetUserPassword?
  return result;
};

const addUserToGroup = async ({ groupName, userName }) => {
  var params = {
    GroupName: groupName /* required */,
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID /* required */,
    Username: userName /* required */,
  };
  let result;
  try {
    result = await cognitoidentityserviceprovider
      .adminAddUserToGroup(params)
      .promise();
  } catch (error) {
    console.log(`error with adminAddUserToGroup`);
    console.log(error);
  }
  return result;
};

const removeUserFromGroup = async ({ groupName, userName }) => {
  var params = {
    GroupName: groupName /* required */,
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID /* required */,
    Username: userName /* required */,
  };
  let result;
  try {
    result = await cognitoidentityserviceprovider
      .adminRemoveUserFromGroup(params)
      .promise();
  } catch (error) {
    console.log(`error with cognito adminRemoveUserFromGroup`);
    console.log(error);
  }
  return result;
};

let cognitoUsers;
async function ensureCognitoUser({ email, name }) {
  if (!cognitoUsers) {
    try {
      console.log('getting cognito users');
      cognitoUsers = await listCognitoUsers();
      console.log('success: getting cognito users');
    } catch (error) {
      console.log('error getting cognito users');
      console.log(error);
      return undefined;
    }
  }

  let currentCognitoUser = cognitoUsers.find((user) =>
    user.Attributes.some((attribute) => attribute.Value === email)
  );

  if (!currentCognitoUser) {
    try {
      console.log('attempting to sign up user.');
      const currentCognitoUserResult = await signupUser({ email, name });
      currentCognitoUser = currentCognitoUserResult.User;
      console.log('success: sign up user.');
    } catch (error) {
      console.log('error signing up user');
      console.log(error);
      return undefined;
    }
    // push into local state
    cognitoUsers.push(currentCognitoUser);
  }
  return currentCognitoUser;
}

async function setUserPassword({ userName }) {
  var params = {
    Password: crypto.randomBytes(30).toString('hex') /* required */,
    UserPoolId: process.env.AUTH_MEWAPPACDC5D0E_USERPOOLID /* required */,
    Username: userName /* required */,
    Permanent: true,
  };
  let result;
  try {
    result = await cognitoidentityserviceprovider
      .adminSetUserPassword(params)
      .promise();
  } catch (error) {
    console.log(`error with cognito adminSetUserPassword`);
    console.log(error);
  }
  return result;
}

/** MAILCHIMP */

let apiKey;
async function getSecret(Name) {
  const ssm = new AWS.SSM({ region: process.env.REGION });
  const params = {
    Name,
    WithDecryption: true,
  };
  let getParameterResult;
  try {
    getParameterResult = await ssm.getParameter(params).promise();
  } catch (error) {
    console.log(`error with ssm getParameter`);
    console.log(error);
  }
  return getParameterResult.Parameter.Value;
}

async function saveApiKey(email, profileID, apiKeyUpdate) {
  // save key to parameter store
  let error;
  const params = {
    Name: `/mewapp-${process.env.ENV}/${profileID}/${apiKeyUpdate.keyName}`,
    Value: apiKeyUpdate.key,
    Overwrite: false,
    Type: 'SecureString',
  };

  try {
    const ssm = new AWS.SSM({ region: process.env.REGION });

    if (apiKeyUpdate.action === 'ADD') {
      await ssm.putParameter(params).promise();
    }

    if (apiKeyUpdate.action === 'DELETE') {
      await ssm.deleteParameter({ Name: params.Name }).promise();
    }
  } catch (exception) {
    console.error(
      `Something went wrong with SSM action ${apiKeyUpdate.action} for parameter named ${params.Name}`
    );
    error = exception;
  }

  if (error) {
    return { error };
  }

  console.log(
    `Successfully completed SSM action ${apiKeyUpdate.action} for parameter named ${params.Name}`
  );

  // api createApiKey with profileID and keyName

  let crudApiKeyResult;

  try {
    let variables;

    if (apiKeyUpdate.action === 'ADD') {
      variables = {
        keyName: params.Name,
        email,
        profileID,
      };

      crudApiKeyResult = await appSyncClient.mutate({
        mutation: createApiKey,
        variables,
      });
    }

    if (apiKeyUpdate.action === 'DELETE') {
      variables = {
        keyId: apiKeyUpdate.keyId,
      };

      crudApiKeyResult = await appSyncClient.mutate({
        mutation: deleteApiKey,
        variables,
      });
    }
  } catch (exception) {
    console.error(
      `Something went wrong with ${apiKeyUpdate.action} the API Key named ${params.Name} to profile.`
    );
    error = exception;
  }

  console.log(
    `Successfully ${apiKeyUpdate.action} API Key with parameter named ${params.Name} to profile.`
  );

  if (error) {
    return { error };
  }

  // crudApiKeyResult.data.createApiKey
  return crudApiKeyResult;
}

async function connectMailchimpAppOauth({
  emailAddress: email,
  mailchimpOauthCode: code,
  mailchimpOauthCallback: OAUTH_CALLBACK,
  mailchimpClientId: MAILCHIMP_CLIENT_ID,
}) {
  const MAILCHIMP_CLIENT_SECRET = await getSecret(
    `/amplify/d1yi6qc6rnncji/${process.env.ENV}/AMPLIFY_membershipService_MAILCHIMP_CLIENT_SECRET`
  );
  const profile = await ensureProfile({ email });
  const profileID = profile && profile.id;

  const tokenResponse = await fetch(
    'https://login.mailchimp.com/oauth2/token',
    {
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: MAILCHIMP_CLIENT_ID,
        client_secret: MAILCHIMP_CLIENT_SECRET,
        redirect_uri: OAUTH_CALLBACK,
        code,
      }),
    }
  );

  const { access_token } = await tokenResponse.json();
  console.log({ access_token });

  const metadataResponse = await fetch(
    'https://login.mailchimp.com/oauth2/metadata',
    {
      headers: {
        Authorization: `OAuth ${access_token}`,
      },
    }
  );

  const { dc } = await metadataResponse.json();
  console.log({ dc });

  mailchimp.setConfig({
    accessToken: access_token,
    server: dc,
  });

  const response = await mailchimp.ping.get();
  console.log(response);

  await saveApiKey(email, profileID, {
    action: 'ADD',
    keyName: 'MAILCHIMP',
    key: access_token,
  });

  let updateGraphqlData;

  try {
    const variables = {
      email,
      enabled: true,
      apiKeyName: `/mewapp-${process.env.ENV}/${profileID}/MAILCHIMP`,
      serverPrefix: dc,
    };

    updateGraphqlData = await appSyncClient.mutate({
      mutation: updateProfileMailchimpIntegrationOnly,
      variables,
    });

    console.log(updateGraphqlData);

    if (
      updateGraphqlData &&
      updateGraphqlData.data &&
      (updateGraphqlData.data.errors || !updateGraphqlData.data.updateProfile)
    ) {
      console.log(updateGraphqlData.data.errors);
      throw updateGraphqlData.data.errors;
    }
  } catch (error) {
    console.log('ERROR with updateProfileQuery');
    throw error;
  }
}

async function disconnectMailchimpAppOauth({
  emailAddress: email,
  mailchimpApiKeyId: keyId,
  workshopId,
}) {
  if (workshopId !== 'profile') {
    // just delete from works
    let updateGraphqlData;

    try {
      const variables = {
        id: workshopId,
        enabled: false,
        apiKeyName: null,
        serverPrefix: null,
      };

      updateGraphqlData = await appSyncClient.mutate({
        mutation: updateWorkshopMailchimpIntegrationOnly,
        variables,
      });

      console.log(updateGraphqlData);

      if (
        updateGraphqlData &&
        updateGraphqlData.data &&
        (updateGraphqlData.data.errors ||
          !updateGraphqlData.data.updateWorkshop)
      ) {
        console.log(updateGraphqlData.data.errors);
        throw updateGraphqlData.data.errors;
      }
    } catch (error) {
      console.log('ERROR with updateWorkshopQuery');
      throw error;
    }
  } else {
    // delete from profile and secrets manager
    const profile = await ensureProfile({ email });
    const profileID = profile && profile.id;
    await saveApiKey(email, profileID, {
      action: 'DELETE',
      keyId,
    });

    let updateGraphqlData;

    try {
      const variables = {
        email,
        enabled: false,
        apiKeyName: null,
        serverPrefix: null,
      };

      updateGraphqlData = await appSyncClient.mutate({
        mutation: updateProfileMailchimpIntegrationOnly,
        variables,
      });

      console.log(updateGraphqlData);

      if (
        updateGraphqlData &&
        updateGraphqlData.data &&
        (updateGraphqlData.data.errors || !updateGraphqlData.data.updateProfile)
      ) {
        console.log(updateGraphqlData.data.errors);
        throw updateGraphqlData.data.errors;
      }
    } catch (error) {
      console.log('ERROR with updateProfileQuery');
      throw error;
    }
  }
}

/**

TODO: flow for saving mailchimp oauth2 access token

// action: CONNECT_MAILCHIMP
// code
// email
// profileID
// 


get MAILCHIMP_CLIENT_ID amplify env vars for prod or fallback to nonprod client_id – or we could send it from the frontend

get MAILCHIMP_CLIENT_SECRET from ssm – there is only one MAILCHIMP_API_KEY
getSecret('MAILCHIMP_API_KEY') will do this


OAUTH_CALLBACK – hardcoded


  // Here we're exchanging the temporary code for the user's access token.
  const tokenResponse = await fetch(
    "https://login.mailchimp.com/oauth2/token",
    {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: MAILCHIMP_CLIENT_ID,
        client_secret: MAILCHIMP_CLIENT_SECRET,
        redirect_uri: OAUTH_CALLBACK,
        code
      })
    }
  );

  const { access_token } = await tokenResponse.json();
  console.log(access_token);

  // Now we're using the access token to get information about the user.
  // Specifically, we want to get the user's server prefix, which we'll use to
  // make calls to the API on their behalf.  This prefix will change from user
  // to user.
  const metadataResponse = await fetch(
    "https://login.mailchimp.com/oauth2/metadata",
    {
      headers: {
        Authorization: `OAuth ${access_token}`
      }
    }
  );

  const { dc } = await metadataResponse.json();
  console.log(dc);

  // Below, we're using the access token and server prefix to make an
  // authenticated request on behalf of the user who just granted OAuth access.
  // You wouldn't keep this in your production code, but it's here to
  // demonstrate how the call is made.

  mailchimp.setConfig({
    accessToken: access_token,
    server: dc
  });

  const response = await mailchimp.ping.get();
  console.log(response);


  // on success, save the access token to the user's profile
  saveApiKey(email, profileID, {
    action: 'ADD',
    keyName: 'MAILCHIMP',
    key: access_token
  })


  // create new MailchimpIntegration on the Profile
  enabled: true
  apiKeyName: MAILCHIMP
  // listId: String – unknown
  serverPrefix: dc

  we will use the `enabled` value to either show the switch or show the button to connect to mailchimp on the workshop form; 
  on the profile page, it will determine the state of the button to either connect to mailchimp or remove connection

  when we remove a connection, we might need special handling – remove or disable from all workshops – maybe don't include remove with MVP 

// later, when the user goes to the workshop and enables the mailchimp integration, they only need to know the listId
// we will pre-populate the other values, apiKeyName and serverPrefix, from their profile
// the rest of the existing stuff should work normally, except we want to mailchimp.setConfig with accessToken: apiKey

*/

async function getMailchimpMembers({ apiKeyName, serverPrefix, listId }) {
  if (!apiKey) {
    apiKey = await getSecret(apiKeyName);
    mailchimp.setConfig({
      accessToken: apiKey,
      server: serverPrefix,
    });
  }

  let response;
  try {
    response = await mailchimp.lists.getListMembersInfo(listId, {
      count: 1000,
    });
  } catch (error) {
    console.log(`error with mailchimp getListMembersInfo`);
    console.log(error);
  }
  return response.members;
}

async function getMailchimpMember({
  apiKeyName,
  serverPrefix,
  listId,
  emailAddress,
}) {
  if (!apiKey) {
    apiKey = await getSecret(apiKeyName);
    mailchimp.setConfig({
      accessToken: apiKey,
      server: serverPrefix,
    });
  }
  let member;
  const subscriber_hash = crypto
    .createHash('md5')
    .update(emailAddress.toLowerCase())
    .digest('hex');

  try {
    member = await mailchimp.lists.getListMember(listId, subscriber_hash);
  } catch (error) {
    console.log(`error with mailchimp getListMember`);
    console.log(error);
  }
  return member;
}

async function addMailchimpMember({
  apiKeyName,
  serverPrefix,
  listId,
  emailAddress,
}) {
  if (!apiKey) {
    apiKey = await getSecret(apiKeyName);
    mailchimp.setConfig({
      accessToken: apiKey,
      server: serverPrefix,
    });
  }

  let member = await getMailchimpMember({
    apiKeyName,
    serverPrefix,
    listId,
    emailAddress,
  });

  if (member && member.status === 'subscribed') {
    member = await updateMailchimpMemberTags({
      emailAddress,
      apiKeyName,
      serverPrefix,
      listId,
      tags: [{ name: 'OUT', status: 'inactive' }],
    });
  } else {
    try {
      const subscriber_hash = getSubscriberHash(emailAddress);
      member = await mailchimp.lists.setListMember(listId, subscriber_hash, {
        email_address: emailAddress,
        status: 'subscribed',
        status_if_new: 'subscribed',
      });
    } catch (error) {
      console.log(`error with mailchimp addListMember`);
      console.log(error);
    }
  }
  console.log(member);
  return member;
}

function getSubscriberHash(emailAddress) {
  return crypto
    .createHash('md5')
    .update(emailAddress.toLowerCase())
    .digest('hex');
}

async function updateMailchimpMemberTags({
  apiKeyName,
  serverPrefix,
  listId,
  emailAddress,
  tags,
}) {
  if (!apiKey) {
    apiKey = await getSecret(apiKeyName);
    mailchimp.setConfig({
      accessToken: apiKey,
      server: serverPrefix,
    });
  }
  const subscriber_hash = getSubscriberHash(emailAddress);

  try {
    await mailchimp.lists.updateListMemberTags(listId, subscriber_hash, {
      tags,
    });
  } catch (error) {
    console.log('error with mailchimp updateListMemberTags');
    console.log(error);
  }
  return getMailchimpMember({ apiKeyName, serverPrefix, listId, emailAddress });
}

/** APPSYNC */

const appSyncClient = new AWSAppSyncClient({
  url: GRAPHQL_ENDPOINT,
  region: process.env.REGION,
  auth: {
    // type: 'AWS_IAM',
    credentials,
    type: 'API_KEY',
    apiKey: process.env.API_MEWAPP_GRAPHQLAPIKEYOUTPUT,
  },
  disableOffline: true,
});

async function ensureProfile({ email, sub, name }) {
  // const lambda = new AWS.Lambda({region: process.env.REGION})
  // const params = {
  //     FunctionName: process.env.FUNCTION_MEWPROFILESERVICE_NAME,
  //     InvocationType: 'RequestResponse',
  //     Payload: JSON.stringify({email, sub, name})

  // }
  // return lambda.invoke(params).promise()

  let profile;

  const graphqlData = await appSyncClient.query({
    query: getProfile,
    variables: { email },
  });

  profile = graphqlData && graphqlData.data && graphqlData.data.getProfile;
  if (graphqlData && graphqlData.data) {
    console.log(`${JSON.stringify(graphqlData.data)}`);
  }

  if (!profile) {
    console.log(`NO EXISTING PROFILE.`);

    let createGraphqlData;
    try {
      const variables = {
        email,
        ...(sub && { sub }),
        ...(name && { name }),
      };

      createGraphqlData = await appSyncClient.mutate({
        mutation: createProfile,
        variables,
      });

      console.log(createGraphqlData);

      if (
        createGraphqlData &&
        createGraphqlData.data &&
        (createGraphqlData.data.errors || !createGraphqlData.data.createProfile)
      ) {
        console.log(createGraphqlData.data.errors);
        throw createGraphqlData.data.errors;
      }
      profile = createGraphqlData.data.createProfile;
    } catch (error) {
      console.log('ERROR with createProfileQuery');
      throw error;
    }
  }

  if ((sub && !profile.sub) || (name && !profile.name)) {
    console.log(`NAME OR SUB UPDATE. UPDATING EXISTING PROFILE.`);

    let updateGraphqlData;
    try {
      const variables = {
        email,
        ...(sub && { sub }),
        ...(name && { name }),
      };

      updateGraphqlData = await appSyncClient.mutate({
        mutation: updateProfile,
        variables,
      });

      console.log(updateGraphqlData);
      console.log(updateGraphqlData.data.errors);
      if (
        updateGraphqlData &&
        updateGraphqlData.data &&
        (updateGraphqlData.data.errors || !updateGraphqlData.data.updateProfile)
      ) {
        throw updateGraphqlData.data.errors;
      }
      profile = updateGraphqlData.data.updateProfile;
    } catch (error) {
      console.log('ERROR with updateProfileQuery');
      throw error;
    }
  }

  console.log(profile);
  return profile;
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const { action, workshopId, payloads = [] } = event.arguments;

  const variables = {
    id: workshopId,
  };

  let getWorkshopResult;
  let enableMailchimpIntegration;

  if (workshopId !== 'profile') {
    getWorkshopResult = await appSyncClient.query({
      query: getWorkshop,
      variables,
    });

    // get Workshop
    enableMailchimpIntegration =
      getWorkshopResult &&
      getWorkshopResult.data &&
      getWorkshopResult.data.getWorkshop &&
      getWorkshopResult.data.getWorkshop.features &&
      getWorkshopResult.data.getWorkshop.features.mailchimp &&
      getWorkshopResult.data.getWorkshop.features.mailchimp.enabled;
  }

  let apiKeyName;
  let serverPrefix;
  let listId;
  let mailchimpMembers;
  let sessionTag = '';

  if (enableMailchimpIntegration) {
    const mailchimpSettings =
      getWorkshopResult.data.getWorkshop.features.mailchimp;
    serverPrefix = mailchimpSettings.serverPrefix;
    listId = mailchimpSettings.listId;
    sessionTag = mailchimpSettings.sessionTag;
    apiKeyName = mailchimpSettings.apiKeyName;
  }

  async function addToGroup({ cognitoUser, groupName }) {
    try {
      await addUserToGroup({ groupName, userName: cognitoUser.Username });
    } catch (error) {
      console.log('error with adding user to member group');
      console.log(error);
    }
  }

  async function addLogin({ emailAddress, fullName, groupName }) {
    const cognitoUser = await ensureCognitoUser({
      email: emailAddress,
      name: fullName,
    });
    if (cognitoUser && cognitoUser.UserStatus != 'CONFIRMED') {
      console.log('a user exists but is not confirmed.');
      console.log({ cognitoUser });
      try {
        await setUserPassword({ userName: cognitoUser.Username });
      } catch (error) {
        console.log('error with setting user password');
        console.log(error);
      }
      if (groupName) {
        await addToGroup({ groupName, cognitoUser });
      }
    }

    let ensureProfileResult;
    try {
      ensureProfileResult = await ensureProfile({
        email: emailAddress,
        name: fullName,
        ...(cognitoUser && { sub: cognitoUser.Username }),
      });
      console.log({ ensureProfileResult });
    } catch (error) {
      console.log(`error creating a profile`);
      console.log(error);
    }
    return cognitoUser;
  }

  async function disableLogin({ emailAddress }) {
    return disableUserLogin({ email: emailAddress });
  }

  async function addOrUpdateMembership({
    emailAddress,
    fullName,
    status = 'ACTIVE',
    mailchimpStatus,
    mailchimpTags,
    mailchimpId,
    uniqueEmailId,
    contactId,
  }) {
    const baseMembershipVariables = {
      emailAddress,
      fullName,
      status,
      ...(enableMailchimpIntegration && {
        mailchimpStatus,
        tags: mailchimpTags,
        uniqueEmailId,
        mailchimpId,
        contactId,
      }),
    };

    const member = getMemberFromEmail({ emailAddress });
    console.log({ member });

    if (!member) {
      // create membership
      const createMembershipVariables = {
        ...baseMembershipVariables,
        workshopId,
      };

      let createMembershipResult;
      try {
        createMembershipResult = await appSyncClient.mutate({
          mutation: createMembership,
          variables: createMembershipVariables,
        });
        console.log({ createMembershipResult });
      } catch (error) {
        console.log(`Error with createMembership`);
        console.log(error);
      }
    } else {
      // if a member but mailchimp info not saved && !member.mailchimp
      // or just update membership
      // update membership
      const updateMembershipVariables = {
        ...baseMembershipVariables,
        membershipId: member.id,
      };

      let updateMembershipResult;
      try {
        updateMembershipResult = await appSyncClient.mutate({
          mutation: updateMembership,
          variables: updateMembershipVariables,
        });
        console.log({ updateMembershipResult });
      } catch (error) {
        console.log(`Error with updateMembership`);
        console.log(error);
      }
    }
  }

  async function disableMembership({ emailAddress }) {
    const member = getMemberFromEmail({ emailAddress });
    if (!member) {
      console.log('cannot disable membership. not a member!');
      return;
    }
    // update membership
    const updateMembershipVariables = {
      status: 'OUT',
      membershipId: member.id,
    };

    let updateMembershipResult;

    try {
      updateMembershipResult = await appSyncClient.mutate({
        mutation: updateMembership,
        variables: updateMembershipVariables,
      });
      console.log({ updateMembershipResult });
    } catch (error) {
      console.log(`Error with updateMembership`);
      console.log(error);
    }

    let ensureProfileResult;
    try {
      ensureProfileResult = await ensureProfile({
        email: emailAddress,
      });
      console.log({ ensureProfileResult });
    } catch (error) {
      console.log(`error getting/creating a profile`);
    }

    if (
      ensureProfileResult &&
      ensureProfileResult.memberships &&
      ensureProfileResult.memberships.items &&
      ensureProfileResult.memberships.items.filter(
        (item) => item.status === 'ACTIVE'
      ).length < 1
    ) {
      try {
        await removeFromGroup({ emailAddress, groupName: 'member' });
      } catch (error) {
        console.log(`Error with removeFromGroup`);
        console.log(error);
      }
    }
  }

  async function addMailchimpSubscription({ emailAddress }) {
    const updatedMember = await addMailchimpMember({
      emailAddress,
      apiKeyName,
      serverPrefix,
      listId,
    });

    if (updatedMember) {
      const {
        id: mailchimpId,
        tags: mailchimpTags,
        email_address: emailAddress,
        unique_email_id: uniqueEmailId,
        contact_id: contactId,
        full_name: fullName,
        status: mailchimpStatus,
      } = updatedMember;

      await addOrUpdateMembership({
        contactId,
        emailAddress,
        fullName,
        mailchimpId,
        mailchimpStatus,
        uniqueEmailId,
        status: 'ACTIVE',
        mailchimpTags,
      });
    }
  }

  async function disableMailchimpSubscription({ emailAddress }) {
    // MEW-specific MC logic
    const updatedMember = await updateMailchimpMemberTags({
      emailAddress,
      apiKeyName,
      serverPrefix,
      listId,
      tags: [{ name: 'OUT', status: 'active' }],
    });

    if (updatedMember) {
      const {
        id: mailchimpId,
        tags: mailchimpTags,
        email_address: emailAddress,
        unique_email_id: uniqueEmailId,
        contact_id: contactId,
        full_name: fullName,
        status: mailchimpStatus,
      } = updatedMember;

      await addOrUpdateMembership({
        contactId,
        emailAddress,
        fullName,
        mailchimpId,
        mailchimpStatus,
        uniqueEmailId,
        status: 'OUT',
        mailchimpTags,
      });
    }
  }

  function getMemberFromEmail({ emailAddress }) {
    return getWorkshopResult.data.getWorkshop.memberships.items.find(
      (item) => item.email === emailAddress
    );
  }

  async function removeFromGroup({ emailAddress, groupName }) {
    return removeUserFromGroup({ groupName, userName: emailAddress });
  }

  switch (action) {
    case 'SYNC_MEMBERS_WITH_MAILCHIMP':
      if (!enableMailchimpIntegration) break;
      mailchimpMembers = await getMailchimpMembers({
        apiKeyName,
        serverPrefix,
        listId,
      });
      for await (const {
        id: mailchimpId,
        tags: mailchimpTags,
        email_address: emailAddress,
        unique_email_id: uniqueEmailId,
        contact_id: contactId,
        full_name: fullName,
        status: mailchimpStatus,
      } of mailchimpMembers) {
        const hasSessionTag = mailchimpTags.some(
          (item) =>
            item.name && item.name.toUpperCase() === sessionTag.toUpperCase()
        );
        const hasOutTag = mailchimpTags.some(
          (item) => item.name && item.name.toUpperCase() === 'OUT'
        );
        const filtered = sessionTag && !hasSessionTag;

        if (!filtered) {
          const isActive = sessionTag
            ? hasSessionTag && !hasOutTag
            : !hasOutTag;
          const status = isActive ? 'ACTIVE' : 'OUT';
          let cognitoUser;
          if (isActive) {
            cognitoUser = await addLogin({
              emailAddress,
              fullName,
              groupName: 'member',
            });
          }
          await addOrUpdateMembership({
            contactId,
            emailAddress,
            fullName,
            mailchimpId,
            mailchimpStatus,
            uniqueEmailId,
            status,
            mailchimpTags,
          });
        }
      }
      break;

    case 'ADD_MEMBERSHIP':
      for await (const payload of payloads) {
        // must ensure cognito login and group first
        const cognitoUser = await addLogin({ ...payload, groupName: 'member' });
        if (cognitoUser) {
          await addOrUpdateMembership(payload);
        }
      }
      break;

    case 'DISABLE_MEMBERSHIP':
      for await (const payload of payloads) {
        await disableMembership(payload);
      }
      break;

    case 'ADD_MAILCHIMP_SUBSCRIPTION':
      for await (const payload of payloads) {
        await addMailchimpSubscription(payload);
      }
      break;

    case 'DISABLE_MAILCHIMP_SUBSCRIPTION':
      for await (const payload of payloads) {
        await disableMailchimpSubscription(payload);
      }
      break;

    case 'ADD_LOGIN':
      for await (const payload of payloads) {
        await addLogin(payload);
      }
      break;

    case 'ADD_PROFILE':
      for await (const payload of payloads) {
        await ensureProfile(payload);
      }
      break;
    case 'DISABLE_LOGIN':
      for await (const payload of payloads) {
        await disableLogin(payload);
      }
      break;

    case 'CONNECT_MAILCHIMP':
      await connectMailchimpAppOauth(payloads[0]);
      // {
      // emailAddress
      // mailchimpOauthCode
      // mailchimpOauthCallback
      // mailchimpClientId
      // }
      break;
    case 'DISCONNECT_MAILCHIMP':
      await disconnectMailchimpAppOauth({ ...payloads[0], workshopId });
      // {
      // emailAddress
      // mailchimpApiKeyId;
      // }
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
