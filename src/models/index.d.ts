import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Credit {
  readonly id: string;
  readonly title?: string;
  readonly artists?: (string | null)[];
  readonly artistLinks?: (string | null)[];
  constructor(init: ModelInit<Credit>);
}

export declare class Artwork {
  readonly id: string;
  readonly credit?: (Credit | null)[];
  constructor(init: ModelInit<Artwork>);
}

export declare class Integrations {
  readonly mailchimp?: mailchimpIntegration;
  constructor(init: ModelInit<Integrations>);
}

export declare class mailchimpIntegration {
  readonly enabled?: boolean;
  readonly apiKey?: string;
  readonly listId?: string;
  readonly serverPrefix?: string;
  constructor(init: ModelInit<mailchimpIntegration>);
}

export declare class FileRequest {
  readonly id: string;
  readonly expiration: string;
  readonly title?: string;
  readonly details?: string;
  readonly required?: boolean;
  readonly playlistArtwork?: Artwork;
  readonly submissions?: (FileRequestSubmission | null)[];
  readonly workshop?: Workshop;
  constructor(init: ModelInit<FileRequest>);
  static copyOf(source: FileRequest, mutator: (draft: MutableModel<FileRequest>) => MutableModel<FileRequest> | void): FileRequest;
}

export declare class FileRequestSubmission {
  readonly id: string;
  readonly fileRequest?: FileRequest;
  readonly artist?: string;
  readonly name?: string;
  readonly email?: string;
  readonly fileId?: string;
  readonly fileExtension?: string;
  readonly rating?: number;
  readonly comments?: string;
  readonly workshopId?: string;
  constructor(init: ModelInit<FileRequestSubmission>);
  static copyOf(source: FileRequestSubmission, mutator: (draft: MutableModel<FileRequestSubmission>) => MutableModel<FileRequestSubmission> | void): FileRequestSubmission;
}

export declare class Workshop {
  readonly id: string;
  readonly name?: string;
  readonly fileRequests?: (FileRequest | null)[];
  readonly submissions?: (FileRequestSubmission | null)[];
  readonly status?: string;
  readonly integrations?: Integrations;
  readonly passes?: number;
  constructor(init: ModelInit<Workshop>);
  static copyOf(source: Workshop, mutator: (draft: MutableModel<Workshop>) => MutableModel<Workshop> | void): Workshop;
}

export declare class Member {
  readonly id: string;
  readonly email: string;
  readonly artist?: string;
  readonly submissions?: (FileRequestSubmission | null)[];
  readonly status?: string;
  constructor(init: ModelInit<Member>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member>) => MutableModel<Member> | void): Member;
}