/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAPIKey = /* GraphQL */ `
  subscription OnCreateAPIKey {
    onCreateAPIKey {
      id
      keyName
      createdAt
      profileID
      email
      profile {
        email
        id
        name
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
  subscription OnUpdateAPIKey {
    onUpdateAPIKey {
      id
      keyName
      createdAt
      profileID
      email
      profile {
        email
        id
        name
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
  subscription OnDeleteAPIKey {
    onDeleteAPIKey {
      id
      keyName
      createdAt
      profileID
      email
      profile {
        email
        id
        name
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
  subscription OnCreateExtension {
    onCreateExtension {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExtension = /* GraphQL */ `
  subscription OnUpdateExtension {
    onUpdateExtension {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExtension = /* GraphQL */ `
  subscription OnDeleteExtension {
    onDeleteExtension {
      id
      expiration
      assignmentId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFileRequest = /* GraphQL */ `
  subscription OnCreateFileRequest {
    onCreateFileRequest {
      id
      expiration
      title
      details
      required
      playlistArtwork {
        id
        credit {
          id
          title
          artists
          artistLinks
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
          comments
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
  subscription OnUpdateFileRequest {
    onUpdateFileRequest {
      id
      expiration
      title
      details
      required
      playlistArtwork {
        id
        credit {
          id
          title
          artists
          artistLinks
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
          comments
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
  subscription OnDeleteFileRequest {
    onDeleteFileRequest {
      id
      expiration
      title
      details
      required
      playlistArtwork {
        id
        credit {
          id
          title
          artists
          artistLinks
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
          comments
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
  subscription OnCreateFileRequestSubmission {
    onCreateFileRequestSubmission {
      id
      fileRequestId
      fileRequest {
        id
        expiration
        title
        details
        required
        playlistArtwork {
          id
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
      comments
      workshopId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFileRequestSubmission = /* GraphQL */ `
  subscription OnUpdateFileRequestSubmission {
    onUpdateFileRequestSubmission {
      id
      fileRequestId
      fileRequest {
        id
        expiration
        title
        details
        required
        playlistArtwork {
          id
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
      comments
      workshopId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFileRequestSubmission = /* GraphQL */ `
  subscription OnDeleteFileRequestSubmission {
    onDeleteFileRequestSubmission {
      id
      fileRequestId
      fileRequest {
        id
        expiration
        title
        details
        required
        playlistArtwork {
          id
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
      comments
      workshopId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMembership = /* GraphQL */ `
  subscription OnCreateMembership {
    onCreateMembership {
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
          comments
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
  subscription OnUpdateMembership {
    onUpdateMembership {
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
          comments
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
  subscription OnDeleteMembership {
    onDeleteMembership {
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
          comments
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
  subscription OnCreateWorkshop {
    onCreateWorkshop {
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
          comments
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
  subscription OnUpdateWorkshop {
    onUpdateWorkshop {
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
          comments
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
  subscription OnDeleteWorkshop {
    onDeleteWorkshop {
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
          comments
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
  subscription OnCreateProfile {
    onCreateProfile {
      email
      id
      name
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
  subscription OnUpdateProfile {
    onUpdateProfile {
      email
      id
      name
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
  subscription OnDeleteProfile {
    onDeleteProfile {
      email
      id
      name
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
