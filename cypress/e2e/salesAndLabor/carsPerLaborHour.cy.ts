import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/carsPerLabouHour'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Cars Per Labor Hour KPI', () => {
	describe('Verifying the functionality of Cars Per Labor Hour KPI', () => {
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
				robotHands.scrollingIntoCarsPerLaborHourTile()
				robotEyes.seesTitleOfCarsPerLaborHour()
				robotEyes.verifyingTheTitleOfCarsPerLaborHourWithDefaultDatePickerFrequency()
			})

			it('Verifying the graph and the value of the Cars Per Labor Hour on the tile view', () => {
				robotHands.scrollingIntoCarsPerLaborHourTile()
				robotHands.clickOnSalesAndLaborIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency()
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoCarsPerLaborHourTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfCarsPerLaborHourTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Cars Per Labor Hour drill-down view', () => {
				robotHands.clickOnCarsPerLaborHourTile()
				robotEyes.seesBackToAllSitesVisibleOnDrillDownView()
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable('Cars Per Labor Hour')
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
			})
		  })
		  RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
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
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForCarsPerLaborHour()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForCarsPerLaborHour()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrCarsPerLaborHour()
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
				robotHands.clicksOnDescendingOrderButton()
				robotHands.clicksOnAscendingOrderButton()
			})
			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonIsVisible()
				 robotHands.clicksOnExportOption()	
			})
		  })
		  RoleFilter(['smoke', 'regression'], () => {	
			it('Verifying the functionality of back to all sites', () => {
				robotHands.clickOnBackToAllSitesButton()
				robotEyes.verifyingTheSalesAndLaborModuleHeader()
			})
		  })
	})
})