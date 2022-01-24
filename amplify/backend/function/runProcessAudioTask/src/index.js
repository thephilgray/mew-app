const AWS = require('aws-sdk');
var ecs = new AWS.ECS()

exports.handler = async (event) => {
    const { assignmentId } = event;
    const params = {
        cluster: "mew-process-audio",
        group: "family:mew-process-audio-task",
        launchType: "FARGATE",
        taskDefinition: "mew-process-audio-task:1",
        networkConfiguration: {
            awsvpcConfiguration: {
                subnets: [
                    "subnet-05bc514e"
                ],
                assignPublicIp: "ENABLED",
                securityGroups: [
                    "sg-018b235ebc627252c"
                ]
            }
        },
        overrides: {
            containerOverrides: [
                {
                    name: 'mew-process-audio-test',
                    environment: [
                        {
                            name: "assignmentId",
                            value: assignmentId
                        }
                    ]
                }
            ]
        }
    };

    console.log("Starting execution...");

    // Added promise here
    await ecs.runTask(params).promise();
    // console.log(myReturn)
    console.log("done.")
};
