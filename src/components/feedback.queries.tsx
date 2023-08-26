// import { listComments, commentsByDate } from "../graphql/d3/queries"
// import { getFileRequestSubmission } from "../graphql/queries"


export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
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
        submissionId
        submission {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          lyrics
          requestFeedback
          duration
          workshopId
          createdAt
          updatedAt
          __typename
        }
        assignmentId
        assignment {
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
        workshopId
        workshop {
          id
          name
          email
          status
          passes
          description
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        parentId
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByDate = /* GraphQL */ `
  query CommentsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
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
        submissionId
        submission {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          lyrics
          requestFeedback
          duration
          workshopId
          createdAt
          updatedAt
          __typename
        }
        assignmentId
        assignment {
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
        workshopId
        workshop {
          id
          name
          email
          status
          passes
          description
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        parentId
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;


export const getFileRequestSubmission = /* GraphQL */ `
  query GetFileRequestSubmission($id: ID!) {
    getFileRequestSubmission(id: $id) {
      id
      fileRequestId
      fileRequest {
        id
        startDate
        expiration
        title
        workshop {
          id
        }
        workshopId
        playlistStartDate
        playlistExternalUrl
        type
        fileRequestPlaylistId
      }
      artist
      name
      email
      profile {
        id
        name
        displayName
        avatar
      }
      comments {
        items {
          id
          content
          email
          profile {
            email
            id
            name
            displayName
            avatar
            createdAt
            updatedAt
          }
          submissionId
          submission {
            id
            fileRequestId
            artist
            name
            email
            profile {
              id
              name
              displayName
              avatar
            }
            workshopId
            createdAt
            updatedAt
          }
          assignmentId
          assignment {
            id
            title
            workshopId
            playlistStartDate
            playlistExternalUrl
            type
            createdAt
            updatedAt
            fileRequestPlaylistId
          }
          workshopId
          workshop {
            id
            name
          }
          parentId
          type
          createdAt
          updatedAt
        }
        nextToken
      }
      artwork {
        id
        path
        credit
      }
      requestFeedback
      duration
      workshopId
      createdAt
      updatedAt
    }
  }
`;