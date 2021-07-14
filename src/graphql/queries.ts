/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFileRequest = /* GraphQL */ `
  query GetFileRequest($id: ID!) {
    getFileRequest(id: $id) {
      id
      expiration
      title
      details
      required
      playlistArtwork {
        id
        credit {
          id
          title
          artist
          artistLinks
        }
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
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
        playlistArtwork {
          id
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
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
        playlistArtwork {
          id
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
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
export const getFileRequestSubmission = /* GraphQL */ `
  query GetFileRequestSubmission($id: ID!) {
    getFileRequestSubmission(id: $id) {
      id
      fileRequestId
      artist
      name
      email
      fileId
      fileExtension
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
        playlistArtwork {
          id
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
        fileId
        fileExtension
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
        fileId
        fileExtension
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
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const submissionsByEmail = /* GraphQL */ `
  query SubmissionsByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelFileRequestSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    submissionsByEmail(
      email: $email
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
        fileId
        fileExtension
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
        fileId
        fileExtension
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
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($email: String!) {
    getMember(email: $email) {
      email
      artist
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
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
      owner
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $email: String
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMembers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        artist
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
        owner
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
        email
        artist
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
