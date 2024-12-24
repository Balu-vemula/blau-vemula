import { RobotEyes,RobotHands,Dependencies } from "../../robots/wm/Permission/permission";
import RoleFilter from "../../support/filter";

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()


describe('Verifying the functionality of edit permission',() => {
    RoleFilter(['smoke', 'regression'], () => {
        before('logging in to washmetrix', () => {
            cy.clearAllSessionStorage()
            cy.clearAllLocalStorage()
            cy.clearAllCookies()
            dependencies.loginWashmetrix()
            robotHands.scrollingIntoOrganisation()
            robotEyes.seesWashmetrixOrg()
            robotHands.clickOnWashmetrixCarWashOrg()
        })
    })
    context('Verifying the edit functional of location Type Permission',() => {
        RoleFilter(['smoke', 'regression'], () => {
            it('Navigating Permission MOdule ', () => {
                robotEyes.seesConfigurationICon()
                robotHands.clicksOnConfigurationIcon()
            })
            it('Chooses Location type permission from the dropdown', () => {
                robotEyes.seesPermissionTypeDropDown()
                robotHands.clicksOnPermissionTypeDropDown()
                robotHands.selectLocationFromPermissionTypeDropDown()
            })
            it('Editing location type drop down', () => {
                robotHands.clickOnFirstEditablePermissionMenu()
                robotHands.clcikOnEditPermissionButton()
                robotEyes.verifiesSaveButtonIsDisabled()
                robotEyes.verifiesTitleOfNameInputFiled('Permission Name ')
                robotEyes.verifiesNameInputField()
                robotHands.entersPermissionNameOnNameField('test edit')
                robotEyes.seesDescrpitonFieldTitle('Description')
                robotEyes.verifiesDescriptionField('Add Description')
                robotHands.entersDescriptionONDescriptionField('Location Permissions')
                robotHands.clicksOnDropDown()
                robotEyes.verifiesSearchBoxOnDrillDown('Search Locations')
                robotHands.selectsFirstOptionFromDropDown()
                robotHands.selectsSecondOptionFromDropDown()
                robotHands.selectsThirdOption()
                robotHands.closingDropDown()
                robotEyes.verifiesSaveButtonIsEnabled()
                robotEyes.verifiesSaveButton('Save')
                robotEyes.verifiesCancelButton('Cancel')
                robotHands.clicksOnCancelButton()
            })
        })
    })
    context('Verifying the edit functionality of Module Permissions', ()=> {
        RoleFilter(['regression'], () => {
            it('Chooses Module type permission from the dropdown', () => {
                robotEyes.seesPermissionTypeDropDown()
                robotHands.clicksOnPermissionTypeDropDown()
                robotHands.selectModuleFromPermissionTypeDropDown()
            })
            it('Editing Module type drop down', () => {
                robotHands.clickOnFirstEditablePermissionMenu()
                robotHands.clcikOnEditPermissionButton()
                robotEyes.verifiesSaveButtonIsDisabled()
                robotEyes.verifiesTitleOfNameInputFiled('Permission Name ')
                robotEyes.verifiesNameInputField()
                robotHands.entersPermissionNameOnNameField('test edit')
                robotEyes.seesDescrpitonFieldTitle('Description')
                robotEyes.verifiesDescriptionField('Add Description')
                robotHands.entersDescriptionONDescriptionField('Module Permissions')
                robotHands.clicksOnDropDown()
                robotEyes.verifiesSearchBoxOnDrillDown('Search Modules')
                robotHands.selectsFirstOptionFromDropDown()
                robotHands.selectsSecondOptionFromDropDown()
                robotHands.selectsThirdOption()
                robotHands.closingDropDown()
                robotEyes.verifiesSaveButtonIsEnabled()
                robotEyes.verifiesSaveButton('Save')
                robotEyes.verifiesCancelButton('Cancel')
                robotHands.clicksOnCancelButton()
            })
        })
    })
})