# React Email Starter
**⚠ NOTE ⚠ ** – This sub-project is for email template development. The output is copied into lambdas where the emails are generated. The future state is to move the email template development code into the lambda projects where they are used. I have partially done this with the mew-digest email. I say partially because then I was copying over the code from component in the lambda to this project for the local dev server. However, all I need to do is add a dev script into the lambda project to setup a dev server there. I want to finish this and also move the other templates into their respective lambda projects, but the lambda that sends out the login code email in particular needs to be performant so that users can login quickly. This is enough to reconsider the approach of rendering the emails in the lambda (requiring react and react-email dependencies that bog down the lambda), so I'm putting this off for now until I have the time to weigh some different options.

A live preview right in your browser so you don't need to keep sending real emails during development.

## Getting Started

First, install the dependencies:

```sh
npm install
# or
yarn
```

Then, run the development server:

```sh
npm run dev
# or
yarn dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

## License

MIT License
