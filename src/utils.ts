import { matchSorter } from "match-sorter";

export const getCloudFrontURL = (path: string, level: 'public' | 'protected' | 'private' = 'public') =>
  `${process.env.GATSBY_CLOUDFRONT_DISTRIBUTION}/${level}/${path}`;

export const searchMembersFilterOptions = (options, { inputValue }) => matchSorter(options, inputValue, { keys: ['displayName', 'name', 'email'] });

export const getDisplayName = (profile) => profile?.displayName || profile?.name || profile?.email?.split('@')[0] || ''