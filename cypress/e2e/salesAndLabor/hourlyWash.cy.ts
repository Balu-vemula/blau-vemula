import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/salesAndLabor/hourlyWash'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('Verifying the functionality of Hourly Wash Volume KPI', () => {
	describe('Verifying the functionality of Hourly Wash Volume KPI', () => {
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
				robotEyes.seesTitleOfHourlyWashVolume()
				robotEyes.verifyingTheTitleOfHourlyWashVolumeWithDefaultDatePcikerFrequency()
			})

			it('Verifying the graph and the value of the Hourly Wash Volume on tile view', () => {
				robotHands.scrollingIntoHourlyWashVolumeTile()				
                robotHands.clickOnSalesAndLaborIcon()
                // robotHands.verifiyingTheTileWithDefaultFrequency()               
			})
			it('Verifying the functionality of datepicker on tile view', () => {
				robotHands.scrollingTOSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotEyes.veryfiesTheTitleOfHourlyWashVolumeTileViewAfterChangingTheFrequencyFromDefault()
			})
			it('Verifying the Hourly Wash Volume drill down view', () => {
				robotHands.clickOnHourlyWashVolumeTile()
				robotEyes.seesBackToAllSitesVisibleOnDrillDownView()
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotHands.clickOnDatePickerInDrillDownView()				
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.ClickOnMonthDropDownIntheDatePicker()
				robotHands.selectMonthFromTheDailyDropDownInDatePicker()
				robotHands.selectDate()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForHourlyWashVolume()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewFOrHourlyWashVolume()
				robotHands.clickOnApplyButton()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable('Hourly Volume')
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
			})
		})
		RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Hour')
				robotEyes.seesTheSortButtonsForHour()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Cars (#)')
				robotEyes.seesTheSortButtonsForNumberOfCars()
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Sales ($)')
				robotEyes.seesTheSortButtonsForRevenue()
				robotEyes.verifyingTheSecondRowHeaderOfTable('Total')		
				robotHands.clickOnBreakdonwForFirstTableRow()
			})

			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderButton()
				robotHands.clicksOnAscendingOrderButton()
				robotHands.clicksOnDescendingOrderNumberOfCarsButton()
				robotHands.clicksOnAscendingOrderNumberOfCarsButton()		
				robotHands.clicksOnDescendingOrderRevenueButton()
				robotHands.clicksOnAscendingOrderRevenueButton()

			})
			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonIsVisible()
				robotHands.clickingOnEscapeButtonToCloseTheExportOption()

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
