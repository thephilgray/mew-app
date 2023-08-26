// import {
//   getFileRequest,
//   getPlaylist,
//   listPlaylists,
//   playlistsByDate,
//   listFileRequests
// } from '../../graphql/queries'

export const getFileRequest = /* GraphQL */ `
  query GetFileRequest($id: ID!) {
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
            }
            workshopId
            createdAt
            updatedAt
          }
          artist
          name
          email
          profile {
            id
            name
            displayName
            avatar
            bio
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
            }
          }
          artwork {
            id
            path
            credit
          }
          lyrics
          requestFeedback
          duration
          workshopId
          createdAt
          updatedAt
        }
      }
      workshop {
        id
        name
        artwork {
          id
          path
          credit
        }
      }
      workshopId
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
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
          }
        }
        owner {
          email
          id
          name
          displayName
          avatar
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
            }
          }
        }
        public
        title
        artwork {
          id
          path
          credit
        }
        type
        createdAt
        id
        updatedAt
        profilePlaylistsId
        playlistOwnerId
      }
      playlistStartDate
      playlistExternalUrl
      createdAt
      updatedAt
      fileRequestPlaylistId
    }
  }
`;

export const getPlaylist = /* GraphQL */ `
  query GetPlaylist($id: ID!) {
    getPlaylist(id: $id) {
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
            }
            fileId
            fileExtension
            rating
            artwork {
              id
              path
              credit
            }
            lyrics
            requestFeedback
            duration
            workshopId
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
          playlistTracksId
          trackSubmissionId
        }
        nextToken
      }
      owner {
        id
        name
        displayName
        avatar
      }
      public
      title
      artwork {
        id
        path
        credit
      }
      type
      createdAt
      id
      updatedAt
      profilePlaylistsId
      playlistOwnerId
    }
  }
`;

export const listPlaylists = /* GraphQL */ `
  query ListPlaylists(
    $filter: ModelPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaylists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            }
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
          }
          nextToken
        }
        owner {
          email
          id
          name
          displayName
          avatar
        }
        public
        title
        artwork {
          id
          path
          credit
        }
        type
        createdAt
        id
        updatedAt
        profilePlaylistsId
        playlistOwnerId
      }
      nextToken
    }
  }
`;

export const playlistsByDate = /* GraphQL */ `
  query PlaylistsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlaylistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    playlistsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
            }
            id
            createdAt
            updatedAt
            playlistTracksId
            trackSubmissionId
          }
          nextToken
        }
        owner {
          email
          id
          name
          displayName
          avatar
        }
        public
        title
        artwork {
          id
          path
          credit
        }
        type
        createdAt
        id
        updatedAt
        profilePlaylistsId
        playlistOwnerId
      }
      nextToken
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
        startDate
        expiration
        title
        artwork {
          id
          path
          credit
        }
        workshop {
          id
          artwork {
            id
            path
            credit
          }
        }
        submissions {
          items {
            id
          }
        }
        workshopId
        playlist {
          tracks {
            items {
              order
              id
              createdAt
              updatedAt
              playlistTracksId
              trackSubmissionId
            }
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
            }
            avatar
            bio
            sub
            createdAt
            updatedAt
          }
          public
          title
          artwork {
            id
            path
            credit
          }
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
  }
`;