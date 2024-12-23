import { BaseHands, BaseEyes, BaseDependencies } from '../../BaseRobot'

export class Dependencies extends BaseDependencies {
	loginWashmetrix() {
		this.washmetrixLogIn(Cypress.env('APP_URL'))
		cy.screenshot()
	}
}
export class RobotEyes extends BaseEyes {
	seesWashmetrixOrg() {
		this.wait(5000)
		this.seesDomVisible(Cypress.env('SelectOrganisation'))
	}
	seesSalesAndLaborIcon() {
		this.wait(5000)
		this.seesDomVisibleWithCustomMatcher('aria-label', 'Sales & Labor')
	}
	seesTitleOfIndividualWash() {
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Individual Washes (MTD)'
		)
	}
	verifyingTheTitleOfIndividualWashWithDefaultDatePickerFrequency() {
		this.seesDomContainText(
			'[title*="Individual Washes"]',
			'Individual Washes (MTD)'
		)
	}
	seesTheGraphAndSaleValueForIndividualWashonTileView() {
		// this.seesElementIsVisibleWhenTheOtherElementISPresent(
		// 	'div[title="Individual Washes (Month To Date)"] h1',
		// 	'#INDIVIDUAL_WASHES'
		// )
	}
	seesDatepickerIsVisibleOnModuleView() {
		this.seesDomVisible('[aria-describedby="2"]')
	}
	seesTextForDatePickerFrequency() {
		const frequencies: string[] = [
			'Current',
			'Today',
			'Current Week',
			'Current Month',
			'Current Quarter',
			'Current Year',
			'Yesterday',
			'Last Week',
			'Last Month',
			'Last Quarter',
			'Last Year',
			'Trailing 12',
		]
		for (let i = 0; i < frequencies.length; i++) {
			this.seesDomContainText(
				'div[role="presentation"] div[class]>button>span',
				frequencies[i]
			)
		}
	}
	veryfiesTheTitleOfIndividualWashTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(3000)
		this.seesDomVisible('div[title="Individual Washes "]')
		this.seesDomContainText(
			'div[title="Individual Washes "]',
			'Individual Washes '
		)
	}
	seesBackToAllSitesVisibleOnDrillDownView() {
		cy.wait(5000)
		this.seesDomContainText(
			'[class*="MuiTypography-root MuiTypography-body4 text-medium"]',
			'Back to Sales & Labor'
		)
	}
	seesDatePickerIsVisibleOnDrillDownView() {
		this.seesDomVisible('button[aria-describedby="INDIVIDUAL_WASHES"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=h-full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable(text: any) {
		this.seesDomContainText('div[class*=h-full] div>h4', text)
	}
	seesEllipsIsForExportOption() {
		this.seesDomVisible('div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)')
	}
	seesGraphOnDrillDownView() {
		this.seesIdVisible('drill-down-INDIVIDUAL_WASHES')
	}
	seesTableOnDrillDownView() {
		this.seesDomVisible('div[class]>table')
	}

	verifyingTheFirstColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 0, text)
	}
	seesTheSortButtonsForPeriod() {
		this.seesDomVisible('th:nth-child(1) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSecondColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 1, text)
	}
	seesTheSortButtonsForWashes() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 2, text)
	}
	seesTheSortButtonsForPercentage() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 3, text)
	}
	seesTheSortButtonsForCash() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFifthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 4, text)
	}
	seesTheSortButtonsForCard() {
		this.seesDomVisible('th:nth-child(5) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSixthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 5, text)
	}
	verifyingTheSeventhColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 6, text)
	}
	verifyingTheEightColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 7, text)
	}
	verifyingTheSecondRowHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 8, text)
	}
	verifyTheDatePickerFrequenciesInDrillDownViewForIndividualWash() {
		const frequenciesOnDrilldownView: string[] = [
			'Current',
			'Current Month',
			'Current Quarter',
			'Current Year',
			'Last Month',
			'Last Quarter',
			'Last Year',
			'Trailing 12',
		]
		for (let i = 0; i < frequenciesOnDrilldownView.length; i++) {
			this.seesDomContainText(
				'div[role="presentation"] div[class]>button>span',
				frequenciesOnDrilldownView[i]
			)
		}
	}
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForIndividualWash() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrIndividualWash() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			1,
			'Apply'
		)
	}
	VerifyingMonthNameOnTheTableAccordingToTheSelection() {
		this.sessTextWithDomAndIndex(
			'tbody tr td div span',
			0,
			Cypress.env('MonthValue')
		)
	}
	verifyingTheAccordianIconNextToTheMonthInTheTable() {
		// this.seesDomVisible('tbody tr td div span:nth-child(2)')
		this.seesDomElementWithIndex('tbody tr td div span',1)
	}
	verifyingTheExportButtonIsVisible() {
		this.seesDomVisible('div[class*="flex flex-col rounded"] button')
	}
	verifyingTheSalesAndLaborModuleHeader() {
		this.seesDomContainText('[class="flex flex-col gap-2"]', 'Sales & Labor')
	}
	seesFrequencyFilter(){
		this.seesIdVisible("dropdown")
	}
	seesQuarterlyFilterOption(){
		this.seesDomVisible('[data-value="quarterly"]')
	}
	seesYearlyFilterOption(){
		this.seesDomVisible('[data-value="yearly"]')
	}
	seesMonthlyFilterOption(){
		this.seesDomVisible('[data-value="monthly"]')
	}
}
export class RobotHands extends BaseHands {
	scrollToSeeWashmetrixCarWashOrg(){
		this.wait(3000)
		// this.scrollIntoElementWithOutIndex(Cypress.env('SelectOrganisation'))
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}
	
