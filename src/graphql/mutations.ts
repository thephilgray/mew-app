/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processDownload = /* GraphQL */ `
  mutation ProcessDownload($assignmentId: ID!, $songData: [SongData]) {
    processDownload(assignmentId: $assignmentId, songData: $songData)
  }
`;
export const runProcessAudioTask = /* GraphQL */ `
  mutation RunProcessAudioTask(
    $assignmentId: ID!
    $email: String!
    $options: DownloadLinkOptions
  ) {
    runProcessAudioTask(
      assignmentId: $assignmentId
      email: $email
      options: $options
    )
  }
`;
export const populateMembers = /* GraphQL */ `
  mutation PopulateMembers {
    populateMembers
  }
`;
export const createFileRequest = /* GraphQL */ `
  mutation CreateFileRequest(
    $input: CreateFileRequestInput!
    $condition: ModelFileRequestConditionInput
  ) {
    createFileRequest(input: $input, condition: $condition) {
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
      workshopId
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
          rating
          comments
          workshopId
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
      workshop {
        id
        name
        status
        passes
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        fileRequests {
          nextToken
          startedAt
        }
        submissions {
          nextToken
          startedAt
        }
        owner
      }
    }
  }
`;
export const updateFileRequest = /* GraphQL */ `
  mutation UpdateFileRequest(
    $input: UpdateFileRequestInput!
    $condition: ModelFileRequestConditionInput
  ) {
    updateFileRequest(input: $input, condition: $condition) {
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
      workshopId
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
          rating
          comments
          workshopId
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
      workshop {
        id
        name
        status
        passes
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        fileRequests {
          nextToken
          startedAt
        }
        submissions {
          nextToken
          startedAt
        }
        owner
      }
    }
  }
`;
export const deleteFileRequest = /* GraphQL */ `
  mutation DeleteFileRequest(
    $input: DeleteFileRequestInput!
    $condition: ModelFileRequestConditionInput
  ) {
    deleteFileRequest(input: $input, condition: $condition) {
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
      workshopId
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
          rating
          comments
          workshopId
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
      workshop {
        id
        name
        status
        passes
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        fileRequests {
          nextToken
          startedAt
        }
        submissions {
          nextToken
          startedAt
        }
        owner
      }
    }
  }
`;
export const createFileRequestSubmission = /* GraphQL */ `
  mutation CreateFileRequestSubmission(
    $input: CreateFileRequestSubmissionInput!
    $condition: ModelFileRequestSubmissionConditionInput
  ) {
    createFileRequestSubmission(input: $input, condition: $condition) {
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
        workshopId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
        workshop {
          id
          name
          status
          passes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const updateFileRequestSubmission = /* GraphQL */ `
  mutation UpdateFileRequestSubmission(
    $input: UpdateFileRequestSubmissionInput!
    $condition: ModelFileRequestSubmissionConditionInput
  ) {
    updateFileRequestSubmission(input: $input, condition: $condition) {
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
        workshopId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
        workshop {
          id
          name
          status
          passes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const deleteFileRequestSubmission = /* GraphQL */ `
  mutation DeleteFileRequestSubmission(
    $input: DeleteFileRequestSubmissionInput!
    $condition: ModelFileRequestSubmissionConditionInput
  ) {
    deleteFileRequestSubmission(input: $input, condition: $condition) {
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
        workshopId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        submissions {
          nextToken
          startedAt
        }
        workshop {
          id
          name
          status
          passes
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const createWorkshop = /* GraphQL */ `
  mutation CreateWorkshop(
    $input: CreateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    createWorkshop(input: $input, condition: $condition) {
      id
      name
      status
      integrations {
        mailchimp {
          enabled
          apiKey
          listId
          serverPrefix
        }
      }
      passes
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      fileRequests {
        items {
          id
          expiration
          title
          details
          required
          workshopId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
export const updateWorkshop = /* GraphQL */ `
  mutation UpdateWorkshop(
    $input: UpdateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    updateWorkshop(input: $input, condition: $condition) {
      id
      name
      status
      integrations {
        mailchimp {
          enabled
          apiKey
          listId
          serverPrefix
        }
      }
      passes
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      fileRequests {
        items {
          id
          expiration
          title
          details
          required
          workshopId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
export const deleteWorkshop = /* GraphQL */ `
  mutation DeleteWorkshop(
    $input: DeleteWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    deleteWorkshop(input: $input, condition: $condition) {
      id
      name
      status
      integrations {
        mailchimp {
          enabled
          apiKey
          listId
          serverPrefix
        }
      }
      passes
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      fileRequests {
        items {
          id
          expiration
          title
          details
          required
          workshopId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
          rating
          comments
          workshopId
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
          rating
          comments
          workshopId
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
          rating
          comments
          workshopId
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
