import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
} from '../../robots/wm/membership/activeMembers'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

describe('Verifying the functionality of Active Members KPI', () => {
    context('Verifying the functionality of Active Members KPI', () => {
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
            it('Navigating to Membership Module', () => {
                robotEyes.seesMembershipIcon()
                robotHands.clickOnMembershipIcon()
            })
        })

        RoleFilter(['smoke', 'regression'], () => {
            it('Verifying the title of the KPI', () => {
                robotHands.scrollingIntoTile('[title*="Active Members"]', 0)
                robotEyes.seesTitleOfKPI('[title*="Active Members"]', 'Active Members (YTD)')
                robotEyes.verifyingTheTitleWithDefaultDatePickerFrequency('[title*="Active Members"]', 'Active Members (YTD)')
            })

            it('Verifying the graph and the value of the Active Members on the tile view', () => {
                robotHands.scrollingIntoTile('[title*="Active Members"]', 0)
                robotHands.clickOnMembershipIcon()
            })

            it('Verifying the functionality of the date picker on the tile view', () => {
                robotHands.scrollingToSeeDatePicker()
                robotEyes.seesDatepickerIsVisibleOnModuleView()
                robotHands.clicksOnDatePicker()
                robotHands.selectsTrailing12OnTileView()
                robotHands.scrollingIntoTileAfterChangingTheFrequencyFromDefault('[title="Active Members "]', 0)
                robotEyes.veryfingTheTitleOfTileViewAfterChangingTheFrequencyFromDefault('[title="Active Members "]', 'Active Members ')
            })
        })
    })

    context('Verifying the drill down view of Active Accounts KPI', () => {
        RoleFilter(['smoke', 'regression'], () => {
            it('Verifying the elements in Drill Down View of the KPI',()=> {
                robotHands.clickOnTile('div[title="Active Members "]')
                robotEyes.seesBackToMembershipVisibleOnDrillDownView()
                robotEyes.seesDatePickerIsVisibleOnDrillDownView()
                robotEyes.seesEllipsisForExportOption()
                robotEyes.seesTheTitleOfTheGraphAndTable()
                robotEyes.verifyingTheTitleOfTheGraphAndTable('Active Members')
                robotEyes.seesGraphOnDrillDownView()
                robotEyes.seesTableOnDrillDownView()
                robotHands.clickOnTopNavigationBarInDrillDownView()
                robotEyes.seesTheSerchBoxAfterClickingTheTopNavigationBar()
                robotEyes.verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView()
                robotEyes.verifyingTheTopNavigationBarLocationsInDrillDownView()
                robotEyes.verifyTheCancelButtonInTheLocationInDrillDownViewForActiveMembers()
                robotEyes.verifyTheApplyButtonInTheLocationInDrillDownViewForActiveMembers()
                robotHands.clickOnLocationDropDownApplyButton()
            })
            it('Verifying the context of table', ()=> {
                robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
                robotEyes.seesTheSortButtonsForPeriod()
                robotEyes.verifyingTheSecondColumnHeaderOfTable('Active Accounts (#)')
                robotEyes.seesTheSortButtonsForActiveAccounts()
                robotEyes.verifyingTheThirdColumnHeaderOfTable('Active Members (#)')
                robotEyes.seesTheSortButtonsForActiveMembers()
                robotEyes.verifyingTheFourthColumnHeaderOfTable('Membership Value ($)')
                robotEyes.seesTheSortButtonsForMembershipValue()
            })
            it('Verifying the functionality of Date Picker in Drill down View',() =>{
                robotHands.clickOnDatePickerInDrillDownView()
                robotEyes.seesTextForDatePickerFrequency()
                robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForActiveMembers()
                robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownViewForActiveMembers()
                robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownViewForActiveMembers()
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
        })

        RoleFilter(['regression'], () => {
            it('Verifying the functionality of sort button for the column',()=>{
                robotHands.clicksOnDescendingOrderPeriodButton()
                robotHands.clicksOnAscendingOrderPeriodButton()
                robotHands.clicksOnDescendingOrderActiveAccounts()
                robotHands.clicksOnAscendingOrderActiveAccounts()
                robotHands.clicksOnDescendingOrderActiveMembers()
                robotHands.clicksOnAscendingOrderActiveMembers()
                robotHands.clicksOnDescendingOrderMembershipValue()
                robotHands.clicksOnAscendingOrderMembershipValue()
            })
            it('Verifying the Functionality of Export option',()=>{
                robotHands.clicksOnElipsisIconOnDrillDownView()
                robotEyes.verifyingTheExportButtonIsVisible()
                robotHands.clicksOnExportOption()

            
            })
        })

        RoleFilter(['smoke', 'regression'], () => {
            it('Verifying the functionality of Back to all sites', () => {
                robotHands.clickOnBackToAllSitesButton()
                robotEyes.verifyingTheMembershipModuleHeader()
            })
        })
    })
})
     




