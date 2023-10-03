const loadconfig = () => {
	let envConfig = {}
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
}
export default loadconfig
