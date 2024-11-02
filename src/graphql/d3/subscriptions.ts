/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAPIKey = /* GraphQL */ `subscription OnCreateAPIKey($filter: ModelSubscriptionAPIKeyFilterInput) {
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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAPIKeySubscriptionVariables,
  APITypes.OnCreateAPIKeySubscription
>;
export const onUpdateAPIKey = /* GraphQL */ `subscription OnUpdateAPIKey($filter: ModelSubscriptionAPIKeyFilterInput) {
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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAPIKeySubscriptionVariables,
  APITypes.OnUpdateAPIKeySubscription
>;
export const onDeleteAPIKey = /* GraphQL */ `subscription OnDeleteAPIKey($filter: ModelSubscriptionAPIKeyFilterInput) {
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
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAPIKeySubscriptionVariables,
  APITypes.OnDeleteAPIKeySubscription
>;
export const onCreateExtension = /* GraphQL */ `subscription OnCreateExtension($filter: ModelSubscriptionExtensionFilterInput) {
  onCreateExtension(filter: $filter) {
    id
    expiration
    assignmentId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExtensionSubscriptionVariables,
  APITypes.OnCreateExtensionSubscription
>;
export const onUpdateExtension = /* GraphQL */ `subscription OnUpdateExtension($filter: ModelSubscriptionExtensionFilterInput) {
  onUpdateExtension(filter: $filter) {
    id
    expiration
    assignmentId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExtensionSubscriptionVariables,
  APITypes.OnUpdateExtensionSubscription
>;
export const onDeleteExtension = /* GraphQL */ `subscription OnDeleteExtension($filter: ModelSubscriptionExtensionFilterInput) {
  onDeleteExtension(filter: $filter) {
    id
    expiration
    assignmentId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExtensionSubscriptionVariables,
  APITypes.OnDeleteExtensionSubscription
>;
export const onCreateFileRequest = /* GraphQL */ `subscription OnCreateFileRequest(
  $filter: ModelSubscriptionFileRequestFilterInput
) {
  onCreateFileRequest(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateFileRequestSubscriptionVariables,
  APITypes.OnCreateFileRequestSubscription
>;
export const onUpdateFileRequest = /* GraphQL */ `subscription OnUpdateFileRequest(
  $filter: ModelSubscriptionFileRequestFilterInput
) {
  onUpdateFileRequest(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateFileRequestSubscriptionVariables,
  APITypes.OnUpdateFileRequestSubscription
>;
export const onDeleteFileRequest = /* GraphQL */ `subscription OnDeleteFileRequest(
  $filter: ModelSubscriptionFileRequestFilterInput
) {
  onDeleteFileRequest(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteFileRequestSubscriptionVariables,
  APITypes.OnDeleteFileRequestSubscription
>;
export const onCreateFeedbackCategory = /* GraphQL */ `subscription OnCreateFeedbackCategory(
  $filter: ModelSubscriptionFeedbackCategoryFilterInput
) {
  onCreateFeedbackCategory(filter: $filter) {
    id
    name
    title
    description
    submissions {
      items {
        id
        feedbackCategoryID
        fileRequestSubmissionID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    workshops {
      items {
        id
        feedbackCategoryID
        workshopID
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
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackCategorySubscriptionVariables,
  APITypes.OnCreateFeedbackCategorySubscription
>;
export const onUpdateFeedbackCategory = /* GraphQL */ `subscription OnUpdateFeedbackCategory(
  $filter: ModelSubscriptionFeedbackCategoryFilterInput
) {
  onUpdateFeedbackCategory(filter: $filter) {
    id
    name
    title
    description
    submissions {
      items {
        id
        feedbackCategoryID
        fileRequestSubmissionID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    workshops {
      items {
        id
        feedbackCategoryID
        workshopID
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
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackCategorySubscriptionVariables,
  APITypes.OnUpdateFeedbackCategorySubscription
>;
export const onDeleteFeedbackCategory = /* GraphQL */ `subscription OnDeleteFeedbackCategory(
  $filter: ModelSubscriptionFeedbackCategoryFilterInput
) {
  onDeleteFeedbackCategory(filter: $filter) {
    id
    name
    title
    description
    submissions {
      items {
        id
        feedbackCategoryID
        fileRequestSubmissionID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    workshops {
      items {
        id
        feedbackCategoryID
        workshopID
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
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackCategorySubscriptionVariables,
  APITypes.OnDeleteFeedbackCategorySubscription
>;
export const onCreateFileRequestSubmission = /* GraphQL */ `subscription OnCreateFileRequestSubmission(
  $filter: ModelSubscriptionFileRequestSubmissionFilterInput
) {
  onCreateFileRequestSubmission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFileRequestSubmissionSubscriptionVariables,
  APITypes.OnCreateFileRequestSubmissionSubscription
>;
export const onUpdateFileRequestSubmission = /* GraphQL */ `subscription OnUpdateFileRequestSubmission(
  $filter: ModelSubscriptionFileRequestSubmissionFilterInput
) {
  onUpdateFileRequestSubmission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFileRequestSubmissionSubscriptionVariables,
  APITypes.OnUpdateFileRequestSubmissionSubscription
>;
export const onDeleteFileRequestSubmission = /* GraphQL */ `subscription OnDeleteFileRequestSubmission(
  $filter: ModelSubscriptionFileRequestSubmissionFilterInput
) {
  onDeleteFileRequestSubmission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFileRequestSubmissionSubscriptionVariables,
  APITypes.OnDeleteFileRequestSubmissionSubscription
>;
export const onCreateTrack = /* GraphQL */ `subscription OnCreateTrack($filter: ModelSubscriptionTrackFilterInput) {
  onCreateTrack(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateTrackSubscriptionVariables,
  APITypes.OnCreateTrackSubscription
>;
export const onUpdateTrack = /* GraphQL */ `subscription OnUpdateTrack($filter: ModelSubscriptionTrackFilterInput) {
  onUpdateTrack(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateTrackSubscriptionVariables,
  APITypes.OnUpdateTrackSubscription
>;
export const onDeleteTrack = /* GraphQL */ `subscription OnDeleteTrack($filter: ModelSubscriptionTrackFilterInput) {
  onDeleteTrack(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteTrackSubscriptionVariables,
  APITypes.OnDeleteTrackSubscription
>;
export const onCreatePlaylist = /* GraphQL */ `subscription OnCreatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
  onCreatePlaylist(filter: $filter) {
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
    type
    createdAt
    id
    updatedAt
    profilePlaylistsId
    playlistOwnerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlaylistSubscriptionVariables,
  APITypes.OnCreatePlaylistSubscription
>;
export const onUpdatePlaylist = /* GraphQL */ `subscription OnUpdatePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
  onUpdatePlaylist(filter: $filter) {
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
    type
    createdAt
    id
    updatedAt
    profilePlaylistsId
    playlistOwnerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlaylistSubscriptionVariables,
  APITypes.OnUpdatePlaylistSubscription
>;
export const onDeletePlaylist = /* GraphQL */ `subscription OnDeletePlaylist($filter: ModelSubscriptionPlaylistFilterInput) {
  onDeletePlaylist(filter: $filter) {
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
    type
    createdAt
    id
    updatedAt
    profilePlaylistsId
    playlistOwnerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlaylistSubscriptionVariables,
  APITypes.OnDeletePlaylistSubscription
>;
export const onCreateBreakoutGroup = /* GraphQL */ `subscription OnCreateBreakoutGroup(
  $filter: ModelSubscriptionBreakoutGroupFilterInput
) {
  onCreateBreakoutGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBreakoutGroupSubscriptionVariables,
  APITypes.OnCreateBreakoutGroupSubscription
>;
export const onUpdateBreakoutGroup = /* GraphQL */ `subscription OnUpdateBreakoutGroup(
  $filter: ModelSubscriptionBreakoutGroupFilterInput
) {
  onUpdateBreakoutGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBreakoutGroupSubscriptionVariables,
  APITypes.OnUpdateBreakoutGroupSubscription
>;
export const onDeleteBreakoutGroup = /* GraphQL */ `subscription OnDeleteBreakoutGroup(
  $filter: ModelSubscriptionBreakoutGroupFilterInput
) {
  onDeleteBreakoutGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBreakoutGroupSubscriptionVariables,
  APITypes.OnDeleteBreakoutGroupSubscription
>;
export const onCreateMembership = /* GraphQL */ `subscription OnCreateMembership(
  $filter: ModelSubscriptionMembershipFilterInput
) {
  onCreateMembership(filter: $filter) {
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
      maxFeedback
      feedbackCategories {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMembershipSubscriptionVariables,
  APITypes.OnCreateMembershipSubscription
>;
export const onUpdateMembership = /* GraphQL */ `subscription OnUpdateMembership(
  $filter: ModelSubscriptionMembershipFilterInput
) {
  onUpdateMembership(filter: $filter) {
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
      maxFeedback
      feedbackCategories {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMembershipSubscriptionVariables,
  APITypes.OnUpdateMembershipSubscription
>;
export const onDeleteMembership = /* GraphQL */ `subscription OnDeleteMembership(
  $filter: ModelSubscriptionMembershipFilterInput
) {
  onDeleteMembership(filter: $filter) {
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
      maxFeedback
      feedbackCategories {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMembershipSubscriptionVariables,
  APITypes.OnDeleteMembershipSubscription
>;
export const onCreateWorkshop = /* GraphQL */ `subscription OnCreateWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
  onCreateWorkshop(filter: $filter) {
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
    maxFeedback
    feedbackCategories {
      items {
        id
        feedbackCategoryID
        workshopID
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
` as GeneratedSubscription<
  APITypes.OnCreateWorkshopSubscriptionVariables,
  APITypes.OnCreateWorkshopSubscription
>;
export const onUpdateWorkshop = /* GraphQL */ `subscription OnUpdateWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
  onUpdateWorkshop(filter: $filter) {
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
    maxFeedback
    feedbackCategories {
      items {
        id
        feedbackCategoryID
        workshopID
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
` as GeneratedSubscription<
  APITypes.OnUpdateWorkshopSubscriptionVariables,
  APITypes.OnUpdateWorkshopSubscription
>;
export const onDeleteWorkshop = /* GraphQL */ `subscription OnDeleteWorkshop($filter: ModelSubscriptionWorkshopFilterInput) {
  onDeleteWorkshop(filter: $filter) {
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
    maxFeedback
    feedbackCategories {
      items {
        id
        feedbackCategoryID
        workshopID
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
` as GeneratedSubscription<
  APITypes.OnDeleteWorkshopSubscriptionVariables,
  APITypes.OnDeleteWorkshopSubscription
>;
export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile($filter: ModelSubscriptionProfileFilterInput) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile($filter: ModelSubscriptionProfileFilterInput) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile($filter: ModelSubscriptionProfileFilterInput) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
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
    recipientEmail
    recipient {
      email
      id
      name
      displayName
      links {
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
    parentId
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
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
    recipientEmail
    recipient {
      email
      id
      name
      displayName
      links {
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
    parentId
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
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
    recipientEmail
    recipient {
      email
      id
      name
      displayName
      links {
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
    parentId
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateStem = /* GraphQL */ `subscription OnCreateStem($filter: ModelSubscriptionStemFilterInput) {
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
    stemGroupId
    filePath
    artist
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStemSubscriptionVariables,
  APITypes.OnCreateStemSubscription
>;
export const onUpdateStem = /* GraphQL */ `subscription OnUpdateStem($filter: ModelSubscriptionStemFilterInput) {
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
    stemGroupId
    filePath
    artist
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStemSubscriptionVariables,
  APITypes.OnUpdateStemSubscription
>;
export const onDeleteStem = /* GraphQL */ `subscription OnDeleteStem($filter: ModelSubscriptionStemFilterInput) {
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
    stemGroupId
    filePath
    artist
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStemSubscriptionVariables,
  APITypes.OnDeleteStemSubscription
>;
export const onCreatePrompt = /* GraphQL */ `subscription OnCreatePrompt($filter: ModelSubscriptionPromptFilterInput) {
  onCreatePrompt(filter: $filter) {
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
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePromptSubscriptionVariables,
  APITypes.OnCreatePromptSubscription
>;
export const onUpdatePrompt = /* GraphQL */ `subscription OnUpdatePrompt($filter: ModelSubscriptionPromptFilterInput) {
  onUpdatePrompt(filter: $filter) {
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
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePromptSubscriptionVariables,
  APITypes.OnUpdatePromptSubscription
>;
export const onDeletePrompt = /* GraphQL */ `subscription OnDeletePrompt($filter: ModelSubscriptionPromptFilterInput) {
  onDeletePrompt(filter: $filter) {
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
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePromptSubscriptionVariables,
  APITypes.OnDeletePromptSubscription
>;
export const onCreateSubmissionFeedbackCategories = /* GraphQL */ `subscription OnCreateSubmissionFeedbackCategories(
  $filter: ModelSubscriptionSubmissionFeedbackCategoriesFilterInput
) {
  onCreateSubmissionFeedbackCategories(filter: $filter) {
    id
    feedbackCategoryID
    fileRequestSubmissionID
    feedbackCategory {
      id
      name
      title
      description
      submissions {
        nextToken
        __typename
      }
      workshops {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSubmissionFeedbackCategoriesSubscriptionVariables,
  APITypes.OnCreateSubmissionFeedbackCategoriesSubscription
>;
export const onUpdateSubmissionFeedbackCategories = /* GraphQL */ `subscription OnUpdateSubmissionFeedbackCategories(
  $filter: ModelSubscriptionSubmissionFeedbackCategoriesFilterInput
) {
  onUpdateSubmissionFeedbackCategories(filter: $filter) {
    id
    feedbackCategoryID
    fileRequestSubmissionID
    feedbackCategory {
      id
      name
      title
      description
      submissions {
        nextToken
        __typename
      }
      workshops {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSubmissionFeedbackCategoriesSubscriptionVariables,
  APITypes.OnUpdateSubmissionFeedbackCategoriesSubscription
>;
export const onDeleteSubmissionFeedbackCategories = /* GraphQL */ `subscription OnDeleteSubmissionFeedbackCategories(
  $filter: ModelSubscriptionSubmissionFeedbackCategoriesFilterInput
) {
  onDeleteSubmissionFeedbackCategories(filter: $filter) {
    id
    feedbackCategoryID
    fileRequestSubmissionID
    feedbackCategory {
      id
      name
      title
      description
      submissions {
        nextToken
        __typename
      }
      workshops {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSubmissionFeedbackCategoriesSubscriptionVariables,
  APITypes.OnDeleteSubmissionFeedbackCategoriesSubscription
>;
export const onCreateWorkshopFeedbackCategories = /* GraphQL */ `subscription OnCreateWorkshopFeedbackCategories(
  $filter: ModelSubscriptionWorkshopFeedbackCategoriesFilterInput
) {
  onCreateWorkshopFeedbackCategories(filter: $filter) {
    id
    feedbackCategoryID
    workshopID
    feedbackCategory {
      id
      name
      title
      description
      submissions {
        nextToken
        __typename
      }
      workshops {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      maxFeedback
      feedbackCategories {
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
` as GeneratedSubscription<
  APITypes.OnCreateWorkshopFeedbackCategoriesSubscriptionVariables,
  APITypes.OnCreateWorkshopFeedbackCategoriesSubscription
>;
export const onUpdateWorkshopFeedbackCategories = /* GraphQL */ `subscription OnUpdateWorkshopFeedbackCategories(
  $filter: ModelSubscriptionWorkshopFeedbackCategoriesFilterInput
) {
  onUpdateWorkshopFeedbackCategories(filter: $filter) {
    id
    feedbackCategoryID
    workshopID
    feedbackCategory {
      id
      name
      title
      description
      submissions {
        nextToken
        __typename
      }
      workshops {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      maxFeedback
      feedbackCategories {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWorkshopFeedbackCategoriesSubscriptionVariables,
  APITypes.OnUpdateWorkshopFeedbackCategoriesSubscription
>;
export const onDeleteWorkshopFeedbackCategories = /* GraphQL */ `subscription OnDeleteWorkshopFeedbackCategories(
  $filter: ModelSubscriptionWorkshopFeedbackCategoriesFilterInput
) {
  onDeleteWorkshopFeedbackCategories(filter: $filter) {
    id
    feedbackCategoryID
    workshopID
    feedbackCategory {
      id
      name
      title
      description
      submissions {
        nextToken
        __typename
      }
      workshops {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      maxFeedback
      feedbackCategories {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWorkshopFeedbackCategoriesSubscriptionVariables,
  APITypes.OnDeleteWorkshopFeedbackCategoriesSubscription
>;
export const onCreateSubmissionStems = /* GraphQL */ `subscription OnCreateSubmissionStems(
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
}
` as GeneratedSubscription<
  APITypes.OnCreateSubmissionStemsSubscriptionVariables,
  APITypes.OnCreateSubmissionStemsSubscription
>;
export const onUpdateSubmissionStems = /* GraphQL */ `subscription OnUpdateSubmissionStems(
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateSubmissionStemsSubscriptionVariables,
  APITypes.OnUpdateSubmissionStemsSubscription
>;
export const onDeleteSubmissionStems = /* GraphQL */ `subscription OnDeleteSubmissionStems(
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteSubmissionStemsSubscriptionVariables,
  APITypes.OnDeleteSubmissionStemsSubscription
>;
