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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAssignments = /* GraphQL */ `
  query SyncAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubmissions = /* GraphQL */ `
  query SyncSubmissions(
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
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
      role
      owner
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
        role
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
        role
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
        role
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
        role
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMembers = /* GraphQL */ `
  query SyncMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        name
        id
        email
        artistName
        status
        createdAt
        passes
        role
        owner
        _version
        _deleted
        _lastChangedAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getFileRequest = /* GraphQL */ `
  query GetFileRequest($id: ID!) {
    getFileRequest(id: $id) {
      id
      expiration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFileRequests = /* GraphQL */ `
  query ListFileRequests(
    $filter: ModelFileRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        expiration
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFileRequests = /* GraphQL */ `
  query SyncFileRequests(
    $filter: ModelFileRequestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFileRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        expiration
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
