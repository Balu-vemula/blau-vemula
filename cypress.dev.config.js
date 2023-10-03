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
			require('cypress-mochawesome-reporter/plugin')(on)
			allureWriter(on, config)

			return config
			this.screenshotOnRunFailure = true
			// implement node event listeners here
		},
		env: {
			// allureReuseAfterSpec: true
			APP_URL: 'dev.washmetrix.com',
			USER_NAME: 'lokeshreddy.sai@zemosolabs.com',
			PASSWORD: 'Lokesh3*',
			SelectedMonth1: "[data-value='Aug']",
			MonthValue: 'Aug-22',
			EnddateOfSecondMonth: "[aria-label*='September 30th']",
		},
	},
})
