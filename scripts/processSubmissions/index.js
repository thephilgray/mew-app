const path = require('path')

const AWS = require('aws-sdk')
const s3 = require('s3-node')
const fs = require('fs-extra')
const glob = require('glob')
const ffmetadata = require('ffmetadata')
const archiver = require('archiver')

/**
 * Download all the files from s3
 * rename them and strip their metadata
 * zip and upload to s3 in downloads folder
 */

module.exports = (([env = 'dev', assignmentId]) => {
    const CONSTANTS = { temp: 'temp', downloads: 'downloads', processed: 'processed' }
    const tempDir = path.join(__dirname, `./${CONSTANTS.temp}`)
    const downloadsDir = `${tempDir}/${CONSTANTS.downloads}`
    const processedDir = `${tempDir}/${CONSTANTS.processed}`
    const Bucket = process.env[`MEW_BUCKET_${env.toUpperCase()}`]
    const region = 'us-east-1'

    AWS.config.update({ region, signatureVersion: 'v4' });

    if (!assignmentId) {
        console.error(`Error: assignmentId required.`)
        return process.exit(9)
    }


    const awsS3Client = new AWS.S3({ region })
    const client = s3.createClient({ s3Client: awsS3Client })

    // ensure and empty temp directory
    fs.emptyDirSync(tempDir)

    const params = {
        localDir: downloadsDir,
        s3Params: {
            Bucket,
            Prefix: `public/${assignmentId}/`,
        },
    }

    const downloader = client.downloadDir(params)

    downloader.on('error', function (err) {
        console.error('unable to download:', err.stack)
    })
    downloader.on('progress', function () {
        console.log('progress', downloader.progressAmount, downloader.progressTotal)
    })
    downloader.on('end', function () {
        console.log('done downloading')
        processFiles()
    })

    function processFiles() {
        glob(`${CONSTANTS.temp}/${CONSTANTS.downloads}/*.*/*?*/*?*/*.*`, function (er, files) {
            async function copy(source, destination) {
                try {
                    await fs.copy(source, destination)
                    await new Promise((resolve, reject) => {
                        const metadataOverrides = {
                            album: '',
                            title: '',
                            artist: '',
                        }

                        ffmetadata.write(destination, metadataOverrides, function (err) {
                            if (err) {
                                console.error('Error writing metadata', err)
                                return reject(err)
                            }
                            console.log('metadata written')
                            return resolve('')
                        })
                    })

                    console.log('success!')
                } catch (err) {
                    console.error(err)
                }
            }

            const promises = files.map((file) => {
                const [, , email, artist, title, originalFileName] = file
                    .split('/')
                    .map(decodeURIComponent)
                    .map((str) => str.replace(/\//g, ''))
                console.log({ email, artist, title, originalFileName })
                const extension = originalFileName.split('.').slice(-1)
                const destination = path.resolve(processedDir, `${artist} - ${title}.${extension}`)
                console.log({ file, destination })
                return copy(file, destination)
            })

            Promise.all(promises)
                .then(() => {
                    // do what you want
                    console.log('done. zipping....')
                    console.log(promises.length)

                    const output = fs.createWriteStream(path.join(tempDir, `/${assignmentId}.zip`))
                    const archive = archiver('zip')

                    output.on('close', function () {
                        console.log(archive.pointer() + ' total bytes')
                        console.log('archiver has been finalized and the output file descriptor has closed.')

                        console.log('uploading to s3.....')

                        const params = {
                            localFile: path.join(tempDir, `/${assignmentId}.zip`),

                            s3Params: {
                                Bucket,
                                Key: `public/${CONSTANTS.downloads}/${assignmentId}.zip`,
                            },
                        }
                        const uploader = client.uploadFile(params)
                        uploader.on('error', function (err) {
                            console.error('unable to upload:', err.stack)
                        })
                        uploader.on('progress', function () {
                            console.log(
                                'progress',
                                uploader.progressMd5Amount,
                                uploader.progressAmount,
                                uploader.progressTotal,
                            )
                        })
                        uploader.on('end', function () {
                            console.log('done uploading')
                            const url = awsS3Client.getSignedUrl('getObject', {
                                Bucket,
                                Key: `public/${CONSTANTS.downloads}/${assignmentId}.zip`,
                                Expires: 604800,
                            })
                            console.log(url);
                        })
                    })

                    archive.on('error', function (err) {
                        throw err
                    })

                    archive.pipe(output)

                    // append files from a sub-directory, putting its contents at the root of archive
                    archive.directory(processedDir, false)

                    archive.finalize()
                })
                .catch((err) => {
                    // handle I/O error
                    console.error(err)
                })
        })
    }
})(process.argv.slice(2))
