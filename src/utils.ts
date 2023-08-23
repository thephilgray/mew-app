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

// https://ourcodeworld.com/articles/read/1036/how-to-retrieve-the-duration-of-a-mp3-wav-audio-file-in-the-browser-with-javascript
export const getFileDuration = async (file) => {
  return new Promise(resolve => {
    var reader = new FileReader();
    reader.onload = function (event) {
      var audioContext = new (window.AudioContext || window.webkitAudioContext)();
      try {
        audioContext.decodeAudioData(event.target.result, function (buffer) {
          var duration = Math.trunc(buffer.duration);
          resolve(duration)
        });
      } catch (error) {
        resolve(0)
      }
    };
    reader.onerror = function (event) {
      console.error("An error ocurred reading the file: ", event);
      resolve(0)
    };
    setTimeout(() => resolve(0), 1000)
    reader.readAsArrayBuffer(file);
  })
}