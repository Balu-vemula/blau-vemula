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
		this.seesDomVisible('div div:nth-child(2) div:nth-child(2)  div:nth-child(3) button:nth-child(2)',)
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
		this.seesDomVisible('div[id="root"] div:nth-child(2) div:nth-child(2)  div:nth-child(3) button:nth-child(2)')
		
	}
	seesTableOnDrillDownView() {
		this.seesDomVisible('div[class]>table')
	}
		verifyTheTableHeaderInDrillDownViewForCostPerCar() {
		const tableHeaderInDrillDownView: string[] = [ 
			'Period',
			'Cars (#)',
			'Chemical ($)',
			'Supplies ($)',
			'Water ($)',
			'Electric ($)',
			'MAF ($)',
			'R&M ($)',
			'Damages ($)',
			'Labor Cost ($)',
			'Labor Per Car ($)',
			'Chem Per Car ($)',
            'Supplies Per Car ($)',
			'Water Per Car ($)',
			'Electric Per Car ($)',
			'MAF Per Car ($)',
			'R&M Per Car ($)',
			'Damages Per Car ($)',					
		]
		for (let i = 0; i < tableHeaderInDrillDownView.length; i++) {
			this.seesDomContainText(
				'thead tr>th>span',
				tableHeaderInDrillDownView[i]
			)
		}
	}
	seesTheSortButtonsForPeriod() {
		this.seesDomVisible('th:nth-child(1) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForTotalCars() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForChemical() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForSupplies() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForWater() {
		this.seesDomVisible('th:nth-child(5) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForElectric() {
		this.seesDomVisible('th:nth-child(6) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForMAF() {
		this.seesDomVisible('th:nth-child(7) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForRAndM() {
		this.seesDomVisible('th:nth-child(8) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForDamages() {
		this.seesDomVisible('th:nth-child(9) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForLabor() {
		this.seesDomVisible('th:nth-child(10) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForLaborPerCar() {
		this.seesDomVisible('th:nth-child(11) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForChemPerCar() {
		this.seesDomVisible('th:nth-child(12) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForSuppliesPerCar() {
		this.seesDomVisible('th:nth-child(13) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForWaterPerCar() {
		this.seesDomVisible('th:nth-child(14) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForElectricPerCar() {
		this.seesDomVisible('th:nth-child(15) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForMAFPerCar() {
		this.seesDomVisible('th:nth-child(16) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForRAndMPerCar() {
		this.seesDomVisible('th:nth-child(17) span:nth-child(1) span:nth-child(1)')
	}

	seesTheSortButtonsForDamagesPerCar() {
		this.seesDomVisible('th:nth-child(18) span:nth-child(1) span:nth-child(1)')
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
	verifyTheCancelButtonInTheLocationInDrillDownViewForCostPerCar() {
		this.seesDomVisible('div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)')
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInDrillDownViewForCostPerCar() {
		this.seesDomVisible(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1,
			'Apply'
		)
	}

	verifyTheDatePickerFrequenciesInDrillDownViewForCostPerCar() {
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

	verifyTheCancelButtonInTheDatePickerInDrillDownViewForCostPerCar() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}

	verifyTheApplyButtonInTheDatePickerInDrillDownViewForCostPerCar() {
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
	clickOnDatePickerInDrillDownView() {
		this.wait(3000)
		this.clickOnDomElement(
			'div[id="root"] div:nth-child(2) div:nth-child(2)  div:nth-child(3) button:nth-child(2)'
		)
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
	clicksOnAscendingOrderTotalCarsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			3
		)
	}
	clicksOnDescendingOrderTotalCarsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			2
		)
	}
	clicksOnAscendingOrderChemicalButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			5
		)
	}
	clicksOnDescendingOrderChemicalButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			4
		)
	}
	clicksOnAscendingOrderSuppliesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			7
		)
	}
	clicksOnDescendingOrderSuppliesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			6
		)
	}


	clicksOnAscendingOrderWaterButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			9
		)
	}
	clicksOnDescendingOrderWaterButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			8
		)
	}
	clicksOnAscendingOrderElectricButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			11
		)
	}
	clicksOnDescendingOrderElectricButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			10
		)
	}
	clicksOnAscendingOrderMAFButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			13
		)
	}
	clicksOnDescendingOrderMAFButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			12
		)
	}
	clicksOnAscendingOrderRAndMButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			15
		)
	}
	clicksOnDescendingOrderRAndMButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			14
		)
	}

	clicksOnAscendingOrderDamagesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			17
		)
	}
	clicksOnDescendingOrderDamagesButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			16
		)
	}
	clicksOnAscendingOrderLaborButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			19
		)
	}
	clicksOnDescendingOrderLaborButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			18
		)
	}
	clicksOnAscendingOrderLaborPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			21
		)
	}
	clicksOnDescendingOrderLaborPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			20
		)
	}
	clicksOnAscendingOrderChemPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			23
		)
	}
	clicksOnDescendingOrderChemPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			22
		)
	}


	clicksOnAscendingOrderSuppliesPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			25
		)
	}
	clicksOnDescendingOrderSuppliesPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			24
		)
	}
	clicksOnAscendingOrderWaterPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			27
		)
	}
	clicksOnDescendingOrderWaterPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			26
		)
	}
	clicksOnAscendingOrderElectricPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			29
		)
	}
	clicksOnDescendingOrderElectricPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			28
		)
	}
	clicksOnAscendingOrderMAFPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			31
		)
	}
	clicksOnDescendingOrderMAFPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			30
		)
	}

	clicksOnAscendingOrderRAndMPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			33
		)
	}
	clicksOnDescendingOrderRAndMPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			32
		)
	}
	clicksOnAscendingOrderDamagesPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			35
		)
	}
	clicksOnDescendingOrderDamagesPerCarButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			34
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
	scrollingIntoVerifyingTheContextOfHeaderOfTable() {
		this.scrollIntoElement('thead tr>th>span', 5)
	}
	scrollingIntoVerifyingTheContextOfHeaderOfTable1() {
		this.scrollIntoElement('thead tr>th>span', 11)
	}
	scrollingIntoVerifyingTheContextOfHeaderOfTable2() {
		this.scrollIntoElement('thead tr>th>span', 17)
	}

}



