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
          artists
          artistLinks
        }
      }
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          comments
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      workshop {
        id
        name
        fileRequests {
          nextToken
          startedAt
        }
        submissions {
          nextToken
          startedAt
        }
        status
        passes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      workshopId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        submissions {
          nextToken
          startedAt
        }
        workshop {
          id
          name
          status
          passes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        submissions {
          nextToken
          startedAt
        }
        workshop {
          id
          name
          status
          passes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const fileRequestsByWorkshopId = /* GraphQL */ `
  query FileRequestsByWorkshopId(
    $workshopId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFileRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fileRequestsByWorkshopId(
      workshopId: $workshopId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        submissions {
          nextToken
          startedAt
        }
        workshop {
          id
          name
          status
          passes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      fileRequest {
        id
        expiration
        title
        details
        required
        playlistArtwork {
          id
        }
        submissions {
          nextToken
          startedAt
        }
        workshop {
          id
          name
          status
          passes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      artist
      name
      email
      fileId
      fileExtension
      rating
      comments
      workshopId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        fileRequest {
          id
          expiration
          title
          details
          required
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        artist
        name
        email
        fileId
        fileExtension
        rating
        comments
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        fileRequest {
          id
          expiration
          title
          details
          required
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        artist
        name
        email
        fileId
        fileExtension
        rating
        comments
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const submissionsByFileRequestId = /* GraphQL */ `
  query SubmissionsByFileRequestId(
    $fileRequestId: ID!
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
        fileRequest {
          id
          expiration
          title
          details
          required
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        artist
        name
        email
        fileId
        fileExtension
        rating
        comments
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const submissionsByEmail = /* GraphQL */ `
  query SubmissionsByEmail(
    $email: String!
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
        fileRequest {
          id
          expiration
          title
          details
          required
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        artist
        name
        email
        fileId
        fileExtension
        rating
        comments
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const submissionsByWorkshopId = /* GraphQL */ `
  query SubmissionsByWorkshopId(
    $workshopId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFileRequestSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    submissionsByWorkshopId(
      workshopId: $workshopId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fileRequestId
        fileRequest {
          id
          expiration
          title
          details
          required
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        artist
        name
        email
        fileId
        fileExtension
        rating
        comments
        workshopId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWorkshop = /* GraphQL */ `
  query GetWorkshop($id: ID!) {
    getWorkshop(id: $id) {
      id
      name
      fileRequests {
        items {
          id
          expiration
          title
          details
          required
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          comments
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      status
      passes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWorkshops = /* GraphQL */ `
  query ListWorkshops(
    $filter: ModelWorkshopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkshops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        fileRequests {
          nextToken
          startedAt
        }
        submissions {
          nextToken
          startedAt
        }
        status
        passes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWorkshops = /* GraphQL */ `
  query SyncWorkshops(
    $filter: ModelWorkshopFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkshops(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        fileRequests {
          nextToken
          startedAt
        }
        submissions {
          nextToken
          startedAt
        }
        status
        passes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          comments
          workshopId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        submissions {
          nextToken
          startedAt
        }
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        submissions {
          nextToken
          startedAt
        }
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
