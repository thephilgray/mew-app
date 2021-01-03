// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Assignment, Submission, Member, S3Object } = initSchema(schema);

export {
  Assignment,
  Submission,
  Member,
  S3Object
};