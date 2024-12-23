import { BaseDependencies,BaseHands,BaseEyes } from "../../BaseRobot";

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
	seesTitleOfChurnRateByAccounts() {
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Churn Rate By Accounts (YTD)'
		)		
	}
	seesTitleOfGrowthRateByAccounts() {
		this.wait(5000)
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Growth Rate By Accounts (YTD)'
		)		
	}
	verifyingTheTitleOfChurnRateKPIWithDefaultDatePickerFrequency() {
		cy.wait(3000)
		this.seesDomContainText(
			'[title*="Churn Rate By Accounts"]',
			'Churn Rate By Accounts (YTD)'
		)
	}
	verifyingTheTitleOfGrowthRateKPIWithDefaultDatePickerFrequency() {
		cy.wait(5000)
		this.seesDomContainText(
			'[title*="Growth Rate By Accounts"]',
			'Growth Rate By Accounts (YTD)'
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
	veryfingTheTitleOfChurnRateTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(4000)
		this.seesDomVisible('div[title="Churn Rate By Accounts "]')
		this.seesDomContainText(
			'div[title="Churn Rate By Accounts "]',
			'Churn Rate By Accounts '
		)
	}
	veryfingTheTitleOfGrowthRateTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(4000)
		this.seesDomVisible('div[title="Growth Rate By Accounts "]')
		this.seesDomContainText(
			'div[title="Growth Rate By Accounts "]',
			'Growth Rate By Accounts '
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
	seesDatePickerIsVisibleOnDrillDownViewOnChurnRateDrillDownView() {
		this.seesDomVisible('button[aria-describedby="MONTHLY_CHURN_RATE"]')
	}
	seesDatePickerIsVisibleOnDrillDownViewOnGrowthRateDrilldownView() {
		this.seesDomVisible('button[aria-describedby="MONTHLY_GROWTH_RATE"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable() {
		this.seesDomContainText('div[class*=full] div>h4', 'Churn & Growth Rate By Accounts')
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesGraphOnChurnRateDrillDownView() {
		this.seesIdVisible('drill-down-MONTHLY_CHURN_RATE')
		
	}
	seesGraphOnGrowthRateDrillDownView() {
		this.seesIdVisible('drill-down-MONTHLY_GROWTH_RATE')
		
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
	seesTheSortButtonsForActiveAccountsStart() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 2, text)
	}
	seesTheSortButtonsForNewSignUp() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 3, text)
	}
	seesTheSortButtonsForReactivated() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFifthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 4, text)
	}
	seesTheSortButtonsForDeactivated() {
		this.seesDomVisible('th:nth-child(5) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSixthColumnHeaderOfTable(text: any) {	
		this.sessTextWithDomAndIndex('thead tr>th>span', 5, text)
	}
	seesTheSortButtonsForTotalActiveEnd() {
		this.seesDomVisible('th:nth-child(6) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSevenColumnHeaderOfTable(text: any) {
		this.wait(3000)
		this.sessTextWithDomAndIndex('thead tr>th>span', 6, text)
	}
	seesTheSortButtonsForChurnRate() {
		this.seesDomVisible('th:nth-child(7) span:nth-child(1) span:nth-child(1)')	
	}
	verifyingTheEightColumnHeaderOfTable(text: any) {		
		this.sessTextWithDomAndIndex('thead tr>th>span', 7, text)
	}
	seesTheSortButtonsForGrowthRate() {
		this.seesDomVisible('th:nth-child(8) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheNineColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 8, text)
	}
	seesTheSortButtonsForNetGrowth() {
		this.seesDomVisible('th:nth-child(9) span:nth-child(1) span:nth-child(1)')
	}
	seesTheSerchBoxAfterClickingTheTopNavigationBar() {
		this.seesDomVisible('input[placeholder="Search Site/Locations')
	}
	verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView() {
		this.seesDomVisible('input[placeholder="Search Site/Locations')
	}
	verifyingTheTopNavigationBarLocationsInDrillDownView() {
		this.seesDomVisible('div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > div:nth-child(3)')
	}
	verifyTheCancelButtonInTheLocationInDrillDownViewForGrowthAndChurnRate() {
		this.seesDomVisible('div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)')
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInDrillDownViewForGrowthAndChurnRate() {
		this.seesDomVisible(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1,
			'Apply'
		)
	}
    verifyTheDatePickerFrequenciesInDrillDownViewForGrowthAndChurnRate() {
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
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForGrowthAndChurnRate() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewForGrowthAndChurnRate() {
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
	scrollingIntoChurnRateTile() {
		this.scrollIntoElement('[title*="Churn Rate By Accounts', 0)
	}
	scrollingIntoGrowthRateTile() {
		this.scrollIntoElement('[title*="Growth Rate By Accounts"]', 0)
	}
	scrollingIntoChurnRateTileAfterChangingTheFrequencyFromDefault() {
		this.scrollIntoElement('[title="Churn Rate By Accounts "]', 0)
	}
	scrollingIntoGrowthRateTileAfterChangingTheFrequencyFromDefault() {
		this.scrollIntoElement('[title="Growth Rate By Accounts "]', 0)
	}
	verifiyingTheTileWithDefaultFrequency(){
		this.intercept("POST",Cypress.env('ChurnRateBtAccounts'),"monthly_churn_rate")
	}
	verifiyingTheTileWithDefaultFrequency1(){
		this.intercept("POST",Cypress.env('GrowthRateBtAccounts'),"monthly_growth_rate")
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
	clickOnMonthlyChurnRateTile() {
		cy.wait(5000)
		this.clickOnDomElement ('div[title="Churn Rate By Accounts "]')
	}
	clickOnMonthlyGrowthRateTile() {
		cy.wait(5000)
		this.clickOnDomElement ('div[title="Growth Rate By Accounts "]')
	}
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
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
	clickOnDatePickerInChurnRateDrillDownView() {
		this.clickOnDomElement('[aria-describedby="MONTHLY_CHURN_RATE"]')
	}
	clickOnDatePickerInGrowthRateDrillDownView() {
		this.clickOnDomElement('[aria-describedby="MONTHLY_GROWTH_RATE"]')
	}
	clickOnYearDropDownInTheDatePicker() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 1)
	}
	selectYearFromTheYearDropDownInDatePicker() {
		this.clickOnDomElement('[data-value="2022"]')
	}
	clickOnMonthDropDownInTheDatePicker() {
		this.clickOnDomElementWithIndex('[aria-haspopup="listbox"]', 0)
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
	clicksOnAscendingOrderActiveAccountsStartButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			3
		)
	}
	clicksOnDescendingOrderActiveAccountsStartButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			2
		)
	}
	clicksOnAscendingOrderNewSignUpButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			5
		)
	}
	clicksOnDescendingOrderNewSignUpButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			4
		)
	}
	clicksOnAscendingOrderReactivatedButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			7
		)
	}
	clicksOnDescendingOrderReactivatedButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			6
		)
	}
	clicksOnAscendingOrderDeactivatedButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			9
		)
	}
	clicksOnDescendingOrderDeactivatedButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			8
		)
	}

	clicksOnAscendingOrderTotalActiveEndButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			11
		)
	}
	clicksOnDescendingOrderTotalActiveEndButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			10
		)
	}
	clicksOnAscendingOrderChurnRateButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			13
		)
	}
	clicksOnDescendingOrderChurnRateButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			12
		)
	}
	clicksOnAscendingOrderGrowthRateButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			15
		)
	}
	clicksOnDescendingOrderGrowthRateButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			14
		)
	}
	clicksOnAscendingOrderNetGrowthButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			17
		)
	}
	clicksOnDescendingOrderNetGrowthButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			16
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
	clickOnBackToMembershipButton() {
		this.clickOnDomElement(
            '[class*="MuiTypography-root MuiTypography-body4 text-medium"]'
        )
    }
	scrollingIntoVerifyingTheContextOfHeaderOfTable() {
		this.scrollIntoElement('thead tr>th>span', 8)
	}
}
