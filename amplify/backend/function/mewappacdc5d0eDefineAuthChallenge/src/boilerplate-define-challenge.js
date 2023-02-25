/**
 * @type {import('@types/aws-lambda').DefineAuthChallengeTriggerHandler}
 */
// exports.handler = async event => {
//   if (event.request.session.length === 1 && event.request.session[0].challengeName === 'SRP_A') {
//     event.response.issueTokens = false;
//     event.response.failAuthentication = false;
//     event.response.challengeName = 'PASSWORD_VERIFIER';
//   } else if (
//     event.request.session.length === 2 &&
//     event.request.session[1].challengeName === 'PASSWORD_VERIFIER' &&
//     event.request.session[1].challengeResult === true
//   ) {
//     event.response.issueTokens = false;
//     event.response.failAuthentication = false;
//     event.response.challengeName = 'CUSTOM_CHALLENGE';
//   } else if (
//     event.request.session.length === 3 &&
//     event.request.session[2].challengeName === 'CUSTOM_CHALLENGE' &&
//     event.request.session[2].challengeResult === true
//   ) {
//     event.response.issueTokens = true;
//     event.response.failAuthentication = false;
//   } else {
//     event.response.issueTokens = false;
//     event.response.failAuthentication = true;
//   }

//   return event;
// };


exports.handler = async event => {
  if (event.request.session &&
      event.request.session.find(attempt => attempt.challengeName !== 'CUSTOM_CHALLENGE')) {
      // We only accept custom challenges; fail auth
      console.log('We only accept custom challenges; fail auth')
      event.response.issueTokens = false;
      event.response.failAuthentication = true;
  } else if (event.request.session &&
      event.request.session.length >= 3 &&
      event.request.session.slice(-1)[0].challengeResult === false) {
        // The user provided a wrong answer 3 times; fail auth
        console.log('The user provided a wrong answer 3 times; fail auth')
      event.response.issueTokens = false;
      event.response.failAuthentication = true;
  } else if (event.request.session &&
      event.request.session.length &&
      event.request.session.slice(-1)[0].challengeName === 'CUSTOM_CHALLENGE' && // Doubly stitched, holds better
      event.request.session.slice(-1)[0].challengeResult === true) {
      // The user provided the right answer; succeed auth
      console.log('The user provided the right answer; succeed auth')
      event.response.issueTokens = true;
      event.response.failAuthentication = false;
  } else {
      // The user did not provide a correct answer yet; present challenge
      console.log('The user did not provide a correct answer yet; present challenge')
      event.response.issueTokens = false;
      event.response.failAuthentication = false;
      event.response.challengeName = 'CUSTOM_CHALLENGE';
  }

  return event;
};