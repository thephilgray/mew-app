// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { APIKey, Profile, Membership, Workshop, FileRequest, FileRequestSubmission, Extension, Response, Credit, Artwork, MailchimpIntegration, Features, MailchimpUserInfo, MailchimpTag } = initSchema(schema);

export {
  APIKey,
  Profile,
  Membership,
  Workshop,
  FileRequest,
  FileRequestSubmission,
  Extension,
  Response,
  Credit,
  Artwork,
  MailchimpIntegration,
  Features,
  MailchimpUserInfo,
  MailchimpTag
};