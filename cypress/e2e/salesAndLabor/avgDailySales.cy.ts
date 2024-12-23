import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/avgDailySales'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Avg.Daily Sales KPI', () => {
	describe('Verifying the functionality of Avg.Daily Saes KPI', () => {
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
		})
		RoleFilter(['smoke', 'regression'], () => {
			it('Navigating to Sales and Labor nodule', () => {
				robotEyes.seesSalesAndLaborIcon()
				robotHands.clickOnSalesAndLaborIcon()
				robotEyes.wait(10000)
			})
		})
		RoleFilter(['smoke', 'regression'], () => {
			it('Verify the title of the KPI', () => {
				robotEyes.seesTitleOfAverageDailySales()
				robotEyes.verifyingTheTitleOfAverageDailySalesWithDefaultDatePickerFrequency()
			})

			it('Verifying the graph and the value of the average Daily sales on tile view', () => {
				robotHands.scrollingIntoAverageDailySalesTile()				
                robotHands.clickOnSalesAndLaborIcon()
                // robotHands.verifiyingTheTileWithDefaultFrequency()               
			})
			it('Verifying the functionality of datepicker on tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotEyes.veryfiesTheTitleOfAverageDailySalesTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Average Daily Sales drill down view', () => {
				robotHands.clickOnAverageDailySalesTile()
				robotEyes.seesBackToAllSitesVisibleOnDrillDownView()
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable('Avg. Daily Sales')
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
			})
		})
		RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Cars (#)')
				robotEyes.seesTheSortButtonsForNumberOfCars()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Sales ($)')
				robotEyes.seesTheSortButtonsForTotalSalesValue()
				robotEyes.verifyingTheSecondRowHeaderOfTable('Total')
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForAverageDailySales()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForAverageDailySales()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrAverageDailySales()
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.ClickOnMonthDropDownIntheDatePicker()
				robotHands.selectMonthFromTheDailyDropDownInDatePicker()
				robotHands.selectFirstDayInTheDateRange()
				robotHands.clickOnNextMonthIcon()
				robotHands.selectLastDayInTheDateRange()
				robotHands.clickOnApplyButton()
				robotHands.clickOnBreakdonwForFirstTableRow()
				robotEyes.VerifyingDayOnTheTableAccordianToTheSelection('06/01/22')
				robotEyes.verifyingTheAccordingIConNextToTheDayInTheTable()
				robotHands.verifyingFunctionalityOfAccordianInTheTable()
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
