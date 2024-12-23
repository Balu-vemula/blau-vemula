import '../../support/e2e'
import { Dependencies,RobotEyes,RobotHands } from '../../robots/wm/membership/avgClubuseByAccounts'
import RoleFilter from '../../support/filter'

const robotHands = new RobotHands()
const robotEyes = new RobotEyes()
const dependencies = new Dependencies()

describe("Verifying the functionality of Avg. Account Club Use KPI", () => {
    RoleFilter(['smoke', 'regression'], () => {
        before('Login in to washmetrix', () => {
            cy.clearAllSessionStorage()
            cy.clearAllLocalStorage()
            cy.clearAllCookies()
            dependencies.loginWashmetrix()
            robotHands.scrollingIntoOrganisation()
            robotEyes.seesWashmetrixOrg()
            robotHands.clickOnOrg()
        })
    })
	
    context("Verifying the functionality of Tile view of the Avg. Account Club Use KPI", () => {
        RoleFilter(['smoke', 'regression'], () => {
			it('Navigating to Membership Module', () => {
				robotEyes.seesMembershipIcon()
				robotHands.clickOnMembershipIcon()
			})
		})

		RoleFilter(['smoke', 'regression'], () => {
			it('Verifying the title of the KPI', () => {
				robotHands.scrollingIntoAvgClubUseTile()
				robotEyes.seesTitleOfAvgClubUse()
				robotEyes.verifyingTheTitleOfAvgClubuseKPIWithDefaultDatePickerFrequency()
			})
			it('Verifying the graph and the value of the Avg. Account Club Use on the tile view', () => {
				// robotHands.scrollingIntoAvgClubUseTile()
				robotHands.clickOnMembershipIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency()
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoAvgClubUseTileAfterChangingTheFrequencyFromDefault() 
				robotEyes.veryfingTheTitleOfAverageClubUseTileViewAfterChangingTheFrequencyFromDefault()
			})
        })
    })
    context('Verifying the functionality of drill down view of Avg Club USe', () => {
        RoleFilter(['smoke','regression'],() => {
			it('Verifying the Avg. Account Club Use drill-down view', () => {
				robotHands.clickOnMonthlyAvgClubUseTile()
				robotEyes.seesBacktoMembershipVisibleOnDrillDownView()
				robotEyes.seesTopNavigationBarIsVisibleOnDrillDownView()
				robotEyes.seesDatePickerIsVisibleOnDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable()
				robotEyes.seesGraphOnDrillDownView()
				robotEyes.seesTableOnDrillDownView()
				robotHands.clickOnTopNavigationBarInDrillDownView()
				robotEyes.seesTheSerchBoxAfterClickingTheTopNavigationBar()
				robotEyes.verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView()
				robotEyes.verifyingTheTopNavigationBarLocationsInDrillDownView()
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForAvgClubUSe()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForAvgClubUSe()
				robotHands.clickOnLocationsDropDownApplyButton()
			})
		})

		RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {	
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Washes (#)')
				robotEyes.seesTheSortButtonsForTotalWashshes() 
				robotEyes.verifyingTheThirdColumnHeaderOfTable('Redemptions (#)')
				robotEyes.seesTheSortButtonsForRedemptions() 
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Accounts (#)')
				robotEyes.seesTheSortButtonsForAccounts()
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Avg. Club Use (#)')
				robotEyes.seesTheSortButtonsForAvgClubUse()
				robotHands.clickOnDatePickerInDrillDownView()
				robotEyes. verifyTheDatePickerFrequenciesInDrillDownViewForAvgClubUSe()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForAvgClubUse()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForAvgClubUse()
				robotHands.clickOnYearDropDownInTheDatePicker()
				robotHands.selectYearFromTheYearDropDownInDatePicker()
				robotHands.clickOnMonthDropDownInTheDatePicker()
				robotHands.selectMonthFromTheMonthlyDropDownInDatePicker()
				robotHands.selectFirstDayInTheDateRange()
				robotHands.clickOnNextMonthIcon()
				robotHands.selectLastDayInTheDateRange()
				robotHands.clickOnApplyButton()
				robotEyes.verifyingStartTimeOnTheTable()
			})
			it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderPeriodButton()
				robotHands.clicksOnAscendingOrderPeriodButton()
				robotHands.clicksOnAscendingOrderTotalWasheshsButton()
				robotHands.clicksOnDescendingOrderTotalWashesButton()
				robotHands.clicksOnAscendingOrderRedemptionsButton() 
				robotHands.clicksOnDescendingOrderRedemptionsButton()
				robotHands.clicksOnAscendingOrderAccountsButton()
				robotHands.clicksOnDescendingOrderAccountsButton() 
				robotHands.clicksOnAscendingOrderAvgClubseButton()
				robotHands.clicksOnDescendingOrderAvgClubUseButton() 
			})
			it('Verifying the functionality of Export', () => {
				robotHands.clicksOnElipsisIconOnDrillDownView()
				robotEyes.verifyingTheExportButtonIsVisible()
				robotHands.clicksOnExportOption()
			})
		})

		RoleFilter(['smoke', 'regression'], () => {
			it('Verifying the functionality of Back to all sites', () => {
				robotHands.clickOnBackToMembershipButton()
				robotEyes.verifyingTheMembershipModuleHeader()
			})
		})
	})
})