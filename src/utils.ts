export const getCloudFrontURL = (path: string, level: 'public' | 'protected' | 'private' = 'public') =>
  `${process.env.GATSBY_CLOUDFRONT_DISTRIBUTION}/${level}/${path}`;
