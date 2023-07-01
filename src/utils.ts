import { match } from 'path-to-regexp'
import { matchSorter } from "match-sorter";
import { MAPPED_ROUTE_CONFIGS } from './constants';

export const getCloudFrontURL = (path: string, level: 'public' | 'protected' | 'private' = 'public') =>
  `${process.env.GATSBY_CLOUDFRONT_DISTRIBUTION}/${level}/${path}`;

export const searchMembersFilterOptions = (options, { inputValue }) => matchSorter(options, inputValue, { keys: ['displayName', 'name', 'email'] });

export const getDisplayName = (profile) => profile ? (profile?.displayName || profile?.name || profile?.email?.split('@')[0] || '') : ''

export const getRouteConfigFromLocation = ({ pathname }) => {
  const result = MAPPED_ROUTE_CONFIGS.find(({ pathRegex }) => pathRegex.test(pathname));
  if (!result) return;
  const matchFn = match(result.path, { decode: decodeURIComponent });
  const matched = matchFn(pathname)
  return { ...result, params: matched?.params }
}