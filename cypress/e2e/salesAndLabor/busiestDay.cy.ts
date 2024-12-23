import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/busiestDay'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Busiest Day KPI', () => {
	describe('Verifying the functionality of Busiest Day KPI', () => {
		RoleFilter(['smoke', 'regression'], () => {
			before('Login in to washmetrix', () => {
				cy.clearAllSessionStorage()
				cy.clearAllLocalStorage()
				cy.clearAllCookies()
				dependencies.loginWashmetrix()
				robotHands.scrollToSeeWashmetrixCarWashOrg()
				robotEyes.seesWashmetrixOrg()
				robotHands.clickOnWashmetrixCarWashOrg()
			})
			it('Navigating to Sales and Labor module', () => {
				robotEyes.seesSalesAndLaborIcon()
				robotHands.clickOnSalesAndLaborIcon()
			})
			it('Verifying the title of the KPI', () => {
				robotHands.scrollingIntoBusiestDayTile()
				robotEyes.seesTitleOfBusiestDay()
				robotEyes.verifyingTheTitleOfBusiestDayWithDefaultDatePickerFrequency()
			})

			it('Verifying the graph and the value of the Busiest Day on the tile view', () => {
				robotHands.scrollingIntoBusiestDayTile()
				robotHands.clickOnSalesAndLaborIcon()
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoBusiestDayTileAfterChangingTheFrequencyFromDefault()
				robotEyes.veryfingTheTitleOfBusiestDayTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Busiest Day drill-down view', () => {
				robotHands.clickOnBusiestDayTile()
				robotEyes.seesBackToAllSitesVisibleOnDrillDownView()
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable('Traffic Distribution')
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
			})
		})
		RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Hour')
				robotEyes.seesTheSortButtonsForHour()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Sunday')
				robotEyes.seesTheSortButtonsForSunday()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Monday')
				robotEyes.seesTheSortButtonsForMonday()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Tuesday')
				robotEyes.seesTheSortButtonsForTuesday()
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Wednesday')
				robotEyes.seesTheSortButtonsForWednesday()
				robotEyes.verifyingTheSixthColumnHeaderOfTable('Thursday')
				robotEyes.seesTheSortButtonsForThursday()
				robotEyes.verifyingTheSeventhColumnHeaderOfTable('Friday')
				robotEyes.seesTheSortButtonsForFriday()
				robotEyes.verifyingTheEighthColumnHeaderOfTable('Saturday')
				robotEyes.seesTheSortButtonsForSaturday()
				robotEyes.verifyingTheSecondRowHeaderOfTable('Total')
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForBusiestDay()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForBusiestDay()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrBusiestDay()
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.clickOnMonthDropDownInTheDatePicker()
				robotHands.selectMonthFromTheMonthlyDropDownInDatePicker()
				robotHands.selectFirstDayInTheDateRange()
				robotHands.clickOnNextMonthIcon()
				robotHands.selectLastDayInTheDateRange()
				robotHands.clickOnApplyButton()
				robotEyes.VerifyingStartTimeeOnTheTable()
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