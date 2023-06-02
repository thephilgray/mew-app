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
            }
            updatedAt
          }
          nextToken
        }
        workshops {
          items {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        createdAt
        updatedAt
      }
      updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
              parentId
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
          lyrics
          requestFeedback
          workshopId
          createdAt
          updatedAt
        }
        nextToken
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        description
        artwork {
          id
          path
          credit
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      workshopId
      extensions {
        items {
          id
          expiration
          assignmentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          status
          passes
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          description
          artwork {
            id
            path
            credit
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          status
          passes
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          description
          artwork {
            id
            path
            credit
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          status
          passes
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          description
          artwork {
            id
            path
            credit
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
            }
            updatedAt
          }
          nextToken
        }
        workshops {
          items {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        createdAt
        updatedAt
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
          }
          parentId
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
      lyrics
      requestFeedback
      workshopId
      createdAt
      updatedAt
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
            }
            nextToken
          }
          workshop {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          workshopId
          extensions {
            items {
              id
              expiration
              assignmentId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            parentId
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
        lyrics
        requestFeedback
        workshopId
        createdAt
        updatedAt
      }
      nextToken
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
            }
            nextToken
          }
          workshop {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          workshopId
          extensions {
            items {
              id
              expiration
              assignmentId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            parentId
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
        lyrics
        requestFeedback
        workshopId
        createdAt
        updatedAt
      }
      nextToken
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
            }
            nextToken
          }
          workshop {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          workshopId
          extensions {
            items {
              id
              expiration
              assignmentId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            parentId
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
        lyrics
        requestFeedback
        workshopId
        createdAt
        updatedAt
      }
      nextToken
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
            }
            nextToken
          }
          workshop {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          workshopId
          extensions {
            items {
              id
              expiration
              assignmentId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            parentId
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
        lyrics
        requestFeedback
        workshopId
        createdAt
        updatedAt
      }
      nextToken
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        description
        artwork {
          id
          path
          credit
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
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
            }
            updatedAt
          }
          nextToken
        }
        workshops {
          items {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        createdAt
        updatedAt
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
        }
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
              parentId
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
          lyrics
          requestFeedback
          workshopId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
            }
            nextToken
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
            }
            nextToken
          }
          status
          passes
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          description
          artwork {
            id
            path
            credit
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
          }
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          status
          passes
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          description
          artwork {
            id
            path
            credit
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
          }
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          status
          passes
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          description
          artwork {
            id
            path
            credit
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            nextToken
          }
          createdAt
          updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
          }
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
            }
            nextToken
          }
          workshop {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          workshopId
          extensions {
            items {
              id
              expiration
              assignmentId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
              parentId
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
          lyrics
          requestFeedback
          workshopId
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      passes
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          serverPrefix
        }
      }
      description
      artwork {
        id
        path
        credit
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
            }
            updatedAt
          }
          nextToken
        }
        workshops {
          items {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        createdAt
        updatedAt
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
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
        }
        status
        passes
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        description
        artwork {
          id
          path
          credit
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          updatedAt
        }
        nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          status
          passes
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          description
          artwork {
            id
            path
            credit
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
              parentId
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
          lyrics
          requestFeedback
          workshopId
          createdAt
          updatedAt
        }
        nextToken
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
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          serverPrefix
        }
      }
      createdAt
      updatedAt
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
            }
            updatedAt
          }
          nextToken
        }
        workshops {
          items {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        createdAt
        updatedAt
      }
      nextToken
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
            }
            updatedAt
          }
          nextToken
        }
        workshops {
          items {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        createdAt
        updatedAt
      }
      nextToken
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
            }
            updatedAt
          }
          nextToken
        }
        workshops {
          items {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            mailchimp {
              id
              emailAddress
              status
              fullName
              uniqueEmailId
              contactId
            }
            submissions {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        features {
          mailchimp {
            enabled
            apiKeyName
            listId
            serverPrefix
          }
        }
        createdAt
        updatedAt
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
            }
            nextToken
          }
          workshop {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          workshopId
          extensions {
            items {
              id
              expiration
              assignmentId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            parentId
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
        lyrics
        requestFeedback
        workshopId
        createdAt
        updatedAt
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
            }
            fileId
            fileExtension
            rating
            comments {
              nextToken
            }
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            workshopId
            createdAt
            updatedAt
          }
          nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          status
          passes
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          description
          artwork {
            id
            path
            credit
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        workshopId
        extensions {
          items {
            id
            expiration
            assignmentId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      parentId
      createdAt
      updatedAt
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
            }
            nextToken
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
            }
            nextToken
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
            }
            nextToken
          }
          memberships {
            items {
              id
              workshopId
              email
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            mailchimp {
              enabled
              apiKeyName
              listId
              serverPrefix
            }
          }
          createdAt
          updatedAt
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
            }
            submissions {
              nextToken
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
            }
            workshopId
            extensions {
              nextToken
            }
            createdAt
            updatedAt
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
            }
            avatar
            bio
            sub
            apiKeys {
              nextToken
            }
            workshops {
              nextToken
            }
            submissions {
              nextToken
            }
            memberships {
              nextToken
            }
            createdAt
            updatedAt
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
              parentId
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
          lyrics
          requestFeedback
          workshopId
          createdAt
          updatedAt
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
            }
            nextToken
          }
          workshop {
            id
            name
            email
            fileRequests {
              nextToken
            }
            submissions {
              nextToken
            }
            status
            passes
            description
            artwork {
              id
              path
              credit
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
            }
            startDate
            endDate
            memberships {
              nextToken
            }
            createdAt
            updatedAt
          }
          workshopId
          extensions {
            items {
              id
              expiration
              assignmentId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        parentId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
