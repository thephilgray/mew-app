/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAssignment = /* GraphQL */ `
  mutation CreateAssignment(
    $input: CreateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    createAssignment(input: $input, condition: $condition) {
      id
      owner
      title
      startDate
      endDate
      createdAt
      required
      details
      artwork {
        bucket
        region
        key
      }
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
      owner
      title
      startDate
      endDate
      createdAt
      required
      details
      artwork {
        bucket
        region
        key
      }
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
      owner
      title
      startDate
      endDate
      createdAt
      required
      details
      artwork {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const createSubmission = /* GraphQL */ `
  mutation CreateSubmission(
    $input: CreateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    createSubmission(input: $input, condition: $condition) {
      id
      assignmentId
      memberId
      owner
      title
      byline
      details
      createdAt
      artwork {
        bucket
        region
        key
      }
      audio {
        bucket
        region
        key
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
      assignmentId
      memberId
      owner
      title
      byline
      details
      createdAt
      artwork {
        bucket
        region
        key
      }
      audio {
        bucket
        region
        key
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
      assignmentId
      memberId
      owner
      title
      byline
      details
      createdAt
      artwork {
        bucket
        region
        key
      }
      audio {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
      name
      id
      email
      artistName
      status
      createdAt
      passes
      submissions {
        items {
          id
          assignmentId
          memberId
          owner
          title
          byline
          details
          createdAt
          updatedAt
        }
        nextToken
      }
      role
      owner
      updatedAt
    }
  }
`;
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
      name
      id
      email
      artistName
      status
      createdAt
      passes
      submissions {
        items {
          id
          assignmentId
          memberId
          owner
          title
          byline
          details
          createdAt
          updatedAt
        }
        nextToken
      }
      role
      owner
      updatedAt
    }
  }
`;
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
      name
      id
      email
      artistName
      status
      createdAt
      passes
      submissions {
        items {
          id
          assignmentId
          memberId
          owner
          title
          byline
          details
          createdAt
          updatedAt
        }
        nextToken
      }
      role
      owner
      updatedAt
    }
  }
`;
