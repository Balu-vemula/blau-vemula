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
	seesMembershipIcon() {
		this.wait(5000)
		this.seesDomVisibleWithCustomMatcher('aria-label', 'Membership')
	}
	seesTitleOfRedemptionRate() {
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Redemption Rate (MTD)'
		)
	}
	verifyingTheTitleOfRedemptionRateWithDefaultDatePickerFrequency(title:string) {
		this.seesDomContainText(
			'[title="Redemption Rate (MTD)"]',
			title
		)
	}
	seesDatepickerIsVisibleOnModuleView() {
		this.seesDomVisible('[aria-describedby="3"]')
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
	veryfingTheTitleOfRedemptionRateTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(4000)
		this.seesDomVisible('div[title="Redemption Rate "]')
		this.seesDomContainText(
			'div[title="Redemption Rate "]',
			'Redemption Rate '
		)
	}
	seesBacktoMembershipVisibleOnDrillDownView() {
		cy.wait(4000)
		this.seesDomContainText(
			'[class="MuiTypography-root MuiTypography-body4 text-medium css-vj9mig"]',
			'Back to Membership'
		)
	}
	seesDatePickerIsVisibleOnDrillDownView() {
		this.seesDomVisible('button[aria-describedby="CAPTURE_RATE"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable() {
		this.seesDomContainText('div[class*=full] div>h4', 'Redemption Rate')
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesGraphOnDrillDownView() {
		this.seesIdVisible('drill-down-CAPTURE_RATE')
		
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
	seesTheSortButtonsForNoOfCars() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 2, text)
	}
	seesTheSortButtonsForRedemptions() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 3, text)
	}
	seesTheSortButtonsForIndividualWashes() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFifthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 4, text)
	}
	seesTheSortButtonsForRedemptionRatePercentage() {
		this.seesDomVisible('th:nth-child(5) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSixthColumnHeaderOfTable(text: any) {	
		this.sessTextWithDomAndIndex('thead tr>th>span', 5, text)
	}
	seesTheSortButtonsForTotalSalesValue() {
		this.seesDomVisible('th:nth-child(6) span:nth-child(1) span:nth-child(1)')
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
	verifyTheCancelButtonInTheLocationInDrillDownViewForRedemptionRate() {
		this.seesDomVisible('div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)')
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInDrillDownViewForRedemptionRate() {
		this.seesDomVisible(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1,
			'Apply'
		)
	}
	verifyTheDatePickerFrequenciesInDrillDownViewForRedemptionRate() {
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
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForRedemptionRate() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewForRedemptionRate() {
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
	verifyingTheMembershipModuleHeader() {
		this.seesDomContainText('[class="flex flex-col gap-2"]', 'Membership')
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
	clickOnMembershipIcon() {
		this.clickOnDomElement('[aria-label="Membership"]')
	}
	scrollingIntoOrganisation() {
		// this.scrollIntoElement(Cypress.env('SelectOrganisation'), 0)
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}
	scrollingIntoRedemptionRateTile() {
		this.scrollIntoElement('[title*="Redemption Rate"]', 0)
	}
	scrollingIntoRedemptionRateTileAfterChangingTheFrequencyFromDefault() {
		this.scrollIntoElement('[title="Redemption Rate "]', 0)
	}
	verifiyingTheTileWithDefaultFrequency(apiUrl: string, propertyName: string){
		this.intercept("POST", apiUrl, propertyName)
	}
	verifyingMonthlyFrequency(apiUrl:string){
		cy.wait(5000)
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
		this.clickOnDomElement('[aria-describedby="3"]')
	}
	scrollingToSeeDatePicker() {
		this.scrollIntoElementWithOutIndex('[aria-describedby="3"]')
	}
	selectsTrailing12OnTileView() {
        this.clickOnDomElement(
            'button[id="trailing12"]'
        )
        this.clickOnDomElement('div[role="presentation"] div div:nth-child(2) button:nth-child(2)')
    }
	clickOnCaptureRateTile() {
		cy.wait(5000)
		this.clickOnDomElement ('div[title="Redemption Rate "]')
	}

	clickOnTopNavigationBarInDrillDownView() {
		this.clickOnDomElement('[class*="MuiTypography-root MuiTypography-body4 normal-case text-high"]'
        )
    }
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
	}
	clickOnDatePickerInDrillDownView() {
		this.clickOnDomElement('[aria-describedby="CAPTURE_RATE"]')
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
	clickOnLocationDropDownApplyButton() {
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
	clicksOnAscendingOrderNoOfCarsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			3
		)
	}
	clicksOnDescendingOrderNoOfCarsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			2
		)
	}
	clicksOnAscendingOrderRedemptionsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			5
		)
	}
	clicksOnDescendingOrderRedemptionsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			4
		)
	}
	clicksOnAscendingOrderIndividualWashesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			7
		)
	}
	clicksOnDescendingOrderIndividualWashesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			6
		)
	}
	clicksOnAscendingOrderCaptureRatePercentageButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			9
		)
	}
	clicksOnDescendingOrderCaptureRatePercentageButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			8
		)
	}

	clicksOnAscendingOrderTotalSalesValueButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			11
		)
	}
	clicksOnDescendingOrderTotalSalesValueButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			10
		)
	}

	clicksOnElipsisIconOnDrillDownView() {
		this.clickOnDomElement('[class="flex items-center gap-2"] button')
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
	scrollingIntoVerifyingTheContextOfHeaderOfTable() {
		this.scrollIntoElement('thead tr>th>span', 5)
	}
}



