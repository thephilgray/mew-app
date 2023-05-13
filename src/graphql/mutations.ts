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
export const updateFileRequest = /* GraphQL */ `
  mutation UpdateFileRequest(
    $input: UpdateFileRequestInput!
    $condition: ModelFileRequestConditionInput
  ) {
    updateFileRequest(input: $input, condition: $condition) {
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
export const deleteFileRequest = /* GraphQL */ `
  mutation DeleteFileRequest(
    $input: DeleteFileRequestInput!
    $condition: ModelFileRequestConditionInput
  ) {
    deleteFileRequest(input: $input, condition: $condition) {
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
export const createWorkshop = /* GraphQL */ `
  mutation CreateWorkshop(
    $input: CreateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    createWorkshop(input: $input, condition: $condition) {
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
export const updateWorkshop = /* GraphQL */ `
  mutation UpdateWorkshop(
    $input: UpdateWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    updateWorkshop(input: $input, condition: $condition) {
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
export const deleteWorkshop = /* GraphQL */ `
  mutation DeleteWorkshop(
    $input: DeleteWorkshopInput!
    $condition: ModelWorkshopConditionInput
  ) {
    deleteWorkshop(input: $input, condition: $condition) {
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
