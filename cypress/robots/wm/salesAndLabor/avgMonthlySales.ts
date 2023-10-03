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
		this.seesDomVisible('img[alt="WashMetrix Car Wash"]')
	}
	seesSalesAndLaborIcon() {
		this.wait(5000)
		this.seesDomVisibleWithCustomMatcher('aria-label', 'Sales & Labor')
	}
	seesTitleOfAverageMonthlySales() {
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Avg. Monthly Sales (Year To Date)'
		)
	}
	verifyingTheTitleOfAverageMonthlySalesWithDefaultDatePcikerFrequency() {
		this.seesDomContainText(
			'[title="Avg. Monthly Sales (Year To Date)"]',
			'Avg. Monthly Sales (Year To Date)'
		)
	}
	seesTheGraphAndSaleValueForAverageMonthlySalesonTileView() {
		this.seesElementIsVisibleWhenTheOtherElementISPresent(
			'div[title="Avg. Monthly Sales (Year To Date)"] h1',
			'#AVERAGE_MONTHLY_SALES'
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
	veryfiesTheTitleOfAverageMonthlySalesTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(3000)
		this.seesDomVisible('div[title="Avg. Monthly Sales "]')
		this.seesDomContainText(
			'div[title="Avg. Monthly Sales "]',
			'Avg. Monthly Sales '
		)
	}
	seesBackToAllSitesVisibleOnDrillDownView() {
		cy.wait(5000)
		this.seesDomContainText(
			'[class="MuiTypography-root MuiTypography-body4 text-medium css-1qn7rz9"]',
			'Back to All Sites'
		)
	}
	seesTitleOfAverageMonthlySalesKPIDrillDownView() {
		this.seesDomVisible('div[class*=full] div>p')
	}
	verifyingTitleOfAverageMonthlySalesKPIDrillDownView() {
		this.seesDomContainText('div[class*=full] div>p', 'Average Monthly Sales')
	}
	seesDatePicketISVisibleOnDrillDownView() {
		this.seesDomVisible('button[aria-describedby="AVERAGE_MONTHLY_SALES"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=full] div>h6')
	}
	verifyingTheTitleOfTheGraphAndTable() {
		this.seesDomContainText('div[class*=full] div>h6', 'Monthly Sales')
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesGraphOnDrillDownView() {
		this.seesIdVisible('drill-down-AVERAGE_MONTHLY_SALES')
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
	verifyTheDatePickerFrequenciesInDrillDownViewForAverageMonthlySales() {
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
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForAverageMonthlySales() {
		this.seesDomVisible(
			'div[class="flex items-center gap-2 justify-end mr-3 mb-3"] button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[class="flex items-center gap-2 justify-end mr-3 mb-3"] button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrAverageMonthlySales() {
		this.seesDomVisible(
			'div[class="flex items-center gap-2 justify-end mr-3 mb-3"] button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[class="flex items-center gap-2 justify-end mr-3 mb-3"] button',
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
	verifyingTheAccordingIConNextToTheMonthInTheTable() {
		this.seesDomVisible('tbody tr td div span:nth-child(2)')
	}
	verifyingTheExportButtonISVisible() {
		this.seesDomVisible('[class="flex flex-col p-2 rounded"] button')
	}
	verifyingTheSalesAndLaborModuleHeader() {
		this.seesDomContainText('[class="flex flex-col gap-2"]', 'Sales & Labor')
	}
}
export class RobotHands extends BaseHands {
	clickOnWashmetrixCarWashOrg() {
		this.clickOnDomElement('img[alt="WashMetrix Car Wash"]')
		this.wait(3000)
	}
	clickOnSalesAndLaborIcom() {
		this.clickOnDomElement('[aria-label="Sales & Labor"]')
	}
	scrollingIntoAverageMonthlySalesTile() {
		this.scrollIntoElement('[title="Avg. Monthly Sales (Year To Date)"]', 0)
	}
	clicksOnDatePicker() {
		this.clickOnDomElement('[aria-describedby="2"]')
	}
	scrollingTOSeeDatePicker() {
		this.scrollIntoElementWithOutIndex('[aria-describedby="2"]')
	}
	selectsTrailing12OnTileView() {
		this.clickOnDomElement(
			'div[class="grid grid-flow-col grid-cols-[auto_auto_1fr] bg-white w-min"] button:nth-child(12)'
		)
		this.clickOnClass('css-1e5udjs')
	}
	clickOnAverageMonthlySalesTIle() {
		cy.wait(5000)
		this.clickOnDomElement('div[title="Avg. Monthly Sales "]')
	}
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
	}
	clickOnDatePickerInDrillDownView() {
		this.clickOnDomElement('[aria-describedby="AVERAGE_MONTHLY_SALES"]')
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
	selectMonthFromTheMonthlyDropDownInDatePicker() {
		this.clickOnDomElement(Cypress.env('SelectedMonth1'))
	}
	selectFirstDayInTheDateRange() {
		// this.clickOnDomElement('[aria-label="Choose Wednesday, June 1st, 2022"]')
		this.clickOnDomElementWithIndex(
			'[class*="react-datepicker__day react-datepicker__day--001"]',
			0
		)
	}
	// selectLastDayInTheSelectedFirstMonth(){
	//     // this.clickOnDomElement('[aria-label="Choose Thursday, June 30th, 2022"]')
	//     this.clickOnDomElementWithIndex('[class*="react-datepicker__day react-datepicker__day--030"]',1)
	// }
	clickOnNextMonthIcon() {
		// this.clickOnDomElementWithIndex(
		// 	'[class="grid grid-flow-col justify-around items-center"] svg',
		// 	3
		// )
		this.clickOnDomElement('[data-testid="ArrowRightIcon"]')
	}
	// selectFirstDayInTheSelectedSecondMonth(){
	//     this.clickOnDomElementWithIndex('[class*="react-datepicker__day react-datepicker__day--001"]',0)
	// }
	selectLastDayInTheDateRange() {
		// this.clickOnDomElementWithIndex('[class*="react-datepicker__day react-datepicker__day--031"]',1)
		// this.clickOnDomElement(
		// 	'[class="react-datepicker__day react-datepicker__day--031"]'
		// )
		// [class="react-datepicker__month"] div:nth-child(5) [class*="31"]
		this.clickOnDomElement(Cypress.env('EnddateOfSecondMonth'))
	}
	clickOnApplyButton() {
		this.clickOnDomElementWithIndex(
			'div[class="flex items-center gap-2 justify-end mr-3 mb-3"] button',
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
		this.clickOnDomElement('[class="flex items-center gap-2"] button')
	}
	clicksOnExportOption() {
		this.clickOnDomElement('[class="flex flex-col p-2 rounded"] button')
	}
	clickingOnEscapeButtonToCloseTheExportOPtion() {
		this.typeTextOnDomElement(
			'[class="flex flex-col p-2 rounded"] button',
			'{esc}'
		)
	}
	clickOnBackToAllSitesButton() {
		this.clickOnDomElement(
			'[class="MuiTypography-root MuiTypography-body4 text-medium css-1qn7rz9"]'
		)
	}
}
