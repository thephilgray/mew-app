/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAssignmentInput = {
  id?: string | null,
  owner: string,
  title: string,
  startDate: string,
  endDate: string,
  createdAt?: string | null,
  required: boolean,
  details?: string | null,
  artwork?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelAssignmentConditionInput = {
  title?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  required?: ModelBooleanInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelAssignmentConditionInput | null > | null,
  or?: Array< ModelAssignmentConditionInput | null > | null,
  not?: ModelAssignmentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAssignmentInput = {
  id: string,
  owner?: string | null,
  title?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  createdAt?: string | null,
  required?: boolean | null,
  details?: string | null,
  artwork?: S3ObjectInput | null,
};

export type DeleteAssignmentInput = {
  id?: string | null,
};

export type CreateSubmissionInput = {
  id?: string | null,
  assignmentId: string,
  memberId: string,
  owner: string,
  title: string,
  byline: string,
  details?: string | null,
  createdAt?: string | null,
  artwork?: S3ObjectInput | null,
  audio: S3ObjectInput,
};

export type ModelSubmissionConditionInput = {
  title?: ModelStringInput | null,
  byline?: ModelStringInput | null,
  details?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSubmissionConditionInput | null > | null,
  or?: Array< ModelSubmissionConditionInput | null > | null,
  not?: ModelSubmissionConditionInput | null,
};

export type UpdateSubmissionInput = {
  id: string,
  assignmentId: string,
  memberId: string,
  owner?: string | null,
  title?: string | null,
  byline?: string | null,
  details?: string | null,
  createdAt?: string | null,
  artwork?: S3ObjectInput | null,
  audio?: S3ObjectInput | null,
};

export type DeleteSubmissionInput = {
  assignmentId: string,
  memberId: string,
};

export type CreateMemberInput = {
  name: string,
  id?: string | null,
  email: string,
  artistName?: string | null,
  status: string,
  createdAt?: string | null,
  passes?: number | null,
  role: string,
  owner: string,
};

export type ModelMemberConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  artistName?: ModelStringInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  passes?: ModelIntInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMemberInput = {
  name?: string | null,
  id: string,
  email?: string | null,
  artistName?: string | null,
  status?: string | null,
  createdAt?: string | null,
  passes?: number | null,
  role?: string | null,
  owner?: string | null,
};

export type DeleteMemberInput = {
  id?: string | null,
};

export type ModelAssignmentFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  title?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  required?: ModelBooleanInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelAssignmentFilterInput | null > | null,
  or?: Array< ModelAssignmentFilterInput | null > | null,
  not?: ModelAssignmentFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubmissionFilterInput = {
  id?: ModelIDInput | null,
  assignmentId?: ModelIDInput | null,
  memberId?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  title?: ModelStringInput | null,
  byline?: ModelStringInput | null,
  details?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSubmissionFilterInput | null > | null,
  or?: Array< ModelSubmissionFilterInput | null > | null,
  not?: ModelSubmissionFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMemberFilterInput = {
  name?: ModelStringInput | null,
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  artistName?: ModelStringInput | null,
  status?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  passes?: ModelIntInput | null,
  role?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateAssignmentMutationVariables = {
  input: CreateAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type CreateAssignmentMutation = {
  createAssignment:  {
    __typename: "Assignment",
    id: string,
    owner: string,
    title: string,
    startDate: string,
    endDate: string,
    createdAt: string | null,
    required: boolean,
    details: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateAssignmentMutationVariables = {
  input: UpdateAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type UpdateAssignmentMutation = {
  updateAssignment:  {
    __typename: "Assignment",
    id: string,
    owner: string,
    title: string,
    startDate: string,
    endDate: string,
    createdAt: string | null,
    required: boolean,
    details: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteAssignmentMutationVariables = {
  input: DeleteAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type DeleteAssignmentMutation = {
  deleteAssignment:  {
    __typename: "Assignment",
    id: string,
    owner: string,
    title: string,
    startDate: string,
    endDate: string,
    createdAt: string | null,
    required: boolean,
    details: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateSubmissionMutationVariables = {
  input: CreateSubmissionInput,
  condition?: ModelSubmissionConditionInput | null,
};

export type CreateSubmissionMutation = {
  createSubmission:  {
    __typename: "Submission",
    id: string,
    assignmentId: string,
    memberId: string,
    owner: string,
    title: string,
    byline: string,
    details: string | null,
    createdAt: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    audio:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    updatedAt: string,
  } | null,
};

export type UpdateSubmissionMutationVariables = {
  input: UpdateSubmissionInput,
  condition?: ModelSubmissionConditionInput | null,
};

export type UpdateSubmissionMutation = {
  updateSubmission:  {
    __typename: "Submission",
    id: string,
    assignmentId: string,
    memberId: string,
    owner: string,
    title: string,
    byline: string,
    details: string | null,
    createdAt: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    audio:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    updatedAt: string,
  } | null,
};

export type DeleteSubmissionMutationVariables = {
  input: DeleteSubmissionInput,
  condition?: ModelSubmissionConditionInput | null,
};

export type DeleteSubmissionMutation = {
  deleteSubmission:  {
    __typename: "Submission",
    id: string,
    assignmentId: string,
    memberId: string,
    owner: string,
    title: string,
    byline: string,
    details: string | null,
    createdAt: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    audio:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    updatedAt: string,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember:  {
    __typename: "Member",
    name: string,
    id: string,
    email: string,
    artistName: string | null,
    status: string,
    createdAt: string | null,
    passes: number | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        assignmentId: string,
        memberId: string,
        owner: string,
        title: string,
        byline: string,
        details: string | null,
        createdAt: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    role: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember:  {
    __typename: "Member",
    name: string,
    id: string,
    email: string,
    artistName: string | null,
    status: string,
    createdAt: string | null,
    passes: number | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        assignmentId: string,
        memberId: string,
        owner: string,
        title: string,
        byline: string,
        details: string | null,
        createdAt: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    role: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember:  {
    __typename: "Member",
    name: string,
    id: string,
    email: string,
    artistName: string | null,
    status: string,
    createdAt: string | null,
    passes: number | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        assignmentId: string,
        memberId: string,
        owner: string,
        title: string,
        byline: string,
        details: string | null,
        createdAt: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    role: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type GetAssignmentQueryVariables = {
  id: string,
};

export type GetAssignmentQuery = {
  getAssignment:  {
    __typename: "Assignment",
    id: string,
    owner: string,
    title: string,
    startDate: string,
    endDate: string,
    createdAt: string | null,
    required: boolean,
    details: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListAssignmentsQueryVariables = {
  filter?: ModelAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssignmentsQuery = {
  listAssignments:  {
    __typename: "ModelAssignmentConnection",
    items:  Array< {
      __typename: "Assignment",
      id: string,
      owner: string,
      title: string,
      startDate: string,
      endDate: string,
      createdAt: string | null,
      required: boolean,
      details: string | null,
      artwork:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSubmissionQueryVariables = {
  assignmentId: string,
  memberId: string,
};

export type GetSubmissionQuery = {
  getSubmission:  {
    __typename: "Submission",
    id: string,
    assignmentId: string,
    memberId: string,
    owner: string,
    title: string,
    byline: string,
    details: string | null,
    createdAt: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    audio:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    updatedAt: string,
  } | null,
};

export type ListSubmissionsQueryVariables = {
  assignmentId?: string | null,
  memberId?: ModelIDKeyConditionInput | null,
  filter?: ModelSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSubmissionsQuery = {
  listSubmissions:  {
    __typename: "ModelSubmissionConnection",
    items:  Array< {
      __typename: "Submission",
      id: string,
      assignmentId: string,
      memberId: string,
      owner: string,
      title: string,
      byline: string,
      details: string | null,
      createdAt: string | null,
      artwork:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      audio:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      },
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id: string,
};

export type GetMemberQuery = {
  getMember:  {
    __typename: "Member",
    name: string,
    id: string,
    email: string,
    artistName: string | null,
    status: string,
    createdAt: string | null,
    passes: number | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        assignmentId: string,
        memberId: string,
        owner: string,
        title: string,
        byline: string,
        details: string | null,
        createdAt: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    role: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      name: string,
      id: string,
      email: string,
      artistName: string | null,
      status: string,
      createdAt: string | null,
      passes: number | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      role: string,
      owner: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type MemberByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MemberByEmailQuery = {
  memberByEmail:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      name: string,
      id: string,
      email: string,
      artistName: string | null,
      status: string,
      createdAt: string | null,
      passes: number | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      role: string,
      owner: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type MembersByStatusQueryVariables = {
  status?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MembersByStatusQuery = {
  membersByStatus:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      name: string,
      id: string,
      email: string,
      artistName: string | null,
      status: string,
      createdAt: string | null,
      passes: number | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      role: string,
      owner: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type MembersByRoleAndStatusQueryVariables = {
  role?: string | null,
  status?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MembersByRoleAndStatusQuery = {
  membersByRoleAndStatus:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      name: string,
      id: string,
      email: string,
      artistName: string | null,
      status: string,
      createdAt: string | null,
      passes: number | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      role: string,
      owner: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnCreateAssignmentSubscription = {
  onCreateAssignment:  {
    __typename: "Assignment",
    id: string,
    owner: string,
    title: string,
    startDate: string,
    endDate: string,
    createdAt: string | null,
    required: boolean,
    details: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnUpdateAssignmentSubscription = {
  onUpdateAssignment:  {
    __typename: "Assignment",
    id: string,
    owner: string,
    title: string,
    startDate: string,
    endDate: string,
    createdAt: string | null,
    required: boolean,
    details: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssignmentSubscriptionVariables = {
  owner: string,
};

export type OnDeleteAssignmentSubscription = {
  onDeleteAssignment:  {
    __typename: "Assignment",
    id: string,
    owner: string,
    title: string,
    startDate: string,
    endDate: string,
    createdAt: string | null,
    required: boolean,
    details: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSubmissionSubscriptionVariables = {
  owner: string,
};

export type OnCreateSubmissionSubscription = {
  onCreateSubmission:  {
    __typename: "Submission",
    id: string,
    assignmentId: string,
    memberId: string,
    owner: string,
    title: string,
    byline: string,
    details: string | null,
    createdAt: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    audio:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    updatedAt: string,
  } | null,
};

export type OnUpdateSubmissionSubscriptionVariables = {
  owner: string,
};

export type OnUpdateSubmissionSubscription = {
  onUpdateSubmission:  {
    __typename: "Submission",
    id: string,
    assignmentId: string,
    memberId: string,
    owner: string,
    title: string,
    byline: string,
    details: string | null,
    createdAt: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    audio:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    updatedAt: string,
  } | null,
};

export type OnDeleteSubmissionSubscriptionVariables = {
  owner: string,
};

export type OnDeleteSubmissionSubscription = {
  onDeleteSubmission:  {
    __typename: "Submission",
    id: string,
    assignmentId: string,
    memberId: string,
    owner: string,
    title: string,
    byline: string,
    details: string | null,
    createdAt: string | null,
    artwork:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    audio:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    updatedAt: string,
  } | null,
};

export type OnCreateMemberSubscriptionVariables = {
  owner: string,
};

export type OnCreateMemberSubscription = {
  onCreateMember:  {
    __typename: "Member",
    name: string,
    id: string,
    email: string,
    artistName: string | null,
    status: string,
    createdAt: string | null,
    passes: number | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        assignmentId: string,
        memberId: string,
        owner: string,
        title: string,
        byline: string,
        details: string | null,
        createdAt: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    role: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberSubscriptionVariables = {
  owner: string,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember:  {
    __typename: "Member",
    name: string,
    id: string,
    email: string,
    artistName: string | null,
    status: string,
    createdAt: string | null,
    passes: number | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        assignmentId: string,
        memberId: string,
        owner: string,
        title: string,
        byline: string,
        details: string | null,
        createdAt: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    role: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberSubscriptionVariables = {
  owner: string,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember:  {
    __typename: "Member",
    name: string,
    id: string,
    email: string,
    artistName: string | null,
    status: string,
    createdAt: string | null,
    passes: number | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        assignmentId: string,
        memberId: string,
        owner: string,
        title: string,
        byline: string,
        details: string | null,
        createdAt: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    role: string,
    owner: string,
    updatedAt: string,
  } | null,
};
