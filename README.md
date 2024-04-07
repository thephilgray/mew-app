# MEW (Music Every Week) App

Music workshop app for a song-a-week group called MEW.

## Features

- 🎹 (admin) create workshops and assignments with deadlines and automatically generated or create custom playlists of submissions and set playlist release dates
- 🔗 (admin) generate secret public links for anonymous submissions and public playlist links to share
- 🔐 (admin) manage membership and restrict access to only workshop members
- 📧 (admin) enable MailChimp integration to sync members and membership status from an email marketing list
- ⬇️ (admin) generate a download link for all submissions for any given assignment
- 🔒 (members) password-less sign-up and sign-in with verification code sent to email
- ✍️ (members) create a profile and add bio and links
- 📂 (members) upload audio files, artwork, and lyrics
- ❤️ (members) request feedback and get assigned other submissions to optionally give feedback
- 🔊 (members) create, clone, and share custom playlists
- 📢 (members) comment on playlist tracks and view latest comments in your feed
- 🎺 (members) upload audio stems in midi, wav, and a variety of formats and tag with metadata such as BPM, key, instruments recorded, etc.
- 🎼 (members) view list of all of your submissions across multiple workshops and play as a playlist
- 🌍 (members) pin your location to a workshop community map

## Background

This app has gradually evolved from a humble submissions form with admin tools to a full-featured social app experience for members. While it has a small, active user base (100+), it should still be considered a proof of concept. There is still more work to make it easily configurable and portable to any AWS account. Not all the code is included here yet and not all the infrastructure and configuration is represented as code.

## TODO

- [ ] Upgrade to Amplify v6: https://docs.amplify.aws/javascript/build-a-backend/troubleshooting/migrate-from-javascript-v5-to-v6/#pageMain
- [ ] Migrate from Gatsby to Next. This is not strictly necessary but when this project was initialized, the idea was just to quickly deploy a static site with a couple of pages. There was one developer and one user and performance and contributions from other developers was not really a consideration. Next is now more of an industry standard and offers a number of enhancements.
- [ ] Add e2e and unit tests

## Setup

### Prerequisites

- AWS account (signup is free but a payment method is required as costs can be incurred when using AWS services beyond the free-tier)
- AWS Amplify is installed locally and setup. Complete steps are here: [https://docs.amplify.aws/cli/start/install](https://docs.amplify.aws/cli/start/install)

### Deploying the App to AWS

- TODO: complete instructions after pushing repo and testing.

## Development

### Starting the Mock API

```bash
amplify mock api
```

Once started, the shell will output the URL to the Mock endpoint.

```bash
Running GraphQL codegen
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Code generated successfully and saved in file src/API.ts
AppSync Mock endpoint is running at http://XXX.XXX.XX.XX:XXXXX
```

Open this link in a browser to explore the GraphQL API and test queries and mutations with GraphiQL.

### Starting Gatsby

```bash
yarn start
```

### Resources

- [AWS Amplify CLI documentation](https://docs.amplify.aws/cli)
- [AWS Amplify JS documentation](https://docs.amplify.aws/lib/q/platform/js)
- [Gatsby (React Framework) documentation](https://www.gatsbyjs.com/docs/)
- [Material-UI (React component library) documentation](https://material-ui.com/)
- [Emotion CSS-in-JS Library documentation](https://emotion.sh/docs/introduction)
- [Apollo (GraphQL) React Hooks documentation](https://www.apollographql.com/docs/react/api/react/hooks/)

### Commands

- `amplify console` opens a your Amplify project either in the AWS dashboard or in the Admin UI (your choice)
- `amplify push` to update the backend resources on AWS
- `amplify pull` to update the local backend config
- `amplify mock api` to start a full mock API of the backend resources
- `make codegen` to generate both the depth 5 and depth 3 graphql mutations/queries/subscriptions

# Other Repos

mew-playlist-downloader (fargate)
