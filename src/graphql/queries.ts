/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAPIKey = /* GraphQL */ `query GetAPIKey($id: ID!) {
  getAPIKey(id: $id) {
    id
    keyName
    createdAt
    profileID
    email
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAPIKeyQueryVariables, APITypes.GetAPIKeyQuery>;
export const listAPIKeys = /* GraphQL */ `query ListAPIKeys(
  $filter: ModelAPIKeyFilterInput
  $limit: Int
  $nextToken: String
) {
  listAPIKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      keyName
      createdAt
      profileID
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAPIKeysQueryVariables,
  APITypes.ListAPIKeysQuery
>;
export const getExtension = /* GraphQL */ `query GetExtension($id: ID!) {
  getExtension(id: $id) {
    id
    expiration
    assignmentId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExtensionQueryVariables,
  APITypes.GetExtensionQuery
>;
export const listExtensions = /* GraphQL */ `query ListExtensions(
  $filter: ModelExtensionFilterInput
  $limit: Int
  $nextToken: String
) {
  listExtensions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExtensionsQueryVariables,
  APITypes.ListExtensionsQuery
>;
export const extensionsByFileRequestId = /* GraphQL */ `query ExtensionsByFileRequestId(
  $assignmentId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExtensionFilterInput
  $limit: Int
  $nextToken: String
) {
  extensionsByFileRequestId(
    assignmentId: $assignmentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ExtensionsByFileRequestIdQueryVariables,
  APITypes.ExtensionsByFileRequestIdQuery
>;
export const getFileRequest = /* GraphQL */ `query GetFileRequest($id: ID!) {
  getFileRequest(id: $id) {
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
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
    workshop {
      id
      name
      email
      fileRequests {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      status
      passes
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      breakoutGroups {
        items {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      startDate
      endDate
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    workshopId
    extensions {
      items {
        id
        expiration
        assignmentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    playlist {
      tracks {
        items {
          order
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
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
          id
          createdAt
          updatedAt
          playlistTracksId
          trackSubmissionId
          __typename
        }
        nextToken
        __typename
      }
      owner {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      public
      title
      artwork {
        id
        path
        credit
        __typename
      }
      breakoutGroupId
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
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
}
` as GeneratedQuery<
  APITypes.GetFileRequestQueryVariables,
  APITypes.GetFileRequestQuery
>;
export const listFileRequests = /* GraphQL */ `query ListFileRequests(
  $filter: ModelFileRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listFileRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        nextToken
        __typename
      }
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      workshopId
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      playlist {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
            __typename
          }
          nextToken
          __typename
        }
        owner {
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        breakoutGroupId
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFileRequestsQueryVariables,
  APITypes.ListFileRequestsQuery
>;
export const fileRequestsByWorkshopId = /* GraphQL */ `query FileRequestsByWorkshopId(
  $workshopId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFileRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  fileRequestsByWorkshopId(
    workshopId: $workshopId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        nextToken
        __typename
      }
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      workshopId
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      playlist {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
            __typename
          }
          nextToken
          __typename
        }
        owner {
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        breakoutGroupId
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FileRequestsByWorkshopIdQueryVariables,
  APITypes.FileRequestsByWorkshopIdQuery
>;
export const fileRequestsByDate = /* GraphQL */ `query FileRequestsByDate(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFileRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  fileRequestsByDate(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        nextToken
        __typename
      }
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      workshopId
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      playlist {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
            __typename
          }
          nextToken
          __typename
        }
        owner {
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        breakoutGroupId
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FileRequestsByDateQueryVariables,
  APITypes.FileRequestsByDateQuery
>;
export const getFileRequestSubmission = /* GraphQL */ `query GetFileRequestSubmission($id: ID!) {
  getFileRequestSubmission(id: $id) {
    id
    fileRequestId
    fileRequest {
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
        nextToken
        __typename
      }
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      workshopId
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      playlist {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
            __typename
          }
          nextToken
          __typename
        }
        owner {
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        breakoutGroupId
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
    artist
    name
    email
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    fileId
    fileExtension
    rating
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
      nextToken
      __typename
    }
    stems {
      items {
        id
        fileRequestSubmissionID
        stemID
        fileRequestSubmission {
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
        stem {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
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
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      members {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    workshopId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFileRequestSubmissionQueryVariables,
  APITypes.GetFileRequestSubmissionQuery
>;
export const listFileRequestSubmissions = /* GraphQL */ `query ListFileRequestSubmissions(
  $filter: ModelFileRequestSubmissionFilterInput
  $limit: Int
  $nextToken: String
) {
  listFileRequestSubmissions(
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
        artwork {
          id
          path
          credit
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      artist
      name
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      fileId
      fileExtension
      rating
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
            breakoutGroupId
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
      stems {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
` as GeneratedQuery<
  APITypes.ListFileRequestSubmissionsQueryVariables,
  APITypes.ListFileRequestSubmissionsQuery
>;
export const submissionsByFileRequestId = /* GraphQL */ `query SubmissionsByFileRequestId(
  $fileRequestId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFileRequestSubmissionFilterInput
  $limit: Int
  $nextToken: String
) {
  submissionsByFileRequestId(
    fileRequestId: $fileRequestId
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
        artwork {
          id
          path
          credit
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      artist
      name
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      fileId
      fileExtension
      rating
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
            breakoutGroupId
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
      stems {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
` as GeneratedQuery<
  APITypes.SubmissionsByFileRequestIdQueryVariables,
  APITypes.SubmissionsByFileRequestIdQuery
>;
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
        artwork {
          id
          path
          credit
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      artist
      name
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      fileId
      fileExtension
      rating
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
            breakoutGroupId
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
      stems {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
` as GeneratedQuery<
  APITypes.SubmissionsByEmailQueryVariables,
  APITypes.SubmissionsByEmailQuery
>;
export const submissionsByBreakoutGroupId = /* GraphQL */ `query SubmissionsByBreakoutGroupId(
  $breakoutGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFileRequestSubmissionFilterInput
  $limit: Int
  $nextToken: String
) {
  submissionsByBreakoutGroupId(
    breakoutGroupId: $breakoutGroupId
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
        artwork {
          id
          path
          credit
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      artist
      name
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      fileId
      fileExtension
      rating
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
            breakoutGroupId
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
      stems {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
` as GeneratedQuery<
  APITypes.SubmissionsByBreakoutGroupIdQueryVariables,
  APITypes.SubmissionsByBreakoutGroupIdQuery
>;
export const submissionsByWorkshopId = /* GraphQL */ `query SubmissionsByWorkshopId(
  $workshopId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFileRequestSubmissionFilterInput
  $limit: Int
  $nextToken: String
) {
  submissionsByWorkshopId(
    workshopId: $workshopId
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
        artwork {
          id
          path
          credit
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      artist
      name
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      fileId
      fileExtension
      rating
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
            breakoutGroupId
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
      stems {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
` as GeneratedQuery<
  APITypes.SubmissionsByWorkshopIdQueryVariables,
  APITypes.SubmissionsByWorkshopIdQuery
>;
export const getTrack = /* GraphQL */ `query GetTrack($id: ID!) {
  getTrack(id: $id) {
    order
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
        artwork {
          id
          path
          credit
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      artist
      name
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      fileId
      fileExtension
      rating
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
            breakoutGroupId
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
      stems {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      workshopId
      createdAt
      updatedAt
      __typename
    }
    playlist {
      tracks {
        items {
          order
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
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
          id
          createdAt
          updatedAt
          playlistTracksId
          trackSubmissionId
          __typename
        }
        nextToken
        __typename
      }
      owner {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      public
      title
      artwork {
        id
        path
        credit
        __typename
      }
      breakoutGroupId
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      id
      updatedAt
      profilePlaylistsId
      playlistOwnerId
      __typename
    }
    id
    createdAt
    updatedAt
    playlistTracksId
    trackSubmissionId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTrackQueryVariables, APITypes.GetTrackQuery>;
export const listTracks = /* GraphQL */ `query ListTracks(
  $filter: ModelTrackFilterInput
  $limit: Int
  $nextToken: String
) {
  listTracks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      order
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        workshopId
        createdAt
        updatedAt
        __typename
      }
      playlist {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
            __typename
          }
          nextToken
          __typename
        }
        owner {
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        breakoutGroupId
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        type
        createdAt
        id
        updatedAt
        profilePlaylistsId
        playlistOwnerId
        __typename
      }
      id
      createdAt
      updatedAt
      playlistTracksId
      trackSubmissionId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTracksQueryVariables,
  APITypes.ListTracksQuery
>;
export const getPlaylist = /* GraphQL */ `query GetPlaylist($id: ID!) {
  getPlaylist(id: $id) {
    tracks {
      items {
        order
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
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        id
        createdAt
        updatedAt
        playlistTracksId
        trackSubmissionId
        __typename
      }
      nextToken
      __typename
    }
    owner {
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    public
    title
    artwork {
      id
      path
      credit
      __typename
    }
    breakoutGroupId
    breakoutGroup {
      id
      name
      description
      workshopId
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      members {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    type
    createdAt
    id
    updatedAt
    profilePlaylistsId
    playlistOwnerId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPlaylistQueryVariables,
  APITypes.GetPlaylistQuery
>;
export const listPlaylists = /* GraphQL */ `query ListPlaylists(
  $filter: ModelPlaylistFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      tracks {
        items {
          order
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
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
          id
          createdAt
          updatedAt
          playlistTracksId
          trackSubmissionId
          __typename
        }
        nextToken
        __typename
      }
      owner {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      public
      title
      artwork {
        id
        path
        credit
        __typename
      }
      breakoutGroupId
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      id
      updatedAt
      profilePlaylistsId
      playlistOwnerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlaylistsQueryVariables,
  APITypes.ListPlaylistsQuery
>;
export const playlistsByBreakoutGroupId = /* GraphQL */ `query PlaylistsByBreakoutGroupId(
  $breakoutGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPlaylistFilterInput
  $limit: Int
  $nextToken: String
) {
  playlistsByBreakoutGroupId(
    breakoutGroupId: $breakoutGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      tracks {
        items {
          order
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
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
          id
          createdAt
          updatedAt
          playlistTracksId
          trackSubmissionId
          __typename
        }
        nextToken
        __typename
      }
      owner {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      public
      title
      artwork {
        id
        path
        credit
        __typename
      }
      breakoutGroupId
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      id
      updatedAt
      profilePlaylistsId
      playlistOwnerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PlaylistsByBreakoutGroupIdQueryVariables,
  APITypes.PlaylistsByBreakoutGroupIdQuery
>;
export const playlistsByDate = /* GraphQL */ `query PlaylistsByDate(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPlaylistFilterInput
  $limit: Int
  $nextToken: String
) {
  playlistsByDate(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      tracks {
        items {
          order
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
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
          id
          createdAt
          updatedAt
          playlistTracksId
          trackSubmissionId
          __typename
        }
        nextToken
        __typename
      }
      owner {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      public
      title
      artwork {
        id
        path
        credit
        __typename
      }
      breakoutGroupId
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      id
      updatedAt
      profilePlaylistsId
      playlistOwnerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PlaylistsByDateQueryVariables,
  APITypes.PlaylistsByDateQuery
>;
export const getBreakoutGroup = /* GraphQL */ `query GetBreakoutGroup($id: ID!) {
  getBreakoutGroup(id: $id) {
    id
    name
    description
    workshopId
    workshop {
      id
      name
      email
      fileRequests {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      status
      passes
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      breakoutGroups {
        items {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      startDate
      endDate
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    submissions {
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
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
    playlists {
      items {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
            __typename
          }
          nextToken
          __typename
        }
        owner {
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        breakoutGroupId
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        type
        createdAt
        id
        updatedAt
        profilePlaylistsId
        playlistOwnerId
        __typename
      }
      nextToken
      __typename
    }
    members {
      items {
        id
        workshopId
        email
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        breakoutGroupId
        status
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
        mailchimp {
          id
          emailAddress
          status
          fullName
          uniqueEmailId
          contactId
          tags {
            id
            name
            __typename
          }
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBreakoutGroupQueryVariables,
  APITypes.GetBreakoutGroupQuery
>;
export const listBreakoutGroups = /* GraphQL */ `query ListBreakoutGroups(
  $filter: ModelBreakoutGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listBreakoutGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      workshopId
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      members {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBreakoutGroupsQueryVariables,
  APITypes.ListBreakoutGroupsQuery
>;
export const breakoutGroupsByWorkshopId = /* GraphQL */ `query BreakoutGroupsByWorkshopId(
  $workshopId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBreakoutGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  breakoutGroupsByWorkshopId(
    workshopId: $workshopId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      workshopId
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      members {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BreakoutGroupsByWorkshopIdQueryVariables,
  APITypes.BreakoutGroupsByWorkshopIdQuery
>;
export const getMembership = /* GraphQL */ `query GetMembership($id: ID!) {
  getMembership(id: $id) {
    id
    workshopId
    email
    breakoutGroup {
      id
      name
      description
      workshopId
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      members {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    breakoutGroupId
    status
    workshop {
      id
      name
      email
      fileRequests {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      status
      passes
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      breakoutGroups {
        items {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      startDate
      endDate
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    mailchimp {
      id
      emailAddress
      status
      fullName
      uniqueEmailId
      contactId
      tags {
        id
        name
        __typename
      }
      __typename
    }
    submissions {
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMembershipQueryVariables,
  APITypes.GetMembershipQuery
>;
export const listMemberships = /* GraphQL */ `query ListMemberships(
  $filter: ModelMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  listMemberships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      workshopId
      email
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      breakoutGroupId
      status
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      mailchimp {
        id
        emailAddress
        status
        fullName
        uniqueEmailId
        contactId
        tags {
          id
          name
          __typename
        }
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembershipsQueryVariables,
  APITypes.ListMembershipsQuery
>;
export const membershipsByWorkshopId = /* GraphQL */ `query MembershipsByWorkshopId(
  $workshopId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  membershipsByWorkshopId(
    workshopId: $workshopId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      workshopId
      email
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      breakoutGroupId
      status
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      mailchimp {
        id
        emailAddress
        status
        fullName
        uniqueEmailId
        contactId
        tags {
          id
          name
          __typename
        }
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MembershipsByWorkshopIdQueryVariables,
  APITypes.MembershipsByWorkshopIdQuery
>;
export const membershipsByEmail = /* GraphQL */ `query MembershipsByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  membershipsByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      workshopId
      email
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      breakoutGroupId
      status
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      mailchimp {
        id
        emailAddress
        status
        fullName
        uniqueEmailId
        contactId
        tags {
          id
          name
          __typename
        }
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MembershipsByEmailQueryVariables,
  APITypes.MembershipsByEmailQuery
>;
export const membersByBreakoutGroupId = /* GraphQL */ `query MembersByBreakoutGroupId(
  $breakoutGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  membersByBreakoutGroupId(
    breakoutGroupId: $breakoutGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      workshopId
      email
      breakoutGroup {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      breakoutGroupId
      status
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      mailchimp {
        id
        emailAddress
        status
        fullName
        uniqueEmailId
        contactId
        tags {
          id
          name
          __typename
        }
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MembersByBreakoutGroupIdQueryVariables,
  APITypes.MembersByBreakoutGroupIdQuery
>;
export const getWorkshop = /* GraphQL */ `query GetWorkshop($id: ID!) {
  getWorkshop(id: $id) {
    id
    name
    email
    fileRequests {
      items {
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
          items {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      nextToken
      __typename
    }
    submissions {
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
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
    status
    passes
    features {
      mailchimp {
        enabled
        apiKeyName
        listId
        sessionTag
        serverPrefix
        __typename
      }
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    breakoutGroups {
      items {
        id
        name
        description
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    startDate
    endDate
    memberships {
      items {
        id
        workshopId
        email
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        breakoutGroupId
        status
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
        mailchimp {
          id
          emailAddress
          status
          fullName
          uniqueEmailId
          contactId
          tags {
            id
            name
            __typename
          }
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWorkshopQueryVariables,
  APITypes.GetWorkshopQuery
>;
export const listWorkshops = /* GraphQL */ `query ListWorkshops(
  $filter: ModelWorkshopFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkshops(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      fileRequests {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      status
      passes
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      breakoutGroups {
        items {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      startDate
      endDate
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWorkshopsQueryVariables,
  APITypes.ListWorkshopsQuery
>;
export const getProfile = /* GraphQL */ `query GetProfile($email: String!) {
  getProfile(email: $email) {
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
      items {
        id
        keyName
        createdAt
        profileID
        email
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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    workshops {
      items {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    submissions {
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
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
    memberships {
      items {
        id
        workshopId
        email
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        breakoutGroupId
        status
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
        mailchimp {
          id
          emailAddress
          status
          fullName
          uniqueEmailId
          contactId
          tags {
            id
            name
            __typename
          }
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    features {
      mailchimp {
        enabled
        apiKeyName
        listId
        sessionTag
        serverPrefix
        __typename
      }
      __typename
    }
    playlists {
      items {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
            __typename
          }
          nextToken
          __typename
        }
        owner {
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        breakoutGroupId
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        type
        createdAt
        id
        updatedAt
        profilePlaylistsId
        playlistOwnerId
        __typename
      }
      nextToken
      __typename
    }
    uploadedStems {
      items {
        id
        title
        bpm
        key
        scale
        instruments
        notes
        submissions {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        fileSize
        fileExtension
        creatorEmail
        creator {
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
        stemGroupId
        filePath
        artist
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    prompts {
      items {
        id
        title
        content
        authorEmail
        author {
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
        type
        createdAt
        updatedAt
        __typename
      }
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
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $email: String
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProfiles(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const profileByProfileId = /* GraphQL */ `query ProfileByProfileId(
  $id: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  profileByProfileId(
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProfileByProfileIdQueryVariables,
  APITypes.ProfileByProfileIdQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    email
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
        artwork {
          id
          path
          credit
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      artist
      name
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      fileId
      fileExtension
      rating
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
            breakoutGroupId
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
      stems {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        nextToken
        __typename
      }
      workshop {
        id
        name
        email
        fileRequests {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      workshopId
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      playlist {
        tracks {
          items {
            order
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
            __typename
          }
          nextToken
          __typename
        }
        owner {
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        breakoutGroupId
        breakoutGroup {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      status
      passes
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      breakoutGroups {
        items {
          id
          name
          description
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      startDate
      endDate
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
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
          items {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const commentsByDate = /* GraphQL */ `query CommentsByDate(
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
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
          items {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
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
        breakoutGroups {
          items {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByDateQueryVariables,
  APITypes.CommentsByDateQuery
>;
export const getStem = /* GraphQL */ `query GetStem($id: ID!) {
  getStem(id: $id) {
    id
    title
    bpm
    key
    scale
    instruments
    notes
    submissions {
      items {
        id
        fileRequestSubmissionID
        stemID
        fileRequestSubmission {
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
        stem {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    fileSize
    fileExtension
    creatorEmail
    creator {
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    stemGroupId
    filePath
    artist
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStemQueryVariables, APITypes.GetStemQuery>;
export const listStems = /* GraphQL */ `query ListStems(
  $filter: ModelStemFilterInput
  $limit: Int
  $nextToken: String
) {
  listStems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      bpm
      key
      scale
      instruments
      notes
      submissions {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      fileSize
      fileExtension
      creatorEmail
      creator {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      stemGroupId
      filePath
      artist
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListStemsQueryVariables, APITypes.ListStemsQuery>;
export const stemsByDate = /* GraphQL */ `query StemsByDate(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelStemFilterInput
  $limit: Int
  $nextToken: String
) {
  stemsByDate(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      bpm
      key
      scale
      instruments
      notes
      submissions {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      fileSize
      fileExtension
      creatorEmail
      creator {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      stemGroupId
      filePath
      artist
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StemsByDateQueryVariables,
  APITypes.StemsByDateQuery
>;
export const getPrompt = /* GraphQL */ `query GetPrompt($id: ID!) {
  getPrompt(id: $id) {
    id
    title
    content
    authorEmail
    author {
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
        items {
          id
          keyName
          createdAt
          profileID
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
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      workshops {
        items {
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
        nextToken
        __typename
      }
      submissions {
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
        nextToken
        __typename
      }
      memberships {
        items {
          id
          workshopId
          email
          breakoutGroup {
            id
            name
            description
            workshopId
            createdAt
            updatedAt
            __typename
          }
          breakoutGroupId
          status
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
          mailchimp {
            id
            emailAddress
            status
            fullName
            uniqueEmailId
            contactId
            __typename
          }
          submissions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          sessionTag
          serverPrefix
          __typename
        }
        __typename
      }
      playlists {
        items {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
          type
          createdAt
          id
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        nextToken
        __typename
      }
      uploadedStems {
        items {
          id
          title
          bpm
          key
          scale
          instruments
          notes
          submissions {
            nextToken
            __typename
          }
          fileSize
          fileExtension
          creatorEmail
          creator {
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
          stemGroupId
          filePath
          artist
          type
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      prompts {
        items {
          id
          title
          content
          authorEmail
          author {
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
          type
          createdAt
          updatedAt
          __typename
        }
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
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPromptQueryVariables, APITypes.GetPromptQuery>;
export const listPrompts = /* GraphQL */ `query ListPrompts(
  $filter: ModelPromptFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      authorEmail
      author {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPromptsQueryVariables,
  APITypes.ListPromptsQuery
>;
export const promptsByDate = /* GraphQL */ `query PromptsByDate(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPromptFilterInput
  $limit: Int
  $nextToken: String
) {
  promptsByDate(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      authorEmail
      author {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PromptsByDateQueryVariables,
  APITypes.PromptsByDateQuery
>;
export const getSubmissionStems = /* GraphQL */ `query GetSubmissionStems($id: ID!) {
  getSubmissionStems(id: $id) {
    id
    fileRequestSubmissionID
    stemID
    fileRequestSubmission {
      id
      fileRequestId
      fileRequest {
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
          items {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
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
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlist {
          tracks {
            nextToken
            __typename
          }
          owner {
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
          public
          title
          artwork {
            id
            path
            credit
            __typename
          }
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
      artist
      name
      email
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      fileId
      fileExtension
      rating
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
            breakoutGroupId
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
      stems {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        members {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      workshopId
      createdAt
      updatedAt
      __typename
    }
    stem {
      id
      title
      bpm
      key
      scale
      instruments
      notes
      submissions {
        items {
          id
          fileRequestSubmissionID
          stemID
          fileRequestSubmission {
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
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          stem {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      fileSize
      fileExtension
      creatorEmail
      creator {
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
          items {
            id
            keyName
            createdAt
            profileID
            email
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        workshops {
          items {
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
          nextToken
          __typename
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
            lyrics
            requestFeedback
            duration
            breakoutGroupId
            workshopId
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        memberships {
          items {
            id
            workshopId
            email
            breakoutGroupId
            status
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            sessionTag
            serverPrefix
            __typename
          }
          __typename
        }
        playlists {
          items {
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
          nextToken
          __typename
        }
        uploadedStems {
          items {
            id
            title
            bpm
            key
            scale
            instruments
            notes
            fileSize
            fileExtension
            creatorEmail
            stemGroupId
            filePath
            artist
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        prompts {
          items {
            id
            title
            content
            authorEmail
            type
            createdAt
            updatedAt
            __typename
          }
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
      stemGroupId
      filePath
      artist
      type
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSubmissionStemsQueryVariables,
  APITypes.GetSubmissionStemsQuery
>;
export const listSubmissionStems = /* GraphQL */ `query ListSubmissionStems(
  $filter: ModelSubmissionStemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubmissionStems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fileRequestSubmissionID
      stemID
      fileRequestSubmission {
        id
        fileRequestId
        fileRequest {
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
        artist
        name
        email
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
        fileId
        fileExtension
        rating
        comments {
          items {
            id
            content
            email
            submissionId
            assignmentId
            workshopId
            parentId
            type
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        stems {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
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
          submissions {
            nextToken
            __typename
          }
          playlists {
            nextToken
            __typename
          }
          members {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        workshopId
        createdAt
        updatedAt
        __typename
      }
      stem {
        id
        title
        bpm
        key
        scale
        instruments
        notes
        submissions {
          items {
            id
            fileRequestSubmissionID
            stemID
            createdAt
            updatedAt
            __typename
          }
          nextToken
          __typename
        }
        fileSize
        fileExtension
        creatorEmail
        creator {
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
        stemGroupId
        filePath
        artist
        type
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubmissionStemsQueryVariables,
  APITypes.ListSubmissionStemsQuery
>;
