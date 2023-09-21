import { match } from 'path-to-regexp'
import { matchSorter } from "match-sorter";
import { intervalToDuration, formatDuration } from "date-fns";
import { DEFAULT_WORKSHOP_TIMEZONE, MAPPED_ROUTE_CONFIGS } from './constants';
import { formatInTimeZone } from 'date-fns-tz';

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
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.onload = function (event) {
      try {
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (!audioContext) {
          throw Error('no audio context')
        }
        audioContext.decodeAudioData(event?.target?.result, function (buffer) {
          var duration = Math.trunc(buffer.duration);
          resolve(duration)
        }, (err) => {
          reject(err)
        });
      } catch (error) {
        reject(error)
      }
    };
    reader.onerror = function (event) {
      console.error("An error ocurred reading the file: ", event);
      reject(event)
    };
    setTimeout(() => reject('timeout'), 3000)
    reader.readAsArrayBuffer(file);
  })
}

// https://stackoverflow.com/questions/48776140/format-a-duration-from-seconds-using-date-fns
export const formatAudioDuration = (seconds = 0) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
  const zeroPad = (num) => String(num).padStart(2, "0");
  const formatted = formatDuration(duration, {
    format: ["hours", "minutes", "seconds"],
    zero: true,
    delimiter: ":",
    locale: {
      formatDistance: (_token, count) => zeroPad(count)
    }
  });
  return formatted;
}

// in the future, host to set default timezone per workshop and pass in custom default when calling
export const formatDateTimeInDefaultTimeZone = (dateTime, timeZone = DEFAULT_WORKSHOP_TIMEZONE) => dateTime ? formatInTimeZone(dateTime, timeZone, 'MM/dd/yyyy hh:mm aaa zzz') : ''