/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAssignment = /* GraphQL */ `
  subscription OnCreateAssignment($owner: String!) {
    onCreateAssignment(owner: $owner) {
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
export const onUpdateAssignment = /* GraphQL */ `
  subscription OnUpdateAssignment($owner: String!) {
    onUpdateAssignment(owner: $owner) {
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
export const onDeleteAssignment = /* GraphQL */ `
  subscription OnDeleteAssignment($owner: String!) {
    onDeleteAssignment(owner: $owner) {
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
export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission($owner: String!) {
    onCreateSubmission(owner: $owner) {
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
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission($owner: String!) {
    onUpdateSubmission(owner: $owner) {
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
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission($owner: String!) {
    onDeleteSubmission(owner: $owner) {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($owner: String!) {
    onCreateMember(owner: $owner) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($owner: String!) {
    onUpdateMember(owner: $owner) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($owner: String!) {
    onDeleteMember(owner: $owner) {
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
