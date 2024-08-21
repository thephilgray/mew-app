export const updateFileRequestSubmission = /* GraphQL */ `mutation UpdateFileRequestSubmission(
  $input: UpdateFileRequestSubmissionInput!
  $condition: ModelFileRequestSubmissionConditionInput
) {
  updateFileRequestSubmission(input: $input, condition: $condition) {
    id
  }
}`;

export const createFileRequestSubmission = /* GraphQL */ `mutation CreateFileRequestSubmission(
  $input: CreateFileRequestSubmissionInput!
  $condition: ModelFileRequestSubmissionConditionInput
) {
  createFileRequestSubmission(input: $input, condition: $condition) {
    id
  }
}`;

export const deleteFileRequestSubmission = /* GraphQL */ `mutation DeleteFileRequestSubmission(
  $input: DeleteFileRequestSubmissionInput!
  $condition: ModelFileRequestSubmissionConditionInput
) {
  deleteFileRequestSubmission(input: $input, condition: $condition) {
    id
  }
}`;