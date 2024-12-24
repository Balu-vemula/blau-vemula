import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/membership/captureRate'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Redemption Rate KPI', () => {
	describe('Verifying the functionality of Redemption Rate KPI', () => {
		 RoleFilter(['smoke', 'regression'], () => {
			before('Login in to washmetrix', () => {
				cy.clearAllSessionStorage()
				cy.clearAllLocalStorage()
				cy.clearAllCookies()
				dependencies.loginWashmetrix()
				robotHands.scrollingIntoOrganisation()
				robotEyes.seesWashmetrixOrg()
				robotHands.clickOnWashmetrixCarWashOrg()
			})
		 })
		 RoleFilter(['smoke', 'regression'], () => {
			it('Navigating to Membership Module', () => {
				robotEyes.seesMembershipIcon()
				robotHands.clickOnMembershipIcon()
			})
		 })
		 RoleFilter(['smoke', 'regression'], () => {
			it('Verifying the title of the KPI', () => {
				robotHands.scrollingIntoRedemptionRateTile()
				robotEyes.seesTitleOfRedemptionRate()
				robotEyes.verifyingTheTitleOfRedemptionRateWithDefaultDatePickerFrequency('Redemption Rate (MTD)')
			})

			it('Verifying the graph and the value of the Redemption Rate on the tile view', () => {
				robotHands.scrollingIntoRedemptionRateTile()
				robotHands.clickOnMembershipIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency(Cypress.env('CaptureRate'),"capture_rate")
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoRedemptionRateTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfRedemptionRateTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Redemption Rate drill-down view', () => {
				robotHands.clickOnCaptureRateTile()
				robotEyes.seesBacktoMembershipVisibleOnDrillDownView()	
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable()
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
				robotHands.clickOnTopNavigationBarInDrillDownView()
				robotEyes.seesTheSerchBoxAfterClickingTheTopNavigationBar()
				robotEyes.verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView()
				robotEyes.verifyingTheTopNavigationBarLocationsInDrillDownView()
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForRedemptionRate()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForRedemptionRate()
				robotHands.clickOnLocationDropDownApplyButton()
			})
		 })
		 RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Cars (#)')
				robotEyes.seesTheSortButtonsForNoOfCars()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Redemptions (#)')
				robotEyes.seesTheSortButtonsForRedemptions()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Individual Washes (#)')
				robotEyes.seesTheSortButtonsForIndividualWashes()
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Redemption Rate (%)')
				robotEyes.seesTheSortButtonsForRedemptionRatePercentage()
				robotHands.scrollingIntoVerifyingTheContextOfHeaderOfTable()
				robotEyes.verifyingTheSixthColumnHeaderOfTable('Sales ($)')
				robotEyes.seesTheSortButtonsForTotalSalesValue()
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForRedemptionRate()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForRedemptionRate()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForRedemptionRate()
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.clickOnMonthDropDownInTheDatePicker()
				robotHands.selectMonthFromTheMonthlyDropDownInDatePicker()
				robotHands.selectFirstDayInTheDateRange()
				robotHands.clickOnNextMonthIcon()
				robotHands.selectLastDayInTheDateRange()
				robotHands.clickOnApplyButton()
				robotEyes.seesFrequencyFilter()
				robotHands.verifyingMonthlyFrequency(Cypress.env('CaptureRate'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesQuarterlyFilterOption()
				robotHands.clickOnQuarterlyFilterOption()
				robotHands.verifyingQuarterlyFrequency(Cypress.env('CaptureRate'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesYearlyFilterOption()
				robotHands.clickOnYearlyFilterOption()
				// robotHands.verifyingYearlyFrequency(Cypress.env('CaptureRate'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesMonthlyFilterOption()
				robotHands.clickOnMonthlyFilterOption()
				robotHands.verifyingMonthlyFrequency(Cypress.env('CaptureRate'))
				robotEyes.verifyingStartTimeOnTheTable()
			})

			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderPeriodButton()
				robotHands.clicksOnAscendingOrderPeriodButton()
				robotHands.clicksOnDescendingOrderNoOfCarsButton()
				robotHands.clicksOnAscendingOrderNoOfCarsButton()
				robotHands.clicksOnDescendingOrderRedemptionsButton()
				robotHands.clicksOnAscendingOrderRedemptionsButton()
				robotHands.clicksOnDescendingOrderIndividualWashesButton()
				robotHands.clicksOnAscendingOrderIndividualWashesButton()
				robotHands.clicksOnAscendingOrderCaptureRatePercentageButton()
				robotHands.clicksOnDescendingOrderCaptureRatePercentageButton()
				robotHands.clicksOnAscendingOrderTotalSalesValueButton()
				robotHands.clicksOnDescendingOrderTotalSalesValueButton()

			})
			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonIsVisible()
				robotHands.clicksOnExportOption()
			})
		 })
		 RoleFilter(['smoke', 'regression'], () => {	
			it('Verifying the functionality of Back to all sites', () => {
				robotHands.clickOnBackToAllSitesButton()
				robotEyes.verifyingTheMembershipModuleHeader()
			})
		})
	})
})