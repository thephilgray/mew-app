/**
 * @type {import('@types/aws-lambda').CreateAuthChallengeTriggerHandler}
 */
// https://nodejs.org/api/crypto.html#crypto_crypto_randomint_min_max_callback

const aws = require('aws-sdk');
const { randomDigits } = require('crypto-secure-random-digit');
const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend');

module.exports.handler = async (event) => {
  let secretLoginCode;
  if (!event.request.session || !event.request.session.length) {
    // This is a new auth session
    // Generate a new secret login code and mail it to the user
    secretLoginCode = randomDigits(6).join('');
    await sendEmail(event.request.userAttributes.email, secretLoginCode);
  } else {
    // There's an existing session. Don't generate new digits but
    // re-use the code from the current session. This allows the user to
    // make a mistake when keying in the code and to then retry, rather
    // the needing to e-mail the user an all new code again.
    const previousChallenge = event.request.session.slice(-1)[0];
    secretLoginCode =
      previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1];
  }

  // This is sent back to the client app
  event.response.publicChallengeParameters = {
    email: event.request.userAttributes.email,
  };

  // Add the secret login code to the private challenge parameters
  // so it can be verified by the "Verify Auth Challenge Response" trigger
  event.response.privateChallengeParameters = { secretLoginCode };

  // Add the secret login code to the session so it is available
  // in a next invocation of the "Create Auth Challenge" trigger
  event.response.challengeMetadata = `CODE-${secretLoginCode}`;

  return event;
};

async function sendEmail(emailAddress, secretLoginCode) {
  const emailHtml = renderEmail(secretLoginCode);

  const { Parameters } = await new aws.SSM()
    .getParameters({
      Names: ['MAILER_SEND_API_KEY'].map(
        (secretName) => process.env[secretName]
      ),
      WithDecryption: true,
    })
    .promise();

  const [apiKeyParameter] = Parameters;
  // Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
  const mailerSend = new MailerSend({
    apiKey: apiKeyParameter.Value,
  });

  const sentFrom = new Sender(
    'support@musiceveryweek.org',
    'MEW (Music Every Week)'
  );
  const recipients = [new Recipient(emailAddress)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject('Verification code to access your account')
    .setHtml(emailHtml);

  await mailerSend.email.send(emailParams);
}

function renderEmail(verificationCode) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html lang="en"><head data-id="__react-email-head"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head><body data-id="__react-email-body" style="background-color:#ffffff;font-family:HelveticaNeue,Helvetica,Arial,sans-serif"><table align="center" width="100%" data-id="__react-email-container" role="presentation" cellSpacing="0" cellPadding="0" border="0" style="max-width:37.5em;background-color:#ffffff;border:1px solid #eee;border-radius:5px;box-shadow:0 5px 10px rgba(20,50,70,.2);margin-top:20px;width:360px;margin:0 auto;padding:68px 0 130px"><tbody><tr style="width:100%"><td><img data-id="react-email-img" alt="Plaid" src="https://d8qefxpi8k87w.cloudfront.net/public/media/mewlogo.png" width="212" height="212" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto"/><p data-id="react-email-text" style="font-size:11px;line-height:16px;margin:16px 8px 8px 8px;color:#E092A2;font-weight:700;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;height:16px;letter-spacing:0;text-transform:uppercase;text-align:center">Secret Login Code</p><h1 data-id="react-email-heading" style="color:#63625E;display:inline-block;font-family:HelveticaNeue-Medium,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;line-height:24px;margin-bottom:0;margin-top:0;text-align:center">Please copy the following into the verification code field to login:</h1><table align="center" width="100%" data-id="react-email-section" style="background:rgba(0,0,0,.05);border-radius:4px;margin:16px auto 14px;vertical-align:middle;width:280px" border="0" cellPadding="0" cellSpacing="0" role="presentation"><tbody><tr><td><p data-id="react-email-text" style="font-size:32px;line-height:40px;margin:0 auto;color:#E092A2;display:inline-block;font-family:HelveticaNeue-Bold;font-weight:700;letter-spacing:6px;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">${verificationCode}</p></td></tr></tbody></table><p data-id="react-email-text" style="font-size:12px;line-height:18px;margin:0;color:#63625E;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center">*This code will expire within a couple of minutes or after requesting a new code.</p><br/><p data-id="react-email-text" style="font-size:15px;line-height:23px;margin:0;color:#63625E;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center">Not expecting this email?</p><p data-id="react-email-text" style="font-size:15px;line-height:23px;margin:0;color:#63625E;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center">Contact <a href="mailto:support@musiceveryweek.org" data-id="react-email-link" target="_blank" style="color:#241c15;text-decoration:underline">support@musiceveryweek.org</a> if you did not request this code.</p></td></tr></tbody></table></body></html>`;
}
