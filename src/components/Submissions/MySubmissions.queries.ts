export const submissionsByEmail = /* GraphQL */ `query SubmissionsByEmail(
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
        startDate
        expiration
        title
        details
        required
        workshopId
        playlistStartDate
        playlistExternalUrl
        type
        createdAt
        updatedAt
        fileRequestPlaylistId
        __typename
      }
      membershipId
      membership {
        id
        workshopId
        email
        breakoutGroupId
        status
        createdAt
        updatedAt
        __typename
      }
      artist
      name
      email
      profile {
        email
        id
        name
        displayName
        avatar
        bio
        sub
        createdAt
        updatedAt
        __typename
      }
      fileId
      fileExtension
      rating
      comments {
        nextToken
        __typename
      }
      stems {
        nextToken
        __typename
      }
      artwork {
        id
        path
        credit
        __typename
      }
      lyrics
      requestFeedback
      feedbackRequestCategories
      duration
      breakoutGroupId
      breakoutGroup {
        id
        name
        description
        workshopId
        createdAt
        updatedAt
        __typename
      }
      workshopId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
`;
