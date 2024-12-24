import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/accounting/laborPercentageOfIncome'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Labor % of Income KPI', () => {
	describe('Verifying the functionality of Labor % of Income KPI', () => {
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
				robotHands.scrollingIntoTile('[title*="Labor % of Income"]',0)
				robotEyes.seesTitleOfKPI('[title*="Labor % of Income"]','Labor % of Income (YTD)')
				robotEyes.verifyingTheTitleWithDefaultDatePickerFrequency('[title*="Labor % of Income"]','Labor % of Income (YTD)')
			})

			it('Verifying the graph and the value of the Labor % of Income on the tile view', () => {
				robotHands.scrollingIntoTile('[title*="Labor % of Income"]',0)
				robotHands.clickOnAccountingIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency(Cypress.env('LaborPercentageofIncome'),"labor_percentage_of_income")
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoTileAfterChangingTheFrequencyFromDefault('[title="Labor % of Income "]', 0)
				robotEyes.veryfingTheTitleOfTileViewAfterChangingTheFrequencyFromDefault('[title="Labor % of Income "]','Labor % of Income ')
			})
			it('Verifying the Labor % of Income drill-down view', () => {
				robotHands.clickOnTile('div[title="Labor % of Income "]')
				robotEyes.seesBacktoAccountingVisibleOnDrillDownView()	
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable('Labor % of Income')
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
				robotHands.clickOnTopNavigationBarInDrillDownView()
				robotEyes.seesTheSerchBoxAfterClickingTheTopNavigationBar()
				robotEyes.verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView()
				robotEyes.verifyingTheTopNavigationBarLocationsInDrillDownView()
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForLaborPercentageOfIncome()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForLaborPercentageOfIncome()
				robotHands.clickOnLocationDropDownApplyButton()
			})
		 })
		 RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Cars (#)')
				robotEyes.seesTheSortButtonsForTotalCars()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Income ($)')
				robotEyes.seesTheSortButtonsForIncome()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Labor Cost ($)')
				robotEyes.seesTheSortButtonsForLabor()
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Labor Per Car ($)')
				robotEyes.seesTheSortButtonsForLaborPerCar()
				robotEyes.verifyingTheSixthColumnHeaderOfTable('Labor Of Income (%)')
				robotEyes.seesTheSortButtonsForLaborPercentageOfIncome()
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.seesTextForDatePickerFrequency()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForLaborPercentageOfIncome()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForLaborPercentageOfIncome()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForLaborPercentageOfIncome()
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
				robotHands.verifyingQuarterlyFrequency(Cypress.env('LaborPercentageofIncome'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesYearlyFilterOption()
				robotHands.clickOnYearlyFilterOption()
				robotHands.verifyingYearlyFrequency(Cypress.env('LaborPercentageofIncome'))
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesMonthlyFilterOption()
				robotHands.clickOnMonthlyFilterOption()
				robotHands.verifyingMonthlyFrequency(Cypress.env('LaborPercentageofIncome')) 
				robotEyes.verifyingStartTimeOnTheTable()
			})

			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderPeriodButton()
				robotHands.clicksOnAscendingOrderPeriodButton()
				robotHands.clicksOnDescendingOrderTotalCarsButton()
				robotHands.clicksOnAscendingOrderTotalCarsButton()
				robotHands.clicksOnDescendingOrderIncomeButton()
				robotHands.clicksOnAscendingOrderIncomeButton()
				robotHands.clicksOnDescendingOrderLaborButton()
				robotHands.clicksOnAscendingOrderLaborButton()
				robotHands.clicksOnDescendingOrderLaborPerCarButton()
				robotHands.clicksOnAscendingOrderLaborPerCarButton()
				robotHands.clicksOnDescendingOrderLaborPercentageOfIncomeButton()
				robotHands.clicksOnAscendingOrderLaborPercentageOfIncomeButton()

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
