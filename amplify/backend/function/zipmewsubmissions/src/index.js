/* eslint-disable @typescript-eslint/no-var-requires */
/* Amplify Params - DO NOT EDIT
    ENV
    REGION
    STORAGE_MEWAPP_BUCKETNAME
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk')
const s3Zip = require('s3-zip')

exports.handler = async (event) => {
    const region = 'us-east-1'
    const Bucket = process.env.STORAGE_MEWAPP_BUCKETNAME
    const folder = `public/${event.arguments.assignmentId}/`
    const zipFilename = `public/downloads/${event.arguments.assignmentId}.zip`
    AWS.config.update({ region })
    const s3 = new AWS.S3({ apiVersion: '2006-03-01' })
    const params = {
        Bucket,
        Prefix: folder,
    }
    const filesArray = []
    const filenames = []
    let s3Objects

    try {
        s3Objects = await s3.listObjectsV2(params).promise()
        console.log(s3Objects)
    } catch (e) {
        const err = 'listObjectsV2 error ' + e
        console.log(err)
        return 'Failure'
    }

    s3Objects.Contents.forEach(({ Key: item }) => {
        const filename = item.substr(folder.length)
        filesArray.push(filename)

        const [, artist, title, originalFileName] = filename
            .split('/')
            .map(decodeURIComponent)
            .map((str) => str.replace(/\//g, ''))
        const extension = originalFileName.split('.').slice(-1)
        filenames.push(`${artist} - ${title}.${extension}`)
    })

    // Zip the files and upload the zip to the public/downloads folder of the bucket
    try {
        const Body = s3Zip.archive({ region, bucket: Bucket }, folder, filesArray, filenames)
        const zipParams = {
            Bucket,
            Key: zipFilename,
            Body,
            ContentType: 'application/zip',
        }

        await s3.upload(zipParams).promise()
        return 'Success'
    } catch (e) {
        const err = 'zipFile.upload error ' + e
        console.log(err)
        return 'Failed'
    }
}
