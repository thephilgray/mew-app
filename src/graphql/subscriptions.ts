/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFileRequest = /* GraphQL */ `
  subscription OnCreateFileRequest {
    onCreateFileRequest {
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
export const onUpdateFileRequest = /* GraphQL */ `
  subscription OnUpdateFileRequest {
    onUpdateFileRequest {
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
export const onDeleteFileRequest = /* GraphQL */ `
  subscription OnDeleteFileRequest {
    onDeleteFileRequest {
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
export const onCreateFileRequestSubmission = /* GraphQL */ `
  subscription OnCreateFileRequestSubmission($owner: String) {
    onCreateFileRequestSubmission(owner: $owner) {
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
export const onUpdateFileRequestSubmission = /* GraphQL */ `
  subscription OnUpdateFileRequestSubmission($owner: String) {
    onUpdateFileRequestSubmission(owner: $owner) {
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
export const onDeleteFileRequestSubmission = /* GraphQL */ `
  subscription OnDeleteFileRequestSubmission($owner: String) {
    onDeleteFileRequestSubmission(owner: $owner) {
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
export const onCreateWorkshop = /* GraphQL */ `
  subscription OnCreateWorkshop($owner: String) {
    onCreateWorkshop(owner: $owner) {
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
export const onUpdateWorkshop = /* GraphQL */ `
  subscription OnUpdateWorkshop($owner: String) {
    onUpdateWorkshop(owner: $owner) {
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
export const onDeleteWorkshop = /* GraphQL */ `
  subscription OnDeleteWorkshop($owner: String) {
    onDeleteWorkshop(owner: $owner) {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($owner: String) {
    onCreateMember(owner: $owner) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($owner: String) {
    onUpdateMember(owner: $owner) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($owner: String) {
    onDeleteMember(owner: $owner) {
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
