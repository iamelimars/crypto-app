[![CircleCI](https://circleci.com/gh/iamelimars/crypto-app.svg?style=svg)](https://circleci.com/gh/iamelimars/crypto-app)

# CoinContrast.co

Live Cryptocurrency 
Prices
&
Compare Rankings 

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v10.15.1

    $ npm --version
    6.4.1

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/iamelimars/crypto-app.git
    $ cd PROJECT
    $ npm install

### Configure app

Copy `config.sample.json` to `config.json` then edit it with the url where you have setup:

- backend api
- oauth like endpoint for auth
- development

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build
    
## Testing

For simple tests, run:
    
    $ npm test
   
To watch tests, run:

    $npm run test:watch
    
To see test coverage, run:

    $npm run test:coverage

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm install

---

## Languages & tools


### JavaScript
- [React](http://facebook.github.io/react) is used for UI.
- [Axios](https://github.com/axios/axios) Promise based HTTP client for the browser and node.js.
- [Redux](https://redux.js.org/) A predictable state container for JavaScript apps.
- [Socket.io](https://socket.io/) Socket.IO enables real-time, bidirectional and event-based communication.
- [Jest](https://jestjs.io/) Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [react-chartjs-2](http://jerairrest.github.io/react-chartjs-2/)React wrapper for Chart.js.

### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.
