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
export const onUpdateFileRequest = /* GraphQL */ `
  subscription OnUpdateFileRequest {
    onUpdateFileRequest {
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
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
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
export const onDeleteFileRequest = /* GraphQL */ `
  subscription OnDeleteFileRequest {
    onDeleteFileRequest {
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
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
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
export const onCreateFileRequestSubmission = /* GraphQL */ `
  subscription OnCreateFileRequestSubmission($owner: String) {
    onCreateFileRequestSubmission(owner: $owner) {
      id
      fileRequestId
      artist
      name
      email
      fileId
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
        submissions {
          nextToken
          startedAt
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
        submissions {
          nextToken
          startedAt
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
        submissions {
          nextToken
          startedAt
        }
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
