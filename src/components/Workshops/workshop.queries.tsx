// import { getWorkshop } from '../../graphql/queries'

export const getWorkshop = /* GraphQL */ `
  query GetWorkshop($id: ID!) {
    getWorkshop(id: $id) {
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
          }
          submissions {
            items {
              id
              email
              duration
            }
          }
          workshopId
          workshop{
            artwork {
              id
              path
              credit
            }
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
          }
          playlistStartDate
          playlistExternalUrl
          type
          createdAt
          updatedAt
          fileRequestPlaylistId
        }
      }
      submissions {
        items {
          id
          fileRequestId
          duration
          artist
          name
          email
          profile {
            email
            id
          }
          comments {
            items {
              id
            }
          }
          breakoutGroupId
        }
      }
      status
      passes
      features {
        mailchimp {
          enabled
          apiKeyName
          listId
          serverPrefix
          sessionTag
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
        avatar
        bio
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
          }
          profile {
            id
            name
            displayName
            avatar
            email
          }
          breakoutGroupId
          breakoutGroup {
            id
            name
            createdAt
            updatedAt
          }
        }
      }
      breakoutGroups {
        items {
          id
          name
          createdAt
          updatedAt
          members{
            items {
              id
              email
            }
          }
        }
      }
      createdAt
      updatedAt
    }
  }
`;