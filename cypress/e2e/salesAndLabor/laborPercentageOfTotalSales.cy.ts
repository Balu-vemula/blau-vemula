import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/laborPercentageOfTotalSales'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Labor % of Total Sales KPI', () => {
	describe('Verifying the functionality of Labor % of Total Sales KPI', () => {
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
			it('Navigating to Sales and Labor module', () => {
				robotEyes.seesSalesAndLaborIcon()
				robotHands.clickOnSalesAndLaborIcon()
			})
		 })
		 RoleFilter(['smoke', 'regression'], () => {
			it('Verifying the title of the KPI', () => {
				robotHands.scrollingIntoLaborPercentageOfTotalSalesTile()
				robotEyes.seesTitleOfLaborPercentageOfTotalSales()
				robotEyes.verifyingTheTitleOfLaborPercentageOfTotalsalesWithDefaultDatePickerFrequency()
			})

			it('Verifying the graph and the value of the Labor % of Total Sales on the tile view', () => {
				robotHands.scrollingIntoLaborPercentageOfTotalSalesTile()
				robotHands.clickOnSalesAndLaborIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency()
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoLaborPercentageOfTotalSalesTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfLaborPercentageOfTotalSalesTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Labor % of Total Sales drill-down view', () => {
				robotHands.clickOnLaborPercentageOfTotalSalesTile()
				robotEyes.seesBacktoSalesAndLaborVisibleOnDrillDownView()	
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable()
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
			})
		 })
		 RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Cars (#)')
				robotEyes.seesTheSortButtonsForNoOfCars()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Sales ($)')
				robotEyes.seesTheSortButtonsForTotalSalesValue()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Cost ($)')
				robotEyes.seesTheSortButtonsForLaborCost()
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Labor Per Car ($)')
				robotEyes.seesTheSortButtonsForLaborPerCar()
				robotEyes.verifyingTheSixthColumnHeaderOfTable('Labor (%)')
				robotEyes.seesTheSortButtonsForLaborPercentage()
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForLaborPercentageOfTotalSales()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForLaborPercentageOfTotalSales()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForLaborPercentageOfTotalSales()
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
				robotHands.verifyingQuarterlyFrequency()
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesYearlyFilterOption()
				robotHands.clickOnYearlyFilterOption()
				robotHands.verifyingYearlyFrequency()
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesMonthlyFilterOption()
				robotHands.clickOnMonthlyFilterOption()
				robotHands.verifyingMonthlyFrequency()
				robotEyes.verifyingStartTimeOnTheTable()
			})

			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderPeriodButton()
				robotHands.clicksOnAscendingOrderPeriodButton()
				robotHands.clicksOnDescendingOrderNumberOfCarsButton()
				robotHands.clicksOnAscendingOrderNumberOfCarsButton()
				robotHands.clicksOnDescendingOrderTotalSalesValueButton()
				robotHands.clicksOnAscendingOrderTotalSalesValueButton()
				robotHands.clicksOnDescendingOrderLaborCostButton()
				robotHands.clicksOnAscendingOrderLaborCostButton()
				robotHands.clicksOnDescendingOrderLaborPerCarButton()
				robotHands.clicksOnAscendingOrderLaborPerCarButton()
				robotHands.clicksOnDescendingOrderLaborPercentageButton()
				robotHands.clicksOnAscendingOrderLaborPercentageButton()
			})
			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonIsVisible()
				robotHands.clicksOnExportOption()			})
		 })
		 RoleFilter(['smoke', 'regression'], () => {	
			it('Verifying the functionality of Back to all sites', () => {
				robotHands.clickOnBackToAllSitesButton()
				robotEyes.verifyingTheSalesAndLaborModuleHeader()
			})
		})
	})
})