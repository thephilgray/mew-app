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
        }
        avatar
        bio
        sub
        apiKeys {
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
        }
        avatar
        bio
        sub
        apiKeys {
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
        }
        avatar
        bio
        sub
        apiKeys {
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
      }
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          workshopId
          createdAt
          updatedAt
        }
        nextToken
      }
      workshop {
        id
        name
        fileRequests {
          nextToken
        }
        submissions {
          nextToken
        }
        status
        passes
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
      }
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          workshopId
          createdAt
          updatedAt
        }
        nextToken
      }
      workshop {
        id
        name
        fileRequests {
          nextToken
        }
        submissions {
          nextToken
        }
        status
        passes
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
      }
      submissions {
        items {
          id
          fileRequestId
          artist
          name
          email
          fileId
          fileExtension
          rating
          workshopId
          createdAt
          updatedAt
        }
        nextToken
      }
      workshop {
        id
        name
        fileRequests {
          nextToken
        }
        submissions {
          nextToken
        }
        status
        passes
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
        }
        submissions {
          nextToken
        }
        workshop {
          id
          name
          status
          passes
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
      workshopId
      createdAt
      updatedAt
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
        }
        submissions {
          nextToken
        }
        workshop {
          id
          name
          status
          passes
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
      workshopId
      createdAt
      updatedAt
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
        }
        submissions {
          nextToken
        }
        workshop {
          id
          name
          status
          passes
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
      workshopId
      createdAt
      updatedAt
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
        fileRequests {
          nextToken
        }
        submissions {
          nextToken
        }
        status
        passes
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
        fileRequests {
          nextToken
        }
        submissions {
          nextToken
        }
        status
        passes
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
        fileRequests {
          nextToken
        }
        submissions {
          nextToken
        }
        status
        passes
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
export const onCreateWorkshop = /* GraphQL */ `
  subscription OnCreateWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onCreateWorkshop(filter: $filter) {
      id
      name
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
  }
`;
export const onUpdateWorkshop = /* GraphQL */ `
  subscription OnUpdateWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onUpdateWorkshop(filter: $filter) {
      id
      name
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
  }
`;
export const onDeleteWorkshop = /* GraphQL */ `
  subscription OnDeleteWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
    onDeleteWorkshop(filter: $filter) {
      id
      name
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
        }
        avatar
        bio
        sub
        apiKeys {
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
          status
          passes
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
        }
        avatar
        bio
        sub
        apiKeys {
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
          status
          passes
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
        }
        avatar
        bio
        sub
        apiKeys {
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
          status
          passes
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
  }
`;
