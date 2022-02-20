// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Extension, FileRequest, FileRequestSubmission, Workshop, Member, Credit, Artwork } = initSchema(schema);

export {
  Extension,
  FileRequest,
  FileRequestSubmission,
  Workshop,
  Member,
  Credit,
  Artwork
};