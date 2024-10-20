// import { getProfile } from '../graphql/queries'

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
          updatedAt
        }
      }
      workshops {
        items {
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
          comments {
            items {
              id
            }
            nextToken
          }
          workshopId
          createdAt
          updatedAt
        }
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
            status
            passes
            startDate
            endDate
            createdAt
            updatedAt
          }
          breakoutGroup {
            id
            name
            workshopId
            createdAt
            updatedAt
          }
        }
      }
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          serverPrefix
        }
      }
      notificationSettings {
        emailDigest {
          enabled
          frequency
        }
      }
      playlists {
        items {
          tracks {
            items {
              id
            }
          }
        }
      }
      uploadedStems {
        items {
          id
        }
      }
      location {
        latitude
        longitude
      }
      createdAt
      updatedAt
    }
  }
`;