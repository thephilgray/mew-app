import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Credit {
  readonly id: string;
  readonly title?: string;
  readonly artist?: string;
  readonly artistLinks?: (string | null)[];
  constructor(init: ModelInit<Credit>);
}

export declare class Artwork {
  readonly id: string;
  readonly credit?: (Credit | null)[];
  constructor(init: ModelInit<Artwork>);
}

type FileRequestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FileRequestSubmissionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class FileRequest {
  readonly id: string;
  readonly expiration: string;
  readonly title?: string;
  readonly details?: string;
  readonly required?: boolean;
  readonly playlistArtwork?: Artwork;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FileRequest, FileRequestMetaData>);
  static copyOf(source: FileRequest, mutator: (draft: MutableModel<FileRequest, FileRequestMetaData>) => MutableModel<FileRequest, FileRequestMetaData> | void): FileRequest;
}

export declare class FileRequestSubmission {
  readonly id: string;
  readonly fileRequestId: string;
  readonly artist?: string;
  readonly name?: string;
  readonly email?: string;
  readonly fileId?: string;
  readonly fileExtension?: string;
  readonly rating?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FileRequestSubmission, FileRequestSubmissionMetaData>);
  static copyOf(source: FileRequestSubmission, mutator: (draft: MutableModel<FileRequestSubmission, FileRequestSubmissionMetaData>) => MutableModel<FileRequestSubmission, FileRequestSubmissionMetaData> | void): FileRequestSubmission;
}

export declare class Member {
  readonly id: string;
  readonly email: string;
  readonly artist?: string;
  readonly status?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Member, MemberMetaData>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member, MemberMetaData>) => MutableModel<Member, MemberMetaData> | void): Member;
}