/**
 * @type {import('@types/aws-lambda').CreateAuthChallengeTriggerHandler}
 */
// https://nodejs.org/api/crypto.html#crypto_crypto_randomint_min_max_callback
const aws = require('aws-sdk')
const { randomDigits } = require('crypto-secure-random-digit')
const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend')

exports.handler = async (event) => {
    let secretLoginCode
    if (!event.request.session || !event.request.session.length) {
        // This is a new auth session
        // Generate a new secret login code and mail it to the user
        secretLoginCode = randomDigits(6).join('')
        await sendEmail(event.request.userAttributes.email, secretLoginCode)
    } else {
        // There's an existing session. Don't generate new digits but
        // re-use the code from the current session. This allows the user to
        // make a mistake when keying in the code and to then retry, rather
        // the needing to e-mail the user an all new code again.
        const previousChallenge = event.request.session.slice(-1)[0]
        secretLoginCode = previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1]
    }

    // This is sent back to the client app
    event.response.publicChallengeParameters = {
        email: event.request.userAttributes.email,
    }

    // Add the secret login code to the private challenge parameters
    // so it can be verified by the "Verify Auth Challenge Response" trigger
    event.response.privateChallengeParameters = { secretLoginCode }

    // Add the secret login code to the session so it is available
    // in a next invocation of the "Create Auth Challenge" trigger
    event.response.challengeMetadata = `CODE-${secretLoginCode}`

    return event
}

async function sendEmail(emailAddress, secretLoginCode) {
    const { Parameters } = await new aws.SSM()
        .getParameters({
            Names: ['MAILER_SEND_API_KEY'].map((secretName) => process.env[secretName]),
            WithDecryption: true,
        })
        .promise()

    const [apiKeyParameter] = Parameters
    // Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
    const mailerSend = new MailerSend({
        apiKey: apiKeyParameter.Value,
    })

    const sentFrom = new Sender('support@musiceveryweek.org', 'MEW App Support')
    const recipients = [new Recipient(emailAddress)]

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject('MEW APP: Your secret login code')
        .setHtml(`<html><body><p>This is your secret login code:</p><h3>${secretLoginCode}</h3></body></html>`)

    await mailerSend.email.send(emailParams)
}
