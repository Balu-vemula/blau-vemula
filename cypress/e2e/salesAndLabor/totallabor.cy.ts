import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/totallabor'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Total Labor KPI', () => {
	describe('Verifying the functionality of Total Labor KPI', () => {
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
				robotHands.scrollingIntoTotalLaborTile()
				robotEyes.seesTitleOfTotalLabor()
				robotEyes.verifyingTheTitleOfTotalLaborWithDefaultDatePickerFrequency()
			})
			it('Verifying the graph and the value of the Total Labor on the tile view', () => {
				robotHands.scrollingIntoTotalLaborTile()
				robotHands.clickOnSalesAndLaborIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency()
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoTotalLaborTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfTotalLaborTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Total Labor drill-down view', () => {
				robotHands.clickOnTotalLaborTile()
				robotEyes.seesBacktoSalesAndLaborVisibleOnDrillDownView()
				robotEyes.seesTopNavigationBarIsVisibleOnDrillDownView()
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
				robotHands.clickOnTopNavigationBarInDrillDownView()
				robotEyes.seesTheSerchBoxAfterClickingTheTopNavigationBar()
				robotEyes.verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView()
				robotEyes.verifyingTheTopNavigationBarLocationsInDrillDownView()
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForTotalLabor()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForTotalLabor()
				robotHands.clickOnLocationDropDownApplyButton()
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Labor Hours (#)')
				robotEyes.seesTheSortButtonsForLaborHours()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Cost ($)')
				robotEyes.seesTheSortButtonsForLaborCost()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Cars (#)')
				robotEyes.seesTheSortButtonsForNoOfCars()
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Cars Per Labor Hour (#)')
				robotEyes.seesTheSortButtonsForCarsPerLaborHour()
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForTotalLabor()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForTotalLabor()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForTotalLabor()
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
				robotHands.clicksOnDescendingOrderLaborHoursButton()
				robotHands.clicksOnAscendingOrderLaborHoursButton()
				robotHands.clicksOnDescendingOrderLaborCostButton()
				robotHands.clicksOnAscendingOrderLaborCostButton()
				robotHands.clicksOnDescendingOrderNoOfCarsButton()
				robotHands.clicksOnAscendingOrderNoOfCarsButton()
				robotHands.clicksOnDescendingOrderCarPerLaborHourButton()
				robotHands.clicksOnAscendingOrderCarPerLaborHourButton()
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