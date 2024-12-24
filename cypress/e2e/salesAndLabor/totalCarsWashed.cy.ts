import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/totalCarsWashed'
import '../../support/e2e'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Total Cars Washed KPI', () => {
	describe('Verifying the functionality of Total Cars Washed KPI', () => {
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
				robotHands.clickOnSalesAndLaborIcom()
			})
		})
		RoleFilter(['smoke', 'regression'], () => {
			it('Verify the title of the KPI', () => {
				robotEyes.seesTitleOfTotalCarsWashed()
				robotEyes.verifyingTheTitleOfTotalCarsWashedWithDefaultDatePcikerFrequency()
			})

			it('verifying the graph and the value of the total washes sales on tile view', () => {
				robotHands.scrollingIntoTotalWashSalesTile()
                robotHands.clickOnSalesAndLaborIcom()
				// robotHands.verifiyingTheTileWithDefaultFrequency()
			})
			it('Verifyt the functionality of datepicer on tile view', () => {
				robotHands.scrollingTOSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotEyes.veryfiesTheTitleOfTotalCarsWashedTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Total Washes Sales drill down view', () => {
				robotHands.clickOnTotalCarsWashedTile()
				robotEyes.seesBackToAllSitesVisibleOnDrillDownView()
				robotEyes.seesDatePicketISVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable('Cars Washed')
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
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForTotalWashSales()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForTotalWashSales()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrTotalWashSales()
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
				robotHands.scrollToDropdown()
				robotEyes.seesFrequencyFilter()
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesQuarterlyFilterOption()
				robotHands.clickOnQuarterlyFilterOption()
				// robotHands.verifyingQuarterlyFrequency()
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesYearlyFilterOption()
				robotHands.clickOnYearlyFilterOption()
				// robotHands.verifyingYearlyFrequency()
				robotHands.clickOnFrequencyFilter()
				robotEyes.seesMonthlyFilterOption()
				robotHands.clickOnMonthlyFilterOption()
				// robotHands.verifyingMonthlyFrequency()
			})

			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderButton()
				robotHands.clicksOnAscendingOrderButton()
			})
			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonISVisible()
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
