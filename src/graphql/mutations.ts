/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processDownload = /* GraphQL */ `
  mutation ProcessDownload($assignmentId: ID!, $songData: [SongData]) {
    processDownload(assignmentId: $assignmentId, songData: $songData)
  }
`;
export const updateProfileService = /* GraphQL */ `
  mutation UpdateProfileService(
    $email: String!
    $sub: ID
    $id: ID
    $name: String
    $bio: String
    $apiKeyUpdate: ApiKeyUpdate
    $avatar: String
  ) {
    updateProfileService(
      email: $email
      sub: $sub
      id: $id
      name: $name
      bio: $bio
      apiKeyUpdate: $apiKeyUpdate
      avatar: $avatar
    ) {
      statusCode
      body
      __typename
    }
  }
`;
export const updateMembershipService = /* GraphQL */ `
  mutation UpdateMembershipService(
    $workshopId: ID!
    $action: String
    $payloads: [MembershipServicePayload]
  ) {
    updateMembershipService(
      workshopId: $workshopId
      action: $action
      payloads: $payloads
    ) {
      statusCode
      body
      __typename
    }
  }
`;
export const runProcessAudioTask = /* GraphQL */ `
  mutation RunProcessAudioTask(
    $assignmentId: ID!
    $email: String!
    $options: DownloadLinkOptions
  ) {
    runProcessAudioTask(
      assignmentId: $assignmentId
      email: $email
      options: $options
    )
  }
`;
export const populateMembers = /* GraphQL */ `
  mutation PopulateMembers {
    populateMembers
  }
`;
export const createAPIKey = /* GraphQL */ `
  mutation CreateAPIKey(
    $input: CreateAPIKeyInput!
    $condition: ModelAPIKeyConditionInput
  ) {
    createAPIKey(input: $input, condition: $condition) {
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
`;
export const updateAPIKey = /* GraphQL */ `
  mutation UpdateAPIKey(
    $input: UpdateAPIKeyInput!
    $condition: ModelAPIKeyConditionInput
  ) {
    updateAPIKey(input: $input, condition: $condition) {
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
`;
export const deleteAPIKey = /* GraphQL */ `
  mutation DeleteAPIKey(
    $input: DeleteAPIKeyInput!
    $condition: ModelAPIKeyConditionInput
  ) {
    deleteAPIKey(input: $input, condition: $condition) {
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
`;
export const createExtension = /* GraphQL */ `
  mutation CreateExtension(
    $input: CreateExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    createExtension(input: $input, condition: $condition) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateExtension = /* GraphQL */ `
  mutation UpdateExtension(
    $input: UpdateExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    updateExtension(input: $input, condition: $condition) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteExtension = /* GraphQL */ `
  mutation DeleteExtension(
    $input: DeleteExtensionInput!
    $condition: ModelExtensionConditionInput
  ) {
    deleteExtension(input: $input, condition: $condition) {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFileRequest = /* GraphQL */ `
  mutation CreateFileRequest(
    $input: CreateFileRequestInput!
    $condition: ModelFileRequestConditionInput
  ) {
    createFileRequest(input: $input, condition: $condition) {
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
          location {
            latitude
            longitude
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
`;
export const updateFileRequest = /* GraphQL */ `
  mutation UpdateFileRequest(
    $input: UpdateFileRequestInput!
    $condition: ModelFileRequestConditionInput
  ) {
    updateFileRequest(input: $input, condition: $condition) {
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
          location {
            latitude
            longitude
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
`;
export const deleteFileRequest = /* GraphQL */ `
  mutation DeleteFileRequest(
    $input: DeleteFileRequestInput!
    $condition: ModelFileRequestConditionInput
  ) {
    deleteFileRequest(input: $input, condition: $condition) {
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
          location {
            latitude
            longitude
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
`;
export const createFileRequestSubmission = /* GraphQL */ `
  mutation CreateFileRequestSubmission(
    $input: CreateFileRequestSubmissionInput!
    $condition: ModelFileRequestSubmissionConditionInput
  ) {
    createFileRequestSubmission(input: $input, condition: $condition) {
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
            location {
              latitude
              longitude
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
      workshopId
      createdAt
      updatedAt
      __typename
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
            location {
              latitude
              longitude
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
      workshopId
      createdAt
      updatedAt
      __typename
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
            location {
              latitude
              longitude
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
      workshopId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTrack = /* GraphQL */ `
  mutation CreateTrack(
    $input: CreateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    createTrack(input: $input, condition: $condition) {
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
`;
export const updateTrack = /* GraphQL */ `
  mutation UpdateTrack(
    $input: UpdateTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    updateTrack(input: $input, condition: $condition) {
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
`;
export const deleteTrack = /* GraphQL */ `
  mutation DeleteTrack(
    $input: DeleteTrackInput!
    $condition: ModelTrackConditionInput
  ) {
    deleteTrack(input: $input, condition: $condition) {
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
`;
export const createPlaylist = /* GraphQL */ `
  mutation CreatePlaylist(
    $input: CreatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    createPlaylist(input: $input, condition: $condition) {
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
      type
      createdAt
      id
      updatedAt
      profilePlaylistsId
      playlistOwnerId
      __typename
    }
  }
`;
export const updatePlaylist = /* GraphQL */ `
  mutation UpdatePlaylist(
    $input: UpdatePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    updatePlaylist(input: $input, condition: $condition) {
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
      type
      createdAt
      id
      updatedAt
      profilePlaylistsId
      playlistOwnerId
      __typename
    }
  }
`;
export const deletePlaylist = /* GraphQL */ `
  mutation DeletePlaylist(
    $input: DeletePlaylistInput!
    $condition: ModelPlaylistConditionInput
  ) {
    deletePlaylist(input: $input, condition: $condition) {
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
      type
      createdAt
      id
      updatedAt
      profilePlaylistsId
      playlistOwnerId
      __typename
    }
  }
`;
export const createMembership = /* GraphQL */ `
  mutation CreateMembership(
    $input: CreateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    createMembership(input: $input, condition: $condition) {
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
          location {
            latitude
            longitude
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
export const updateMembership = /* GraphQL */ `
  mutation UpdateMembership(
    $input: UpdateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    updateMembership(input: $input, condition: $condition) {
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
          location {
            latitude
            longitude
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
export const deleteMembership = /* GraphQL */ `
  mutation DeleteMembership(
    $input: DeleteMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    deleteMembership(input: $input, condition: $condition) {
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
          location {
            latitude
            longitude
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
export const createWorkshop = /* GraphQL */ `
  mutation CreateWorkshop(
    $input: CreateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    createWorkshop(input: $input, condition: $condition) {
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
        location {
          latitude
          longitude
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
export const updateWorkshop = /* GraphQL */ `
  mutation UpdateWorkshop(
    $input: UpdateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    updateWorkshop(input: $input, condition: $condition) {
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
        location {
          latitude
          longitude
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
export const deleteWorkshop = /* GraphQL */ `
  mutation DeleteWorkshop(
    $input: DeleteWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    deleteWorkshop(input: $input, condition: $condition) {
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
        location {
          latitude
          longitude
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
            location {
              latitude
              longitude
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
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
            location {
              latitude
              longitude
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
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
            location {
              latitude
              longitude
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
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
            location {
              latitude
              longitude
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
          location {
            latitude
            longitude
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
            location {
              latitude
              longitude
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
          location {
            latitude
            longitude
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
            location {
              latitude
              longitude
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
          location {
            latitude
            longitude
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
export const createStem = /* GraphQL */ `
  mutation CreateStem(
    $input: CreateStemInput!
    $condition: ModelStemConditionInput
  ) {
    createStem(input: $input, condition: $condition) {
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
`;
export const updateStem = /* GraphQL */ `
  mutation UpdateStem(
    $input: UpdateStemInput!
    $condition: ModelStemConditionInput
  ) {
    updateStem(input: $input, condition: $condition) {
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
`;
export const deleteStem = /* GraphQL */ `
  mutation DeleteStem(
    $input: DeleteStemInput!
    $condition: ModelStemConditionInput
  ) {
    deleteStem(input: $input, condition: $condition) {
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
`;
export const createSubmissionStems = /* GraphQL */ `
  mutation CreateSubmissionStems(
    $input: CreateSubmissionStemsInput!
    $condition: ModelSubmissionStemsConditionInput
  ) {
    createSubmissionStems(input: $input, condition: $condition) {
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
`;
export const updateSubmissionStems = /* GraphQL */ `
  mutation UpdateSubmissionStems(
    $input: UpdateSubmissionStemsInput!
    $condition: ModelSubmissionStemsConditionInput
  ) {
    updateSubmissionStems(input: $input, condition: $condition) {
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
`;
export const deleteSubmissionStems = /* GraphQL */ `
  mutation DeleteSubmissionStems(
    $input: DeleteSubmissionStemsInput!
    $condition: ModelSubmissionStemsConditionInput
  ) {
    deleteSubmissionStems(input: $input, condition: $condition) {
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
`;
