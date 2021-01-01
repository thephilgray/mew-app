/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSubmissionInput = {
  id?: string | null,
  title: string,
  byline: string,
  image?: S3ObjectInput | null,
  description?: string | null,
  owner: string,
  editors: Array< string | null >,
  group: string,
  upload?: S3ObjectInput | null,
  assignmentId: string,
  workshopId: string,
  createdAt?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelSubmissionConditionInput = {
  title?: ModelStringInput | null,
  byline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  assignmentId?: ModelIDInput | null,
  workshopId?: ModelIDInput | null,
  and?: Array< ModelSubmissionConditionInput | null > | null,
  or?: Array< ModelSubmissionConditionInput | null > | null,
  not?: ModelSubmissionConditionInput | null,
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

export type UpdateSubmissionInput = {
  id: string,
  title?: string | null,
  byline?: string | null,
  image?: S3ObjectInput | null,
  description?: string | null,
  owner: string,
  editors?: Array< string | null > | null,
  group: string,
  upload?: S3ObjectInput | null,
  assignmentId?: string | null,
  workshopId?: string | null,
  createdAt: string,
};

export type DeleteSubmissionInput = {
  owner: string,
  group: string,
  createdAt: string,
};

export type CreateAssignmentInput = {
  id?: string | null,
  title: string,
  image?: string | null,
  startDate: string,
  endDate: string,
  description?: string | null,
  status?: string | null,
  owner: string,
  editors: Array< string | null >,
  group: string,
  required?: boolean | null,
  createdAt?: string | null,
};

export type ModelAssignmentConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  required?: ModelBooleanInput | null,
  and?: Array< ModelAssignmentConditionInput | null > | null,
  or?: Array< ModelAssignmentConditionInput | null > | null,
  not?: ModelAssignmentConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAssignmentInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  description?: string | null,
  status?: string | null,
  owner: string,
  editors?: Array< string | null > | null,
  group: string,
  required?: boolean | null,
  createdAt: string,
};

export type DeleteAssignmentInput = {
  owner: string,
  group: string,
  createdAt: string,
};

export type ModelSubmissionPrimaryCompositeKeyConditionInput = {
  eq?: ModelSubmissionPrimaryCompositeKeyInput | null,
  le?: ModelSubmissionPrimaryCompositeKeyInput | null,
  lt?: ModelSubmissionPrimaryCompositeKeyInput | null,
  ge?: ModelSubmissionPrimaryCompositeKeyInput | null,
  gt?: ModelSubmissionPrimaryCompositeKeyInput | null,
  between?: Array< ModelSubmissionPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelSubmissionPrimaryCompositeKeyInput | null,
};

export type ModelSubmissionPrimaryCompositeKeyInput = {
  group?: string | null,
  createdAt?: string | null,
};

export type ModelSubmissionFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  byline?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  editors?: ModelIDInput | null,
  group?: ModelIDInput | null,
  assignmentId?: ModelIDInput | null,
  workshopId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSubmissionFilterInput | null > | null,
  or?: Array< ModelSubmissionFilterInput | null > | null,
  not?: ModelSubmissionFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAssignmentPrimaryCompositeKeyConditionInput = {
  eq?: ModelAssignmentPrimaryCompositeKeyInput | null,
  le?: ModelAssignmentPrimaryCompositeKeyInput | null,
  lt?: ModelAssignmentPrimaryCompositeKeyInput | null,
  ge?: ModelAssignmentPrimaryCompositeKeyInput | null,
  gt?: ModelAssignmentPrimaryCompositeKeyInput | null,
  between?: Array< ModelAssignmentPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelAssignmentPrimaryCompositeKeyInput | null,
};

export type ModelAssignmentPrimaryCompositeKeyInput = {
  group?: string | null,
  createdAt?: string | null,
};

export type ModelAssignmentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  editors?: ModelIDInput | null,
  group?: ModelIDInput | null,
  required?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAssignmentFilterInput | null > | null,
  or?: Array< ModelAssignmentFilterInput | null > | null,
  not?: ModelAssignmentFilterInput | null,
};

export type CreateSubmissionMutationVariables = {
  input: CreateSubmissionInput,
  condition?: ModelSubmissionConditionInput | null,
};

