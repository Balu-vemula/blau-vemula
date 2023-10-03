// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
{/* <reference types="cypress" /> */}
import 'cypress-localstorage-commands'

Cypress.Commands.add('logIn', () => {
	cy.visit(`${url}`)
	cy.viewport(1200, 900)
	cy.origin('https://qa-washmetrix.auth.us-east-1.amazoncognito.com', () => {
		cy.get('#signInFormUsername').type('balaraju.vemula@zemosolabs.com', {
			force: true,
		})
		cy.get('#signInFormPassword').type('355414R@j', { force: true })
		cy.wait(3000)
		cy.get('[class="btn btn-primary submitButton-customizable"]').click({
			multiple: true,
			force: true,
		})
	})
})

Cypress.Commands.add('taggedIt', (tags, callback) => {
	if (Cypress.env('TAGS')) {
		const testTags = Cypress.env('TAGS').split(',')
		if (testTags.some((tag) => tags.includes(tag))) {
			callback()
		} else {
			it.skip()
		}
	} else {
		callback()
	}

	Cypress.Commands.add('loadConfig', () => {
		let envConfig = {}
		env = Cypress.env('env')
		console.log(env)
		switch (Cypress.env('env')) {
			case 'dev':
				envConfig = require('../../cypress.dev.config')
				break
			case 'qa':
				envConfig = require('../../cypress.qa.config')
				break
			case 'prod':
				envConfig = require('../../cypress.production.config')
				break
			default:
				throw new Error(`Unknown environment: ${Cypress.env('env')}`)
		}
		Cypress.config('env', envConfig)
	})
})
