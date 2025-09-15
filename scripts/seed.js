const { Amplify, API, graphqlOperation } = require('aws-amplify');
const fs = require('fs');
const path = require('path');
const awsconfig = require('../src/aws-exports');

Amplify.configure(awsconfig);

const NUM_ITEMS = 500; // Number of items to create for each type

const USER_EMAIL = "testuser@example.com";
const USER_ID = "test-user-id";
const USER_NAME = "Test User";

// Function to extract GraphQL mutations from the mutations.ts file
function getMutations() {
  const mutationsPath = path.join(__dirname, '../src/graphql/mutations.ts');
  const mutationsFileContent = fs.readFileSync(mutationsPath, 'utf8');

  const mutations = {};
  const mutationRegex = /export const (\w+) = \/\* GraphQL \*\/ `([^`]+)`/g;

  let match;
  while ((match = mutationRegex.exec(mutationsFileContent)) !== null) {
    const name = match[1];
    const query = match[2];
    mutations[name] = query;
  }
  return mutations;
}


async function seed() {
  console.log('Seeding data...');
  const {
    createProfile,
    createWorkshop,
    createFileRequest,
    createComment,
    createPlaylist
  } = getMutations();


  try {
    // 1. Create a profile for the user
    const createProfileInput = {
        id: USER_ID,
        email: USER_EMAIL,
        name: USER_NAME,
        displayName: USER_NAME,
      };
    const profile = await API.graphql(graphqlOperation(createProfile, {
      input: createProfileInput
    }));
    const profileId = profile.data.createProfile.id;
    if (!profileId) {
        throw new Error("Could not create profile");
    }
    console.log(`Profile created with id: ${profileId}`);


    // 2. Create a workshop
    const workshopDetails = {
      name: `Test Workshop - ${Date.now()}`,
      email: USER_EMAIL,
      status: 'OPEN',
    };
    const newWorkshop = await API.graphql(graphqlOperation(createWorkshop, { input: workshopDetails }));
    const workshopId = newWorkshop.data.createWorkshop.id;
    if (!workshopId) {
        throw new Error("Could not create workshop");
    }
    console.log(`Workshop created with id: ${workshopId}`);

    // 3. Create playlists
    for (let i = 0; i < NUM_ITEMS; i++) {
        const playlistDetails = {
            title: `Test Playlist ${i + 1}`,
            public: true,
            type: 'PLAYLIST',
            profilePlaylistsId: profileId
        };
        const newPlaylist = await API.graphql(graphqlOperation(createPlaylist, { input: playlistDetails }));
        console.log(`Playlist ${i + 1} created: ${newPlaylist.data.createPlaylist.id}`);
    }


    // 4. Create assignments (FileRequests)
    for (let i = 0; i < NUM_ITEMS; i++) {
        const assignmentDetails = {
            title: `Test Assignment ${i + 1}`,
            workshopId: workshopId,
            type: "ASSIGNMENT",
            startDate: new Date().toISOString(),
            expiration: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
        };
        const newAssignment = await API.graphql(graphqlOperation(createFileRequest, { input: assignmentDetails }));
        console.log(`Assignment ${i + 1} created: ${newAssignment.data.createFileRequest.id}`);
    }

    // 5. Create comments
    for (let i = 0; i < NUM_ITEMS; i++) {
        const commentDetails = {
            content: `This is test comment ${i + 1}`,
            email: USER_EMAIL,
            recipientEmail: USER_EMAIL, // self-comment for testing "My Comments"
            workshopId: workshopId,
            type: "COMMENT"
        };
        const newComment = await API.graphql(graphqlOperation(createComment, { input: commentDetails }));
        console.log(`Comment ${i + 1} created: ${newComment.data.createComment.id}`);
    }


    console.log('Seeding complete!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seed();
