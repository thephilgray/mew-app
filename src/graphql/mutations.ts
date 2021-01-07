/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
