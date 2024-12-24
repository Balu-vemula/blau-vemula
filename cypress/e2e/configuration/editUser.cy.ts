import { RobotEyes,RobotHands,Dependencies } from "../../robots/wm/configuration/createUser"
import RoleFilter from "../../support/filter"

const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

context('verifying the functionality of Edit User',()=>{
    describe('Verifying the functionality of Edit User',()=> {
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
        it('Verifying the functionality Of Edit User', ()=> {
            robotHands.clicksOnUsersTab()
            robotHands.scrollingToSeeThreeDotMenu()
            robotHands.clicksOnThreeDotVerticalMenu()
            robotEyes.seesEditOptionVisible()
            robotEyes.verifyingTheTextOfEditOption('Edit User')
            robotHands.clicksOnEditTemplateButton()
            robotEyes.seesEditUsersHeader()
            robotEyes.verifyingTheHeaderOfEditUserPopUp()
            robotEyes.seesSaveButtonIsVisbile()
            robotEyes.seesSaveButtonIsDisabled()
            robotEyes.seesCloseIconIsVisible()
            robotEyes.verifyingTheFirstHeaderOfInputField()
            robotEyes.seesFirestNameInputFiled()
            robotHands.editTextInputField('input[name="firstName"]', 'Test')
            robotEyes.verifyingTheHeaderOfSecondInputField()
            robotEyes.seesLastNameInputFiled()
            robotHands.editTextInputField('input[name="lastName"]', 'User')
            robotEyes.verifyingTheThirdHeaderOfInputField()
            robotEyes.seesPhoneNumberInputFiled()
            robotHands.editTextInputField('input[name="phoneNumber"]', '7675755523')
            robotEyes.verifyingTheFourthHeaderOfInputField()
            robotEyes.seesEmailAddressInputFiled()
            robotEyes.seesRoleHeader()
            robotEyes.VerifyingTheTextOfRoleHeader()
            robotEyes.seesAdminRadioButtonIsVisible()
            robotHands.clickOnRadiaoButton()
            robotEyes.seesSaveUserButtonIsEnabled()
            robotEyes.seesCancelButtonIsVisible()
            robotHands.clicksOnCancelButton()
           }) 
       })
    })
})