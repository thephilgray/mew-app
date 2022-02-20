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
export const createExtension = /* GraphQL */ `
  mutation CreateExtension(
    $input: CreateExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    createExtension(input: $input, condition: $condition) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateExtension = /* GraphQL */ `
  mutation UpdateExtension(
    $input: UpdateExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    updateExtension(input: $input, condition: $condition) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteExtension = /* GraphQL */ `
  mutation DeleteExtension(
    $input: DeleteExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    deleteExtension(input: $input, condition: $condition) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
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
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        extensions {
          nextToken
          startedAt
        }
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
export const updateFileRequestSubmission = /* GraphQL */ `
  mutation UpdateFileRequestSubmission(
    $input: UpdateFileRequestSubmissionInput!
    $condition: ModelFileRequestSubmissionConditionInput
  ) {
    updateFileRequestSubmission(input: $input, condition: $condition) {
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
        extensions {
          nextToken
          startedAt
        }
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
export const deleteFileRequestSubmission = /* GraphQL */ `
  mutation DeleteFileRequestSubmission(
    $input: DeleteFileRequestSubmissionInput!
    $condition: ModelFileRequestSubmissionConditionInput
  ) {
    deleteFileRequestSubmission(input: $input, condition: $condition) {
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
        extensions {
          nextToken
          startedAt
        }
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
export const createWorkshop = /* GraphQL */ `
  mutation CreateWorkshop(
    $input: CreateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    createWorkshop(input: $input, condition: $condition) {
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
export const updateWorkshop = /* GraphQL */ `
  mutation UpdateWorkshop(
    $input: UpdateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    updateWorkshop(input: $input, condition: $condition) {
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
export const deleteWorkshop = /* GraphQL */ `
  mutation DeleteWorkshop(
    $input: DeleteWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    deleteWorkshop(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
