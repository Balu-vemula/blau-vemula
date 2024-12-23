import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/accounting/profitAndLoss'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Profit And Loss Comparison KPI', () => {
	describe('Verifying the functionality of Profit And Loss Comparison KPI', () => {
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
				robotHands.scrollingIntoTile('[title="P&L Comparison (Yearly)"]',0)
				robotEyes.seesTitleOfKPI('[title="P&L Comparison (Yearly)"]','P&L Comparison (Yearly)')
				robotEyes.verifyingTheTitleWithDefaultDatePickerFrequency('[title="P&L Comparison (Yearly)"]','P&L Comparison (Yearly)')
			})

			it('Verifying the graph and the value of the Profit And Loss Comparison on the tile view', () => {
				robotHands.scrollingIntoTile('[title="P&L Comparison (Yearly)"]',0)
				robotHands.clickOnAccountingIcon()
			})

			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoTileAfterChangingTheFrequencyFromDefault('[title="P&L Comparison (Yearly)"]', 0)
				robotEyes.veryfingTheTitleOfTileViewAfterChangingTheFrequencyFromDefault('[title="P&L Comparison (Yearly)"]','P&L Comparison (Yearly)')
			})

			it('Verifying the Profit And Loss Comparison drill-down view', () => {
				robotHands.clickOnTile('div[title="P&L Comparison (Yearly)"]')
				robotEyes.seesBacktoAccountingVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable('P&L Comparison')
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
				robotHands.clickOnTopNavigationBarInDrillDownView()
				robotEyes.seesTheSerchBoxAfterClickingTheTopNavigationBar()
				robotEyes.verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView()
				robotEyes.verifyingTheTopNavigationBarLocationsInDrillDownView()
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForProfitAndLoss()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForProfitAndLoss()
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
				robotHands.clickOnYearlyInFirstDropDown()
				robotHands.selectYearFromTheYearlyInFirstDropDown()
				robotHands.clickOnYearlyInSecondDropDown()
				robotHands.selectYearFromTheYearlyInSecondDropDown()			
				robotEyes.seesFrequencyFilter()
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesQuarterlyFilterOption()
				robotHands.clickOnQuarterlyFilterOption()
				robotHands.verifyingQuarterlyFrequency(Cypress.env('PAndLComparison'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesYearlyFilterOption()
				robotHands.clickOnYearlyFilterOption()
				robotHands.verifyingYearlyFrequency(Cypress.env('PAndLComparison'))

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
				robotEyes.verifyingTheAccountingModuleHeader()
			})
		})
	})
})
