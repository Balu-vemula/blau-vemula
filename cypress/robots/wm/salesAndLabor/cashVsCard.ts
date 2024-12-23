import cypress from "cypress";
import { BaseHands,BaseEyes,BaseDependencies } from "../../BaseRobot";
export class Dependencies extends BaseDependencies {
    loginWashmetrix() {
		this.washmetrixLogIn(Cypress.env('APP_URL'))
		cy.screenshot()
	}
}
export class RobotEyes extends BaseEyes{
	

	seesWashmetrixOrg() {
		this.wait(5000)
		this.seesDomVisible(Cypress.env('SelectOrganisation'))
	}
	seesSalesAndLaborIcon() {
		this.wait(5000)
		this.seesDomVisibleWithCustomMatcher('aria-label', 'Sales & Labor')
	}

	seesSalesAndLaborMOduleName() {
		this.seesTextWithClassAndIndex('flex.flex-col.gap-2 h5',0,'Sales & Labor')
	}

	seesTitleOfCashVsCard() {
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Cash v Card (YTD)'
		)
	}
	verifyingTheTitleOfCashVsCardWithDefaultDatePickerFrequency() {
		this.seesDomContainText(
			'[title*="Cash v Card"]',
			'Cash v Card (YTD)'
		)
	}
	seesTheGraphAndSaleValueForCashVsCardTileView() {
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
	veryfiesTheTitleOfCashVsCardTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(3000)
		this.seesDomVisible('div[title*="Cash v Card"]')
		this.seesDomContainText(
			'div[title*="Cash v Card"]',
			'Cash v Card'
		)
	}

	seesBackToAllSitesIsVisibleOnDrillDownView() {
		cy.wait(5000)
		this.seesDomContainText(
			'[class*="MuiTypography-root MuiTypography-body4 text-medium"]',
			'Back to Sales & Labor'
		)
	}
	seesTitleOfCashVsCardKPIDrillDownView() {
		this.seesDomVisible('div[class*=h-full] div>h4')
	}
	verifyingTitleOfCashVsCardKPIDrillDownView() {
		this.seesDomContainText('div[class*=h-full] div>h4', 'Cash v Card')
	}
	seesDatePickerIsVisibleOnDrillDownView() {
		this.seesDomVisible('button[aria-describedby="CASH_VS_CARD_TRANSACTIONS"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=h-full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable(text: any) {
		this.seesDomContainText('div[class*=h-full] div>h4', text)
	}
	seesEllipsIsVisibleForExportOption() {
		this.seesDomVisible('div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)')
	}
	seesGraphOnDrillDownView() {
		this.seesIdVisible('drill-down-CASH_VS_CARD_TRANSACTIONS')
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
	seesTheSortButtonsForTotalTransactions() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}

	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 2, text)
	}
	seesTheSortButtonsForCashTransactions() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 3, text)
	}
	seesTheSortButtonsForCashTransactionAmount() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}

	verifyingTheFifthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 4, text)
	}
	seesTheSortButtonsForCardTransactions() {
		this.seesDomVisible('th:nth-child(5) span:nth-child(1) span:nth-child(1)')
	}

	verifyingTheSixthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 5, text)
	}
	seesTheSortButtonsForCardTransactionAmount() {
		this.seesDomVisible('th:nth-child(6) span:nth-child(1) span:nth-child(1)')
	}

	verifyingTheSeventhColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 6, text)
	}
	seesTheSortButtonsForPercentageOfCashTransaction() {
		this.seesDomVisible('th:nth-child(7) span:nth-child(1) span:nth-child(1)')
	}

	verifyingTheEighthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 7, text)
	}
	seesTheSortButtonsForPercentageOfCardTransactions() {
		this.seesDomVisible('th:nth-child(8) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheNihthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 8, text)
	}
	verifyingTheTenthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 9, text)
	}
	verifyingTheSecondRowHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 10, text)
	}

	verifyTheDatePickerFrequenciesInDrillDownViewForCashVsCard() {
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
	verifyingTheCancelButtonInTheDatePickerInDrillDownViewForCashVsCard() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}
	verifyingTheApplyButtonInTheDatePickerInDrillDownViewFOrIndividualWash() {
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

export class RobotHands extends BaseHands{

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
	scrollToSeeDropDown(){
		this.scrollIntoElement('[id="dropdown"]',0)
	}
	scrollToSeeCashVsCardTileWithDefaultFrequency() {
		this.wait(2000)
		this.scrollIntoElement('[title*="Cash v Card (YTD)"]',0)
	}
	verifiyingTheTileWithDefaultFrequency() {
		this.intercept("POST",Cypress.env('CashVsCard'),"total_cash_amount_percentage")
		this.intercept("POST",Cypress.env('CashVsCard'),"total_card_amount_percentage")
	}
	verifyingMonthlyFrequency(){
		this.frequencyFilter("POST",Cypress.env('CashVsCard'),"monthly")
	}
	verifyingQuarterlyFrequency(){
		this.frequencyFilter("POST",Cypress.env('CashVsCard'),"quarterly")
	}
	verifyingYearlyFrequency(){
		this.frequencyFilter("POST",Cypress.env('CashVsCard'),"yearly")
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
	scrollToSeeCashVsCardAfterChangingtheFrequency() {
		this.wait(2000)
		this.scrollIntoElement('[title="Cash v Card "]',0)
	}

	clickOnCashVsCardhTile() {
		cy.wait(5000)
		this.clickOnDomElement('div[title*="Cash v Card"]')
	}
	scrollToSeePercentageOfCardtransaction() {
		this.scrollIntoElementWithOutIndex('th:nth-child(8) span:nth-child(1) span:nth-child(1)')
	}
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
	}
	scrollToSeeDatePicker(){
		this.scrollIntoElementWithOutIndex('button[aria-describedby="CASH_VS_CARD_TRANSACTIONS"]')
	}
	clickOnDatePickerInDrillDownView() {
		this.clickOnDomElement('[aria-describedby="CASH_VS_CARD_TRANSACTIONS"]')
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
	clicksOnAscendingOrderButtonInThePeriod() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			1
		)
	}
	clicksOnDescendingOrderButtonInThePeriod() {
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