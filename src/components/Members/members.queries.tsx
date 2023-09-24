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
          location {
            latitude
            longitude
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
      nextToken
      __typename
    }
  }
`;