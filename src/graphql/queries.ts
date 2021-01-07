/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        title
        details
        required
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
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
      title
      details
      required
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          audio
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
        title
        details
        required
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
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
export const getFileRequestSubmission = /* GraphQL */ `
  query GetFileRequestSubmission($id: ID!) {
    getFileRequestSubmission(id: $id) {
      id
      fileRequestId
      artist
      name
      email
      audio
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      fileRequest {
        id
        expiration
        title
        details
        required
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        submissions {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const listFileRequestSubmissions = /* GraphQL */ `
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
        fileRequestId
        artist
        name
        email
        audio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        fileRequest {
          id
          expiration
          title
          details
          required
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const submissionsByFileRequestId = /* GraphQL */ `
  query SubmissionsByFileRequestId(
    $fileRequestId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelFileRequestSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    submissionsByFileRequestId(
      fileRequestId: $fileRequestId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fileRequestId
        artist
        name
        email
        audio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        fileRequest {
          id
          expiration
          title
          details
          required
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFileRequestSubmissions = /* GraphQL */ `
  query SyncFileRequestSubmissions(
    $filter: ModelFileRequestSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFileRequestSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fileRequestId
        artist
        name
        email
        audio
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        fileRequest {
          id
          expiration
          title
          details
          required
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
