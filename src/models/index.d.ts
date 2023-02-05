import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Response {
  readonly statusCode?: number | null;
  readonly body?: string | null;
  constructor(init: ModelInit<Response>);
}

export declare class Credit {
  readonly id: string;
  readonly title?: string | null;
  readonly artists?: (string | null)[] | null;
  readonly artistLinks?: (string | null)[] | null;
  constructor(init: ModelInit<Credit>);
}

export declare class Artwork {
  readonly id: string;
  readonly credit?: (Credit | null)[] | null;
  constructor(init: ModelInit<Artwork>);
}

export declare class MailchimpIntegration {
  readonly enabled?: boolean | null;
  readonly apiKeyName?: string | null;
  readonly listId?: string | null;
  readonly serverPrefix?: string | null;
  constructor(init: ModelInit<MailchimpIntegration>);
}

export declare class Features {
  readonly mailchimp?: MailchimpIntegration | null;
  constructor(init: ModelInit<Features>);
}

export declare class MailchimpUserInfo {
  readonly id?: string | null;
  readonly emailAddress?: string | null;
  readonly status?: string | null;
  readonly fullName?: string | null;
  readonly uniqueEmailId?: string | null;
  readonly contactId?: string | null;
  constructor(init: ModelInit<MailchimpUserInfo>);
}

export declare class APIKey {
  readonly id: string;
  readonly keyName: string;
  readonly createdAt?: string | null;
  readonly profileID: string;
  readonly profile?: Profile | null;
  constructor(init: ModelInit<APIKey>);
  static copyOf(source: APIKey, mutator: (draft: MutableModel<APIKey>) => MutableModel<APIKey> | void): APIKey;
}

export declare class Profile {
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly avatar?: string | null;
  readonly bio?: string | null;
  readonly sub?: string | null;
  readonly apiKeys?: (APIKey | null)[] | null;
  readonly memberships?: (Membership | null)[] | null;
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

export declare class Membership {
  readonly id: string;
  readonly status?: string | null;
  readonly workshop?: Workshop | null;
  readonly profile?: Profile | null;
  readonly mailchimp?: MailchimpUserInfo | null;
  readonly submissions?: (FileRequestSubmission | null)[] | null;
  constructor(init: ModelInit<Membership>);
  static copyOf(source: Membership, mutator: (draft: MutableModel<Membership>) => MutableModel<Membership> | void): Membership;
}

export declare class Workshop {
  readonly id: string;
  readonly name?: string | null;
  readonly fileRequests?: (FileRequest | null)[] | null;
  readonly submissions?: (FileRequestSubmission | null)[] | null;
  readonly status?: string | null;
  readonly passes?: number | null;
  readonly features?: Features | null;
  readonly memberships?: (Membership | null)[] | null;
  constructor(init: ModelInit<Workshop>);
  static copyOf(source: Workshop, mutator: (draft: MutableModel<Workshop>) => MutableModel<Workshop> | void): Workshop;
}

export declare class FileRequest {
  readonly id: string;
  readonly expiration: string;
  readonly title?: string | null;
  readonly details?: string | null;
  readonly required?: boolean | null;
  readonly playlistArtwork?: Artwork | null;
  readonly submissions?: (FileRequestSubmission | null)[] | null;
  readonly workshop?: Workshop | null;
  readonly extensions?: (Extension | null)[] | null;
  constructor(init: ModelInit<FileRequest>);
  static copyOf(source: FileRequest, mutator: (draft: MutableModel<FileRequest>) => MutableModel<FileRequest> | void): FileRequest;
}

export declare class FileRequestSubmission {
  readonly id: string;
  readonly fileRequest?: FileRequest | null;
  readonly artist?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly fileId?: string | null;
  readonly fileExtension?: string | null;
  readonly rating?: number | null;
  readonly comments?: string | null;
  readonly workshopId?: string | null;
  constructor(init: ModelInit<FileRequestSubmission>);
  static copyOf(source: FileRequestSubmission, mutator: (draft: MutableModel<FileRequestSubmission>) => MutableModel<FileRequestSubmission> | void): FileRequestSubmission;
}

export declare class Extension {
  readonly id: string;
  readonly expiration: string;
  readonly assignmentId: string;
  constructor(init: ModelInit<Extension>);
  static copyOf(source: Extension, mutator: (draft: MutableModel<Extension>) => MutableModel<Extension> | void): Extension;
}