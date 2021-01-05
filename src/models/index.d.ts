import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Assignment {
  readonly id: string;
  readonly owner: string;
  readonly title: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly createdAt?: string;
  readonly required: boolean;
  readonly details?: string;
  readonly artwork?: S3Object;
  constructor(init: ModelInit<Assignment>);
  static copyOf(source: Assignment, mutator: (draft: MutableModel<Assignment>) => MutableModel<Assignment> | void): Assignment;
}

export declare class Submission {
  readonly id: string;
  readonly assignmentId: string;
  readonly memberId: string;
  readonly owner: string;
  readonly title: string;
  readonly byline: string;
  readonly details?: string;
  readonly createdAt?: string;
  readonly artwork?: S3Object;
  readonly audio: S3Object;
  constructor(init: ModelInit<Submission>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission>) => MutableModel<Submission> | void): Submission;
}

export declare class Member {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly artistName?: string;
  readonly status: string;
  readonly createdAt?: string;
  readonly passes?: number;
  readonly submissions?: (Submission | null)[];
  readonly role: string;
  readonly owner: string;
  constructor(init: ModelInit<Member>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member>) => MutableModel<Member> | void): Member;
}

export declare class FileRequest {
  readonly id: string;
  readonly expiration: string;
  constructor(init: ModelInit<FileRequest>);
  static copyOf(source: FileRequest, mutator: (draft: MutableModel<FileRequest>) => MutableModel<FileRequest> | void): FileRequest;
}