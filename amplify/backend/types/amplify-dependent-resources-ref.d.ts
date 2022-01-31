export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "mewappacdc5d0e": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "AppClientSecret": "string"
        }
    },
    "storage": {
        "mewapp": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "mewapp": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "zipmewsubmissions": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "populateMembers": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "runProcessAudioTask": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}