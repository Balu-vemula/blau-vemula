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
	seesTitleOfAvgNetIncomePerCar() {
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Net Income Per Car (YTD)'
		)
	}
	verifyingTheTitleOfAvgNetIncomePerCarWithDefaultDatePickerFrequency(title:string) {
		this.seesDomContainText(
			'[title*="Net Income Per Car"]',
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
	veryfingTheTitleOfAvgNetIncomePerCarTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(4000)
		this.seesDomVisible('div[title="Net Income Per Car "]')
		this.seesDomContainText(
			'div[title="Net Income Per Car "]',
			'Net Income Per Car '
		)
	}
	seesBacktoAccountingVisibleOnDrillDownView() {
		cy.wait(4000)
		this.seesDomContainText(
			'[class*="MuiTypography-root MuiTypography-body4"]',
			'Back to Financials'
		)
	}
	seesDatePickerIsVisibleOnDrillDownView() {
		this.wait(3000)
		this.seesDomVisible('button[aria-describedby="AVERAGE_NET_INCOME_PER_CAR"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable() {
		this.seesDomContainText('div[class*=full] div>h4', 'Net Income Per Car')
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesGraphOnDrillDownView() {
		this.wait(3000)
		this.seesIdVisible('drill-down-AVERAGE_NET_INCOME_PER_CAR')
		
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
	seesTheSortButtonsForIncome() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 3, text)
	}
	seesTheSortButtonsForCOGS() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFifthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 4, text)
	}
	seesTheSortButtonsForTotalCosts() {
		this.seesDomVisible('th:nth-child(5) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSixthColumnHeaderOfTable(text: any) {	
		this.sessTextWithDomAndIndex('thead tr>th>span', 5, text)
	}
	seesTheSortButtonsForNetOperatingIncome() {
		this.seesDomVisible('th:nth-child(6) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSevenColumnHeaderOfTable(text: any) {
		this.wait(3000)
		this.sessTextWithDomAndIndex('thead tr>th>span', 6, text)
	}
	seesTheSortButtonsForNetIncome() {
		this.seesDomVisible('th:nth-child(7) span:nth-child(1) span:nth-child(1)')	
	}
	verifyingTheEightColumnHeaderOfTable(text: any) {		
		this.sessTextWithDomAndIndex('thead tr>th>span', 7, text)
	}
	seesTheSortButtonsForNetIncomePerCar() {
		this.seesDomVisible('th:nth-child(8) span:nth-child(1) span:nth-child(1)')
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
	verifyTheCancelButtonInTheLocationInDrillDownViewForAvgNetIncomePerCar() {
		this.seesDomVisible(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInDrillDownViewForAvgNetIncomePerCar() {
		this.seesDomVisible(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1,
			'Apply'
		)
	}
	verifyTheDatePickerFrequenciesInDrillDownViewForAvgNetIncomePerCar() {
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
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForAvgNetIncomePerCar() {
		this.seesDomVisible(
			'div[id="AVERAGE_NET_INCOME_PER_CAR"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="AVERAGE_NET_INCOME_PER_CAR"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewForAvgNetIncomePerCar() {
		this.seesDomVisible(
			'div[id="AVERAGE_NET_INCOME_PER_CAR"] div:nth-child(2) button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="AVERAGE_NET_INCOME_PER_CAR"] div:nth-child(2) button',
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
	clickOnWashmetrixCarWashOrg() {
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}
	clickOnAccountingIcon() {
		this.clickOnDomElement('[aria-label="Financials"]')
	}
	scrollingIntoOrganisation() {
		// this.scrollIntoElement(Cypress.env('SelectOrganisation'), 0)
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}
	scrollingIntoAvgNetIncomePerCarTile() {
		this.wait(5000)
		this.scrollIntoElement('[title*="Net Income Per Car"]', 0)
	}
	scrollingIntoAvgNetIncomePerCarTileAfterChangingTheFrequencyFromDefault() {
		this.scrollIntoElement('[title="Net Income Per Car "]', 0)
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
	clickOnAvgNetIncomePerCarTile() {
		cy.wait(5000)
		this.clickOnDomElement ('div[title="Net Income Per Car "]')
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
		this.clickOnDomElement('[aria-describedby="AVERAGE_NET_INCOME_PER_CAR"]')
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
	clicksOnLocationDropDownApplyButton() {
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
			'div[id="AVERAGE_NET_INCOME_PER_CAR"] div:nth-child(2) button',
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
	clicksOnAscendingOrderIncomeButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			5
		)
	}
	clicksOnDescendingOrderIncomeButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			4
		)
	}
	clicksOnAscendingOrderCOGSButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			7
		)
	}
	clicksOnDescendingOrderCOGSButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			6
		)
	}
	clicksOnAscendingOrderTotalCostsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			9
		)
	}
	clicksOnDescendingOrderTotalCostsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			8
		)
	}

	clicksOnAscendingOrderNetOperatingIncomeButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			11
		)
	}
	clicksOnDescendingOrderNetOperatingIncomeButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			10
		)
	}
	clicksOnAscendingOrderNetIncomeButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			13
		)
	}
	clicksOnDescendingOrderNetIncomeButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			12
		)
	}
	clicksOnAscendingOrderNetIncomePerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			15
		)
	}
	clicksOnDescendingOrderNetIncomePerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			14
		)
	}
	clicksOnElipsisIconOnDrillDownView() {
		this.clickOnDomElement('div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button')
	}
	clicksOnExportOption() {
		this.clickOnDomElement('div[class*="flex flex-col rounded"] button')
	}
	clickingOnEscapeButtonToCloseTheExportOption() {
		this.typeTextOnDomElement(
			'div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button',
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
	scrollingIntoVerifyingTheContextOfHeaderOfTable() {
		this.scrollIntoElement('thead tr>th>span', 7)
	}
}



