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
	seesTitleOfAvgClubUse() {
		this.seesDomVisibleWithCustomMatcher(
			'title',
			'Avg. Account Club Use (YTD)'
		)
	}
	verifyingTheTitleOfAvgClubuseKPIWithDefaultDatePickerFrequency() {
		cy.wait(3000)
		this.seesDomContainText(
			'[title*="Avg. Account Club Use (YTD)"]',
			'Avg. Account Club Use (YTD)'
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
	veryfingTheTitleOfAverageClubUseTileViewAfterChangingTheFrequencyFromDefault() {
		this.wait(4000)
		this.seesDomVisible('div[title="Avg. Account Club Use "]')
		this.seesDomContainText(
			'div[title="Avg. Account Club Use "]',
			'Avg. Account Club Use '
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
		this.seesDomVisible('button[aria-describedby="MONTHLY_AVERAGE_CLUB_USE"]')
	}
	seesTheTitleOfTheGraphAndTable() {
		this.seesDomVisible('div[class*=full] div>h4')
	}
	verifyingTheTitleOfTheGraphAndTable() {
		this.seesDomContainText('div[class*=full] div>h4', 'Avg. Account Club Use')
	}
	seesEllipsisForExportOption() {
		this.seesDomVisible('div[class="flex items-center gap-2"]')
	}
	seesGraphOnDrillDownView() {
		this.seesIdVisible('drill-down-MONTHLY_AVERAGE_CLUB_USE')
		
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
	seesTheSortButtonsForTotalWashshes() {
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
	seesTheSortButtonsForAccounts() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFifthColumnHeaderOfTable(text: any) {
		this.sessTextWithDomAndIndex('thead tr>th>span', 4, text)
	}
	seesTheSortButtonsForAvgClubUse() {
		this.seesDomVisible('th:nth-child(5) span:nth-child(1) span:nth-child(1)')
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
	verifyTheCancelButtonInTheLocationInDrillDownViewForAvgClubUSe() {
		this.seesDomVisible('div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(1)')
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheLocationInDrillDownViewForAvgClubUSe() {
		this.seesDomVisible(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button:nth-child(2)'
		)
		this.sessTextWithDomAndIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1,
			'Apply'
		)
	}
    verifyTheDatePickerFrequenciesInDrillDownViewForAvgClubUSe() {
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
	verifyTheCancelButtonInTheDatePickerInDrillDownViewForAvgClubUse() {
		this.seesDomVisible(
			'div[role="presentation"] div:nth-child(2) button:nth-child(1)'
		)
		this.sessTextWithDomAndIndex(
			'div[role="presentation"] div:nth-child(2) button',
			0,
			'Cancel'
		)
	}
	verifyTheApplyButtonInTheDatePickerInDrillDownViewForAvgClubUse() {
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
	clickOnOrg() {
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
	scrollingIntoAvgClubUseTile() {
		this.scrollIntoElement('[title*="Avg. Account Club Use (YTD)"]', 0)
	}
	scrollingIntoAvgClubUseTileAfterChangingTheFrequencyFromDefault() {
		this.scrollIntoElement('[title="Avg. Account Club Use "]', 0)
	}
	verifiyingTheTileWithDefaultFrequency(){
		this.intercept("POST",Cypress.env('AvgClubUseByAccounts'),"average_club_use")
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
	clickOnMonthlyAvgClubUseTile() {
		cy.wait(5000)
		this.clickOnDomElement ('div[title="Avg. Account Club Use "]')
	}
	clickOnBreakdonwForFirstTableRow() {
		this.clickOnDomElementWithIndex('tbody tr', 0)
	}
	clickOnTopNavigationBarInDrillDownView() {
		this.clickOnDomElement('[class*="MuiTypography-root MuiTypography-body4 normal-case text-high"]'
        )
    }
	clickOnLocationsDropDownApplyButton() {
		this.clickOnDomElementWithIndex(
			'div[id="location-dropdown"] > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > button',
			1
		)
	}
	clickOnDatePickerInDrillDownView() {
		this.clickOnDomElement('[aria-describedby="MONTHLY_AVERAGE_CLUB_USE"]')
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
	clicksOnAscendingOrderTotalWasheshsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			3
		)
	}
	clicksOnDescendingOrderTotalWashesButton() {
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
	clicksOnAscendingOrderAccountsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			7
		)
	}
	clicksOnDescendingOrderAccountsButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			6
		)
	}
	clicksOnAscendingOrderAvgClubseButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			9
		)
	}
	clicksOnDescendingOrderAvgClubUseButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			8
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
}
