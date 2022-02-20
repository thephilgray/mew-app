/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExtension = /* GraphQL */ `
  subscription OnCreateExtension {
    onCreateExtension {
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
export const onUpdateExtension = /* GraphQL */ `
  subscription OnUpdateExtension {
    onUpdateExtension {
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
export const onDeleteExtension = /* GraphQL */ `
  subscription OnDeleteExtension {
    onDeleteExtension {
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
export const onCreateFileRequestSubmission = /* GraphQL */ `
  subscription OnCreateFileRequestSubmission {
    onCreateFileRequestSubmission {
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
export const onUpdateFileRequestSubmission = /* GraphQL */ `
  subscription OnUpdateFileRequestSubmission {
    onUpdateFileRequestSubmission {
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
export const onDeleteFileRequestSubmission = /* GraphQL */ `
  subscription OnDeleteFileRequestSubmission {
    onDeleteFileRequestSubmission {
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
export const onCreateWorkshop = /* GraphQL */ `
  subscription OnCreateWorkshop {
    onCreateWorkshop {
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
export const onUpdateWorkshop = /* GraphQL */ `
  subscription OnUpdateWorkshop {
    onUpdateWorkshop {
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
export const onDeleteWorkshop = /* GraphQL */ `
  subscription OnDeleteWorkshop {
    onDeleteWorkshop {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
