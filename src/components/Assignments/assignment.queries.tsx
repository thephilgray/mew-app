
export const createFileRequest = /* GraphQL */ `mutation CreateFileRequest(
  $input: CreateFileRequestInput!
  $condition: ModelFileRequestConditionInput
) {
  createFileRequest(input: $input, condition: $condition) {
    id
  }
}`;

export const updateFileRequest = /* GraphQL */ `mutation UpdateFileRequest(
  $input: UpdateFileRequestInput!
  $condition: ModelFileRequestConditionInput
) {
  updateFileRequest(input: $input, condition: $condition) {
    id
  }
}`;