import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class FileRequest {
  readonly id: string;
  readonly expiration: string;
  readonly title?: string;
  readonly details?: string;
  readonly required?: boolean;
  readonly submissions?: (FileRequestSubmission | null)[];
  constructor(init: ModelInit<FileRequest>);
  static copyOf(source: FileRequest, mutator: (draft: MutableModel<FileRequest>) => MutableModel<FileRequest> | void): FileRequest;
}

export declare class FileRequestSubmission {
  readonly id: string;
  readonly fileRequest?: FileRequest;
  readonly artist?: string;
  readonly name?: string;
  readonly email?: string;
  readonly audio?: string;
  constructor(init: ModelInit<FileRequestSubmission>);
  static copyOf(source: FileRequestSubmission, mutator: (draft: MutableModel<FileRequestSubmission>) => MutableModel<FileRequestSubmission> | void): FileRequestSubmission;
}