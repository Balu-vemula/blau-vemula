import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/avgMonthlySales'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Avg.Monthly Sales KPI', () => {

	describe('Verifying the functionality of Avg.Monthly Sales KPI', () => {
		// RoleFilter(['smoke', 'regression'], () => {
			before('Login in to washmetrix', () => {
				cy.clearAllSessionStorage()
				cy.clearAllLocalStorage()
				cy.clearAllCookies()
				dependencies.loginWashmetrix()
				robotEyes.seesWashmetrixOrg()
				robotHands.clickOnWashmetrixCarWashOrg()
			})
		// })
		// RoleFilter(['smoke', 'regression'], () => {
			it('Navigating to Sales and Labor nodule', () => {
				robotEyes.seesSalesAndLaborIcon()
				robotHands.clickOnSalesAndLaborIcom()
			})
		// })
		RoleFilter(['smoke', 'regression'], () => {
			it('Verify the title of the KPI', () => {
				robotEyes.seesTitleOfAverageMonthlySales()
				robotEyes.verifyingTheTitleOfAverageMonthlySalesWithDefaultDatePcikerFrequency()
			})

			it('verifying the graph and the value of the average monthly sales on tile view', () => {
				robotHands.scrollingIntoAverageMonthlySalesTile()
				robotEyes.seesTheGraphAndSaleValueForAverageMonthlySalesonTileView()
			})
			it('Verifying the functionality of datepicer on tile view', () => {
				robotHands.scrollingTOSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotEyes.veryfiesTheTitleOfAverageMonthlySalesTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Average Monthly Sales drill down view', () => {
				robotHands.clickOnAverageMonthlySalesTIle()
				robotEyes.seesBackToAllSitesVisibleOnDrillDownView()
				robotEyes.verifyingTitleOfAverageMonthlySalesKPIDrillDownView()
				robotEyes.seesDatePicketISVisibleOnDrillDownView()
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
				robotEyes.verifyingTheSecondColumnHeaderOfTable('No. of Cars')
				robotEyes.seesTheSortButtonsForNumberOfCars()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Total Sales Value')
				robotEyes.seesTheSortButtonsForTotalSalesValue()
				robotEyes.verifyingTheSecondRowHeaderOfTable('Total')
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForAverageMonthlySales()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForAverageMonthlySales()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrAverageMonthlySales()
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.ClickOnMonthDropDownIntheDatePicker()
				robotHands.selectMonthFromTheMonthlyDropDownInDatePicker()
				robotHands.selectFirstDayInTheDateRange()
				robotHands.clickOnNextMonthIcon()
				robotHands.selectLastDayInTheDateRange()
				robotHands.clickOnApplyButton()
				robotHands.clickOnBreakdonwForFirstTableRow()
				robotEyes.VerifyingMonthNameOnTheTableAccordingToTheSelection()
				robotEyes.verifyingTheAccordingIConNextToTheMonthInTheTable()
				robotHands.verifiesFunctionalityOfAccordianInTheTable()
			})

			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderButton()
				robotHands.clicksOnAscendingOrderButton()
			})
			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonISVisible()
				// robotHands.clicksOnExportOption();
				robotHands.clickingOnEscapeButtonToCloseTheExportOPtion()
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
