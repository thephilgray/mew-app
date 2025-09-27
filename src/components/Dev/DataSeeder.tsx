
import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { faker } from '@faker-js/faker';
import { Button, Box, Typography, LinearProgress } from '@mui/material';

const LIST_PROFILES = gql`
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

const LIST_FILE_REQUESTS = gql`
  query ListFileRequests(
    $filter: ModelFileRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        workshopId
      }
      nextToken
    }
  }
`;

const LIST_FILE_REQUEST_SUBMISSIONS = gql`
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
        fileRequestId
      }
      nextToken
    }
  }
`;

const CREATE_COMMENT = gql`
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

const DataSeeder = ({ workshopId }) => {
  const [seeding, setSeeding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const { data: profilesData, loading: profilesLoading } = useQuery(LIST_PROFILES, { variables: { limit: 1000 } });
  const { data: assignmentsData, loading: assignmentsLoading } = useQuery(LIST_FILE_REQUESTS, { variables: { filter: { workshopId: { eq: workshopId } }, limit: 1000 } });
  
  const assignmentIds = assignmentsData?.listFileRequests?.items.map(a => a.id) || [];

  const { data: submissionsData, loading: submissionsLoading } = useQuery(LIST_FILE_REQUEST_SUBMISSIONS, { 
      variables: { 
          filter: { or: assignmentIds.map(id => ({ fileRequestId: { eq: id } })) },
          limit: 1000 
        },
        skip: assignmentIds.length === 0
    });

  const [createComment] = useMutation(CREATE_COMMENT);

  const handleSeed = async () => {
    setSeeding(true);
    setProgress(0);
    setMessage('Starting seed process...');

    const profiles = profilesData?.listProfiles?.items || [];
    const assignments = assignmentsData?.listFileRequests?.items || [];
    const submissions = submissionsData?.listFileRequestSubmissions?.items || [];

    if (profiles.length === 0) {
      setMessage('No profiles found. Please create some users first.');
      setSeeding(false);
      return;
    }

    setMessage(`Found ${profiles.length} profiles, ${assignments.length} assignments, and ${submissions.length} submissions.`);

    const createdComments = [];
    for (let i = 0; i < NUM_COMMENTS; i++) {
      const authorProfile = getRandomItem(profiles);
      const content = faker.lorem.sentences(Math.ceil(Math.random() * 3));

      const input = {
        email: authorProfile.email,
        content,
        workshopId,
        type: 'Comment',
      };

      if (createdComments.length > 0 && Math.random() < 0.2) {
        const parentComment = getRandomItem(createdComments);
        input.parentId = parentComment.id;
        input.assignmentId = parentComment.assignmentId;
        input.submissionId = parentComment.submissionId;
        input.recipientEmail = parentComment.email;
      } else {
        if (submissions.length > 0 && Math.random() < 0.5) {
          const submission = getRandomItem(submissions);
          input.submissionId = submission.id;
          input.recipientEmail = submission.email;
          const assignment = assignments.find(a => a.id === submission.fileRequestId);
          if(assignment) input.assignmentId = assignment.id;
        } else if (assignments.length > 0 && Math.random() < 0.3) {
          const assignment = getRandomItem(assignments);
          input.assignmentId = assignment.id;
        }
      }

      try {
        const result = await createComment({ variables: { input } });
        const newComment = result.data.createComment;
        createdComments.push({
            id: newComment.id,
            email: input.email,
            assignmentId: input.assignmentId,
            submissionId: input.submissionId,
        });
        setProgress(((i + 1) / NUM_COMMENTS) * 100);
      } catch (error) {
        console.error(`Error creating comment ${i + 1}:`, error);
      }
    }

    setMessage('Seeding complete!');
    setSeeding(false);
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <Box sx={{ border: '1px dashed grey', padding: 2, margin: 2 }}>
      <Typography variant="h6">Dev Tools</Typography>
      <Button 
        variant="contained"
        onClick={handleSeed} 
        disabled={seeding || profilesLoading || assignmentsLoading || submissionsLoading}
      >
        Seed Comments
      </Button>
      {seeding && (
        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}
      {message && <Typography sx={{ mt: 1 }}>{message}</Typography>}
    </Box>
  );
};

export default DataSeeder;
