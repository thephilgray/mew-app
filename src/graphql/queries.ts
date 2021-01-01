/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubmission = /* GraphQL */ `
  query GetSubmission($owner: ID!, $group: ID!, $createdAt: AWSDateTime!) {
    getSubmission(owner: $owner, group: $group, createdAt: $createdAt) {
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
export const listSubmissions = /* GraphQL */ `
  query ListSubmissions(
    $owner: ID
    $groupCreatedAt: ModelSubmissionPrimaryCompositeKeyConditionInput
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSubmissions(
      owner: $owner
      groupCreatedAt: $groupCreatedAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssignment = /* GraphQL */ `
  query GetAssignment($owner: ID!, $group: ID!, $createdAt: AWSDateTime!) {
    getAssignment(owner: $owner, group: $group, createdAt: $createdAt) {
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
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $owner: ID
    $groupCreatedAt: ModelAssignmentPrimaryCompositeKeyConditionInput
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAssignments(
      owner: $owner
      groupCreatedAt: $groupCreatedAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const itemsByAssignment = /* GraphQL */ `
  query ItemsByAssignment(
    $assignmentId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByAssignment(
      assignmentId: $assignmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
