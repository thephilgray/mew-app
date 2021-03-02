This script was written as a temporary workaround. It downloads all the files from a bucket + prefix (where prefix is assignment id), renames the files, strips the metadata, zips them, and uploads the zip back into bucket + prefix + /downloads.

There are a couple of hurdles with the Download All feature:

-   The total file size is very large; processing all the files at once and then uploading back to S3 can exceed Amplify function time limits
-   The primary user of this feature has requested that album, title, and artist metadata be stripped from the files to avoid issues when bulk uploading to SoundCloud playlists. To date, every package I've found with the ability to transform metadata on an audio file is a wrapper for ffmpeg and requires the binary to be installed on the system.

A few possible solutions:

-   process files automatically as soon as the assignment expires, not when the user clicks the Download All button; consider:
    -   scheduled lambda
    -   an event triggered lambda
-   rename and zip the files at the time the user uploads a file
    -   edit the zip in S3 in place?
-   strip metadata at the time the user uploads a file; consider:
    -   AWS Elastic Transcoder or Elemental MediaConvert
    -   Lambda Container Image Support (https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/)
    -   edit the zip in S3 in place?
-   do not strip metadata; invite contributors to stream the playlist in the app

Example usage:

```bash
node index.js dev e09b3ac1-4b5a-493d-a510-aca3c64299c4
```

Requires the following environmental variables:
MEW_BUCKET_DEV
MEW_BUCKET_PROD
