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

	seesTitleOfKPI(locator:string,title:string) {
		this.wait(5000)
		this.seesDomContainText(
			locator,
			title
		)
	}
	verifyingTheTitleWithDefaultDatePickerFrequency(locater:string,title:string) {
		this.wait(7000)
		this.seesDomContainText(
			locater,
			title
		)
	}
	seesDatepickerIsVisibleOnModuleView() {
		this.seesDomVisible('[aria-describedby="4"]')
	}
	veryfingTheTitleOfTileViewAfterChangingTheFrequencyFromDefault(locater:string,title:string) {
		this.wait(7000)
		this.seesDomContainText(
			locater,
			title
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
		this.seesDomVisible('div[class="mt-3 flex  items-center justify-between"] button',)
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable(text: any) {
		this.seesDomContainText('div[class*=h-full] div>h4', text)
	}
	seesGraphOnDrillDownView() {
		this.wait(3000)
		this.seesDomVisible('div[id*="drill-down-PROFIT_AND_LOSS_COMPARISON"]')
		
	}
	seesTableOnDrillDownView() {
		this.seesDomVisible('div[class]>table')
	}

	verifyingTheFirstColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 0, text)
	}
	verifyingTheSecondColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('tbody tr>td:nth-child(1)', 0, text)
	}
	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('tbody tr>td:nth-child(1)', 1, text)
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('tbody tr>td:nth-child(1)', 2, text)
	}
	verifyingTheFifthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('tbody tr>td:nth-child(1)', 3, text)
	}
	verifyingTheSixthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('tbody tr>td:nth-child(1)', 4, text)
	}
	verifyingTheSevenColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('tbody tr>td:nth-child(1)', 5, text)
	}
	verifyingTheEightColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('tbody tr>td:nth-child(1)', 6, text)
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
	verifyTheCancelButtonInTheLocationInDrillDownViewForProfitAndLoss() {
		this.seesDomVisible('div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)')
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInDrillDownViewForProfitAndLoss() {
		this.seesDomVisible(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1,
			'Apply'
		)
	}

	verifyingStartTimeOnTheTable() {
		this.sessTextWithDomAndIndex(
			'thead tr>th>span',
			1,
			Cypress.env('YearValue')
		)
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

}

export class RobotHands extends BaseHands {
	clickOnWashmetrixCarWashOrg() {
		this.wait(3000)
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}

	clickOnAccountingIcon() {
		this.clickOnDomElement('[aria-label="Financials"]')
	}

	scrollingIntoOrganisation() {
		//cy.reload()
		this.wait(10000)
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
		this.wait(3000)
	}

	scrollingIntoTile(locater:string,title:number) {
		this.wait(10000)
		this.scrollIntoElement(
			locater,
			title,
	)
	}

	scrollingIntoTileAfterChangingTheFrequencyFromDefault(locater:string,title:number) {
		this.wait(5000)
		this.scrollIntoElement(
			locater, 
			title
		)
	}

	verifiyingTheTileWithDefaultFrequency(apiUrl: string, propertyName: string){
		this.intercept("POST", apiUrl, propertyName)
	}

	verifyingQuarterlyFrequency(apiUrl:string){
		cy.reload()
		cy.wait(5000)
		this.frequencyFilter("POST",apiUrl,"quarterly")
	}

	verifyingYearlyFrequency(apiUrl:string){
		this.frequencyFilter("POST",apiUrl,"yearly")
	}

	scrollingToSeeDatePicker() {
		this.scrollIntoElementWithOutIndex('[aria-describedby="4"]')
	}
	clicksOnDatePicker() {
		this.clickOnDomElement('[aria-describedby="4"]')
	}
	selectsTrailing12OnTileView() {
		this.clickOnDomElement(
			'button[id="trailing12"]'
		)
		this.clickOnDomElement('div[role="presentation"] div div:nth-child(2) button:nth-child(2)')
	}
	clickOnTile(title:string) {
		this.wait(3000)
		this.clickOnDomElement (
        title
	)
	}
	clickOnTopNavigationBarInDrillDownView() {
		this.clickOnDomElement('[class*="MuiTypography-root MuiTypography-body4 normal-case text-high"]'
		)
	}
	clickOnLocationDropDownApplyButton() {
		this.clickOnDomElementWithIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1
		)
	}
	clickOnYearlyInFirstDropDown() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 2)
		this.wait(3000)
	}	
	
	selectYearFromTheYearlyInFirstDropDown(){
		this.clickOnDomElement('[data-value="2023"]')

	}

	clickOnYearlyInSecondDropDown() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 1)
		this.wait(3000)
	}	
	
	selectYearFromTheYearlyInSecondDropDown(){
		this.clickOnDomElement('[data-value="2024"]')

	}
	
	clickOnQuarterlyInFirstDropDown() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 2)
		this.wait(3000)
	}	
	
	selectQuarterFromTheQuarterlyInFirstDropDown(){
		this.clickOnDomElement('[data-value="Q2-2024"]')

	}

	clickOnQuarterlyInSecondDropDown() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 1)
		this.wait(3000)
	}	
	
	selectQuarterFromTheQuarterlyInSecondDropDown(){
		this.clickOnDomElement('[data-value="Q2-2023"]')

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

}



