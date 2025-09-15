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
        recipientEmail
        recipient{
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

export const commentsByRecipientEmail = /* GraphQL */ `
  query CommentsByRecipientEmail(
    $recipientEmail: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByRecipientEmail(
      recipientEmail: $recipientEmail
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
        parentId
        type
        createdAt
        updatedAt
        profile {
          id
          name
          displayName
          avatar
        }
        submissionId
        submission {
          id
          artist
          name
          email
        }
        assignmentId
        assignment {
          id
          playlistStartDate
          fileRequestPlaylistId
        }
        workshopId
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
        recipientEmail
        recipient{
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
          recipientEmail
        recipient{
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

export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    createdAt
  }
}
`;

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    id
    content
    email
    recipientEmail
        recipient{
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
    profile {
      email
      id
      name
      displayName
      links {
        id
        text
        url
        __typename
      }
      avatar
      bio
      sub
      apiKeys {
        nextToken
        __typename
      }
      workshops {
        nextToken
        __typename
      }
      submissions {
        nextToken
        __typename
      }
      memberships {
        nextToken
        __typename
      }
      features {
        __typename
      }
      playlists {
        nextToken
        __typename
      }
      uploadedStems {
        nextToken
        __typename
      }
      prompts {
        nextToken
        __typename
      }
      location {
        latitude
        longitude
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    submissionId
    submission {
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
    assignmentId
    assignment {
      id
      startDate
      expiration
      title
      details
      required
      artwork {
        id
        path
        credit
        __typename
      }
      submissions {
        nextToken
        __typename
      }
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
      workshopId
      extensions {
        nextToken
        __typename
      }
      playlist {
        public
        title
        breakoutGroupId
        type
        createdAt
        id
        updatedAt
        profilePlaylistsId
        playlistOwnerId
        __typename
      }
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
      fileRequests {
        nextToken
        __typename
      }
      submissions {
        nextToken
        __typename
      }
      status
      passes
      features {
        __typename
      }
      description
      artwork {
        id
        path
        credit
        __typename
      }
      host {
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
      breakoutGroups {
        nextToken
        __typename
      }
      startDate
      endDate
      memberships {
        nextToken
        __typename
      }
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
}
`
export const commentsByDateLight = /* GraphQL */ `
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
        parentId
        type
        createdAt
        updatedAt
        profile {
          id
          name
          displayName
          avatar
        }
        submissionId
        submission {
          id
          artist
          name
          email
        }
        assignmentId
        assignment {
          id
          playlistStartDate
          fileRequestPlaylistId
        }
        workshopId
        __typename
      }
      nextToken
      __typename
    }
  }
`;

export const onCreateCommentLight = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    id
    content
    email
    parentId
    type
    createdAt
    updatedAt
    profile {
      id
      name
      displayName
      avatar
    }
    submissionId
    submission {
      id
      artist
      name
      email
    }
    assignmentId
    assignment {
      id
      playlistStartDate
      fileRequestPlaylistId
    }
    workshopId
    __typename
  }
}
`;

export const onUpdateCommentLight = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
    id
    content
    email
    parentId
    type
    createdAt
    updatedAt
    profile {
      id
      name
      displayName
      avatar
    }
    submissionId
    submission {
      id
      artist
      name
      email
    }
    assignmentId
    assignment {
      id
      playlistStartDate
      fileRequestPlaylistId
    }
    workshopId
    __typename
  }
}
`;

export const getCommentLight = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      email
      parentId
      type
      createdAt
      updatedAt
      profile {
        id
        name
        displayName
        avatar
      }
      submissionId
      submission {
        id
        artist
        name
        email
      }
      assignmentId
      assignment {
        id
        playlistStartDate
        fileRequestPlaylistId
      }
      workshopId
      __typename
    }
  }
`;