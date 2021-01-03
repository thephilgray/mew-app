# MEW (Music Every Week) 2021 App

An early beta / proof of concept app for a real song-a-week group called MEW.

This is a work in progress. Core functionality is still in development and may change frequently and drastically.
## Setup
### Prerequisites 
* AWS account (signup is free but a payment method is required as costs can be incurred when using AWS services beyond the free-tier)
* AWS Amplify is installed locally and setup. Complete steps are here: [https://docs.amplify.aws/cli/start/install](https://docs.amplify.aws/cli/start/install)

### Deploying the App to AWS
* TODO: complete instructions after pushing repo and testing
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
* [AWS Amplify CLI documentation](https://docs.amplify.aws/cli)
* [AWS Amplify JS documentation](https://docs.amplify.aws/lib/q/platform/js)
* [Gatsby (React Framework) documentation](https://www.gatsbyjs.com/docs/)
* [Material-UI (React component library) documentation](https://material-ui.com/)
* [Emotion CSS-in-JS Library documentation](https://emotion.sh/docs/introduction)
* [Apollo (GraphQL) React Hooks documentation](https://www.apollographql.com/docs/react/api/react/hooks/)

### Commands
* `amplify console` opens a your Amplify project either in the AWS dashboard or in the Admin UI (your choice)
* `amplify push` to update the backend resources on AWS
* `amplify pull` to update the local backend config
* `amplify mock api` to start a full mock API of the backend resources