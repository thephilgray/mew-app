/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFileRequest = /* GraphQL */ `
  subscription OnCreateFileRequest($owner: String) {
    onCreateFileRequest(owner: $owner) {
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
export const onUpdateFileRequest = /* GraphQL */ `
  subscription OnUpdateFileRequest($owner: String) {
    onUpdateFileRequest(owner: $owner) {
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
export const onDeleteFileRequest = /* GraphQL */ `
  subscription OnDeleteFileRequest($owner: String) {
    onDeleteFileRequest(owner: $owner) {
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
export const onCreateFileRequestSubmission = /* GraphQL */ `
  subscription OnCreateFileRequestSubmission($owner: String) {
    onCreateFileRequestSubmission(owner: $owner) {
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
export const onUpdateFileRequestSubmission = /* GraphQL */ `
  subscription OnUpdateFileRequestSubmission($owner: String) {
    onUpdateFileRequestSubmission(owner: $owner) {
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
export const onDeleteFileRequestSubmission = /* GraphQL */ `
  subscription OnDeleteFileRequestSubmission($owner: String) {
    onDeleteFileRequestSubmission(owner: $owner) {
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
