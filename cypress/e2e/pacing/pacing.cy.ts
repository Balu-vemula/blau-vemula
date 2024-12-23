import '../../support/e2e'
import {
	RobotEyes,
	RobotHands,
	Dependencies,
    RobotPacing,
} from '../../robots/wm/pacing/pacing'
import RoleFilter from '../../support/filter'

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()
const robotpacing = new RobotPacing()

describe('Verifying the functionality of Pacing Tiles', () => {
    context('Verifying the UI elemetns and functionality of Pacing Tiles',() => {
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
            it('Verifying Pacing Tiles visibility',() => {
                robotEyes.seesCarsPacingTile()
                robotEyes.seesSalesPacingTile()
            })
            it('Verifying the elements of Cars pacing tiles', () => {
                robotEyes.seesPaicngIconOnCarsPacingTile()
                robotEyes.seesTitleOfCarsPacingTile()
                robotEyes.verifiesTheTitleOfCarsPacingTile('Pacing (#)')
                robotEyes.seesCarsPacingTile()
                robotEyes.seesTableOfCarsPacingTile()
                robotEyes.seesFirstColumnHeaderOfCarsPacingTile()
                robotEyes.verifiesFirstColumnHeaderNameOfCarsPacingTile('KPI')
                robotEyes.seesSecondColumnHeaderOfCarsPacingTile()
                robotEyes.verifiesSecondColumnHeaderNameOfCarsPacingTile('Current (#)')
                robotEyes.seesThirdColumnHeaderOfCarsPacingTile()
                robotEyes.verifiesThirdColumnHeaderNameOfCarsPacingTile('Pacing (#)')
                robotEyes.seesFourthColumnHeaderOfCarsPacingTile()
                robotEyes.verifiesFourthColumnHeaderNameOfCarsPacingTile('Var (%)', 'from last month')
                robotEyes.verifiesRowHeaderNamesOfCarsPacingTile('Cars','Individual Washes','Membership Washes','Others')
            })
            it('Verifying the elements of Sales pacing tiles', () => {
                robotEyes.seesPaicngIconOnSalesPacingTile()
                robotEyes.seesTitleOfSalesPacingTile()
                robotEyes.verifiesTheTitleOfSalesPacingTile('Pacing ($)')
                robotEyes.seesSalesPacingTile()
                robotEyes.seesTableOfSalesPacingTile()
                robotEyes.seesFirstColumnHeaderOfSalesPacingTile()
                robotEyes.verifiesFirstColumnHeaderNameOfSalesPacingTile('KPI')
                robotEyes.seesSecondColumnHeaderOfSalesPacingTile()
                robotEyes.verifiesSecondColumnHeaderNameOfSalesPacingTile('Current ($)')
                robotEyes.seesThirdColumnHeaderOfSalesPacingTile()
                robotEyes.verifiesThirdColumnHeaderNameOfSalesPacingTile('Pacing ($)')
                robotEyes.seesFourthColumnHeaderOfSalesPacingTile()
                robotEyes.verifiesFourthColumnHeaderNameOfSalesPacingTile('Var (%)', 'from last month')
                robotEyes.verifiesRowHeaderNamesOfSalesPacingTile('Sales','Membership Sales','Individual Sales','Recurring Billing','Others')
            })
         })
         RoleFilter(['regression'], () => {
            it('Verifying the functionality of DatePicker on Pacing Tiles', () => {
                robotpacing.verifyingThePacingTileAccordingToTheDatePickerSelection()
            
            })
            it('Verifying the functionality Remove Pacing button ', () => {
                robotHands.scrollToSeeThreeDotVerticalMenu()
                robotEyes.seesThreeDotVerticalMenu()
                robotHands.clicksOnThreeDotVerticalMenuu()
                robotEyes.seesRemoveOrAddPacingTileButton()
                robotEyes.verifiesTextofAddOrRemovePacingTileButton('Remove Pacing')
                robotHands.clickonAddOrRemovePacingButton()
                robotEyes.seesConformationPopUpWhileRemovinOrAddingPacing()
                robotEyes.verifiesTextOfConformationPopUpWhielRemovingOrAddingPacing('There are unsaved changes. Would you like to save the layout change.')
                robotEyes.seesCancelButtonOnPopUp()
                robotEyes.verifiesTextOfCancelButton('Cancel')
                robotEyes.seesSaveButtonOnPopUp()
                robotEyes.verifiesTextOfSaveButton('Save')
                robotHands.clicksonCancelButton()
                robotEyes.seesCarsPacingTile()
                robotEyes.seesSalesPacingTile()
                robotHands.clicksOnThreeDotVerticalMenuu()
                robotEyes.seesRemoveOrAddPacingTileButton()
                robotHands.clickonAddOrRemovePacingButton()
                robotEyes.seesConformationPopUpWhileRemovinOrAddingPacing()
                robotEyes.verifiesTextOfConformationPopUpWhielRemovingOrAddingPacing('There are unsaved changes. Would you like to save the layout change.')
                robotHands.clicksOnSaveButton()

            })
            it('Verifying the functionality of Add Pacing button',() => {
                robotHands.clicksOnThreeDotVerticalMenuu()
                robotEyes.seesRemoveOrAddPacingTileButton()
                robotEyes.verifiesTextofAddOrRemovePacingTileButton('Add Pacing')
                robotHands.clickonAddOrRemovePacingButton()
                robotEyes.seesConformationPopUpWhileRemovinOrAddingPacing()
                robotEyes.verifiesTextOfConformationPopUpWhielRemovingOrAddingPacing('There are unsaved changes. Would you like to save the layout change.')
                robotEyes.seesCancelButtonOnPopUp()
                robotEyes.verifiesTextOfCancelButton('Cancel')
                robotEyes.seesSaveButtonOnPopUp()
                robotEyes.verifiesTextOfSaveButton('Save')
                robotHands.clicksOnSaveButton()
                robotEyes.seesCarsPacingTile()
                robotEyes.seesSalesPacingTile()
            })
         })    
    })
})