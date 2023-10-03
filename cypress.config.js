const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportDir: 'cypress/reports',
		charts: true,
		reportPageTitle: 'My Test Suite',
		embeddedScreenshots: true,
		inlineAssets: true,
	},
	e2e: {
		experimentalStudio: true,
		chromeWebSecurity: false,
		experimentalSessionAndOrigin: true,
		experimentalSessionSupport: true,
		testIsolation: false,
		setupNodeEvents(on, config) {
			// const envName = config.env.envName
			// const envFileName = `./${envName}.json`
			// const settings = require(envFileName)
			require('cypress-mochawesome-reporter/plugin')(on)
			allureWriter(on, config)

			return config
			this.screenshotOnRunFailure = true
			// implement node event listeners here
		},
		env: {
			// allureReuseAfterSpec: true
			APP_URL: 'qa.washmetrix.com',
			USER_NAME: 'balaraju.vemula@zemosolabs.com',
			PASSWORD: '3554145R@j',
			SelectedMonth1: "[data-value='Jun']",
			MonthValue: 'Jun-22',
			EnddateOfSecondMonth: "[aria-label*='July 31st']",
			dev: require('./cypress.dev.config'),
			qa: require('./cypress.qa.config'),
			prod: require('./cypress.production.config'),
		},
	},
})
