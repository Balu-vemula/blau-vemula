import { Dependencies,RobotEyes,RobotHands } from "../../robots/wm/configuration/uI"
import RoleFilter from "../../support/filter"
const dependencies = new Dependencies()
const robotEyes = new RobotEyes()
const robotHands = new RobotHands()

describe('verifying the Functionality of User Module', ()=>{
    context('verifying the functionality of User',()=> {
        RoleFilter(['smoke','regression'],()=>{
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
            })
            it('Verifying Title and Subtitle of the Configuration page', ()=>{
                robotEyes.seesConfiguarationPageTitle()
                robotEyes.verifeisTheConfigurationPageTitle('Configuration')
                robotEyes.seesSubtitleOfConfiguration()
                robotEyes.seesThePermissionsTab()
                robotEyes.VerifiesSubtitleOfConfiguration('Set up your configuration details')
            })
            it('Verifying Users tab', ()=> {
                robotEyes.verifiesTheTextForThePermissionsTab()
                robotEyes.seesTheUserTab()
                robotEyes.verifiesTheTextForTheUsersTab()
                robotHands.clicksOnUsersTab()
                robotEyes.seesTitleOfTheUserTab()
                robotEyes.verifiesTheHeaderInTheUserTab('Users')
                robotEyes.seesTheNameOfTheSubTitleInTheUserTab('You can add/remove users from here')
                robotEyes.seesSearchButtonIsVisible()
                robotEyes.seesSearchIconIsVisible()
                robotEyes.VerifiesTheSearchOptionInTheUsersTab()
            })

        }) 
        RoleFilter(['smoke', 'regression'], () => {
            it('Verifying the functionality of Active Inactive DropDown',() => {
                robotEyes.seesTheActiveInactiveDropdown()
                robotEyes.verifesDefaultSelectionOnActiveInactiveDropDown('All')
                robotEyes.seesDropDownIconOnActiveInactiveDropDown()
                robotHands.clicksOnActiveInactiveDropDown()
                robotEyes.seesDropDownList()
                robotHands.clicksOnDefaulttemplate()
            }) 
            it('Verifying Elements of User table',() => {
                robotEyes.verifyingTheFirstColumnHeaderOfTable('First Name')
                robotEyes.seesTheSortButtonsForFirstName()
                robotEyes.verifyingTheSecondColumnHeaderOfTable('Last Name')
                robotEyes.seesTheSortButtonsForLastName()
                robotEyes.verifyingTheThirdColumnHeaderOfTable('Phone Number')
                robotEyes.seesTheSortButtonsForPhoneNumber()
                robotHands.scrollingIntoVerifyingTheContextOfHeaderOfTable()
                robotEyes.verifyingTheFourthColumnHeaderOfTable('Email Address')
                robotEyes.seesTheSortButtonsForEmailAddress()
                robotEyes.verifyingTheFifthColumnHeaderOfTable('Status')
                robotEyes.verifyingThePagenavigationOfTheTable('1')
            })
            it('Verifying the functionality of sort', () => {
				robotHands.clicksOnDescendingOrderFirstNameButton()
				robotHands.clicksOnAscendingOrderFirstNameButton()
				robotHands.clicksOnDescendingOrderLastNameButton()
				robotHands.clicksOnAscendingOrderLastNameButton()
				robotHands.clicksOnDescendingOrderPhoneNumberButton()
				robotHands.clicksOnAscendingOrderPhoneNumberButton()
				robotHands.clicksOnDescendingOrderEmailAddressButton()
				robotHands.clicksOnAscendingOrderEmailAddressButton()
		   })

        })
        RoleFilter(['smoke', 'regression'], () => {
            it('Verifying UI elements Of Create Users button ', ()=> {
                robotHands.scrollingIntoVerifyingTheCreateUserButton()
                robotEyes.seesCreateUsersButton()
                robotEyes.seesAddUserIconOnCreateUserButton()
                robotEyes.verifyingCreateUsersButtonText('Create User')
            })
            it('Verifying three dot menu in User Module',()=> {
                robotHands.scrollingToSeeThreeDotMenu()
                robotHands.clicksOnThreeDotVerticalMenu()
                robotEyes.seesEditOptionVisible()
                robotEyes.verifyingTheTextOfEditOption('Edit User')
                robotHands.clicksOnEditTemplateButton()
                robotEyes.seesCloseIconIsVisible()
                robotHands.clicksOnCloseIcon()
            })
        })
    })
})
