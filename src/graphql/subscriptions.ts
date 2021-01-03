/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAssignment = /* GraphQL */ `
  subscription OnCreateAssignment {
    onCreateAssignment {
      id
      owner
      title
      startDate
      endDate
      createdAt
      required
      details
      artwork {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateAssignment = /* GraphQL */ `
  subscription OnUpdateAssignment {
    onUpdateAssignment {
      id
      owner
      title
      startDate
      endDate
      createdAt
      required
      details
      artwork {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteAssignment = /* GraphQL */ `
  subscription OnDeleteAssignment {
    onDeleteAssignment {
      id
      owner
      title
      startDate
      endDate
      createdAt
      required
      details
      artwork {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission {
    onCreateSubmission {
      id
      assignmentId
      memberId
      owner
      title
      byline
      details
      createdAt
      artwork {
        bucket
        region
        key
      }
      audio {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission {
    onUpdateSubmission {
      id
      assignmentId
      memberId
      owner
      title
      byline
      details
      createdAt
      artwork {
        bucket
        region
        key
      }
      audio {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission {
    onDeleteSubmission {
      id
      assignmentId
      memberId
      owner
      title
      byline
      details
      createdAt
      artwork {
        bucket
        region
        key
      }
      audio {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
      name
      id
      email
      artistName
      status
      createdAt
      passes
      role
      owner
      _version
      _deleted
      _lastChangedAt
      updatedAt
      submissions {
        items {
          id
          assignmentId
          memberId
          owner
          title
          byline
          details
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
      name
      id
      email
      artistName
      status
      createdAt
      passes
      role
      owner
      _version
      _deleted
      _lastChangedAt
      updatedAt
      submissions {
        items {
          id
          assignmentId
          memberId
          owner
          title
          byline
          details
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
      name
      id
      email
      artistName
      status
      createdAt
      passes
      role
      owner
      _version
      _deleted
      _lastChangedAt
      updatedAt
      submissions {
        items {
          id
          assignmentId
          memberId
          owner
          title
          byline
          details
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
