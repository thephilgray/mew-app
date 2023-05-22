const AWS = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  console.log(event)
  const lambda = new AWS.Lambda({ region: process.env.REGION });
  const params = {
    FunctionName: process.env.FUNCTION_MEWPROFILESERVICE_NAME,
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify({
      action: 'ADD_PROFILE',
      payloads: [
        {
          email: event.email,
          name: event.name || event.email
          sub: event.sub || event.userName
        },
      ],
    }),
  };
  return lambda.invoke(params).promise();
};