export type CreateSubmissionMutation = {
  createSubmission:  {
    __typename: "Submission",
    id: string,
    title: string,
    byline: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    upload:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    assignmentId: string,
    workshopId: string,
    createdAt: string,
    assignment:  {
      __typename: "Assignment",
      id: string,
      title: string,
      image: string | null,
      startDate: string,
      endDate: string,
      description: string | null,
      status: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      required: boolean | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    title: string,
    byline: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    upload:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    assignmentId: string,
    workshopId: string,
    createdAt: string,
    assignment:  {
      __typename: "Assignment",
      id: string,
      title: string,
      image: string | null,
      startDate: string,
      endDate: string,
      description: string | null,
      status: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      required: boolean | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    title: string,
    byline: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    upload:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    assignmentId: string,
    workshopId: string,
    createdAt: string,
    assignment:  {
      __typename: "Assignment",
      id: string,
      title: string,
      image: string | null,
      startDate: string,
      endDate: string,
      description: string | null,
      status: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      required: boolean | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateAssignmentMutationVariables = {
  input: CreateAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type CreateAssignmentMutation = {
  createAssignment:  {
    __typename: "Assignment",
    id: string,
    title: string,
    image: string | null,
    startDate: string,
    endDate: string,
    description: string | null,
    status: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    required: boolean | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        title: string,
        byline: string,
        description: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        assignmentId: string,
        workshopId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
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
    title: string,
    image: string | null,
    startDate: string,
    endDate: string,
    description: string | null,
    status: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    required: boolean | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        title: string,
        byline: string,
        description: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        assignmentId: string,
        workshopId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
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
    title: string,
    image: string | null,
    startDate: string,
    endDate: string,
    description: string | null,
    status: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    required: boolean | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        title: string,
        byline: string,
        description: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        assignmentId: string,
        workshopId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSubmissionQueryVariables = {
  owner: string,
  group: string,
  createdAt: string,
};

export type GetSubmissionQuery = {
  getSubmission:  {
    __typename: "Submission",
    id: string,
    title: string,
    byline: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    upload:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    assignmentId: string,
    workshopId: string,
    createdAt: string,
    assignment:  {
      __typename: "Assignment",
      id: string,
      title: string,
      image: string | null,
      startDate: string,
      endDate: string,
      description: string | null,
      status: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      required: boolean | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListSubmissionsQueryVariables = {
  owner?: string | null,
  groupCreatedAt?: ModelSubmissionPrimaryCompositeKeyConditionInput | null,
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
      title: string,
      byline: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      description: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      upload:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      assignmentId: string,
      workshopId: string,
      createdAt: string,
      assignment:  {
        __typename: "Assignment",
        id: string,
        title: string,
        image: string | null,
        startDate: string,
        endDate: string,
        description: string | null,
        status: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        required: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAssignmentQueryVariables = {
  owner: string,
  group: string,
  createdAt: string,
};

export type GetAssignmentQuery = {
  getAssignment:  {
    __typename: "Assignment",
    id: string,
    title: string,
    image: string | null,
    startDate: string,
    endDate: string,
    description: string | null,
    status: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    required: boolean | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        title: string,
        byline: string,
        description: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        assignmentId: string,
        workshopId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssignmentsQueryVariables = {
  owner?: string | null,
  groupCreatedAt?: ModelAssignmentPrimaryCompositeKeyConditionInput | null,
  filter?: ModelAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAssignmentsQuery = {
  listAssignments:  {
    __typename: "ModelAssignmentConnection",
    items:  Array< {
      __typename: "Assignment",
      id: string,
      title: string,
      image: string | null,
      startDate: string,
      endDate: string,
      description: string | null,
      status: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      required: boolean | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ItemsByAssignmentQueryVariables = {
  assignmentId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByAssignmentQuery = {
  itemsByAssignment:  {
    __typename: "ModelSubmissionConnection",
    items:  Array< {
      __typename: "Submission",
      id: string,
      title: string,
      byline: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      description: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      upload:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      assignmentId: string,
      workshopId: string,
      createdAt: string,
      assignment:  {
        __typename: "Assignment",
        id: string,
        title: string,
        image: string | null,
        startDate: string,
        endDate: string,
        description: string | null,
        status: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        required: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSubmissionSubscription = {
  onCreateSubmission:  {
    __typename: "Submission",
    id: string,
    title: string,
    byline: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    upload:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    assignmentId: string,
    workshopId: string,
    createdAt: string,
    assignment:  {
      __typename: "Assignment",
      id: string,
      title: string,
      image: string | null,
      startDate: string,
      endDate: string,
      description: string | null,
      status: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      required: boolean | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSubmissionSubscription = {
  onUpdateSubmission:  {
    __typename: "Submission",
    id: string,
    title: string,
    byline: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    upload:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    assignmentId: string,
    workshopId: string,
    createdAt: string,
    assignment:  {
      __typename: "Assignment",
      id: string,
      title: string,
      image: string | null,
      startDate: string,
      endDate: string,
      description: string | null,
      status: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      required: boolean | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSubmissionSubscription = {
  onDeleteSubmission:  {
    __typename: "Submission",
    id: string,
    title: string,
    byline: string,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    description: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    upload:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    assignmentId: string,
    workshopId: string,
    createdAt: string,
    assignment:  {
      __typename: "Assignment",
      id: string,
      title: string,
      image: string | null,
      startDate: string,
      endDate: string,
      description: string | null,
      status: string | null,
      owner: string,
      editors: Array< string | null >,
      group: string,
      required: boolean | null,
      submissions:  {
        __typename: "ModelSubmissionConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateAssignmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAssignmentSubscription = {
  onCreateAssignment:  {
    __typename: "Assignment",
    id: string,
    title: string,
    image: string | null,
    startDate: string,
    endDate: string,
    description: string | null,
    status: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    required: boolean | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        title: string,
        byline: string,
        description: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        assignmentId: string,
        workshopId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssignmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAssignmentSubscription = {
  onUpdateAssignment:  {
    __typename: "Assignment",
    id: string,
    title: string,
    image: string | null,
    startDate: string,
    endDate: string,
    description: string | null,
    status: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    required: boolean | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        title: string,
        byline: string,
        description: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        assignmentId: string,
        workshopId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssignmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAssignmentSubscription = {
  onDeleteAssignment:  {
    __typename: "Assignment",
    id: string,
    title: string,
    image: string | null,
    startDate: string,
    endDate: string,
    description: string | null,
    status: string | null,
    owner: string,
    editors: Array< string | null >,
    group: string,
    required: boolean | null,
    submissions:  {
      __typename: "ModelSubmissionConnection",
      items:  Array< {
        __typename: "Submission",
        id: string,
        title: string,
        byline: string,
        description: string | null,
        owner: string,
        editors: Array< string | null >,
        group: string,
        assignmentId: string,
        workshopId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
