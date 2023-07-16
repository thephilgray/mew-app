/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAPIKey = /* GraphQL */ `
  query GetAPIKey($id: ID!) {
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listAPIKeys = /* GraphQL */ `
  query ListAPIKeys(
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExtension = /* GraphQL */ `
  query GetExtension($id: ID!) {
    getExtension(id: $id) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listExtensions = /* GraphQL */ `
  query ListExtensions(
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
`;
export const extensionsByFileRequestId = /* GraphQL */ `
  query ExtensionsByFileRequestId(
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
`;
export const getFileRequest = /* GraphQL */ `
  query GetFileRequest($id: ID!) {
    getFileRequest(id: $id) {
      id
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
            downloadedStems {
              nextToken
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
              expiration
              title
              details
              required
              workshopId
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            playlist {
              public
              title
              id
              createdAt
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        id
        createdAt
        updatedAt
        profilePlaylistsId
        playlistOwnerId
        __typename
      }
      createdAt
      updatedAt
      fileRequestPlaylistId
      __typename
    }
  }
`;
export const listFileRequests = /* GraphQL */ `
  query ListFileRequests(
    $filter: ModelFileRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
              expiration
              title
              details
              required
              workshopId
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
              expiration
              title
              details
              required
              workshopId
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
            downloadedStems {
              nextToken
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
          id
          createdAt
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        createdAt
        updatedAt
        fileRequestPlaylistId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const fileRequestsByWorkshopId = /* GraphQL */ `
  query FileRequestsByWorkshopId(
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
              expiration
              title
              details
              required
              workshopId
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
              expiration
              title
              details
              required
              workshopId
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
            downloadedStems {
              nextToken
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
          id
          createdAt
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
        createdAt
        updatedAt
        fileRequestPlaylistId
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
              expiration
              title
              details
              required
              workshopId
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
              expiration
              title
              details
              required
              workshopId
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
            downloadedStems {
              nextToken
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
          id
          createdAt
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
            downloadedStems {
              nextToken
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
              expiration
              title
              details
              required
              workshopId
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
            workshopId
            createdAt
            updatedAt
            __typename
          }
          assignmentId
          assignment {
            id
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
              expiration
              title
              details
              required
              workshopId
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
            downloadedBy {
              nextToken
              __typename
            }
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
      workshopId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFileRequestSubmissions = /* GraphQL */ `
  query ListFileRequestSubmissions(
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            assignmentId
            assignment {
              id
              expiration
              title
              details
              required
              workshopId
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
export const submissionsByFileRequestId = /* GraphQL */ `
  query SubmissionsByFileRequestId(
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            assignmentId
            assignment {
              id
              expiration
              title
              details
              required
              workshopId
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
export const submissionsByEmail = /* GraphQL */ `
  query SubmissionsByEmail(
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            assignmentId
            assignment {
              id
              expiration
              title
              details
              required
              workshopId
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
export const submissionsByWorkshopId = /* GraphQL */ `
  query SubmissionsByWorkshopId(
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            assignmentId
            assignment {
              id
              expiration
              title
              details
              required
              workshopId
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
export const getTrack = /* GraphQL */ `
  query GetTrack($id: ID!) {
    getTrack(id: $id) {
      order
      submission {
        id
        fileRequestId
        fileRequest {
          id
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            assignmentId
            assignment {
              id
              expiration
              title
              details
              required
              workshopId
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            playlist {
              public
              title
              id
              createdAt
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        id
        createdAt
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
`;
export const listTracks = /* GraphQL */ `
  query ListTracks(
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
            downloadedStems {
              nextToken
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
            downloadedStems {
              nextToken
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
          id
          createdAt
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
`;
export const getPlaylist = /* GraphQL */ `
  query GetPlaylist($id: ID!) {
    getPlaylist(id: $id) {
      tracks {
        items {
          order
          submission {
            id
            fileRequestId
            fileRequest {
              id
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
      id
      createdAt
      updatedAt
      profilePlaylistsId
      playlistOwnerId
      __typename
    }
  }
`;
export const listPlaylists = /* GraphQL */ `
  query ListPlaylists(
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            playlist {
              public
              title
              id
              createdAt
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        public
        title
        artwork {
          id
          path
          credit
          __typename
        }
        id
        createdAt
        updatedAt
        profilePlaylistsId
        playlistOwnerId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMembership = /* GraphQL */ `
  query GetMembership($id: ID!) {
    getMembership(id: $id) {
      id
      workshopId
      email
      status
      workshop {
        id
        name
        email
        fileRequests {
          items {
            id
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
              expiration
              title
              details
              required
              workshopId
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
            downloadedStems {
              nextToken
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
`;
export const listMemberships = /* GraphQL */ `
  query ListMemberships(
    $filter: ModelMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        workshopId
        email
        status
        workshop {
          id
          name
          email
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              expiration
              title
              details
              required
              workshopId
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
`;
export const membershipsByWorkshopId = /* GraphQL */ `
  query MembershipsByWorkshopId(
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
        status
        workshop {
          id
          name
          email
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              expiration
              title
              details
              required
              workshopId
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
`;
export const membershipsByEmail = /* GraphQL */ `
  query MembershipsByEmail(
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
        status
        workshop {
          id
          name
          email
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              expiration
              title
              details
              required
              workshopId
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
`;
export const getWorkshop = /* GraphQL */ `
  query GetWorkshop($id: ID!) {
    getWorkshop(id: $id) {
      id
      name
      email
      fileRequests {
        items {
          id
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
            downloadedStems {
              nextToken
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
        createdAt
        updatedAt
        __typename
      }
      startDate
      endDate
      memberships {
        items {
          id
          workshopId
          email
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
            downloadedStems {
              nextToken
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
`;
export const listWorkshops = /* GraphQL */ `
  query ListWorkshops(
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
              expiration
              title
              details
              required
              workshopId
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
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
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($email: String!) {
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
            downloadedStems {
              nextToken
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
              expiration
              title
              details
              required
              workshopId
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
            downloadedStems {
              nextToken
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
            downloadedStems {
              nextToken
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
            downloadedStems {
              nextToken
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
          id
          createdAt
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          stemGroupId
          filePath
          downloadedBy {
            items {
              id
              profileID
              stemID
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
      downloadedStems {
        items {
          id
          profileID
          stemID
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
            downloadedStems {
              nextToken
              __typename
            }
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
            downloadedBy {
              nextToken
              __typename
            }
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const profileByProfileId = /* GraphQL */ `
  query ProfileByProfileId(
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            assignmentId
            assignment {
              id
              expiration
              title
              details
              required
              workshopId
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
        workshopId
        createdAt
        updatedAt
        __typename
      }
      assignmentId
      assignment {
        id
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
              expiration
              title
              details
              required
              workshopId
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
              expiration
              title
              details
              required
              workshopId
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
            downloadedStems {
              nextToken
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
          id
          createdAt
          updatedAt
          profilePlaylistsId
          playlistOwnerId
          __typename
        }
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
              expiration
              title
              details
              required
              workshopId
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        startDate
        endDate
        memberships {
          items {
            id
            workshopId
            email
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        submissionId
        submission {
          id
          fileRequestId
          fileRequest {
            id
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
            downloadedStems {
              nextToken
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
          workshopId
          createdAt
          updatedAt
          __typename
        }
        assignmentId
        assignment {
          id
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              expiration
              title
              details
              required
              workshopId
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          startDate
          endDate
          memberships {
            items {
              id
              workshopId
              email
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStem = /* GraphQL */ `
  query GetStem($id: ID!) {
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
              expiration
              title
              details
              required
              workshopId
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
            downloadedBy {
              nextToken
              __typename
            }
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
        createdAt
        updatedAt
        __typename
      }
      stemGroupId
      filePath
      downloadedBy {
        items {
          id
          profileID
          stemID
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
            downloadedStems {
              nextToken
              __typename
            }
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
            downloadedBy {
              nextToken
              __typename
            }
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStems = /* GraphQL */ `
  query ListStems(
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        stemGroupId
        filePath
        downloadedBy {
          items {
            id
            profileID
            stemID
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubmissionStems = /* GraphQL */ `
  query GetSubmissionStems($id: ID!) {
    getSubmissionStems(id: $id) {
      id
      fileRequestSubmissionID
      stemID
      fileRequestSubmission {
        id
        fileRequestId
        fileRequest {
          id
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
            id
            createdAt
            updatedAt
            profilePlaylistsId
            playlistOwnerId
            __typename
          }
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
              workshopId
              createdAt
              updatedAt
              __typename
            }
            assignmentId
            assignment {
              id
              expiration
              title
              details
              required
              workshopId
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        stemGroupId
        filePath
        downloadedBy {
          items {
            id
            profileID
            stemID
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubmissionStems = /* GraphQL */ `
  query ListSubmissionStems(
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
              id
              createdAt
              updatedAt
              profilePlaylistsId
              playlistOwnerId
              __typename
            }
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
            downloadedStems {
              nextToken
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          stemGroupId
          filePath
          downloadedBy {
            items {
              id
              profileID
              stemID
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSavedStems = /* GraphQL */ `
  query GetSavedStems($id: ID!) {
    getSavedStems(id: $id) {
      id
      profileID
      stemID
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
              expiration
              title
              details
              required
              workshopId
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
            id
            createdAt
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
            downloadedBy {
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
        downloadedStems {
          items {
            id
            profileID
            stemID
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
        stemGroupId
        filePath
        downloadedBy {
          items {
            id
            profileID
            stemID
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
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSavedStems = /* GraphQL */ `
  query ListSavedStems(
    $filter: ModelSavedStemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedStems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileID
        stemID
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
              serverPrefix
              __typename
            }
            __typename
          }
          playlists {
            items {
              public
              title
              id
              createdAt
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
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          downloadedStems {
            items {
              id
              profileID
              stemID
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
            downloadedStems {
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          stemGroupId
          filePath
          downloadedBy {
            items {
              id
              profileID
              stemID
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
