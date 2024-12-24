import {RobotEyes,RobotHands,Dependencies} from "../../robots/wm/membership/scheduledVsActual"
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

describe('Verifying the functionality of Scheduled Vs Actual KPIs', () => {
    RoleFilter(['smoke', 'regression'], () => {
        context('verifying the funtionality of Scheduled Vs Actual KPI', () => {
            before('Login in to washmetrix', () => {
                cy.clearAllSessionStorage()
                cy.clearAllLocalStorage()
                cy.clearAllCookies()
                dependencies.loginWashmetrix()
                robotHands.scrollingIntoOrganisation()
                robotEyes.seesWashmetrixOrg()
                robotHands.clickOnWashmetrixCarWashOrg()
            })
            it('Navigating to Membership Module', () => {
                robotEyes.seesMembershipIcon()
                robotHands.clickOnMembershipIcon()
            })
            it('Verifying the title of the KPI', () => {
                robotHands.scrollingToSeeTitleOfKPI()
                robotEyes.seesTheTitleOfKPI()
                robotEyes.verifiesTheTitleOfKPIWithDefaultFrequency('Scheduled vs. Actual (YTD)')
            })
            it('Verifying the functionality of the date picker on the tile view', () => {
                robotHands.scrollingToSeeDatePicker()
                robotEyes.seesDatepickerIsVisibleOnModuleView()
                robotHands.clicksOnDatePicker()
                robotHands.selectsTrailing12OnTileView()
                robotHands.scrollingIntoTileAfterChangingTheFrequencyFromDefault('[title="Scheduled vs. Actual "]', 0)
                robotEyes.veryfingTheTitleOfTileViewAfterChangingTheFrequencyFromDefault('[title="Scheduled vs. Actual "]', 'Scheduled vs. Actual ')
            })

        })
    })

    context('verfying the drill down view of the KPI',() =>{
        RoleFilter(['smoke', 'regression'], () => {
            it('Verifying the elements in Drill Down View of the KPI',()=> {
                robotHands.clickOnTile('div[title="Scheduled vs. Actual "]')
                robotEyes.seesBackToMembershipVisibleOnDrillDownView()
                robotEyes.seesDatePickerIsVisibleOnDrillDownView()
                robotEyes.seesEllipsisForExportOption()
                robotEyes.seesTheTitleOfTheGraphAndTable()
                robotEyes.verifyingTheTitleOfTheGraphAndTable('Scheduled vs. Actual')
                robotEyes.seesGraphOnDrillDownView()
                robotEyes.seesTableOnDrillDownView()
                robotHands.clickOnTopNavigationBarInDrillDownView()
                robotEyes.seesTheSerchBoxAfterClickingTheTopNavigationBar()
                robotEyes.verifyingTheSerchBoxAfterClickingTheTopNavigationBarInDrillDownView()
                robotEyes.verifyingTheTopNavigationBarLocationsInDrillDownView()
                robotEyes.verifyTheCancelButtonInTheLocationInDrillDownView()
                robotEyes.verifyTheApplyButtonInTheLocationInDrillDownView()
                robotHands.clickOnLocationDropDownApplyButton()
            })
        })
        RoleFilter(['smoke', 'regression'], () => {
            it('Verifying the context of table', ()=> {
                robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
                robotEyes.seesTheSortButtonsForPeriod()
                robotEyes.verifyingTheSecondColumnHeaderOfTable('Scheduled Accounts (#)')
                robotEyes.seesTheSortButtonsForScheduledAccounts()
                robotEyes.verifyingTheThirdColumnHeaderOfTable('Scheduled Billing ($)')
                robotEyes.seesTheSortButtonsForScheduledBilling()
                robotEyes.verifyingTheFourthColumnHeaderOfTable('Billed Accounts (#)')
                robotEyes.seesTheSortButtonsForActualBilledAccounts()
                robotEyes.VerifyingTheFiftheColumnHeaderOfTheTable('Billed Amount ($)')
                robotEyes.seesSortButtonForActualBilling()
                robotHands.ScrollToSeePercentageRecievedHeaderInTable()
                robotEyes.VerifyingTheSixtheColumnHeaderOfTheTable('Variance (#)')
                robotEyes.seesSortButtonForVariance()
                robotEyes.VerifyingTheSeventhColumnHeaderOfTheTable('Variance ($)')
                robotEyes.seesSortButtonForVarianvein$()
                robotEyes.VerifyingTheEigtheColumnHeaderOfTheTable('% Received (#)')
                robotEyes.seesSortButtonForPercentageRecievedInNumber()
                robotEyes.VerifyingTheNintheColumnHeaderOfTheTable('% Received ($)')
                robotEyes.seesSortButtonForPercentageRecievedIn$()
            })
        })
        RoleFilter(['regression'], () => {
            it('Verifying the functionality of Date Picker in Drill down View',() =>{
                robotHands.clickOnDatePickerInDrillDownView()
                robotEyes.seesTextForDatePickerFrequency()
                robotEyes.verifyTheDatePickerFrequenciesInDrillDownView()
                robotEyes.verifyTheCancelButtonInTheDatePickerInDrillDownView()
                robotEyes.verifyTheApplyButtonInTheDatePickerInDrillDownView()
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
            it('Verifying the functionality of sort button',()=>{
                robotHands.clicksOnDescendingOrderPeriodButton()
                robotHands.clicksOnAscendingOrderPeriodButton()
                robotHands.clicksOnDescendingOrderScheduledAccounts()
                robotHands.clicksOnAscendingOrderScheduledAccounts()
                robotHands.clicksOnDescendingOrderScheduledBilling()
                robotHands.clicksOnAscendingOrderScheduledBilling()
                robotHands.clicksOnDescendingOrderActualBilledAccount()
                robotHands.clicksOnAscendingOrderActualBilledAccount()
            })
        })
        RoleFilter(['regression'], () => {
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