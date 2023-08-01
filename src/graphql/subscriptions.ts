/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAPIKey = /* GraphQL */ `
  subscription OnCreateAPIKey($filter: ModelSubscriptionAPIKeyFilterInput) {
    onCreateAPIKey(filter: $filter) {
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
            duration
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
            artist
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
export const onUpdateAPIKey = /* GraphQL */ `
  subscription OnUpdateAPIKey($filter: ModelSubscriptionAPIKeyFilterInput) {
    onUpdateAPIKey(filter: $filter) {
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
            duration
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
            artist
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
export const onDeleteAPIKey = /* GraphQL */ `
  subscription OnDeleteAPIKey($filter: ModelSubscriptionAPIKeyFilterInput) {
    onDeleteAPIKey(filter: $filter) {
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
            duration
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
            artist
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
export const onCreateExtension = /* GraphQL */ `
  subscription OnCreateExtension(
    $filter: ModelSubscriptionExtensionFilterInput
  ) {
    onCreateExtension(filter: $filter) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateExtension = /* GraphQL */ `
  subscription OnUpdateExtension(
    $filter: ModelSubscriptionExtensionFilterInput
  ) {
    onUpdateExtension(filter: $filter) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteExtension = /* GraphQL */ `
  subscription OnDeleteExtension(
    $filter: ModelSubscriptionExtensionFilterInput
  ) {
    onDeleteExtension(filter: $filter) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFileRequest = /* GraphQL */ `
  subscription OnCreateFileRequest(
    $filter: ModelSubscriptionFileRequestFilterInput
  ) {
    onCreateFileRequest(filter: $filter) {
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
            duration
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
              duration
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
              artist
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
              duration
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
              duration
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
              artist
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
export const onUpdateFileRequest = /* GraphQL */ `
  subscription OnUpdateFileRequest(
    $filter: ModelSubscriptionFileRequestFilterInput
  ) {
    onUpdateFileRequest(filter: $filter) {
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
            duration
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
              duration
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
              artist
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
              duration
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
              duration
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
              artist
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
export const onDeleteFileRequest = /* GraphQL */ `
  subscription OnDeleteFileRequest(
    $filter: ModelSubscriptionFileRequestFilterInput
  ) {
    onDeleteFileRequest(filter: $filter) {
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
            duration
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
              duration
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
              artist
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
              duration
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
              duration
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
              artist
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
export const onCreateFileRequestSubmission = /* GraphQL */ `
  subscription OnCreateFileRequestSubmission(
    $filter: ModelSubscriptionFileRequestSubmissionFilterInput
  ) {
    onCreateFileRequestSubmission(filter: $filter) {
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
            duration
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
              duration
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
            duration
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
            artist
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
            duration
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
            duration
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
      workshopId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateFileRequestSubmission = /* GraphQL */ `
  subscription OnUpdateFileRequestSubmission(
    $filter: ModelSubscriptionFileRequestSubmissionFilterInput
  ) {
    onUpdateFileRequestSubmission(filter: $filter) {
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
            duration
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
              duration
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
            duration
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
            artist
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
            duration
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
            duration
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
      workshopId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteFileRequestSubmission = /* GraphQL */ `
  subscription OnDeleteFileRequestSubmission(
    $filter: ModelSubscriptionFileRequestSubmissionFilterInput
  ) {
    onDeleteFileRequestSubmission(filter: $filter) {
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
            duration
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
              duration
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
            duration
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
            artist
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
            duration
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
            duration
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
      workshopId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTrack = /* GraphQL */ `
  subscription OnCreateTrack($filter: ModelSubscriptionTrackFilterInput) {
    onCreateTrack(filter: $filter) {
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
              duration
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
              duration
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
              artist
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
              duration
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
              duration
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
              artist
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
export const onUpdateTrack = /* GraphQL */ `
  subscription OnUpdateTrack($filter: ModelSubscriptionTrackFilterInput) {
    onUpdateTrack(filter: $filter) {
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
              duration
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
              duration
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
              artist
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
              duration
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
              duration
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
              artist
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
export const onDeleteTrack = /* GraphQL */ `
  subscription OnDeleteTrack($filter: ModelSubscriptionTrackFilterInput) {
    onDeleteTrack(filter: $filter) {
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
              duration
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
              duration
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
              artist
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
              duration
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
              duration
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
              artist
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
export const onCreatePlaylist = /* GraphQL */ `
  subscription OnCreatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onCreatePlaylist(filter: $filter) {
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
            duration
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
            duration
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
            artist
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
export const onUpdatePlaylist = /* GraphQL */ `
  subscription OnUpdatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onUpdatePlaylist(filter: $filter) {
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
            duration
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
            duration
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
            artist
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
export const onDeletePlaylist = /* GraphQL */ `
  subscription OnDeletePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
    onDeletePlaylist(filter: $filter) {
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
            duration
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
            duration
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
            artist
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
export const onCreateMembership = /* GraphQL */ `
  subscription OnCreateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onCreateMembership(filter: $filter) {
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
            duration
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
              duration
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
              artist
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
            duration
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
            artist
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
export const onUpdateMembership = /* GraphQL */ `
  subscription OnUpdateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onUpdateMembership(filter: $filter) {
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
            duration
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
              duration
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
              artist
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
            duration
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
            artist
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
export const onDeleteMembership = /* GraphQL */ `
  subscription OnDeleteMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onDeleteMembership(filter: $filter) {
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
            duration
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
              duration
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
              artist
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
            duration
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
            artist
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
export const onCreateWorkshop = /* GraphQL */ `
  subscription OnCreateWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onCreateWorkshop(filter: $filter) {
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
              duration
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
            duration
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
            artist
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
export const onUpdateWorkshop = /* GraphQL */ `
  subscription OnUpdateWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onUpdateWorkshop(filter: $filter) {
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
              duration
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
            duration
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
            artist
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
export const onDeleteWorkshop = /* GraphQL */ `
  subscription OnDeleteWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onDeleteWorkshop(filter: $filter) {
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
              duration
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
            duration
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
            artist
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onCreateProfile(filter: $filter) {
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
              duration
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
            createdAt
            updatedAt
            __typename
          }
          stemGroupId
          filePath
          artist
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
    onUpdateProfile(filter: $filter) {
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
              duration
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
            createdAt
            updatedAt
            __typename
          }
          stemGroupId
          filePath
          artist
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
    onDeleteProfile(filter: $filter) {
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
              duration
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
            createdAt
            updatedAt
            __typename
          }
          stemGroupId
          filePath
          artist
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
            duration
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
            artist
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
              duration
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
              duration
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
              artist
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
              duration
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
            duration
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
              duration
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
            duration
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
              duration
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
              artist
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
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
            duration
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
            artist
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
              duration
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
              duration
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
              artist
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
              duration
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
            duration
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
              duration
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
            duration
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
              duration
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
              artist
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
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
            duration
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
            artist
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
              duration
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
              duration
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
              artist
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
              duration
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
            duration
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
              duration
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
            duration
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
              duration
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
              artist
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
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStem = /* GraphQL */ `
  subscription OnCreateStem($filter: ModelSubscriptionStemFilterInput) {
    onCreateStem(filter: $filter) {
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
            duration
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
            duration
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
            artist
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
      artist
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStem = /* GraphQL */ `
  subscription OnUpdateStem($filter: ModelSubscriptionStemFilterInput) {
    onUpdateStem(filter: $filter) {
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
            duration
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
            duration
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
            artist
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
      artist
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStem = /* GraphQL */ `
  subscription OnDeleteStem($filter: ModelSubscriptionStemFilterInput) {
    onDeleteStem(filter: $filter) {
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
            duration
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
            duration
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
            artist
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
      artist
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSubmissionStems = /* GraphQL */ `
  subscription OnCreateSubmissionStems(
    $filter: ModelSubscriptionSubmissionStemsFilterInput
  ) {
    onCreateSubmissionStems(filter: $filter) {
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
              duration
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
              duration
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
              artist
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
              duration
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
              artist
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
        artist
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
export const onUpdateSubmissionStems = /* GraphQL */ `
  subscription OnUpdateSubmissionStems(
    $filter: ModelSubscriptionSubmissionStemsFilterInput
  ) {
    onUpdateSubmissionStems(filter: $filter) {
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
              duration
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
              duration
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
              artist
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
              duration
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
              artist
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
        artist
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
export const onDeleteSubmissionStems = /* GraphQL */ `
  subscription OnDeleteSubmissionStems(
    $filter: ModelSubscriptionSubmissionStemsFilterInput
  ) {
    onDeleteSubmissionStems(filter: $filter) {
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
              duration
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
              duration
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
              artist
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
              duration
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
              artist
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
        artist
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
