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
			APP_URL: 'qa.washmetrix.com',
			USER_NAME: 'balaraju.vemula@zemosolabs.com',
			PASSWORD: '3554145R@j',
			SelectedMonth1: "[data-value='Jul']",
			MonthValue: 'Jul-22',
			EnddateOfSecondMonth: "[aria-label*='August 31st']",
		},
	},
})
