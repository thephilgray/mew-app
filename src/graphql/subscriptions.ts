/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission($owner: String) {
    onCreateSubmission(owner: $owner) {
      id
      title
      byline
      image {
        bucket
        region
        key
      }
      description
      owner
      editors
      group
      upload {
        bucket
        region
        key
      }
      assignmentId
      workshopId
      createdAt
      assignment {
        id
        title
        image
        startDate
        endDate
        description
        status
        owner
        editors
        group
        required
        submissions {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission($owner: String) {
    onUpdateSubmission(owner: $owner) {
      id
      title
      byline
      image {
        bucket
        region
        key
      }
      description
      owner
      editors
      group
      upload {
        bucket
        region
        key
      }
      assignmentId
      workshopId
      createdAt
      assignment {
        id
        title
        image
        startDate
        endDate
        description
        status
        owner
        editors
        group
        required
        submissions {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission($owner: String) {
    onDeleteSubmission(owner: $owner) {
      id
      title
      byline
      image {
        bucket
        region
        key
      }
      description
      owner
      editors
      group
      upload {
        bucket
        region
        key
      }
      assignmentId
      workshopId
      createdAt
      assignment {
        id
        title
        image
        startDate
        endDate
        description
        status
        owner
        editors
        group
        required
        submissions {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateAssignment = /* GraphQL */ `
  subscription OnCreateAssignment($owner: String) {
    onCreateAssignment(owner: $owner) {
      id
      title
      image
      startDate
      endDate
      description
      status
      owner
      editors
      group
      required
      submissions {
        items {
          id
          title
          byline
          description
          owner
          editors
          group
          assignmentId
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
export const onUpdateAssignment = /* GraphQL */ `
  subscription OnUpdateAssignment($owner: String) {
    onUpdateAssignment(owner: $owner) {
      id
      title
      image
      startDate
      endDate
      description
      status
      owner
      editors
      group
      required
      submissions {
        items {
          id
          title
          byline
          description
          owner
          editors
          group
          assignmentId
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
export const onDeleteAssignment = /* GraphQL */ `
  subscription OnDeleteAssignment($owner: String) {
    onDeleteAssignment(owner: $owner) {
      id
      title
      image
      startDate
      endDate
      description
      status
      owner
      editors
      group
      required
      submissions {
        items {
          id
          title
          byline
          description
          owner
          editors
          group
          assignmentId
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
