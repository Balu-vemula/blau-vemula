import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/accounting/currentProfitAndLoss'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Current P&L KPI', () => {
	describe('Verifying the functionality of Current P&L KPI', () => {
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
			it('Navigating to Accounting Module', () => {
				robotEyes.seesAccountingIcon()
				robotHands.clickOnAccountingIcon()
			})
			it('Verifying the title of the KPI', () => {
				robotHands.scrollingIntoCurrentProfitAndLossTile()
				robotEyes.seesTitleOfCurrentProfitAndLoss()
				robotEyes.verifyingTheTitleOfCurrentProfitAndLossWithDefaultDatePickerFrequency('Current P&L (YTD)')
			})

			it('Verifying the graph and the value of the Current P&L on the tile view', () => {
				robotHands.scrollingIntoCurrentProfitAndLossTile()
				robotHands.clickOnAccountingIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency(Cypress.env('CurrentProfitAndLoss'),"income")
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoCurrentProfitAndLossTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfCurrentProfitAndLossTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Current P&L drill-down view', () => {
				robotHands.clickOnCurrentProfitAndLossTile()
				robotEyes.seesBacktoAccountingVisibleOnDrillDownView()	
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
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForCurrentProfitAndLoss()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForCurrentProfitAndLoss()
				robotHands.clickOnLocationDropDownApplyButton()
			})
		 })
		 RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Income Comparison')
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Total Cars ')
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Income ')
				robotEyes.verifyingTheFourthColumnHeaderOfTable('COGS ')
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Gross Profit ')
				robotEyes.verifyingTheSixthColumnHeaderOfTable('Other Expenses ')
				robotEyes.verifyingTheSevenColumnHeaderOfTable('Total Expenses ')
				robotEyes.verifyingTheEightColumnHeaderOfTable('NOI ')
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForCurrentProfitAndLoss()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForCurrentProfitAndLoss()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForCurrentProfitAndLoss()
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
				robotHands.verifyingQuarterlyFrequency(Cypress.env('CurrentProfitAndLoss'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesYearlyFilterOption()
				robotHands.clickOnYearlyFilterOption()
				robotHands.verifyingYearlyFrequency(Cypress.env('CurrentProfitAndLoss'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesMonthlyFilterOption()
				robotHands.clickOnMonthlyFilterOption()
				robotHands.verifyingMonthlyFrequency(Cypress.env('CurrentProfitAndLoss'))
				robotEyes.verifyingStartTimeOnTheTable()
			})

			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonIsVisible()
				robotHands.clicksOnExportOption();
			})
		 })
		 RoleFilter(['smoke', 'regression'], () => {	
			it('Verifying the functionality of Back to all sites', () => {
				robotHands.clickOnBackToAllSitesButton()
				robotEyes.verifyingTheAccountingModuleHeader()
			})
		})
	})
})
