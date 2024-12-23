import { post } from 'cypress/types/jquery'
import { BaseHands, BaseEyes, BaseDependencies } from '../../BaseRobot'
import { should } from 'chai'
import cypress from 'cypress'

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
	seesTitleOfConversionRate() {
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Conversion Rate (MTD)'
		)
	}
	verifyingTheTitleOfConversionRateWithDefaultDatePickerFrequency(title:string) {
		this.seesDomContainText(
			'[title="Conversion Rate (MTD)"]',
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
	veryfingTheTitleOfConversionRateTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(5000)
		this.seesDomVisible('div[title="Conversion Rate "]')
		this.seesDomContainText(
			'div[title="Conversion Rate "]',
			'Conversion Rate '
		)
	}
	seesBacktoMembershipVisibleOnDrillDownView() {
		cy.wait(4000)
		this.seesDomContainText(
			'[class="MuiTypography-root MuiTypography-body4 text-medium css-vj9mig"]',
			'Back to Membership'
		)
	}
	seesTopNavigationBarIsVisibleOnDrillDownView() {
		this.seesDomContainText('[class="MuiTypography-root MuiTypography-body4 normal-case text-high css-vj9mig"]',
		'Location'
		)
	}
	seesDatePickerIsVisibleOnDrillDownView() {
		this.seesDomVisible('button[aria-describedby="AVG_DAILY_CONVERSION_RATE"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable() {
		this.seesDomContainText('div[class*=full] div>h4', 'Membership Sales')
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesGraphOnDrillDownView() {
		this.seesIdVisible('drill-down-AVG_DAILY_CONVERSION_RATE')
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
	seesTheSortButtonsForMembers() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 2, text)
	}
	seesTheSortButtonsForSales() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 3, text)
	}
	seesTheSortButtonsForAverageTicket() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFifthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 4, text)
	}
	seesTheSortButtonsForIndividualWashes() {
		this.seesDomVisible('th:nth-child(5) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSixthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 5, text)
	}	
	seesTheSerchBoxAfterClickingTheTopNavigationBar() {
		this.seesDomVisible('input[placeholder="Search Site/Locations')
	}
	verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView() {
		this.seesDomVisible('input[placeholder="Search Site/Locations')
	}
	verifyingTheTopNavigationBarLocationsInDrillDownView() {
		this.seesDomVisible('div[class="styled-scroll max-h-[calc(38vh-74px)] overflow-hidden overflow-y-auto"]')
	}
	verifyTheCancelButtonInTheLocationInDrillDownViewForConversionRate() {
		this.seesDomVisible(
			'div[class="flex h-16 items-center justify-between pb-2 pt-1"] button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[class="flex h-16 items-center justify-between pb-2 pt-1"] button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInDrillDownViewForConversionRate() {
		this.seesDomVisible(
			'div[class="flex h-16 items-center justify-between pb-2 pt-1"] button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[class="flex h-16 items-center justify-between pb-2 pt-1"] button',
			1,
			'Apply'
		)
	}
    verifyTheDatePickerFrequenciesInDrillDownViewForConversionRate() {
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
		for (let i = 1; i < frequenciesOnDrilldownView.length; i++) {
			this.seesDomContainText(
				'div[role="presentation"] div[class]>button>span',
				frequenciesOnDrilldownView[i]
			)
		}
	}
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForConversionRate() {
		this.seesDomVisible(
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewForConversionRate() {
		this.seesDomVisible(
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button',
			1,
			'Apply'
		)
	}
	verifyingStartTimeOnTheTable() {
		this.wait(3000)
		this.sessTextWithDomAndIndex(
			'tbody tr td',
			0,
			Cypress.env('MonthValue'),
		)
	}
	verifyingTheAccordianIconNextToTheMonthInTheTable() {
		this.seesDomVisible('tbody tr td div span:nth-child(2)')
	}
	verifyingTheExportButtonIsVisible() {
		this.seesDomVisible('[class="flex items-center gap-2"] button')
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
	seesDailyFilterOption(){
		this.seesDomVisible('[data-value="daily"]')
	}
	seesMonthlyFilterOption(){
		this.seesDomVisible('[data-value="monthly"]')
	}
	verifyTheCancelButtonInTheDatePickerInTileViewForConversionRate() {
		this.seesDomVisible(
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInTileViewForConversionRate() {
		this.seesDomVisible(
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button',
			1,
			'Apply'
		)
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
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}
	scrollingIntoConversionRateTile() {
		this.scrollIntoElement('[title="Conversion Rate (MTD)', 0)
	}
	scrollingIntoConversionRateTileAfterChangingTheFrequencyFromDefault() {
		this.wait(5000)
		this.scrollIntoElement('[title="Conversion Rate "]', 0)
	}
	verifiyingTheTileWithDefaultFrequency(apiUrl:string,name:string){
		this.intercept("POST",apiUrl,name)
	}
	verifyingDailyFrequency(apiUrl:string){
		this.frequencyFilter("POST",apiUrl,"daily")
	}
	verifyingMonthlyFrequency(apiUrl:string){
		this.frequencyFilter("POST",apiUrl,"Monthly")
	}
	verifyingQuarterlyFrequency(apiUrl:string){
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
	
	clickOnConversionRateTile() {
		cy.wait(5000)
		this.clickOnDomElement ('div[title="Conversion Rate "]')
	}
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
	}
	clickOnTopNavigationBarInDrillDownView() {
		this.clickOnDomElement('[class*="MuiTypography-root MuiTypography-body4 normal-case text-high"]'
        )
    }
	clickOnApplyButton1() {
		this.clickOnDomElementWithIndex(
			'div[class="flex h-16 items-center justify-between pb-2 pt-1"] button',
			1
		)
	}
	clickOnApplyButtonInTheDatePickerAfterSelectingTrailing12InTileView() {
		this.clickOnDomElementWithIndex(
			'div[class="MuiTypography-root MuiTypography-body4 text-white css-vj9mig"] button',
			1
		)
	}
	clickOnDatePickerInDrillDownView() {
		this.clickOnDomElement('[aria-describedby="AVG_DAILY_CONVERSION_RATE"]')
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
			'div[class="mb-3 mr-3 flex items-center justify-end gap-2"] button',
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
	clicksOnAscendingOrderNewMembersButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			3
		)
	}
	clicksOnDescendingOrderNewMembersButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			2
		)
	}
	clicksOnAscendingOrderNewMemSalesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			5
		)
	}
	clicksOnDescendingOrderNewMemSalesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			4
		)
	}
	clicksOnAscendingOrderAverageTicketButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			7
		)
	}
	clicksOnDescendingOrderAverageTicketButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			6
		)
	}
	clicksOnAscendingOrderIndividualWashesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			9
		)
	}
	clicksOnDescendingOrderIndividualWashesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			8
		)
	}
	clicksOnAscendingOrderConversionRateButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			11
		)
	}
	clicksOnDescendingOrderConversionRateButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			10
		)
	}
	clicksOnElipsisIconOnDrillDownView() {
		this.clickOnDomElement('[class="flex items-center gap-2"] button')
	}
	clicksOnExportOption() {
		this.clickOnDomElement('[class="flex flex-col rounded p-2"] button')
	}
	clickingOnEscapeButtonToCloseTheExportOption() {
		this.typeTextOnDomElement(
			'[class="flex items-center gap-2"] button',
			'{esc}'
		)
	}
	clickOnBackToMembershipButton() {
		this.clickOnDomElement(
            '[class*="MuiTypography-root MuiTypography-body4 text-medium"]'
        )
    }
	clickOnFrequencyFilter(){
		cy.wait(3000)
		this.clickOnId('dropdown')
	}
	clickOnQuarterlyFilterOption(){
		cy.wait(3000)
		this.clickOnDomElement('[data-value="quarterly"]')
	}
	clickOnYearlyFilterOption(){
		this.clickOnDomElement('[data-value="yearly"]')
	}
	clickOnDailyFilterOption(){
		this.clickOnDomElement('[data-value="daily"]')
	}
	clickOnMonthlyFilterOption(){
		this.clickOnDomElement('[data-value="monthly"]')
	}
}
