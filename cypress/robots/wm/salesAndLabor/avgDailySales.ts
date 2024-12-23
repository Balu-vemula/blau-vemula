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
	seesTitleOfAverageDailySales() {
		this.wait(3000)
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Avg. Daily Sales (MTD)'
		)
	}
	verifyingTheTitleOfAverageDailySalesWithDefaultDatePickerFrequency() {
		this.seesDomContainText(
			'[title*="Avg. Daily Sales"]',
			'Avg. Daily Sales (MTD)'
		)
	}
	seesTheGraphAndSaleValueForAverageDailySalesonTileView() {
		this.seesElementIsVisibleWhenTheOtherElementISPresent(
			'div[title*="Avg. Daily Sales"] h1',
			'#AVERAGE_DAILY_SALES'
		)
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
	veryfiesTheTitleOfAverageDailySalesTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(3000)
		this.seesDomVisible('div[title="Avg. Daily Sales "]')
		this.seesDomContainText(
			'div[title="Avg. Daily Sales "]',
			'Avg. Daily Sales '
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
		this.seesDomVisible('button[aria-describedby="AVERAGE_DAILY_SALES"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=h-full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable(text: any) {
		this.seesDomContainText('div[class*=h-full] div>h4', text)
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesGraphOnDrillDownView() {
		this.seesIdVisible('drill-down-AVERAGE_DAILY_SALES')
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
	seesTheSortButtonsForNumberOfCars() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 2, text)
	}
	seesTheSortButtonsForTotalSalesValue() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSecondRowHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 3, text)
	}
	verifyTheDatePickerFrequenciesInDrillDownViewForAverageDailySales() {
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
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForAverageDailySales() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrAverageDailySales() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			1,
			'Apply'
		)
	}
	VerifyingDayOnTheTableAccordianToTheSelection(date:string) {
		this.sessTextWithDomAndIndex(
			'tbody tr td div span',
			0,
            date
		)
	}
	verifyingTheAccordingIConNextToTheDayInTheTable() {
		this.seesDomVisible('tbody tr td div span path')
	}
	verifyingTheExportButtonIsVisible() {
		this.seesDomVisible('div[class*="flex flex-col rounded"] button')
	}
	verifyingTheSalesAndLaborModuleHeader() {
		this.seesDomContainText('[class="flex flex-col gap-2"]', 'Sales & Labor')
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
	verifiyingTheTileWithDefaultFrequency(){
		this.intercept("POST",Cypress.env('AvgDailySales'),"average_sales")
	}
	scrollingIntoAverageDailySalesTile() {
		this.scrollIntoElement('[title*="Avg. Daily Sales"]', 0)
	}
	clicksOnDatePicker() {
		this.clickOnDomElement('[aria-describedby="2"]')
	}
	scrollingToSeeDatePicker() {
		this.scrollIntoElementWithOutIndex('[aria-describedby="2"]')
	}
	selectsTrailing12OnTileView() {
		this.clickOnDomElement(
			'button[id="trailing12"]'
		)
		this.clickOnDomElement('div[role="presentation"] div div:nth-child(2) button:nth-child(2)')
	}
	clickOnAverageDailySalesTile() {
		cy.wait(5000)
		this.clickOnDomElement('div[title="Avg. Daily Sales "]')
		cy.reload()
		cy.wait(10000)
	}
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
	}
	clickOnDatePickerInDrillDownView() {
		this.clickOnDomElement('[aria-describedby="AVERAGE_DAILY_SALES"]')
	}
	clickOnYearDropDownInTheDatePicker() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 1)
	}
	selectYearFromTheYearDropDownInDatePicker() {
		this.clickOnDomElement('[data-value="2022"]')
	}
	ClickOnMonthDropDownIntheDatePicker() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 0)
	}
	selectMonthFromTheDailyDropDownInDatePicker() {
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
	verifyingFunctionalityOfAccordianInTheTable() {
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
		this.clickOnDomElement('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)')
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
}
