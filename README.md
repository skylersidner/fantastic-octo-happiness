# Ice Cream Survey App

Created as part of a programming challenge. Includes:
* UI component
* API component
* QR code image which will take the user to a publicly hosted version of the app
* The initial requirements for the challenge

Uses React, ApolloGraphQL (for server/client requests), Twillio (for SMS texting),
 [hosted on Heroku](https://fantastic-octo-happiness-ui.herokuapp.com/).

## API

Uses [ApolloServer](https://www.apollographql.com/docs/apollo-server/) from ApolloGraphQL.
 The [Twilio Node library](https://www.twilio.com/docs/libraries/node) is used to send SMS messaging,
 which requires an active account with a verified number to send messages from.

### Local Development

Run `npm i` to install dependencies. Requres a `.env` file in the API directory with your Twilio
 credentials and verified phone number which needs to be  in [E.164 format](https://www.twilio.com/docs/glossary/what-e164) (e.g. +19999999999):
```bash
TWILIO_ACCOUNT_SID=<your twilio account SID>
TWILIO_AUTH_TOKEN=<your twilio account auth token>
TWILIO_PHONE_NUMBER=<your twilio verified number>
PORT=<optional; defaults to 4000>
```
Run `npm start` to start the application on [http://localhost:4000](http://localhost:4000); visiting this
 url in the browser will present you with the Apollo sandbox explorer tool.

### Deploying to Heroku

Set up Config Vars for environment variables under "Settings" in your Heroku app.

Create a remote aimed at your heroku-api app; this can be done via the [Heroku CLI tool](https://devcenter.heroku.com/articles/git)
 though you will need to rename it to something other than `heroku` to distinguish it from the UI remote:
```bash
heroku git:remote -a <your-app-name>
git remote rename heroku heroku-API
```

Or do it via git if you have the Heroku git URI for your app:
```bash
git remote add heroku-API <your-heroku-app-git-repo-uri>
```

Then push using the [subtree strategy](https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202)
 to deploy only the UI directory:
```bash
git subtree push --prefix api heroku-api master
```

## UI

Created with [Create React App](https://github.com/facebook/create-react-app). Uses
 [ApolloClient](https://www.apollographql.com/docs/react/) from ApolloGraphQL for requests with the API.

### Local Development

Run `npm i` to install dependencies. Requres a `.env` file in the ui directory pointed
 at your local API instance:
```bash
REACT_APP_API_URL=http://localhost:4000
```
Run `npm start` to start the application on [http://localhost:3000](http://localhost:3000)
 in your browser.

### Deploying to Heroku

Run `npm run build` to create a production `build` directory.

Set up Config Vars for environment variables under "Settings" in your Heroku app.

Create a remote aimed at your heroku-ui app; this can be done via the [Heroku CLI tool](https://devcenter.heroku.com/articles/git)
 though you will need to rename it to something other than `heroku` to distinguish it from the API remote:
```bash
heroku git:remote -a <your-app-name>
git remote rename heroku heroku-ui
```

Or do it via git if you have the Heroku git URI for your app:
```bash
git remote add heroku-ui <your-heroku-app-git-repo-uri>
```

Then push using the [subtree strategy](https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202)
 to deploy only the UI directory:
```bash
git subtree push --prefix ui heroku-ui master
```
