/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SongData = {
  fileId?: string | null,
  title?: string | null,
};

export type DownloadLinkOptions = {
  stripMetadataForSoundCloud?: boolean | null,
};

export type CreateExtensionInput = {
  id?: string | null,
  expiration: string,
  assignmentId: string,
  _version?: number | null,
};

export type ModelExtensionConditionInput = {
  expiration?: ModelStringInput | null,
  assignmentId?: ModelIDInput | null,
  and?: Array< ModelExtensionConditionInput | null > | null,
  or?: Array< ModelExtensionConditionInput | null > | null,
  not?: ModelExtensionConditionInput | null,
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

export type Extension = {
  __typename: "Extension",
  id?: string,
  expiration?: string,
  assignmentId?: string,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateExtensionInput = {
  id: string,
  expiration?: string | null,
  assignmentId?: string | null,
  _version?: number | null,
};

export type DeleteExtensionInput = {
  id: string,
  _version?: number | null,
};

export type CreateFileRequestInput = {
  id?: string | null,
  expiration: string,
  title?: string | null,
  details?: string | null,
  required?: boolean | null,
  playlistArtwork?: ArtworkInput | null,
  workshopId?: string | null,
  _version?: number | null,
};

export type ArtworkInput = {
  id?: string | null,
  credit?: Array< CreditInput | null > | null,
};

export type CreditInput = {
  id?: string | null,
  title?: string | null,
  artists?: Array< string | null > | null,
  artistLinks?: Array< string | null > | null,
};

export type ModelFileRequestConditionInput = {
  expiration?: ModelStringInput | null,
  title?: ModelStringInput | null,
  details?: ModelStringInput | null,
  required?: ModelBooleanInput | null,
  workshopId?: ModelIDInput | null,
  and?: Array< ModelFileRequestConditionInput | null > | null,
  or?: Array< ModelFileRequestConditionInput | null > | null,
  not?: ModelFileRequestConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type FileRequest = {
  __typename: "FileRequest",
  id?: string,
  expiration?: string,
  title?: string | null,
  details?: string | null,
  required?: boolean | null,
  playlistArtwork?: Artwork,
  submissions?: ModelFileRequestSubmissionConnection,
  workshop?: Workshop,
  workshopId?: string | null,
  extensions?: ModelExtensionConnection,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type Artwork = {
  __typename: "Artwork",
  id?: string,
  credit?:  Array<Credit | null > | null,
};

export type Credit = {
  __typename: "Credit",
  id?: string,
  title?: string | null,
  artists?: Array< string | null > | null,
  artistLinks?: Array< string | null > | null,
};

export type ModelFileRequestSubmissionConnection = {
  __typename: "ModelFileRequestSubmissionConnection",
  items?:  Array<FileRequestSubmission | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type FileRequestSubmission = {
  __typename: "FileRequestSubmission",
  id?: string,
  fileRequestId?: string,
  fileRequest?: FileRequest,
  artist?: string | null,
  name?: string | null,
  email?: string | null,
  fileId?: string | null,
  fileExtension?: string | null,
  rating?: number | null,
  comments?: string | null,
  workshopId?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type Workshop = {
  __typename: "Workshop",
  id?: string,
  name?: string | null,
  fileRequests?: ModelFileRequestConnection,
  submissions?: ModelFileRequestSubmissionConnection,
  status?: string | null,
  passes?: number | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelFileRequestConnection = {
  __typename: "ModelFileRequestConnection",
  items?:  Array<FileRequest | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExtensionConnection = {
  __typename: "ModelExtensionConnection",
  items?:  Array<Extension | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateFileRequestInput = {
  id: string,
  expiration?: string | null,
  title?: string | null,
  details?: string | null,
  required?: boolean | null,
  playlistArtwork?: ArtworkInput | null,
  workshopId?: string | null,
  _version?: number | null,
};

export type DeleteFileRequestInput = {
  id: string,
  _version?: number | null,
};

export type CreateFileRequestSubmissionInput = {
  id?: string | null,
  fileRequestId: string,
  artist?: string | null,
  name?: string | null,
  email?: string | null,
  fileId?: string | null,
  fileExtension?: string | null,
  rating?: number | null,
  comments?: string | null,
  workshopId?: string | null,
  _version?: number | null,
};

export type ModelFileRequestSubmissionConditionInput = {
  fileRequestId?: ModelIDInput | null,
  artist?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fileId?: ModelStringInput | null,
  fileExtension?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  comments?: ModelStringInput | null,
  workshopId?: ModelIDInput | null,
  and?: Array< ModelFileRequestSubmissionConditionInput | null > | null,
  or?: Array< ModelFileRequestSubmissionConditionInput | null > | null,
  not?: ModelFileRequestSubmissionConditionInput | null,
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

export type UpdateFileRequestSubmissionInput = {
  id: string,
  fileRequestId?: string | null,
  artist?: string | null,
  name?: string | null,
  email?: string | null,
  fileId?: string | null,
  fileExtension?: string | null,
  rating?: number | null,
  comments?: string | null,
  workshopId?: string | null,
  _version?: number | null,
};

export type DeleteFileRequestSubmissionInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkshopInput = {
  id?: string | null,
  name?: string | null,
  status?: string | null,
  passes?: number | null,
  _version?: number | null,
};

export type ModelWorkshopConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  passes?: ModelIntInput | null,
  and?: Array< ModelWorkshopConditionInput | null > | null,
  or?: Array< ModelWorkshopConditionInput | null > | null,
  not?: ModelWorkshopConditionInput | null,
};

export type UpdateWorkshopInput = {
  id: string,
  name?: string | null,
  status?: string | null,
  passes?: number | null,
  _version?: number | null,
};

export type DeleteWorkshopInput = {
  id: string,
  _version?: number | null,
};

export type CreateMemberInput = {
  email: string,
  artist?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type ModelMemberConditionInput = {
  artist?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type Member = {
  __typename: "Member",
  email?: string,
  artist?: string | null,
  submissions?: ModelFileRequestSubmissionConnection,
  status?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateMemberInput = {
  email: string,
  artist?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteMemberInput = {
  email: string,
  _version?: number | null,
};

export type ModelExtensionFilterInput = {
  id?: ModelIDInput | null,
  expiration?: ModelStringInput | null,
  assignmentId?: ModelIDInput | null,
  and?: Array< ModelExtensionFilterInput | null > | null,
  or?: Array< ModelExtensionFilterInput | null > | null,
  not?: ModelExtensionFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFileRequestFilterInput = {
  id?: ModelIDInput | null,
  expiration?: ModelStringInput | null,
  title?: ModelStringInput | null,
  details?: ModelStringInput | null,
  required?: ModelBooleanInput | null,
  workshopId?: ModelIDInput | null,
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
  fileId?: ModelStringInput | null,
  fileExtension?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  comments?: ModelStringInput | null,
  workshopId?: ModelIDInput | null,
  and?: Array< ModelFileRequestSubmissionFilterInput | null > | null,
  or?: Array< ModelFileRequestSubmissionFilterInput | null > | null,
  not?: ModelFileRequestSubmissionFilterInput | null,
};

export type ModelWorkshopFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  passes?: ModelIntInput | null,
  and?: Array< ModelWorkshopFilterInput | null > | null,
  or?: Array< ModelWorkshopFilterInput | null > | null,
  not?: ModelWorkshopFilterInput | null,
};

export type ModelWorkshopConnection = {
  __typename: "ModelWorkshopConnection",
  items?:  Array<Workshop | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMemberFilterInput = {
  email?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items?:  Array<Member | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProcessDownloadMutationVariables = {
  assignmentId?: string,
  songData?: Array< SongData | null > | null,
};

export type ProcessDownloadMutation = {
  processDownload?: string | null,
};

export type RunProcessAudioTaskMutationVariables = {
  assignmentId?: string,
  email?: string,
  options?: DownloadLinkOptions | null,
};

export type RunProcessAudioTaskMutation = {
  runProcessAudioTask?: string | null,
};

export type PopulateMembersMutation = {
  populateMembers?: Array< string | null > | null,
};

export type CreateExtensionMutationVariables = {
  input?: CreateExtensionInput,
  condition?: ModelExtensionConditionInput | null,
};

export type CreateExtensionMutation = {
  createExtension?:  {
    __typename: "Extension",
    id: string,
    expiration: string,
    assignmentId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExtensionMutationVariables = {
  input?: UpdateExtensionInput,
  condition?: ModelExtensionConditionInput | null,
};

export type UpdateExtensionMutation = {
  updateExtension?:  {
    __typename: "Extension",
    id: string,
    expiration: string,
    assignmentId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExtensionMutationVariables = {
  input?: DeleteExtensionInput,
  condition?: ModelExtensionConditionInput | null,
};

export type DeleteExtensionMutation = {
  deleteExtension?:  {
    __typename: "Extension",
    id: string,
    expiration: string,
    assignmentId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFileRequestMutationVariables = {
  input?: CreateFileRequestInput,
  condition?: ModelFileRequestConditionInput | null,
};

export type CreateFileRequestMutation = {
  createFileRequest?:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title?: string | null,
    details?: string | null,
    required?: boolean | null,
    playlistArtwork?:  {
      __typename: "Artwork",
      id: string,
      credit?:  Array< {
        __typename: "Credit",
        id: string,
        title?: string | null,
        artists?: Array< string | null > | null,
        artistLinks?: Array< string | null > | null,
      } | null > | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    workshopId?: string | null,
    extensions?:  {
      __typename: "ModelExtensionConnection",
      items:  Array< {
        __typename: "Extension",
        id: string,
        expiration: string,
        assignmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFileRequestMutationVariables = {
  input?: UpdateFileRequestInput,
  condition?: ModelFileRequestConditionInput | null,
};

export type UpdateFileRequestMutation = {
  updateFileRequest?:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title?: string | null,
    details?: string | null,
    required?: boolean | null,
    playlistArtwork?:  {
      __typename: "Artwork",
      id: string,
      credit?:  Array< {
        __typename: "Credit",
        id: string,
        title?: string | null,
        artists?: Array< string | null > | null,
        artistLinks?: Array< string | null > | null,
      } | null > | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    workshopId?: string | null,
    extensions?:  {
      __typename: "ModelExtensionConnection",
      items:  Array< {
        __typename: "Extension",
        id: string,
        expiration: string,
        assignmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFileRequestMutationVariables = {
  input?: DeleteFileRequestInput,
  condition?: ModelFileRequestConditionInput | null,
};

export type DeleteFileRequestMutation = {
  deleteFileRequest?:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title?: string | null,
    details?: string | null,
    required?: boolean | null,
    playlistArtwork?:  {
      __typename: "Artwork",
      id: string,
      credit?:  Array< {
        __typename: "Credit",
        id: string,
        title?: string | null,
        artists?: Array< string | null > | null,
        artistLinks?: Array< string | null > | null,
      } | null > | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    workshopId?: string | null,
    extensions?:  {
      __typename: "ModelExtensionConnection",
      items:  Array< {
        __typename: "Extension",
        id: string,
        expiration: string,
        assignmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFileRequestSubmissionMutationVariables = {
  input?: CreateFileRequestSubmissionInput,
  condition?: ModelFileRequestSubmissionConditionInput | null,
};

export type CreateFileRequestSubmissionMutation = {
  createFileRequestSubmission?:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    fileRequest?:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    artist?: string | null,
    name?: string | null,
    email?: string | null,
    fileId?: string | null,
    fileExtension?: string | null,
    rating?: number | null,
    comments?: string | null,
    workshopId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFileRequestSubmissionMutationVariables = {
  input?: UpdateFileRequestSubmissionInput,
  condition?: ModelFileRequestSubmissionConditionInput | null,
};

export type UpdateFileRequestSubmissionMutation = {
  updateFileRequestSubmission?:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    fileRequest?:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    artist?: string | null,
    name?: string | null,
    email?: string | null,
    fileId?: string | null,
    fileExtension?: string | null,
    rating?: number | null,
    comments?: string | null,
    workshopId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFileRequestSubmissionMutationVariables = {
  input?: DeleteFileRequestSubmissionInput,
  condition?: ModelFileRequestSubmissionConditionInput | null,
};

export type DeleteFileRequestSubmissionMutation = {
  deleteFileRequestSubmission?:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    fileRequest?:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    artist?: string | null,
    name?: string | null,
    email?: string | null,
    fileId?: string | null,
    fileExtension?: string | null,
    rating?: number | null,
    comments?: string | null,
    workshopId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateWorkshopMutationVariables = {
  input?: CreateWorkshopInput,
  condition?: ModelWorkshopConditionInput | null,
};

export type CreateWorkshopMutation = {
  createWorkshop?:  {
    __typename: "Workshop",
    id: string,
    name?: string | null,
    fileRequests?:  {
      __typename: "ModelFileRequestConnection",
      items:  Array< {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateWorkshopMutationVariables = {
  input?: UpdateWorkshopInput,
  condition?: ModelWorkshopConditionInput | null,
};

export type UpdateWorkshopMutation = {
  updateWorkshop?:  {
    __typename: "Workshop",
    id: string,
    name?: string | null,
    fileRequests?:  {
      __typename: "ModelFileRequestConnection",
      items:  Array< {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteWorkshopMutationVariables = {
  input?: DeleteWorkshopInput,
  condition?: ModelWorkshopConditionInput | null,
};

export type DeleteWorkshopMutation = {
  deleteWorkshop?:  {
    __typename: "Workshop",
    id: string,
    name?: string | null,
    fileRequests?:  {
      __typename: "ModelFileRequestConnection",
      items:  Array< {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMemberMutationVariables = {
  input?: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    email: string,
    artist?: string | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input?: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    email: string,
    artist?: string | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input?: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    email: string,
    artist?: string | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetExtensionQueryVariables = {
  id?: string,
};

export type GetExtensionQuery = {
  getExtension?:  {
    __typename: "Extension",
    id: string,
    expiration: string,
    assignmentId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExtensionsQueryVariables = {
  filter?: ModelExtensionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExtensionsQuery = {
  listExtensions?:  {
    __typename: "ModelExtensionConnection",
    items:  Array< {
      __typename: "Extension",
      id: string,
      expiration: string,
      assignmentId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExtensionsQueryVariables = {
  filter?: ModelExtensionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExtensionsQuery = {
  syncExtensions?:  {
    __typename: "ModelExtensionConnection",
    items:  Array< {
      __typename: "Extension",
      id: string,
      expiration: string,
      assignmentId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExtensionsByFileRequestIdQueryVariables = {
  assignmentId?: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExtensionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExtensionsByFileRequestIdQuery = {
  extensionsByFileRequestId?:  {
    __typename: "ModelExtensionConnection",
    items:  Array< {
      __typename: "Extension",
      id: string,
      expiration: string,
      assignmentId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFileRequestQueryVariables = {
  id?: string,
};

export type GetFileRequestQuery = {
  getFileRequest?:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title?: string | null,
    details?: string | null,
    required?: boolean | null,
    playlistArtwork?:  {
      __typename: "Artwork",
      id: string,
      credit?:  Array< {
        __typename: "Credit",
        id: string,
        title?: string | null,
        artists?: Array< string | null > | null,
        artistLinks?: Array< string | null > | null,
      } | null > | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    workshopId?: string | null,
    extensions?:  {
      __typename: "ModelExtensionConnection",
      items:  Array< {
        __typename: "Extension",
        id: string,
        expiration: string,
        assignmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFileRequestsQueryVariables = {
  filter?: ModelFileRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFileRequestsQuery = {
  listFileRequests?:  {
    __typename: "ModelFileRequestConnection",
    items:  Array< {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFileRequestsQueryVariables = {
  filter?: ModelFileRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFileRequestsQuery = {
  syncFileRequests?:  {
    __typename: "ModelFileRequestConnection",
    items:  Array< {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type FileRequestsByWorkshopIdQueryVariables = {
  workshopId?: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFileRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FileRequestsByWorkshopIdQuery = {
  fileRequestsByWorkshopId?:  {
    __typename: "ModelFileRequestConnection",
    items:  Array< {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFileRequestSubmissionQueryVariables = {
  id?: string,
};

export type GetFileRequestSubmissionQuery = {
  getFileRequestSubmission?:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    fileRequest?:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    artist?: string | null,
    name?: string | null,
    email?: string | null,
    fileId?: string | null,
    fileExtension?: string | null,
    rating?: number | null,
    comments?: string | null,
    workshopId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFileRequestSubmissionsQueryVariables = {
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFileRequestSubmissionsQuery = {
  listFileRequestSubmissions?:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      fileRequest?:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      artist?: string | null,
      name?: string | null,
      email?: string | null,
      fileId?: string | null,
      fileExtension?: string | null,
      rating?: number | null,
      comments?: string | null,
      workshopId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFileRequestSubmissionsQueryVariables = {
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFileRequestSubmissionsQuery = {
  syncFileRequestSubmissions?:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      fileRequest?:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      artist?: string | null,
      name?: string | null,
      email?: string | null,
      fileId?: string | null,
      fileExtension?: string | null,
      rating?: number | null,
      comments?: string | null,
      workshopId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SubmissionsByFileRequestIdQueryVariables = {
  fileRequestId?: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubmissionsByFileRequestIdQuery = {
  submissionsByFileRequestId?:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      fileRequest?:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      artist?: string | null,
      name?: string | null,
      email?: string | null,
      fileId?: string | null,
      fileExtension?: string | null,
      rating?: number | null,
      comments?: string | null,
      workshopId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SubmissionsByEmailQueryVariables = {
  email?: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubmissionsByEmailQuery = {
  submissionsByEmail?:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      fileRequest?:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      artist?: string | null,
      name?: string | null,
      email?: string | null,
      fileId?: string | null,
      fileExtension?: string | null,
      rating?: number | null,
      comments?: string | null,
      workshopId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SubmissionsByWorkshopIdQueryVariables = {
  workshopId?: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFileRequestSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubmissionsByWorkshopIdQuery = {
  submissionsByWorkshopId?:  {
    __typename: "ModelFileRequestSubmissionConnection",
    items:  Array< {
      __typename: "FileRequestSubmission",
      id: string,
      fileRequestId: string,
      fileRequest?:  {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      artist?: string | null,
      name?: string | null,
      email?: string | null,
      fileId?: string | null,
      fileExtension?: string | null,
      rating?: number | null,
      comments?: string | null,
      workshopId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkshopQueryVariables = {
  id?: string,
};

export type GetWorkshopQuery = {
  getWorkshop?:  {
    __typename: "Workshop",
    id: string,
    name?: string | null,
    fileRequests?:  {
      __typename: "ModelFileRequestConnection",
      items:  Array< {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListWorkshopsQueryVariables = {
  filter?: ModelWorkshopFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkshopsQuery = {
  listWorkshops?:  {
    __typename: "ModelWorkshopConnection",
    items:  Array< {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkshopsQueryVariables = {
  filter?: ModelWorkshopFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkshopsQuery = {
  syncWorkshops?:  {
    __typename: "ModelWorkshopConnection",
    items:  Array< {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMemberQueryVariables = {
  email?: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    email: string,
    artist?: string | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      email: string,
      artist?: string | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMembersQuery = {
  syncMembers?:  {
    __typename: "ModelMemberConnection",
    items:  Array< {
      __typename: "Member",
      email: string,
      artist?: string | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateExtensionSubscription = {
  onCreateExtension?:  {
    __typename: "Extension",
    id: string,
    expiration: string,
    assignmentId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExtensionSubscription = {
  onUpdateExtension?:  {
    __typename: "Extension",
    id: string,
    expiration: string,
    assignmentId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExtensionSubscription = {
  onDeleteExtension?:  {
    __typename: "Extension",
    id: string,
    expiration: string,
    assignmentId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFileRequestSubscription = {
  onCreateFileRequest?:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title?: string | null,
    details?: string | null,
    required?: boolean | null,
    playlistArtwork?:  {
      __typename: "Artwork",
      id: string,
      credit?:  Array< {
        __typename: "Credit",
        id: string,
        title?: string | null,
        artists?: Array< string | null > | null,
        artistLinks?: Array< string | null > | null,
      } | null > | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    workshopId?: string | null,
    extensions?:  {
      __typename: "ModelExtensionConnection",
      items:  Array< {
        __typename: "Extension",
        id: string,
        expiration: string,
        assignmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFileRequestSubscription = {
  onUpdateFileRequest?:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title?: string | null,
    details?: string | null,
    required?: boolean | null,
    playlistArtwork?:  {
      __typename: "Artwork",
      id: string,
      credit?:  Array< {
        __typename: "Credit",
        id: string,
        title?: string | null,
        artists?: Array< string | null > | null,
        artistLinks?: Array< string | null > | null,
      } | null > | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    workshopId?: string | null,
    extensions?:  {
      __typename: "ModelExtensionConnection",
      items:  Array< {
        __typename: "Extension",
        id: string,
        expiration: string,
        assignmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFileRequestSubscription = {
  onDeleteFileRequest?:  {
    __typename: "FileRequest",
    id: string,
    expiration: string,
    title?: string | null,
    details?: string | null,
    required?: boolean | null,
    playlistArtwork?:  {
      __typename: "Artwork",
      id: string,
      credit?:  Array< {
        __typename: "Credit",
        id: string,
        title?: string | null,
        artists?: Array< string | null > | null,
        artistLinks?: Array< string | null > | null,
      } | null > | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    workshopId?: string | null,
    extensions?:  {
      __typename: "ModelExtensionConnection",
      items:  Array< {
        __typename: "Extension",
        id: string,
        expiration: string,
        assignmentId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFileRequestSubmissionSubscription = {
  onCreateFileRequestSubmission?:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    fileRequest?:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    artist?: string | null,
    name?: string | null,
    email?: string | null,
    fileId?: string | null,
    fileExtension?: string | null,
    rating?: number | null,
    comments?: string | null,
    workshopId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFileRequestSubmissionSubscription = {
  onUpdateFileRequestSubmission?:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    fileRequest?:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    artist?: string | null,
    name?: string | null,
    email?: string | null,
    fileId?: string | null,
    fileExtension?: string | null,
    rating?: number | null,
    comments?: string | null,
    workshopId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFileRequestSubmissionSubscription = {
  onDeleteFileRequestSubmission?:  {
    __typename: "FileRequestSubmission",
    id: string,
    fileRequestId: string,
    fileRequest?:  {
      __typename: "FileRequest",
      id: string,
      expiration: string,
      title?: string | null,
      details?: string | null,
      required?: boolean | null,
      playlistArtwork?:  {
        __typename: "Artwork",
        id: string,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    artist?: string | null,
    name?: string | null,
    email?: string | null,
    fileId?: string | null,
    fileExtension?: string | null,
    rating?: number | null,
    comments?: string | null,
    workshopId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateWorkshopSubscription = {
  onCreateWorkshop?:  {
    __typename: "Workshop",
    id: string,
    name?: string | null,
    fileRequests?:  {
      __typename: "ModelFileRequestConnection",
      items:  Array< {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateWorkshopSubscription = {
  onUpdateWorkshop?:  {
    __typename: "Workshop",
    id: string,
    name?: string | null,
    fileRequests?:  {
      __typename: "ModelFileRequestConnection",
      items:  Array< {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteWorkshopSubscription = {
  onDeleteWorkshop?:  {
    __typename: "Workshop",
    id: string,
    name?: string | null,
    fileRequests?:  {
      __typename: "ModelFileRequestConnection",
      items:  Array< {
        __typename: "FileRequest",
        id: string,
        expiration: string,
        title?: string | null,
        details?: string | null,
        required?: boolean | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    email: string,
    artist?: string | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    email: string,
    artist?: string | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    email: string,
    artist?: string | null,
    submissions?:  {
      __typename: "ModelFileRequestSubmissionConnection",
      items:  Array< {
        __typename: "FileRequestSubmission",
        id: string,
        fileRequestId: string,
        artist?: string | null,
        name?: string | null,
        email?: string | null,
        fileId?: string | null,
        fileExtension?: string | null,
        rating?: number | null,
        comments?: string | null,
        workshopId?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
