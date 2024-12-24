import '../../support/e2e'

import { RobotEyes, RobotHands, Dependencies } from '../../robots/wm/salesAndLabor/cashVsCard'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

describe('Verifying the functionality of Cash Vs Card KPI', () => {
    context('Verifying the tile view of Cash Vs Card KPI', () => {
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
                robotEyes.seesSalesAndLaborMOduleName()
            })

            it('Verifying the title ,Value parameters of the tile with deafult frequency', () => {
                robotHands.scrollToSeeCashVsCardTileWithDefaultFrequency()
                robotEyes.seesTitleOfCashVsCard()
                robotEyes.verifyingTheTitleOfCashVsCardWithDefaultDatePickerFrequency()
                robotHands.verifiyingTheTileWithDefaultFrequency()
            })

            it('Verifying the functionality of date picker', () => {
                robotHands.scrollingTOSeeDatePicker()
                robotEyes.seesDatepickerIsVisibleOnModuleView()
                robotHands.clicksOnDatePicker()
                robotEyes.seesTextForDatePickerFrequency()
                robotHands.selectsTrailing12OnTileView()

            })

            it('Verifying the title of the tile by changing the frequency', () => {
                robotHands.scrollToSeeCashVsCardAfterChangingtheFrequency()
                robotEyes.veryfiesTheTitleOfCashVsCardTileViewAfterChangingTheFrequencyFromDefault()
            })
        })
        context('Verifying the functionality of the drill down view of  cash vs card', () => {
            RoleFilter(['smoke', 'regression'], () => {
                it('Verifying the title of drill down view', () => {
                    robotHands.clickOnCashVsCardhTile()
                    robotEyes.seesTitleOfCashVsCardKPIDrillDownView()
                    robotEyes.verifyingTitleOfCashVsCardKPIDrillDownView()
                })

                it('Verifying the graph in the drill down view of cash vs card', () => {
                    robotEyes.seesTheTitleOfTheGraphAndTable()
                    robotEyes.verifyingTheTitleOfTheGraphAndTable('Cash v Card')
                    robotEyes.seesGraphOnDrillDownView()
                })
                it('verifying the context of Table in the drill down view', () => {
                    robotEyes.seesTableOnDrillDownView()
                    robotEyes.verifyingTheFirstColumnHeaderOfTable('Period')
                    robotEyes.seesTheSortButtonsForPeriod()
                    robotEyes.verifyingTheSecondColumnHeaderOfTable('Total (#)')
                    robotEyes.seesTheSortButtonsForTotalTransactions()
                    robotEyes.verifyingTheThirdColumnHeaderOfTable('Cash (#)')
                    robotEyes.seesTheSortButtonsForCashTransactions()
                    robotEyes.verifyingTheFourthColumnHeaderOfTable('Cash ($)')
                    robotEyes.seesTheSortButtonsForCashTransactionAmount()
                    robotHands.scrollToSeePercentageOfCardtransaction()
                    robotEyes.verifyingTheFifthColumnHeaderOfTable('Card (#)')
                    robotEyes.seesTheSortButtonsForCardTransactions()
                    robotEyes.verifyingTheSixthColumnHeaderOfTable('Card ($)')
                    robotEyes.seesTheSortButtonsForCardTransactionAmount()
                    robotEyes.verifyingTheSeventhColumnHeaderOfTable('% Cash (#)')
                    robotEyes.seesTheSortButtonsForPercentageOfCashTransaction()
                    robotEyes.verifyingTheEighthColumnHeaderOfTable('% Card (#)')
                    robotEyes.verifyingTheNihthColumnHeaderOfTable('% Cash ($)')
                    robotEyes.verifyingTheTenthColumnHeaderOfTable('% Card ($)')
                    robotEyes.seesTheSortButtonsForPercentageOfCardTransactions()
                    robotEyes.verifyingTheSecondRowHeaderOfTable('Total')
                    robotHands.scrollToSeeDropDown()
                    robotEyes.seesFrequencyFilter()
                    robotHands.clickOnFrequencyFilter()
                    robotEyes.seesQuarterlyFilterOption()
                    robotHands.clickOnQuarterlyFilterOption()
                    robotHands.verifyingQuarterlyFrequency()
                    robotHands.clickOnFrequencyFilter()
                    robotEyes.seesYearlyFilterOption()
                    robotHands.clickOnYearlyFilterOption()
                    robotHands.verifyingYearlyFrequency()
                    robotHands.clickOnFrequencyFilter()
                    robotEyes.seesMonthlyFilterOption()
                    robotHands.clickOnMonthlyFilterOption()
                    robotHands.verifyingMonthlyFrequency()
                })
            })
            RoleFilter(['regression'], () => {
                it('Verifying the functionality of date picker in drill down view for cash vs card kpi', () => {
                    robotHands.scrollToSeeDatePicker()
                    robotEyes.seesDatePickerIsVisibleOnDrillDownView()
                    robotHands.clickOnDatePickerInDrillDownView()
                    robotEyes.verifyTheDatePickerFrequenciesInDrillDownViewForCashVsCard()
                    robotEyes.verifyingTheCancelButtonInTheDatePickerInDrillDownViewForCashVsCard()
                    robotEyes.verifyingTheApplyButtonInTheDatePickerInDrillDownViewFOrIndividualWash()
                    robotHands.clickOnYearDropDownInTheDatePicker()
                    robotHands.selectYearFromTheYearDropDownInDatePicker()
                    robotHands.clickOnMonthDropDownInTheDatePicker()
                    robotHands.selectMonthFromTheMonthlyDropDownInDatePicker()
                    robotHands.selectFirstDayInTheDateRange()
                    robotHands.clickOnNextMonthIcon()
                    robotHands.selectLastDayInTheDateRange()
                    robotHands.clickOnApplyButton()
                    robotEyes.VerifyingMonthNameOnTheTableAccordingToTheSelection()
                    robotEyes.verifyingTheAccordianIconNextToTheMonthInTheTable()

                })

                it('Verifying the functionality of sort for period', () => {
                    robotHands.clicksOnAscendingOrderButtonInThePeriod()
                    robotHands.clicksOnDescendingOrderButtonInThePeriod()
                })


                it('Verifying the functionality of export button', () => {
                    robotHands.scrollToSeeDatePicker()
                    robotEyes.seesEllipsIsVisibleForExportOption()
                    robotHands.clicksOnElipsisIconOnDrillDownView()
                    robotEyes.verifyingTheExportButtonIsVisible()
                    robotHands.clicksOnExportOption()
                })

            })
            RoleFilter(['smoke', 'regression'], () => {
                it('Verifying the functionality of back to all sites button', () => {
                    robotEyes.seesBackToAllSitesIsVisibleOnDrillDownView()
                    robotHands.clickOnBackToAllSitesButton()
                    robotEyes.seesSalesAndLaborMOduleName()
                })
            })
        })

    })
})