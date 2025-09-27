
/* eslint-disable @typescript-eslint/no-var-requires */
const { Amplify, API, graphqlOperation } = require('aws-amplify');
const { faker } = require('@faker-js/faker');
const awsmobile = require('../src/aws-exports');

Amplify.configure(awsmobile.default);

const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
      }
      nextToken
    }
  }
`;

const listFileRequests = /* GraphQL */ `
  query ListFileRequests(
    $filter: ModelFileRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
      nextToken
    }
  }
`;

const listFileRequestSubmissions = /* GraphQL */ `
  query ListFileRequestSubmissions(
    $filter: ModelFileRequestSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileRequestSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
      }
      nextToken
    }
  }
`;

const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      createdAt
    }
  }
`;

const NUM_COMMENTS = 200;

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

async function seed() {
  const workshopId = process.argv[2];
  if (!workshopId) {
    console.error('Please provide a workshopId as the first argument.');
    process.exit(1);
  }

  console.log(`Seeding comments for workshop: ${workshopId}`);

  try {
    // 1. Fetch profiles
    console.log('Fetching profiles...');
    const allProfiles = [];
    let nextToken;
    do {
      const result = await API.graphql(
        graphqlOperation(listProfiles, { limit: 100, nextToken })
      );
      allProfiles.push(...result.data.listProfiles.items);
      nextToken = result.data.listProfiles.nextToken;
    } while (nextToken);
    console.log(`Found ${allProfiles.length} profiles.`);

    if (allProfiles.length === 0) {
      console.error('No profiles found. Please create some users first.');
      process.exit(1);
    }

    // 2. Fetch assignments for the workshop
    console.log('Fetching assignments...');
    const allAssignments = [];
    nextToken = undefined;
    do {
        const result = await API.graphql(
            graphqlOperation(listFileRequests, { 
                filter: { workshopId: { eq: workshopId } },
                limit: 100, 
                nextToken 
            })
        );
        allAssignments.push(...result.data.listFileRequests.items);
        nextToken = result.data.listFileRequests.nextToken;
    } while (nextToken);
    console.log(`Found ${allAssignments.length} assignments.`);

    // 3. Fetch submissions for the assignments
    console.log('Fetching submissions...');
    const allSubmissions = [];
    if (allAssignments.length > 0) {
        const assignmentIds = allAssignments.map(a => a.id);
        nextToken = undefined;
        do {
            const result = await API.graphql(
                graphqlOperation(listFileRequestSubmissions, {
                    filter: { or: assignmentIds.map(id => ({ fileRequestId: { eq: id } })) },
                    limit: 100,
                    nextToken
                })
            );
            allSubmissions.push(...result.data.listFileRequestSubmissions.items);
            nextToken = result.data.listFileRequestSubmissions.nextToken;
        } while (nextToken);
    }
    console.log(`Found ${allSubmissions.length} submissions.`);

    // 4. Create comments
    console.log(`Creating ${NUM_COMMENTS} comments...`);
    const createdComments = [];
    for (let i = 0; i < NUM_COMMENTS; i++) {
      const authorProfile = getRandomItem(allProfiles);
      const content = faker.lorem.sentences(Math.ceil(Math.random() * 3));
      
      const input = {
        email: authorProfile.email,
        content,
        workshopId,
        type: 'Comment',
      };

      // 20% chance of being a reply
      if (createdComments.length > 0 && Math.random() < 0.2) {
        const parentComment = getRandomItem(createdComments);
        input.parentId = parentComment.id;
        // copy parent's associations
        input.assignmentId = parentComment.assignmentId;
        input.submissionId = parentComment.submissionId;
        input.recipientEmail = parentComment.email;

      } else {
         // 50% chance of being associated with a submission
        if (allSubmissions.length > 0 && Math.random() < 0.5) {
            const submission = getRandomItem(allSubmissions);
            input.submissionId = submission.id;
            input.recipientEmail = submission.email;
        }
        // 30% chance of being associated with an assignment (if not with a submission)
        else if (allAssignments.length > 0 && Math.random() < 0.3) {
            const assignment = getRandomItem(allAssignments);
            input.assignmentId = assignment.id;
        }
      }

      try {
        const result = await API.graphql(
          graphqlOperation(createComment, { input })
        );
        const newComment = result.data.createComment;
        createdComments.push({
            id: newComment.id,
            email: input.email,
            assignmentId: input.assignmentId,
            submissionId: input.submissionId,
        });
        console.log(`Created comment ${i + 1}/${NUM_COMMENTS}`);
      } catch (error) {
        console.error(`Error creating comment ${i + 1}:`, error.errors || error);
      }
    }

    console.log('Seeding complete!');
  } catch (error) {
    console.error('An error occurred during seeding:', error.errors || error);
  }
}

seed();
