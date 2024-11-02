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
            maxFeedback
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
        membershipId
        membership {
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
            maxFeedback
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
          notificationSettings {
            __typename
          }
          receivedComments {
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
            recipientEmail
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
            maxFeedback
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
        selectedFeedbackCategories {
          items {
            id
            feedbackCategoryID
            fileRequestSubmissionID
            createdAt
            updatedAt
            feedbackCategory {
              id
              name
              title
              description
              createdAt
              updatedAt
              __typename
            }
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
            maxFeedback
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
          selectedFeedbackCategories {
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
            maxFeedback
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
            membershipId
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
        notificationSettings {
          emailDigest {
            enabled
            frequency
            __typename
          }
          __typename
        }
        receivedComments {
          items {
            id
            content
            email
            submissionId
            recipientEmail
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
            maxFeedback
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
            maxFeedback
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
      maxFeedback
      feedbackCategories {
        items {
          id
          feedbackCategoryID
          workshopID
          feedbackCategory {
            id
            name
            title
            description
            createdAt
            updatedAt
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
            maxFeedback
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
            membershipId
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
            maxFeedback
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
            membershipId
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
        notificationSettings {
          emailDigest {
            enabled
            frequency
            __typename
          }
          __typename
        }
        receivedComments {
          items {
            id
            content
            email
            submissionId
            recipientEmail
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
          maxFeedback
          feedbackCategories {
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
            membershipId
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