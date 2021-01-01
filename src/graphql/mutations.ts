/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubmission = /* GraphQL */ `
  mutation CreateSubmission(
    $input: CreateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    createSubmission(input: $input, condition: $condition) {
      id
      title
      byline
      image {
        bucket
        region
        key
      }
      description
      owner
      editors
      group
      upload {
        bucket
        region
        key
      }
      assignmentId
      workshopId
      createdAt
      assignment {
        id
        title
        image
        startDate
        endDate
        description
        status
        owner
        editors
        group
        required
        submissions {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateSubmission = /* GraphQL */ `
  mutation UpdateSubmission(
    $input: UpdateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    updateSubmission(input: $input, condition: $condition) {
      id
      title
      byline
      image {
        bucket
        region
        key
      }
      description
      owner
      editors
      group
      upload {
        bucket
        region
        key
      }
      assignmentId
      workshopId
      createdAt
      assignment {
        id
        title
        image
        startDate
        endDate
        description
        status
        owner
        editors
        group
        required
        submissions {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteSubmission = /* GraphQL */ `
  mutation DeleteSubmission(
    $input: DeleteSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    deleteSubmission(input: $input, condition: $condition) {
      id
      title
      byline
      image {
        bucket
        region
        key
      }
      description
      owner
      editors
      group
      upload {
        bucket
        region
        key
      }
      assignmentId
      workshopId
      createdAt
      assignment {
        id
        title
        image
        startDate
        endDate
        description
        status
        owner
        editors
        group
        required
        submissions {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createAssignment = /* GraphQL */ `
  mutation CreateAssignment(
    $input: CreateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    createAssignment(input: $input, condition: $condition) {
      id
      title
      image
      startDate
      endDate
      description
      status
      owner
      editors
      group
      required
      submissions {
        items {
          id
          title
          byline
          description
          owner
          editors
          group
          assignmentId
          workshopId
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
export const updateAssignment = /* GraphQL */ `
  mutation UpdateAssignment(
    $input: UpdateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    updateAssignment(input: $input, condition: $condition) {
      id
      title
      image
      startDate
      endDate
      description
      status
      owner
      editors
      group
      required
      submissions {
        items {
          id
          title
          byline
          description
          owner
          editors
          group
          assignmentId
          workshopId
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
export const deleteAssignment = /* GraphQL */ `
  mutation DeleteAssignment(
    $input: DeleteAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    deleteAssignment(input: $input, condition: $condition) {
      id
      title
      image
      startDate
      endDate
      description
      status
      owner
      editors
      group
      required
      submissions {
        items {
          id
          title
          byline
          description
          owner
          editors
          group
          assignmentId
          workshopId
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
