import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/accounting/avgCostPerCar'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Avg Cost Per Car KPI', () => {
	describe('Verifying the functionality of Avg Cost Per Car KPI', () => {
		 RoleFilter(['smoke', 'regression'], () => {
			before('Login in to washmetrix', () => {
				cy.clearAllSessionStorage()
				cy.clearAllLocalStorage()
				cy.clearAllCookies()
				dependencies.loginWashmetrix()
				// robotHands.clicOnSignInAsButton()
				robotHands.scrollingIntoOrganisation()
				// robotHands.clicOnSignInAsButton()
				robotEyes.seesWashmetrixOrg()
				robotHands.clickOnWashmetrixCarWashOrg()
			})
			it('Navigating to Accounting Module', () => {
				robotEyes.seesAccountingIcon()
				robotHands.clickOnAccountingIcon()
			})
			it('Verifying the title of the KPI', () => {
				robotHands.scrollingIntoAvgCostPerCarTile()
				robotEyes.seesTitleOfAvgCostPerCar()
				robotEyes.verifyingTheTitleOfAvgCostPerCarWithDefaultDatePickerFrequency('Cost Per Car (YTD)')
			})

			it('Verifying the graph and the value of the Avg Cost Per Car on the tile view', () => {
				robotHands.scrollingIntoAvgCostPerCarTile()
				robotHands.clickOnAccountingIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency(Cypress.env('AvgCostPerCar'),"avg_cost_per_car")
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoAvgCostPerCarTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfAvgCostPerCarTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Avg Cost Per Car drill-down view', () => {
				robotHands.clickOnAvgCostPerCarTile()
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
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForAvgCostPerCar()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForAvgCostPerCar()
				robotHands.clickOnLocationsDropDownApplyButton()
			})
		 })
		 RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Cars (#)')
				robotEyes.seesTheSortButtonsForNoofCars()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Total Costs ($)')
				robotEyes.seesTheSortButtonsForTotalCosts()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Cost Per Car ($)')
				robotEyes.seesTheSortButtonsForTotalCostPerCar()
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForAvgCostPerCar()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForAvgCostPerCar()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForAvgCostPerCar()
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
				robotHands.verifyingQuarterlyFrequency(Cypress.env('AvgCostPerCar'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesYearlyFilterOption()
				robotHands.clickOnYearlyFilterOption()
				robotHands.verifyingYearlyFrequency(Cypress.env('AvgCostPerCar'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesMonthlyFilterOption()
				robotHands.clickOnMonthlyFilterOption()
				robotHands.verifyingMonthlyFrequency(Cypress.env('AvgCostPerCar')) 
				robotEyes.verifyingStartTimeOnTheTable()
			})

			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderPeriodButton()
				robotHands.clicksOnAscendingOrderPeriodButton()
				robotHands.clicksOnDescendingOrderNoofCarsButton()
				robotHands.clicksOnAscendingOrderNoofCarsButton()
				robotHands.clicksOnDescendingOrderTotalCostsButton()
				robotHands.clicksOnAscendingOrderTotalCostsButton()
				robotHands.clicksOnDescendingOrderTotalCostPerCarButton()
				robotHands.clicksOnAscendingOrderTotalCostPerCarButton()

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
