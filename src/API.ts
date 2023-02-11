/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SongData = {
  fileId?: string | null,
  title?: string | null,
};

export type ApiKeyUpdate = {
  action: string,
  keyName: string,
  key?: string | null,
  keyId?: string | null,
};

export type Response = {
  __typename: "Response",
  statusCode?: number | null,
  body?: string | null,
};

export type DownloadLinkOptions = {
  stripMetadataForSoundCloud?: boolean | null,
};

export type CreateAPIKeyInput = {
  id?: string | null,
  keyName: string,
  createdAt?: string | null,
  profileID: string,
  email: string,
};

export type ModelAPIKeyConditionInput = {
  keyName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  profileID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAPIKeyConditionInput | null > | null,
  or?: Array< ModelAPIKeyConditionInput | null > | null,
  not?: ModelAPIKeyConditionInput | null,
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

export type APIKey = {
  __typename: "APIKey",
  id: string,
  keyName: string,
  createdAt?: string | null,
  profileID: string,
  email: string,
  profile?: Profile | null,
  updatedAt: string,
};

export type Profile = {
  __typename: "Profile",
  email: string,
  id: string,
  name?: string | null,
  avatar?: string | null,
  bio?: string | null,
  sub?: string | null,
  apiKeys?: ModelAPIKeyConnection | null,
  memberships?: ModelMembershipConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAPIKeyConnection = {
  __typename: "ModelAPIKeyConnection",
  items:  Array<APIKey | null >,
  nextToken?: string | null,
};

export type ModelMembershipConnection = {
  __typename: "ModelMembershipConnection",
  items:  Array<Membership | null >,
  nextToken?: string | null,
};

export type Membership = {
  __typename: "Membership",
  id: string,
  workshopId: string,
  email: string,
  status?: string | null,
  workshop?: Workshop | null,
  profile?: Profile | null,
  mailchimp?: MailchimpUserInfo | null,
  submissions?: ModelFileRequestSubmissionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Workshop = {
  __typename: "Workshop",
  id: string,
  name?: string | null,
  fileRequests?: ModelFileRequestConnection | null,
  submissions?: ModelFileRequestSubmissionConnection | null,
  status?: string | null,
  passes?: number | null,
  features?: Features | null,
  memberships?: ModelMembershipConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFileRequestConnection = {
  __typename: "ModelFileRequestConnection",
  items:  Array<FileRequest | null >,
  nextToken?: string | null,
};

export type FileRequest = {
  __typename: "FileRequest",
  id: string,
  expiration: string,
  title?: string | null,
  details?: string | null,
  required?: boolean | null,
  playlistArtwork?: Artwork | null,
  submissions?: ModelFileRequestSubmissionConnection | null,
  workshop?: Workshop | null,
  workshopId?: string | null,
  extensions?: ModelExtensionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Artwork = {
  __typename: "Artwork",
  id: string,
  credit?:  Array<Credit | null > | null,
};

export type Credit = {
  __typename: "Credit",
  id: string,
  title?: string | null,
  artists?: Array< string | null > | null,
  artistLinks?: Array< string | null > | null,
};

export type ModelFileRequestSubmissionConnection = {
  __typename: "ModelFileRequestSubmissionConnection",
  items:  Array<FileRequestSubmission | null >,
  nextToken?: string | null,
};

export type FileRequestSubmission = {
  __typename: "FileRequestSubmission",
  id: string,
  fileRequestId: string,
  fileRequest?: FileRequest | null,
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
};

export type ModelExtensionConnection = {
  __typename: "ModelExtensionConnection",
  items:  Array<Extension | null >,
  nextToken?: string | null,
};

export type Extension = {
  __typename: "Extension",
  id: string,
  expiration: string,
  assignmentId: string,
  createdAt: string,
  updatedAt: string,
};

export type Features = {
  __typename: "Features",
  mailchimp?: MailchimpIntegration | null,
};

export type MailchimpIntegration = {
  __typename: "MailchimpIntegration",
  enabled?: boolean | null,
  apiKeyName?: string | null,
  listId?: string | null,
  serverPrefix?: string | null,
};

export type MailchimpUserInfo = {
  __typename: "MailchimpUserInfo",
  id?: string | null,
  emailAddress?: string | null,
  status?: string | null,
  fullName?: string | null,
  uniqueEmailId?: string | null,
  contactId?: string | null,
  tags?:  Array<MailchimpTag | null > | null,
};

export type MailchimpTag = {
  __typename: "MailchimpTag",
  id: number,
  name?: string | null,
};

export type UpdateAPIKeyInput = {
  id: string,
  keyName?: string | null,
  createdAt?: string | null,
  profileID?: string | null,
  email?: string | null,
};

export type DeleteAPIKeyInput = {
  id: string,
};

export type CreateExtensionInput = {
  id?: string | null,
  expiration: string,
  assignmentId: string,
};

export type ModelExtensionConditionInput = {
  expiration?: ModelStringInput | null,
  assignmentId?: ModelIDInput | null,
  and?: Array< ModelExtensionConditionInput | null > | null,
  or?: Array< ModelExtensionConditionInput | null > | null,
  not?: ModelExtensionConditionInput | null,
};

export type UpdateExtensionInput = {
  id: string,
  expiration?: string | null,
  assignmentId?: string | null,
};

export type DeleteExtensionInput = {
  id: string,
};

export type CreateFileRequestInput = {
  id?: string | null,
  expiration: string,
  title?: string | null,
  details?: string | null,
  required?: boolean | null,
  playlistArtwork?: ArtworkInput | null,
  workshopId?: string | null,
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

export type UpdateFileRequestInput = {
  id: string,
  expiration?: string | null,
  title?: string | null,
  details?: string | null,
  required?: boolean | null,
  playlistArtwork?: ArtworkInput | null,
  workshopId?: string | null,
};

export type DeleteFileRequestInput = {
  id: string,
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
};

export type DeleteFileRequestSubmissionInput = {
  id: string,
};

export type CreateMembershipInput = {
  id?: string | null,
  workshopId: string,
  email: string,
  status?: string | null,
  mailchimp?: MailchimpUserInfoInput | null,
};

export type MailchimpUserInfoInput = {
  id?: string | null,
  emailAddress?: string | null,
  status?: string | null,
  fullName?: string | null,
  uniqueEmailId?: string | null,
  contactId?: string | null,
  tags?: Array< MailchimpTagInput | null > | null,
};

export type MailchimpTagInput = {
  id: number,
  name?: string | null,
};

export type ModelMembershipConditionInput = {
  workshopId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelMembershipConditionInput | null > | null,
  or?: Array< ModelMembershipConditionInput | null > | null,
  not?: ModelMembershipConditionInput | null,
};

export type UpdateMembershipInput = {
  id: string,
  workshopId?: string | null,
  email?: string | null,
  status?: string | null,
  mailchimp?: MailchimpUserInfoInput | null,
};

export type DeleteMembershipInput = {
  id: string,
};

export type CreateWorkshopInput = {
  id?: string | null,
  name?: string | null,
  status?: string | null,
  passes?: number | null,
  features?: FeaturesInput | null,
};

export type FeaturesInput = {
  mailchimp?: MailchimpIntegrationInput | null,
};

export type MailchimpIntegrationInput = {
  enabled?: boolean | null,
  apiKeyName?: string | null,
  listId?: string | null,
  serverPrefix?: string | null,
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
  features?: FeaturesInput | null,
};

export type DeleteWorkshopInput = {
  id: string,
};

export type CreateProfileInput = {
  email: string,
  id?: string | null,
  name?: string | null,
  avatar?: string | null,
  bio?: string | null,
  sub?: string | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type UpdateProfileInput = {
  email: string,
  id?: string | null,
  name?: string | null,
  avatar?: string | null,
  bio?: string | null,
  sub?: string | null,
};

export type DeleteProfileInput = {
  email: string,
};

export type ModelAPIKeyFilterInput = {
  id?: ModelIDInput | null,
  keyName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  profileID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelAPIKeyFilterInput | null > | null,
  or?: Array< ModelAPIKeyFilterInput | null > | null,
  not?: ModelAPIKeyFilterInput | null,
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

export type ModelMembershipFilterInput = {
  id?: ModelIDInput | null,
  workshopId?: ModelIDInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelMembershipFilterInput | null > | null,
  or?: Array< ModelMembershipFilterInput | null > | null,
  not?: ModelMembershipFilterInput | null,
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
  items:  Array<Workshop | null >,
  nextToken?: string | null,
};

export type ModelProfileFilterInput = {
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ProcessDownloadMutationVariables = {
  assignmentId: string,
  songData?: Array< SongData | null > | null,
};

export type ProcessDownloadMutation = {
  processDownload?: string | null,
};

export type UpdateProfileServiceMutationVariables = {
  email: string,
  sub?: string | null,
  id?: string | null,
  name?: string | null,
  bio?: string | null,
  apiKeyUpdate?: ApiKeyUpdate | null,
  avatar?: string | null,
};

export type UpdateProfileServiceMutation = {
  updateProfileService?:  {
    __typename: "Response",
    statusCode?: number | null,
    body?: string | null,
  } | null,
};

export type UpdateMembershipServiceMutationVariables = {
  workshopId: string,
  action?: string | null,
};

export type UpdateMembershipServiceMutation = {
  updateMembershipService?:  {
    __typename: "Response",
    statusCode?: number | null,
    body?: string | null,
  } | null,
};

export type RunProcessAudioTaskMutationVariables = {
  assignmentId: string,
  email: string,
  options?: DownloadLinkOptions | null,
};

export type RunProcessAudioTaskMutation = {
  runProcessAudioTask?: string | null,
};

export type PopulateMembersMutation = {
  populateMembers?: Array< string | null > | null,
};

export type CreateAPIKeyMutationVariables = {
  input: CreateAPIKeyInput,
  condition?: ModelAPIKeyConditionInput | null,
};

export type CreateAPIKeyMutation = {
  createAPIKey?:  {
    __typename: "APIKey",
    id: string,
    keyName: string,
    createdAt?: string | null,
    profileID: string,
    email: string,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateAPIKeyMutationVariables = {
  input: UpdateAPIKeyInput,
  condition?: ModelAPIKeyConditionInput | null,
};

export type UpdateAPIKeyMutation = {
  updateAPIKey?:  {
    __typename: "APIKey",
    id: string,
    keyName: string,
    createdAt?: string | null,
    profileID: string,
    email: string,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteAPIKeyMutationVariables = {
  input: DeleteAPIKeyInput,
  condition?: ModelAPIKeyConditionInput | null,
};

export type DeleteAPIKeyMutation = {
  deleteAPIKey?:  {
    __typename: "APIKey",
    id: string,
    keyName: string,
    createdAt?: string | null,
    profileID: string,
    email: string,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateExtensionMutationVariables = {
  input: CreateExtensionInput,
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
  } | null,
};

export type UpdateExtensionMutationVariables = {
  input: UpdateExtensionInput,
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
  } | null,
};

export type DeleteExtensionMutationVariables = {
  input: DeleteExtensionInput,
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
  } | null,
};

export type CreateFileRequestMutationVariables = {
  input: CreateFileRequestInput,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFileRequestMutationVariables = {
  input: UpdateFileRequestInput,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFileRequestMutationVariables = {
  input: DeleteFileRequestInput,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFileRequestSubmissionMutationVariables = {
  input: CreateFileRequestSubmissionInput,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
  } | null,
};

export type UpdateFileRequestSubmissionMutationVariables = {
  input: UpdateFileRequestSubmissionInput,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
  } | null,
};

export type DeleteFileRequestSubmissionMutationVariables = {
  input: DeleteFileRequestSubmissionInput,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
  } | null,
};

export type CreateMembershipMutationVariables = {
  input: CreateMembershipInput,
  condition?: ModelMembershipConditionInput | null,
};

export type CreateMembershipMutation = {
  createMembership?:  {
    __typename: "Membership",
    id: string,
    workshopId: string,
    email: string,
    status?: string | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailchimp?:  {
      __typename: "MailchimpUserInfo",
      id?: string | null,
      emailAddress?: string | null,
      status?: string | null,
      fullName?: string | null,
      uniqueEmailId?: string | null,
      contactId?: string | null,
      tags?:  Array< {
        __typename: "MailchimpTag",
        id: number,
        name?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMembershipMutationVariables = {
  input: UpdateMembershipInput,
  condition?: ModelMembershipConditionInput | null,
};

export type UpdateMembershipMutation = {
  updateMembership?:  {
    __typename: "Membership",
    id: string,
    workshopId: string,
    email: string,
    status?: string | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailchimp?:  {
      __typename: "MailchimpUserInfo",
      id?: string | null,
      emailAddress?: string | null,
      status?: string | null,
      fullName?: string | null,
      uniqueEmailId?: string | null,
      contactId?: string | null,
      tags?:  Array< {
        __typename: "MailchimpTag",
        id: number,
        name?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMembershipMutationVariables = {
  input: DeleteMembershipInput,
  condition?: ModelMembershipConditionInput | null,
};

export type DeleteMembershipMutation = {
  deleteMembership?:  {
    __typename: "Membership",
    id: string,
    workshopId: string,
    email: string,
    status?: string | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailchimp?:  {
      __typename: "MailchimpUserInfo",
      id?: string | null,
      emailAddress?: string | null,
      status?: string | null,
      fullName?: string | null,
      uniqueEmailId?: string | null,
      contactId?: string | null,
      tags?:  Array< {
        __typename: "MailchimpTag",
        id: number,
        name?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkshopMutationVariables = {
  input: CreateWorkshopInput,
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
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    features?:  {
      __typename: "Features",
      mailchimp?:  {
        __typename: "MailchimpIntegration",
        enabled?: boolean | null,
        apiKeyName?: string | null,
        listId?: string | null,
        serverPrefix?: string | null,
      } | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkshopMutationVariables = {
  input: UpdateWorkshopInput,
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
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    features?:  {
      __typename: "Features",
      mailchimp?:  {
        __typename: "MailchimpIntegration",
        enabled?: boolean | null,
        apiKeyName?: string | null,
        listId?: string | null,
        serverPrefix?: string | null,
      } | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkshopMutationVariables = {
  input: DeleteWorkshopInput,
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
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    features?:  {
      __typename: "Features",
      mailchimp?:  {
        __typename: "MailchimpIntegration",
        enabled?: boolean | null,
        apiKeyName?: string | null,
        listId?: string | null,
        serverPrefix?: string | null,
      } | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    email: string,
    id: string,
    name?: string | null,
    avatar?: string | null,
    bio?: string | null,
    sub?: string | null,
    apiKeys?:  {
      __typename: "ModelAPIKeyConnection",
      items:  Array< {
        __typename: "APIKey",
        id: string,
        keyName: string,
        createdAt?: string | null,
        profileID: string,
        email: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    email: string,
    id: string,
    name?: string | null,
    avatar?: string | null,
    bio?: string | null,
    sub?: string | null,
    apiKeys?:  {
      __typename: "ModelAPIKeyConnection",
      items:  Array< {
        __typename: "APIKey",
        id: string,
        keyName: string,
        createdAt?: string | null,
        profileID: string,
        email: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    email: string,
    id: string,
    name?: string | null,
    avatar?: string | null,
    bio?: string | null,
    sub?: string | null,
    apiKeys?:  {
      __typename: "ModelAPIKeyConnection",
      items:  Array< {
        __typename: "APIKey",
        id: string,
        keyName: string,
        createdAt?: string | null,
        profileID: string,
        email: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAPIKeyQueryVariables = {
  id: string,
};

export type GetAPIKeyQuery = {
  getAPIKey?:  {
    __typename: "APIKey",
    id: string,
    keyName: string,
    createdAt?: string | null,
    profileID: string,
    email: string,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListAPIKeysQueryVariables = {
  filter?: ModelAPIKeyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAPIKeysQuery = {
  listAPIKeys?:  {
    __typename: "ModelAPIKeyConnection",
    items:  Array< {
      __typename: "APIKey",
      id: string,
      keyName: string,
      createdAt?: string | null,
      profileID: string,
      email: string,
      profile?:  {
        __typename: "Profile",
        email: string,
        id: string,
        name?: string | null,
        avatar?: string | null,
        bio?: string | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExtensionQueryVariables = {
  id: string,
};

export type GetExtensionQuery = {
  getExtension?:  {
    __typename: "Extension",
    id: string,
    expiration: string,
    assignmentId: string,
    createdAt: string,
    updatedAt: string,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ExtensionsByFileRequestIdQueryVariables = {
  assignmentId: string,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFileRequestQueryVariables = {
  id: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FileRequestsByWorkshopIdQueryVariables = {
  workshopId: string,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFileRequestSubmissionQueryVariables = {
  id: string,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubmissionsByFileRequestIdQueryVariables = {
  fileRequestId: string,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubmissionsByEmailQueryVariables = {
  email: string,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubmissionsByWorkshopIdQueryVariables = {
  workshopId: string,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMembershipQueryVariables = {
  id: string,
};

export type GetMembershipQuery = {
  getMembership?:  {
    __typename: "Membership",
    id: string,
    workshopId: string,
    email: string,
    status?: string | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailchimp?:  {
      __typename: "MailchimpUserInfo",
      id?: string | null,
      emailAddress?: string | null,
      status?: string | null,
      fullName?: string | null,
      uniqueEmailId?: string | null,
      contactId?: string | null,
      tags?:  Array< {
        __typename: "MailchimpTag",
        id: number,
        name?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembershipsQueryVariables = {
  filter?: ModelMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembershipsQuery = {
  listMemberships?:  {
    __typename: "ModelMembershipConnection",
    items:  Array< {
      __typename: "Membership",
      id: string,
      workshopId: string,
      email: string,
      status?: string | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        email: string,
        id: string,
        name?: string | null,
        avatar?: string | null,
        bio?: string | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      mailchimp?:  {
        __typename: "MailchimpUserInfo",
        id?: string | null,
        emailAddress?: string | null,
        status?: string | null,
        fullName?: string | null,
        uniqueEmailId?: string | null,
        contactId?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MembershipsByWorkshopIdQueryVariables = {
  workshopId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MembershipsByWorkshopIdQuery = {
  membershipsByWorkshopId?:  {
    __typename: "ModelMembershipConnection",
    items:  Array< {
      __typename: "Membership",
      id: string,
      workshopId: string,
      email: string,
      status?: string | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        email: string,
        id: string,
        name?: string | null,
        avatar?: string | null,
        bio?: string | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      mailchimp?:  {
        __typename: "MailchimpUserInfo",
        id?: string | null,
        emailAddress?: string | null,
        status?: string | null,
        fullName?: string | null,
        uniqueEmailId?: string | null,
        contactId?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MembershipsByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MembershipsByEmailQuery = {
  membershipsByEmail?:  {
    __typename: "ModelMembershipConnection",
    items:  Array< {
      __typename: "Membership",
      id: string,
      workshopId: string,
      email: string,
      status?: string | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        email: string,
        id: string,
        name?: string | null,
        avatar?: string | null,
        bio?: string | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      mailchimp?:  {
        __typename: "MailchimpUserInfo",
        id?: string | null,
        emailAddress?: string | null,
        status?: string | null,
        fullName?: string | null,
        uniqueEmailId?: string | null,
        contactId?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWorkshopQueryVariables = {
  id: string,
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
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    features?:  {
      __typename: "Features",
      mailchimp?:  {
        __typename: "MailchimpIntegration",
        enabled?: boolean | null,
        apiKeyName?: string | null,
        listId?: string | null,
        serverPrefix?: string | null,
      } | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  email: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    email: string,
    id: string,
    name?: string | null,
    avatar?: string | null,
    bio?: string | null,
    sub?: string | null,
    apiKeys?:  {
      __typename: "ModelAPIKeyConnection",
      items:  Array< {
        __typename: "APIKey",
        id: string,
        keyName: string,
        createdAt?: string | null,
        profileID: string,
        email: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  email?: string | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAPIKeySubscription = {
  onCreateAPIKey?:  {
    __typename: "APIKey",
    id: string,
    keyName: string,
    createdAt?: string | null,
    profileID: string,
    email: string,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAPIKeySubscription = {
  onUpdateAPIKey?:  {
    __typename: "APIKey",
    id: string,
    keyName: string,
    createdAt?: string | null,
    profileID: string,
    email: string,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAPIKeySubscription = {
  onDeleteAPIKey?:  {
    __typename: "APIKey",
    id: string,
    keyName: string,
    createdAt?: string | null,
    profileID: string,
    email: string,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      } | null,
      workshop?:  {
        __typename: "Workshop",
        id: string,
        name?: string | null,
        status?: string | null,
        passes?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      workshopId?: string | null,
      extensions?:  {
        __typename: "ModelExtensionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
  } | null,
};

export type OnCreateMembershipSubscription = {
  onCreateMembership?:  {
    __typename: "Membership",
    id: string,
    workshopId: string,
    email: string,
    status?: string | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailchimp?:  {
      __typename: "MailchimpUserInfo",
      id?: string | null,
      emailAddress?: string | null,
      status?: string | null,
      fullName?: string | null,
      uniqueEmailId?: string | null,
      contactId?: string | null,
      tags?:  Array< {
        __typename: "MailchimpTag",
        id: number,
        name?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMembershipSubscription = {
  onUpdateMembership?:  {
    __typename: "Membership",
    id: string,
    workshopId: string,
    email: string,
    status?: string | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailchimp?:  {
      __typename: "MailchimpUserInfo",
      id?: string | null,
      emailAddress?: string | null,
      status?: string | null,
      fullName?: string | null,
      uniqueEmailId?: string | null,
      contactId?: string | null,
      tags?:  Array< {
        __typename: "MailchimpTag",
        id: number,
        name?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMembershipSubscription = {
  onDeleteMembership?:  {
    __typename: "Membership",
    id: string,
    workshopId: string,
    email: string,
    status?: string | null,
    workshop?:  {
      __typename: "Workshop",
      id: string,
      name?: string | null,
      fileRequests?:  {
        __typename: "ModelFileRequestConnection",
        nextToken?: string | null,
      } | null,
      submissions?:  {
        __typename: "ModelFileRequestSubmissionConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      passes?: number | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      email: string,
      id: string,
      name?: string | null,
      avatar?: string | null,
      bio?: string | null,
      sub?: string | null,
      apiKeys?:  {
        __typename: "ModelAPIKeyConnection",
        nextToken?: string | null,
      } | null,
      memberships?:  {
        __typename: "ModelMembershipConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailchimp?:  {
      __typename: "MailchimpUserInfo",
      id?: string | null,
      emailAddress?: string | null,
      status?: string | null,
      fullName?: string | null,
      uniqueEmailId?: string | null,
      contactId?: string | null,
      tags?:  Array< {
        __typename: "MailchimpTag",
        id: number,
        name?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    features?:  {
      __typename: "Features",
      mailchimp?:  {
        __typename: "MailchimpIntegration",
        enabled?: boolean | null,
        apiKeyName?: string | null,
        listId?: string | null,
        serverPrefix?: string | null,
      } | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    features?:  {
      __typename: "Features",
      mailchimp?:  {
        __typename: "MailchimpIntegration",
        enabled?: boolean | null,
        apiKeyName?: string | null,
        listId?: string | null,
        serverPrefix?: string | null,
      } | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    passes?: number | null,
    features?:  {
      __typename: "Features",
      mailchimp?:  {
        __typename: "MailchimpIntegration",
        enabled?: boolean | null,
        apiKeyName?: string | null,
        listId?: string | null,
        serverPrefix?: string | null,
      } | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    email: string,
    id: string,
    name?: string | null,
    avatar?: string | null,
    bio?: string | null,
    sub?: string | null,
    apiKeys?:  {
      __typename: "ModelAPIKeyConnection",
      items:  Array< {
        __typename: "APIKey",
        id: string,
        keyName: string,
        createdAt?: string | null,
        profileID: string,
        email: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    email: string,
    id: string,
    name?: string | null,
    avatar?: string | null,
    bio?: string | null,
    sub?: string | null,
    apiKeys?:  {
      __typename: "ModelAPIKeyConnection",
      items:  Array< {
        __typename: "APIKey",
        id: string,
        keyName: string,
        createdAt?: string | null,
        profileID: string,
        email: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    email: string,
    id: string,
    name?: string | null,
    avatar?: string | null,
    bio?: string | null,
    sub?: string | null,
    apiKeys?:  {
      __typename: "ModelAPIKeyConnection",
      items:  Array< {
        __typename: "APIKey",
        id: string,
        keyName: string,
        createdAt?: string | null,
        profileID: string,
        email: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    memberships?:  {
      __typename: "ModelMembershipConnection",
      items:  Array< {
        __typename: "Membership",
        id: string,
        workshopId: string,
        email: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
