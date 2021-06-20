/* eslint-disable @typescript-eslint/no-var-requires */
/* Amplify Params - DO NOT EDIT
    ENV
    REGION
    STORAGE_MEWAPP_BUCKETNAME
Amplify Params - DO NOT EDIT */
const Archiver = require('archiver')
const AWS = require('aws-sdk')
const Stream = require('stream')
const https = require('https')

exports.handler = async (event) => {
    const region = 'us-east-1'
    const Bucket = process.env.STORAGE_MEWAPP_BUCKETNAME
    const songData = event.arguments.songData
    const folder = `public/${event.arguments.assignmentId}/`
    const zipFilename = `public/downloads/${event.arguments.assignmentId}.zip`
    const sslAgent = new https.Agent({
        KeepAlive: true,
        rejectUnauthorized: true,
    })
    sslAgent.setMaxListeners(0)

    AWS.config.update({
        region,
        httpOptions: {
            agent: sslAgent,
        },
    })
    const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

    const s3DownloadStreams = songData.map(({ fileId, title }) => {
        return {
            stream: s3.getObject({ Bucket, Key: folder + fileId }).createReadStream(),
            filename: title,
        }
    })
    const streamPassThrough = new Stream.PassThrough()
    const params = {
        ACL: 'private',
        Body: streamPassThrough,
        Bucket,
        ContentType: 'application/zip',
        Key: zipFilename,
        StorageClass: 'STANDARD_IA', // Or as appropriate
    }
    const s3Upload = s3.upload(params, (error) => {
        if (error) {
            console.error(`Got error creating stream to s3 ${error.name} ${error.message} ${error.stack}`)
            throw error
        }
    })
    s3Upload.on('httpUploadProgress', (progress) => {
        console.log(progress) // { loaded: 4915, total: 192915, part: 1, key: 'foo.jpg' }
    })

    const archive = Archiver('zip')
    archive.on('error', (error) => {
        throw new Error(`${error.name} ${error.code} ${error.message} ${error.path} ${error.stack}`)
    })
    await new Promise((resolve, reject) => {
        console.log('Starting upload')

        s3Upload.on('close', resolve)
        s3Upload.on('end', resolve)
        s3Upload.on('error', reject)

        archive.pipe(streamPassThrough)
        s3DownloadStreams.forEach((streamDetails) =>
            archive.append(streamDetails.stream, { name: streamDetails.filename }),
        )
        archive.finalize()
    }).catch((error) => {
        throw new Error(`${error.code} ${error.message} ${error.data}`)
    })

    await s3Upload.promise()
}