	clickOnWashmetrixCarWashOrg() {
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}
	clickOnSalesAndLaborIcon() {
		this.clickOnDomElement('[aria-label="Sales & Labor"]')
	}
	scrollingIntoIndividualWashTile() {
		this.scrollIntoElement('[title*="Individual Washes"]', 0)
		cy.reload()
	}
	scrollToDropdown(){
		this.scrollIntoElement('[id="dropdown"]', 0)
	}
	scrollToTitle(){
		this.scrollIntoElement('div[class*=h-full] div>h4', 0)
	}
	verifiyingTheTileWithDefaultFrequency(){
		this.intercept("POST",Cypress.env('INDIVIDUAL_WASH'),"total_wash_count")
	}
	verifyingMonthlyFrequency(){
		this.frequencyFilter("POST",Cypress.env('INDIVIDUAL_WASH'),"monthly")
	}
	verifyingQuarterlyFrequency(){
		this.frequencyFilter("POST",Cypress.env('INDIVIDUAL_WASH'),"quarterly")
	}
	verifyingYearlyFrequency(){
		this.frequencyFilter("POST",Cypress.env('INDIVIDUAL_WASH'),"yearly")
	}
	clicksOnDatePicker() {
		this.clickOnDomElement('[aria-describedby="2"]')
	}
	scrollingTOSeeDatePicker() {
		this.scrollIntoElementWithOutIndex('[aria-describedby="2"]')
	}
	selectsTrailing12OnTileView() {
		this.clickOnDomElement(
			'button[id="trailing12"]'
		)
		this.clickOnDomElement('div[role="presentation"] div div:nth-child(2) button:nth-child(2)')
	}
	clickOnIndividualWashTile() {
		cy.wait(5000)
		this.clickOnDomElement('div[title="Individual Washes "]')
		cy.reload()
	}
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
	}
	clickOnDatePickerInDrillDownView() {
		this.clickOnDomElement('[aria-describedby="INDIVIDUAL_WASHES"]')
	}
	clickOnYearDropDownInTheDatePicker() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 2)
	}
	selectYearFromTheYearDropDownInDatePicker() {
		this.clickOnDomElement('[data-value="2022"]')
	}
	clickOnMonthDropDownInTheDatePicker() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 1)
	}
	selectMonthFromTheMonthlyDropDownInDatePicker() {
		this.clickOnDomElement(Cypress.env('SelectedMonth1'))
	}
	selectFirstDayInTheDateRange() {
		this.clickOnDomElementWithIndex(
			'[class*="react-datepicker__day react-datepicker__day--001"]',
			0
		)
	}
	clickOnNextMonthIcon() {
		this.clickOnDomElement('[data-testid="ArrowRightIcon"]')
	}
	selectLastDayInTheDateRange() {
		this.clickOnDomElement(Cypress.env('EnddateOfSecondMonth'))
	}
	clickOnApplyButton() {
		this.clickOnDomElementWithIndex(
			'div[role="presentation"] div:nth-child(2) button',
			1
		)
	}
	verifiesFunctionalityOfAccordianInTheTable() {
		this.clickOnDomElementWithIndex('tbody tr td div span', 1)
	}
	clicksOnAscendingOrderButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			1
		)
	}
	clicksOnDescendingOrderButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			0
		)
	}
	clicksOnElipsisIconOnDrillDownView() {
		this.clickOnDomElement('div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)')
	}
	clicksOnExportOption() {
		this.clickOnDomElement('div[class*="flex flex-col rounded"] button')
	}
	clickingOnEscapeButtonToCloseTheExportOption() {
		this.typeTextOnDomElement(
			'div[class*="flex flex-col rounded"] button',
			'{esc}'
		)
	}
	clickOnBackToAllSitesButton() {
		this.clickOnDomElement(
			'[class*="MuiTypography-root MuiTypography-body4 text-medium"]'
		)
	}
	clickOnFrequencyFilter(){
		cy.wait(5000)
		this.clickOnId('dropdown')
	}
	clickOnQuarterlyFilterOption(){
		this.clickOnDomElement('[data-value="quarterly"]')
	}
	clickOnYearlyFilterOption(){
		this.clickOnDomElement('[data-value="yearly"]')
	}
	clickOnMonthlyFilterOption(){
		this.clickOnDomElement('[data-value="monthly"]')
	}
}
