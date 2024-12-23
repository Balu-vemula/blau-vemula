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
	seesAccountingIcon() {
		this.wait(5000)
		this.seesDomVisibleWithCustomMatcher('aria-label', 'Financials')
	}
	seesTitleOfAvgCostPerCar() {
		this.wait(5000)
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Cost Per Car (YTD)'
		)
	}
	verifyingTheTitleOfAvgCostPerCarWithDefaultDatePickerFrequency(title:string) {
		this.wait(7000)
		this.seesDomContainText(
			'[title*="Cost Per Car"]',
			title
		)
	}
	seesDatepickerIsVisibleOnModuleView() {
		this.seesDomVisible('[aria-describedby="4"]')
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
	veryfingTheTitleOfAvgCostPerCarTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(5000)
		this.seesDomVisible('div[title="Cost Per Car "]')
		this.seesDomContainText(
			'div[title="Cost Per Car "]',
			'Cost Per Car '
		)
	}
	seesBacktoAccountingVisibleOnDrillDownView() {
		cy.wait(4000)
		this.seesDomContainText(
			'[class*="MuiTypography-root MuiTypography-body4 text-medium"]',
			'Back to Financials'
		)
	}
	seesDatePickerIsVisibleOnDrillDownView() {
		this.wait(3000)
		this.seesDomVisible('button[aria-describedby="AVERAGE_COST_PER_CAR"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable() {
		this.seesDomContainText('div[class*=full] div>h4', 'Cost Per Car')
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesGraphOnDrillDownView() {
		this.wait(3000)
		this.seesIdVisible('drill-down-AVERAGE_COST_PER_CAR')
		
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
	seesTheSortButtonsForNoofCars() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 2, text)
	}
	seesTheSortButtonsForTotalCosts() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 3, text)
	}
	seesTheSortButtonsForTotalCostPerCar() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}
	seesTheSerchBoxAfterClickingTheTopNavigationBar() {
		this.seesDomVisible('input[placeholder="Search Site/Locations"]')
	}
	verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView() {
		this.seesDomVisible('input[placeholder="Search Site/Locations"]')
	}
	verifyingTheTopNavigationBarLocationsInDrillDownView() {
		this.seesDomVisible('div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > div:nth-child(3)')
	}
	verifyTheCancelButtonInTheLocationInDrillDownViewForAvgCostPerCar() {
		this.seesDomVisible('div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)')
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInDrillDownViewForAvgCostPerCar() {
		this.seesDomVisible(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1,
			'Apply'
		)
	}
	verifyTheDatePickerFrequenciesInDrillDownViewForAvgCostPerCar() {
		const frequenciesOnDrilldownView: string[] = [ 
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
		for (let i = 0; i < frequenciesOnDrilldownView.length; i++) {
			this.seesDomContainText(
				'div[role="presentation"] div[class]>button>span',
				frequenciesOnDrilldownView[i]
			)
		}
	}
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForAvgCostPerCar() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewForAvgCostPerCar() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			1,
			'Apply'
		)
	}
	verifyingStartTimeOnTheTable() {
		this.sessTextWithDomAndIndex(
			'tbody tr td',
			0,
			Cypress.env('MonthValue')
		)
	}
	verifyingTheAccordianIconNextToTheMonthInTheTable() {
		this.seesDomVisible('tbody tr td div span:nth-child(2)')
	}
	verifyingTheExportButtonIsVisible() {
		this.seesDomVisible('div[class*="flex flex-col rounded"] button')
	}
	verifyingTheAccountingModuleHeader() {
		this.seesDomContainText('[class="flex flex-col gap-2"]', 'Financials')
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
	clicOnSignInAsButton() {
		this.clickOnMultipleDomElements('[class="btn btn-primary submitButton-customizable"]')
	}
	clickOnWashmetrixCarWashOrg() {
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}
	clickOnAccountingIcon() {
		this.clickOnDomElement('[aria-label="Financials"]')
	}
	scrollingIntoOrganisation() {
		cy.reload()
		this.wait(10000)
		// this.scrollIntoElement(Cypress.env('SelectOrganisation'), 0)
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
		// this.scrollToNotVisibleElement(Cypress.env('OrgTitle'))
	}
	scrollingIntoAvgCostPerCarTile() {
		this.wait(10000)
		this.scrollIntoElement('[title*="Cost Per Car"]', 0)
	}
	scrollingIntoAvgCostPerCarTileAfterChangingTheFrequencyFromDefault() {
		this.wait(5000)
		this.scrollIntoElement('[title="Cost Per Car "]', 0)
	}
	verifiyingTheTileWithDefaultFrequency(apiUrl: string, propertyName: string){
		this.intercept("POST", apiUrl, propertyName)
	}
	verifyingMonthlyFrequency(apiUrl:string){
		this.frequencyFilter("POST",apiUrl,"monthly")
	}
	verifyingQuarterlyFrequency(apiUrl:string){
		cy.reload()
		cy.wait(5000)
		this.frequencyFilter("POST",apiUrl,"quarterly")
	}
	verifyingYearlyFrequency(apiUrl:string){
		this.frequencyFilter("POST",apiUrl,"yearly")
	}
	clicksOnDatePicker() {
		this.clickOnDomElement('[aria-describedby="4"]')
	}
	scrollingToSeeDatePicker() {
		this.scrollIntoElementWithOutIndex('[aria-describedby="4"]')
	}
	selectsTrailing12OnTileView() {
		this.clickOnDomElement(
			'button[id="trailing12"]'
		)
		this.clickOnDomElement('div[role="presentation"] div div:nth-child(2) button:nth-child(2)')
	}
	clickOnAvgCostPerCarTile() {
		cy.wait(5000)
		this.clickOnDomElement ('div[title="Cost Per Car "]')
	}

	clickOnTopNavigationBarInDrillDownView() {
		this.clickOnDomElement('[class*="MuiTypography-root MuiTypography-body4 normal-case text-high"]'
		)
	}
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
	}
	clickOnDatePickerInDrillDownView() {
		this.wait(3000)
		this.clickOnDomElement('[aria-describedby="AVERAGE_COST_PER_CAR"]')
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
	clickOnLocationsDropDownApplyButton() {
		this.clickOnDomElementWithIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1
		)
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
	clicksOnAscendingOrderPeriodButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			1
		)
	}
	clicksOnDescendingOrderPeriodButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			0
		)
	}
	clicksOnAscendingOrderNoofCarsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			3
		)
	}
	clicksOnDescendingOrderNoofCarsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			2
		)
	}
	clicksOnAscendingOrderTotalCostsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			5
		)
	}
	clicksOnDescendingOrderTotalCostsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			4
		)
	}
	clicksOnAscendingOrderTotalCostPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			7
		)
	}
	clicksOnDescendingOrderTotalCostPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			6
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
		cy.wait(3000)
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



