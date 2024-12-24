import '../../support/e2e'
import { Dependencies,RobotEyes,RobotHands } from '../../robots/wm/membership/growth&churnRateByAccounts'
import RoleFilter from '../../support/filter'

const robotHands = new RobotHands()
const robotEyes = new RobotEyes()
const dependencies = new Dependencies()

describe("Verifying the functionality of Churn Rate By Accounts KPI", () => {
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
	
    context("Verifying the functionality of Tile view of the Churn Rate By Accounts KPI", () => {
        RoleFilter(['smoke', 'regression'], () => {
			it('Navigating to Membership Module', () => {
				robotEyes.seesMembershipIcon()
				robotHands.clickOnMembershipIcon()
			})
		})

		RoleFilter(['smoke', 'regression'], () => {
			it('Verifying the title of the KPI', () => {
				robotHands.scrollingIntoChurnRateTile()
				robotEyes.seesTitleOfChurnRateByAccounts()
				robotEyes.verifyingTheTitleOfChurnRateKPIWithDefaultDatePickerFrequency()
			})
			it('Verifying the graph and the value of the Churn Rate By Accounts on the tile view', () => {
				robotHands.scrollingIntoChurnRateTile()
				robotHands.clickOnMembershipIcon()
				robotHands.verifiyingTheTileWithDefaultFrequency()
			})
			it('Verifying the functionality of the date picker on the tile view', () => {
				robotHands.scrollingToSeeDatePicker()
				robotEyes.seesDatepickerIsVisibleOnModuleView()
				robotHands.clicksOnDatePicker()
				robotHands.selectsTrailing12OnTileView()
				robotHands.scrollingIntoChurnRateTileAfterChangingTheFrequencyFromDefault() 
				robotEyes.veryfingTheTitleOfChurnRateTileViewAfterChangingTheFrequencyFromDefault()
			})
        })
    })
    context('Verifying the functionality of drill down view of Churn Rate By Accounts', () => {
        RoleFilter(['smoke','regression'],() => {
			it('Verifying the Churn Rate By Accounts drill-down view', () => {
				robotHands.clickOnMonthlyChurnRateTile() 
				robotEyes.seesBacktoMembershipVisibleOnDrillDownView()
				robotEyes.seesTopNavigationBarIsVisibleOnDrillDownView()
				robotEyes.seesDatePickerIsVisibleOnDrillDownViewOnChurnRateDrillDownView()
				robotEyes.seesEllipsisForExportOption()
				robotEyes.seesTheTitleOfTheGraphAndTable()
				robotEyes.verifyingTheTitleOfTheGraphAndTable()
				robotEyes.seesGraphOnChurnRateDrillDownView()
				robotEyes.seesTableOnDrillDownView()
				robotHands.clickOnTopNavigationBarInDrillDownView()
				robotEyes.seesTheSerchBoxAfterClickingTheTopNavigationBar()
				robotEyes.verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView()
				robotEyes.verifyingTheTopNavigationBarLocationsInDrillDownView()
				robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForGrowthAndChurnRate()
				robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForGrowthAndChurnRate()
				robotHands.clickOnLocationDropDownApplyButton()
			})
		})

		RoleFilter(['regression'], () => {
			it('Verifying the context of Table', () => {	
				robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
				robotEyes.seesTheSortButtonsForPeriod()
				robotEyes.verifyingTheSecondColumnHeaderOfTable('Accounts (Start) (#)')
				robotEyes.seesTheSortButtonsForActiveAccountsStart() 
				robotEyes.verifyingTheThirdColumnHeaderOfTable('New Sign Up (#)')
				robotEyes.seesTheSortButtonsForNewSignUp() 
				robotEyes.verifyingTheFourthColumnHeaderOfTable('Reactivated (#)')
				robotEyes.seesTheSortButtonsForReactivated()
				robotEyes.verifyingTheFifthColumnHeaderOfTable('Deactivated (#)')
				robotEyes.seesTheSortButtonsForDeactivated()
				robotEyes.verifyingTheSixthColumnHeaderOfTable('Accounts (End) (#)')
				robotHands.scrollingIntoVerifyingTheContextOfHeaderOfTable()
				robotEyes.seesTheSortButtonsForTotalActiveEnd()
				robotHands.scrollingIntoVerifyingTheContextOfHeaderOfTable()
				robotEyes.verifyingTheSevenColumnHeaderOfTable('Churn Rate (%)')
				robotEyes.seesTheSortButtonsForChurnRate()
				robotEyes.verifyingTheEightColumnHeaderOfTable('Growth Rate (%)')
				robotEyes.seesTheSortButtonsForGrowthRate()
				robotEyes.verifyingTheNineColumnHeaderOfTable('Net Growth (#) ')
				robotEyes.seesTheSortButtonsForNetGrowth()
				robotHands.clickOnDatePickerInChurnRateDrillDownView()
				robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForGrowthAndChurnRate()
				robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForGrowthAndChurnRate()
				robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForGrowthAndChurnRate()
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
				robotHands.clicksOnAscendingOrderActiveAccountsStartButton()
				robotHands.clicksOnDescendingOrderActiveAccountsStartButton()
				robotHands.clicksOnAscendingOrderNewSignUpButton() 
				robotHands.clicksOnDescendingOrderNewSignUpButton()
				robotHands.clicksOnAscendingOrderReactivatedButton()
				robotHands.clicksOnDescendingOrderReactivatedButton() 
				robotHands.clicksOnAscendingOrderDeactivatedButton()
				robotHands.clicksOnDescendingOrderDeactivatedButton()
				robotHands.clicksOnAscendingOrderTotalActiveEndButton()
				robotHands.clicksOnDescendingOrderTotalActiveEndButton()
				robotHands.clicksOnAscendingOrderChurnRateButton()
				robotHands.clicksOnDescendingOrderChurnRateButton()
				robotHands.clicksOnAscendingOrderGrowthRateButton()
				robotHands.clicksOnDescendingOrderGrowthRateButton()

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