import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/individualWash'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Individual Washes Sales KPI', () => {
	describe('Verifying the functionality of Individual Washes Sales KPI', () => {
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
			it('Navigating to Sales and Labor module', () => {
				robotEyes.seesSalesAndLaborIcon()
				robotHands.clickOnSalesAndLaborIcon()
			})
		})
		RoleFilter(['smoke', 'regression'], () => {
			it('Verifying the title of the KPI', () => {
				robotEyes.seesTitleOfIndividualWash()
				robotEyes.verifyingTheTitleOfIndividualWashWithDefaultDatePickerFrequency()
			})

			it('Verifying the graph and the value of the Individual Washes on the tile view', () => {
				robotHands.scrollingIntoIndividualWashTile()
                robotHands.clickOnSalesAndLaborIcon()
				// robotHands.verifiyingTheTileWithDefaultFrequency()
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingTOSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotEyes.veryfiesTheTitleOfIndividualWashTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Individual Washes drill-down view', () => {
				robotHands.clickOnIndividualWashTile()
				robotEyes.seesBackToAllSitesVisibleOnDrillDownView()
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotEyes.seesEllipsIsForExportOption()
				robotHands.scrollToTitle()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable('Individual Washes')
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
			})
		})
		RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Washes (#)')
				robotEyes.seesTheSortButtonsForWashes()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Contribution (%)')
				robotEyes.seesTheSortButtonsForPercentage()
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Cash ($)')
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Card ($)')
				robotEyes.verifyingTheSixthColumnHeaderOfTable('Others ($)')
				robotEyes.verifyingTheSeventhColumnHeaderOfTable('Sales ($)')
				robotEyes.seesTheSortButtonsForCash()
				robotEyes.verifyingTheEightColumnHeaderOfTable('Avg. Ticket ($)')
				robotEyes.seesTheSortButtonsForCard()
				robotEyes.verifyingTheSecondRowHeaderOfTable('Total')
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForIndividualWash()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForIndividualWash()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrIndividualWash()
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.clickOnMonthDropDownInTheDatePicker()
				robotHands.selectMonthFromTheMonthlyDropDownInDatePicker()
				robotHands.selectFirstDayInTheDateRange()
				robotHands.clickOnNextMonthIcon()
				robotHands.selectLastDayInTheDateRange()
				robotHands.clickOnApplyButton()
				robotHands.clickOnBreakdonwForFirstTableRow()
				robotEyes.VerifyingMonthNameOnTheTableAccordingToTheSelection()
				robotEyes.verifyingTheAccordianIconNextToTheMonthInTheTable()
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