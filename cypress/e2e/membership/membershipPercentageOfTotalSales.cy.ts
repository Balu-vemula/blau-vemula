import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/membership/membershipPercentageOfTotalSales'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Membership % of Sales KPI', () => {
	describe('Verifying the functionality of Membership % of Sales KPI', () => {
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
			it('Navigating to Membership Module', () => {
				robotEyes.seesMembershipIcon()
				robotHands.clickOnMembershipIcon()
			})
			it('Verifying the title of the KPI', () => {
				robotHands.scrollingIntoMembershipPercentageOfTotalSalesTile()
				robotEyes.seesTitleOfMembershipPercentageOfTotalSales()
				robotEyes.verifyingTheTitleOfMembershipPercentageOfTotalsalesWithDefaultDatePickerFrequency('Membership % of Sales (MTD)')
			})

			it('Verifying the graph and the value of the Membership % of Sales on the tile view', () => {
				robotHands.scrollingIntoMembershipPercentageOfTotalSalesTile()
				robotHands.clickOnMembershipIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency(Cypress.env('MembershipPercentageofTotalSales'),"membership_contribution")
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoMembershipPercentageOfTotalSalesTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfMembershipPercentageOfTotalSalesTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Membership % of Sales drill-down view', () => {
				robotHands.clickOnMembershipPercentageOfTotalSalesTile()
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
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForMembershipPercentageOfTotalSales()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForMembershipPercentageOfTotalSales()
				robotHands.clickOnLocationDropDownApplyButton()
			})
		 })
		 RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Membership Sales ($)')
				robotEyes.seesTheSortButtonsForMembershipSales()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Sales ($)')
				robotEyes.seesTheSortButtonsForSales()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Contribution (%)')
				robotEyes.seesTheSortButtonsForContributionPercentage()
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForMembershipPercentageOfTotalSales()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForMembershipPercentageOfTotalSales()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForMembershipPercentageOfTotalSales()
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.clickOnMonthDropDownInTheDatePicker()
				robotHands.selectMonthFromTheMonthlyDropDownInDatePicker()
				robotHands.selectFirstDayInTheDateRange()
				robotHands.clickOnNextMonthIcon()
				robotHands.selectLastDayInTheDateRange()
				robotHands.clickOnApplyButton()
				robotEyes.seesFrequencyFilter()
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesQuarterlyFilterOption()
				robotHands.clickOnQuarterlyFilterOption()
				robotHands.verifyingQuarterlyFrequency(Cypress.env('MembershipPercentageofTotalSales'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesYearlyFilterOption()
				robotHands.clickOnYearlyFilterOption()
				robotHands.verifyingYearlyFrequency(Cypress.env('MembershipPercentageofTotalSales'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesMonthlyFilterOption()
				robotHands.clickOnMonthlyFilterOption()
				robotHands.verifyingMonthlyFrequency(Cypress.env('MembershipPercentageofTotalSales'))
				robotEyes.verifyingStartTimeOnTheTable()
			})

			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderPeriodButton()
				robotHands.clicksOnAscendingOrderPeriodButton()
				robotHands.clicksOnDescendingOrderMembershipSalesButton()
				robotHands.clicksOnAscendingOrderMembershipSalesButton()
				robotHands.clicksOnDescendingOrderTotalSalesButton()
				robotHands.clicksOnAscendingOrderTotalSalesButton()
				robotHands.clicksOnDescendingOrderPercentageContributionButton()
				robotHands.clicksOnAscendingOrderPercentageContributionButton()

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