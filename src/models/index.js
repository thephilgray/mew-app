// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FileRequest, FileRequestSubmission, Member, Credit, Artwork } = initSchema(schema);

export {
  FileRequest,
  FileRequestSubmission,
  Member,
  Credit,
  Artwork
};