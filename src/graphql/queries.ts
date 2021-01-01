/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAssignment = /* GraphQL */ `
  query GetAssignment($id: ID!) {
    getAssignment(id: $id) {
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
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubmission = /* GraphQL */ `
  query GetSubmission($assignmentId: ID!, $memberId: ID!) {
    getSubmission(assignmentId: $assignmentId, memberId: $memberId) {
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
export const listSubmissions = /* GraphQL */ `
  query ListSubmissions(
    $assignmentId: ID
    $memberId: ModelIDKeyConditionInput
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSubmissions(
      assignmentId: $assignmentId
      memberId: $memberId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
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
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        email
        artistName
        status
        createdAt
        passes
        submissions {
          nextToken
        }
        role
        owner
        updatedAt
      }
      nextToken
    }
  }
`;
export const memberByEmail = /* GraphQL */ `
  query MemberByEmail(
    $email: AWSEmail
    $sortDirection: ModelSortDirection
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        id
        email
        artistName
        status
        createdAt
        passes
        submissions {
          nextToken
        }
        role
        owner
        updatedAt
      }
      nextToken
    }
  }
`;
export const membersByStatus = /* GraphQL */ `
  query MembersByStatus(
    $status: String
    $sortDirection: ModelSortDirection
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    membersByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        id
        email
        artistName
        status
        createdAt
        passes
        submissions {
          nextToken
        }
        role
        owner
        updatedAt
      }
      nextToken
    }
  }
`;
export const membersByRoleAndStatus = /* GraphQL */ `
  query MembersByRoleAndStatus(
    $role: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    membersByRoleAndStatus(
      role: $role
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        id
        email
        artistName
        status
        createdAt
        passes
        submissions {
          nextToken
        }
        role
        owner
        updatedAt
      }
      nextToken
    }
  }
`;
