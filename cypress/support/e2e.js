// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register'
import '@shelex/cypress-allure-plugin'

// module.exports = (on, config) => {
//     require('cypress-mochawesome-reporter/plugin')(on);
//     const options = {
//       webpackOptions: require('../webpack.config'),
//     };
//     return config;
// }

// // const env = process.env.ENV ;
// const env = Cypress.env('ENV')
// const config = require(`../../cypress.${env}.config`);

// module.exports = config

// Alternatively you can use CommonJS syntax:
// require('./commands')
