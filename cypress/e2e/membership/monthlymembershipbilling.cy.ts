import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/membership/monthlymembershipbilling'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Recurring Billing  KPI', () => {
	describe('Verifying the functionality of Recurring Billing  KPI', () => {
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
				robotHands.scrollingIntoMonthlyMembershipBillingTile()
				robotEyes.seesTitleOfMonthlyMembershipBilling()
				robotEyes.verifyingTheTitleOfMonthlyMembershipBillingWithDefaultDatePickerFrequency()
			})
			it('Verifying the graph and the value of the Recurring Billing on the tile view', () => {
				robotHands.scrollingIntoMonthlyMembershipBillingTile()
				robotHands.clickOnMembershipIcon()
				//robotHands.verifiyingTheTileWithDefaultFrequency(Cypress.env('MonthlyMembershipBilling'),"membership_billing")
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoMonthlyMembershipBillingTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfMonthlyMembershipBillingTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Recurring Billing drill-down view', () => {
				robotHands.clickOnMonthlyMembershipBillingTile()
				robotEyes.seesBacktoMembershipVisibleOnDrillDownView()
				robotEyes.seesTopNavigationBarIsVisibleOnDrillDownView()
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
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForMonthlyMembershipBilling()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForMonthlyMembershipBilling()
				robotHands.clickOnLocationDropDownApplyButton()
			})
		 })
		 RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {	
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Accounts (#)')
				robotEyes.seesTheSortButtonsForAccounts()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Billing ($)')
				robotEyes.seesTheSortButtonsForMembershipBilling()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Avg. Ticket ($)')
				robotEyes.seesTheSortButtonsForAverageTicket()
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Contribution (%)')
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForMonthlyMembershipBilling()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForMonthlyMembershipBilling()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForMonthlyMembershipBilling()
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.clickOnMonthDropDownInTheDatePicker()
				robotHands.selectMonthFromTheMonthlyDropDownInDatePicker()
				robotHands.selectFirstDayInTheDateRange()
				robotHands.clickOnNextMonthIcon()
				robotHands.selectLastDayInTheDateRange()
				robotHands.clickOnApplyButton()
				robotEyes.verifyingStartTimeOnTheTable()
			})
			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderPeriodButton()
				robotHands.clicksOnAscendingOrderPeriodButton()
				robotHands.clicksOnDescendingOrderAccountsButton()
				robotHands.clicksOnAscendingOrderAccountsButton()
				robotHands.clicksOnDescendingOrderMembershipBillingButton()
				robotHands.clicksOnAscendingOrderMembershipBillingButton()
				robotHands.clicksOnDescendingOrderAverageTicketButton()
				robotHands.clicksOnAscendingOrderAverageTicketButton()
				//robotHands.clicksOnDescendingOrderPercentageContributionButton()
				//robotHands.clicksOnAscendingOrderPercentageContributionButton()
			})
			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonIsVisible()
				robotHands.clicksOnExportOption()
			})
		 })
		 RoleFilter(['smoke', 'regression'], () => {
			it('Verifying the functionality of Back to all sites', () => {
				robotHands.clickOnBackToMembershipButton()
				robotEyes.verifyingTheMembershipModuleHeader()
			})
		})
	})
})