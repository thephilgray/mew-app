/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFileRequestInput = {
  id?: string | null,
  expiration: string,
  title?: string | null,
  details?: string | null,
  required?: boolean | null,
  _version?: number | null,
};

export type ModelFileRequestConditionInput = {
  expiration?: ModelStringInput | null,
  title?: ModelStringInput | null,
  details?: ModelStringInput | null,
  required?: ModelBooleanInput | null,
  and?: Array< ModelFileRequestConditionInput | null > | null,
  or?: Array< ModelFileRequestConditionInput | null > | null,
  not?: ModelFileRequestConditionInput | null,
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

export type UpdateFileRequestInput = {
  id: string,
  expiration?: string | null,
  title?: string | null,
  details?: string | null,
  required?: boolean | null,
  _version?: number | null,
};

export type DeleteFileRequestInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateFileRequestSubmissionInput = {
  id?: string | null,
  fileRequestId: string,
  artist?: string | null,
  name?: string | null,
  email?: string | null,
  audio?: string | null,
  _version?: number | null,
};

export type ModelFileRequestSubmissionConditionInput = {
  fileRequestId?: ModelIDInput | null,
  artist?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  and?: Array< ModelFileRequestSubmissionConditionInput | null > | null,
  or?: Array< ModelFileRequestSubmissionConditionInput | null > | null,
  not?: ModelFileRequestSubmissionConditionInput | null,
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

export type UpdateFileRequestSubmissionInput = {
  id: string,
  fileRequestId?: string | null,
  artist?: string | null,
  name?: string | null,
  email?: string | null,
  audio?: string | null,
  _version?: number | null,
};

export type DeleteFileRequestSubmissionInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateMemberInput = {
  email: string,
  artist?: string | null,
  status?: MemberStatus | null,
  _version?: number | null,
};

export enum MemberStatus {
  ENROLLED = "ENROLLED",
  UNENROLLED = "UNENROLLED",
  PENDING = "PENDING",
}


export type ModelMemberConditionInput = {
  artist?: ModelStringInput | null,
  status?: ModelMemberStatusInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type ModelMemberStatusInput = {
  eq?: MemberStatus | null,
  ne?: MemberStatus | null,
};

export type UpdateMemberInput = {
  email: string,
  artist?: string | null,
  status?: MemberStatus | null,
  _version?: number | null,
};

export type DeleteMemberInput = {
  email: string,
  _version?: number | null,
};

export type ModelFileRequestFilterInput = {
  id?: ModelIDInput | null,
  expiration?: ModelStringInput | null,
  title?: ModelStringInput | null,
  details?: ModelStringInput | null,
  required?: ModelBooleanInput | null,
  and?: Array< ModelFileRequestFilterInput | null > | null,
  or?: Array< ModelFileRequestFilterInput | null > | null,
  not?: ModelFileRequestFilterInput | null,
};

export type ModelFileRequestSubmissionFilterInput = {
  id?: ModelIDInput | null,
  fileRequestId?: ModelIDInput | null,
  artist?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  and?: Array< ModelFileRequestSubmissionFilterInput | null > | null,
  or?: Array< ModelFileRequestSubmissionFilterInput | null > | null,
  not?: ModelFileRequestSubmissionFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMemberFilterInput = {
  email?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  status?: ModelMemberStatusInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ProcessDownloadMutationVariables = {
  assignmentId: string,
};

export type ProcessDownloadMutation = {
  processDownload: string | null,
};

export type PopulateMembersMutation = {
  populateMembers: Array< string | null > | null,
};

export type CreateFileRequestMutationVariables = {
  input: CreateFileRequestInput,
  condition?: ModelFileRequestConditionInput | null,
};

export type CreateFileRequestMutation = {
  createFileRequest:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title: string | null,
    details: string | null,
    required: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type UpdateFileRequestMutationVariables = {
  input: UpdateFileRequestInput,
  condition?: ModelFileRequestConditionInput | null,
};

export type UpdateFileRequestMutation = {
  updateFileRequest:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title: string | null,
    details: string | null,
    required: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type DeleteFileRequestMutationVariables = {
  input: DeleteFileRequestInput,
  condition?: ModelFileRequestConditionInput | null,
};

export type DeleteFileRequestMutation = {
  deleteFileRequest:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title: string | null,
    details: string | null,
    required: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type CreateFileRequestSubmissionMutationVariables = {
  input: CreateFileRequestSubmissionInput,
  condition?: ModelFileRequestSubmissionConditionInput | null,
};

export type CreateFileRequestSubmissionMutation = {
  createFileRequestSubmission:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    artist: string | null,
    name: string | null,
    email: string | null,
    audio: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    fileRequest:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateFileRequestSubmissionMutationVariables = {
  input: UpdateFileRequestSubmissionInput,
  condition?: ModelFileRequestSubmissionConditionInput | null,
};

export type UpdateFileRequestSubmissionMutation = {
  updateFileRequestSubmission:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    artist: string | null,
    name: string | null,
    email: string | null,
    audio: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    fileRequest:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteFileRequestSubmissionMutationVariables = {
  input: DeleteFileRequestSubmissionInput,
  condition?: ModelFileRequestSubmissionConditionInput | null,
};

export type DeleteFileRequestSubmissionMutation = {
  deleteFileRequestSubmission:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    artist: string | null,
    name: string | null,
    email: string | null,
    audio: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    fileRequest:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateMemberMutationVariables = {
  input: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember:  {
    __typename: "Member",
    email: string,
    artist: string | null,
    status: MemberStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember:  {
    __typename: "Member",
    email: string,
    artist: string | null,
    status: MemberStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember:  {
    __typename: "Member",
    email: string,
    artist: string | null,
    status: MemberStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListFileRequestsQueryVariables = {
  filter?: ModelFileRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFileRequestsQuery = {
  listFileRequests:  {
    __typename: "ModelFileRequestConnection",
    items:  Array< {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetFileRequestQueryVariables = {
  id: string,
};

export type GetFileRequestQuery = {
  getFileRequest:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title: string | null,
    details: string | null,
    required: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type SyncFileRequestsQueryVariables = {
  filter?: ModelFileRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFileRequestsQuery = {
  syncFileRequests:  {
    __typename: "ModelFileRequestConnection",
    items:  Array< {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetFileRequestSubmissionQueryVariables = {
  id: string,
};

export type GetFileRequestSubmissionQuery = {
  getFileRequestSubmission:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    artist: string | null,
    name: string | null,
    email: string | null,
    audio: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    fileRequest:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListFileRequestSubmissionsQueryVariables = {
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFileRequestSubmissionsQuery = {
  listFileRequestSubmissions:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      artist: string | null,
      name: string | null,
      email: string | null,
      audio: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      fileRequest:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title: string | null,
        details: string | null,
        required: boolean | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SubmissionsByFileRequestIdQueryVariables = {
  fileRequestId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubmissionsByFileRequestIdQuery = {
  submissionsByFileRequestId:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      artist: string | null,
      name: string | null,
      email: string | null,
      audio: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      fileRequest:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title: string | null,
        details: string | null,
        required: boolean | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SubmissionsByEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubmissionsByEmailQuery = {
  submissionsByEmail:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      artist: string | null,
      name: string | null,
      email: string | null,
      audio: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      fileRequest:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title: string | null,
        details: string | null,
        required: boolean | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncFileRequestSubmissionsQueryVariables = {
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFileRequestSubmissionsQuery = {
  syncFileRequestSubmissions:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      artist: string | null,
      name: string | null,
      email: string | null,
      audio: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      fileRequest:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title: string | null,
        details: string | null,
        required: boolean | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetMemberQueryVariables = {
  email: string,
};

export type GetMemberQuery = {
  getMember:  {
    __typename: "Member",
    email: string,
    artist: string | null,
    status: MemberStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListMembersQueryVariables = {
  email?: string | null,
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMembersQuery = {
  listMembers:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      email: string,
      artist: string | null,
      status: MemberStatus | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMembersQuery = {
  syncMembers:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      email: string,
      artist: string | null,
      status: MemberStatus | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateFileRequestSubscription = {
  onCreateFileRequest:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title: string | null,
    details: string | null,
    required: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnUpdateFileRequestSubscription = {
  onUpdateFileRequest:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title: string | null,
    details: string | null,
    required: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnDeleteFileRequestSubscription = {
  onDeleteFileRequest:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title: string | null,
    details: string | null,
    required: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnCreateFileRequestSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFileRequestSubmissionSubscription = {
  onCreateFileRequestSubmission:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    artist: string | null,
    name: string | null,
    email: string | null,
    audio: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    fileRequest:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateFileRequestSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFileRequestSubmissionSubscription = {
  onUpdateFileRequestSubmission:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    artist: string | null,
    name: string | null,
    email: string | null,
    audio: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    fileRequest:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteFileRequestSubmissionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFileRequestSubmissionSubscription = {
  onDeleteFileRequestSubmission:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    artist: string | null,
    name: string | null,
    email: string | null,
    audio: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    fileRequest:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title: string | null,
      details: string | null,
      required: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      submissions:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateMemberSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember:  {
    __typename: "Member",
    email: string,
    artist: string | null,
    status: MemberStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateMemberSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember:  {
    __typename: "Member",
    email: string,
    artist: string | null,
    status: MemberStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteMemberSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember:  {
    __typename: "Member",
    email: string,
    artist: string | null,
    status: MemberStatus | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    submissions:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist: string | null,
        name: string | null,
        email: string | null,
        audio: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    owner: string | null,
  } | null,
};
