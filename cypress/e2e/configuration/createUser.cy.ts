import { RobotEyes,RobotHands,Dependencies } from "../../robots/wm/configuration/createUser"
import RoleFilter from "../../support/filter"

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('verifying the functionality of Create User ',()=>{
    describe('Verifying the functionality of Create Users',()=> {
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
        it('Navigating to Configuration page',()=>{
            robotEyes.seesConfigurationIconOnLeftNav()
            robotHands.clicksOnConfigurationIcon()
            robotEyes.seesHeaderOfConfigurationPage()

        })
        it('Verifying the functionality Of Create User', ()=> {
            robotHands.clicksOnUsersTab()
            robotHands.scrollingIntoVerifyingTheCreateUserButton()
            robotEyes.seesCreateUsersButton()
            robotEyes.seesAddUserIconOnCreateUserButton()
            robotEyes.verifyingCreateUsersButtonText('Create User')
            robotHands.clicksOnCreateUserButton()
            robotEyes.seesCreateUserHeader()
            robotEyes.verifyingTheHeaderOfCreateUserPopUP()
            robotEyes.seesCreateUserButtonIsVisbile()
            robotEyes.seesCreateUserButtonIsDisabled()
            robotEyes.seesCloseIconIsVisible()
            robotEyes.verifyingTheFirstHeaderOfInputField()
            robotEyes.seesFirestNameInputFiled()
            robotHands.EntersTextOnFirstNameInputField('Dipak')
            robotEyes.verifyingTheHeaderOfSecondInputField()
            robotEyes.seesLastNameInputFiled()
            robotHands.EntersTextOnLastNameInputField('Chandratre')
            robotEyes.verifyingTheThirdHeaderOfInputField()
            robotEyes.seesPhoneNumberInputFiled()
            robotHands.EntersTextOnAddPhoneNumberInputField('9890579297')
            robotEyes.verifyingTheFourthHeaderOfInputField()
            robotEyes.seesEmailAddressInputFiled()
            robotHands.EntersTextOnEmailAddressInputField('Dipak@Washmetrix.com')
            robotEyes.seesRoleHeader()
            robotEyes.VerifyingTheTextOfRoleHeader()
            robotEyes.seesAdminRadioButtonIsVisible()           
            robotEyes.seesCreateUserButtonIsEnabled()
            robotEyes.seesCancelButtonIsVisible()
            robotHands.clicksOnCancelButton()
        })
    })
})

})
    