import { Test } from "mocha";
import { BaseDependencies,BaseEyes,BaseHands } from "../../BaseRobot";

export class Dependencies extends BaseDependencies {
    loginWashmetrix() {
		this.washmetrixLogIn(Cypress.env('APP_URL'))
		cy.screenshot()
	}
}

export class RobotEyes extends BaseEyes {
    seesWashmetrixOrg() {
		this.wait(5000)
		this.seesDomVisible(Cypress.env('SelectOrganisation'))
    }
    seesConfigurationIconOnLeftNav() {
		this.wait(5000)
        this.seesDomVisible('div h5')
    }
    seesHeaderOfConfigurationPage() {
        this.wait(5000)
        this.seesDomVisible('div h5')
    }
    seesCreateUsersButton() {
        this.seesDomVisible('.grid-flow-col > .MuiButtonBase-root')
    }
   
    seesAddUserIconOnCreateUserButton() {
        this.seesDomElementWithIndex('[data-testid="AddIcon"]',0)
    }

	seesCreateUserHeader() {
        this.wait(5000)
        this.seesDomVisible('.MuiTypography-body2 > .MuiTypography-root')
    }
    
    verifyingCreateUsersButtonText(text: string) {
        this.seesDomContainText('.grid-flow-col > .MuiButtonBase-root', text)
    }

	seesEditOptionVisible() {
		this.seesDomVisible('[class*="MuiMenuItem-root"][class*="hover:bg-blue-tint-50"][class*="hover:text-primary"]');
	}
	verifyingTheTextOfEditOption(text:string) {
		this.seesDomContainText('[class*="MuiMenuItem-root"][class*="hover:bg-blue-tint-50"][class*="hover:text-primary"]',text)
	}

	verifyingTheHeaderOfCreateUserPopUP() {
        this.seesDomContainText('.MuiTypography-body2 > .MuiTypography-root','Create User')
    }

	seesCreateUserButtonIsVisbile() {
        this.seesDomVisible('button[class*="MuiButton-containedPrimary"][class*="bg-blue-tint-200"]')
    }
	seesSaveButtonIsVisbile() {
        this.seesDomVisible('button[class*="MuiButton-containedPrimary"][class*="bg-blue-tint-200"]')
    }
	seesCreateUserButtonIsDisabled() {
        this.seesDomDisabled('button[class*="MuiButton-containedPrimary"][class*="bg-blue-tint-200"]')
    }
	seesSaveButtonIsDisabled() {
        this.seesDomDisabled('button[class*="MuiButton-containedPrimary"][class*="bg-blue-tint-200"]')
    }
	seesCloseIconIsVisible() {
        this.seesDomVisible('[data-testid="CloseIcon"]')
    }
	verifyingTheFirstHeaderOfInputField() {
        this.seesDomContainText('label[for="firstName"] span','First Name ')
    }
	seesFirestNameInputFiled() {
        this.seesDomVisible('[placeholder=" Add First Name"]')
    }
	verifyingTheHeaderOfSecondInputField() {
        this.seesDomContainText('label[class="pt-2"] span','Last Name ')
    }
	seesLastNameInputFiled() {
        this.seesDomVisible('[placeholder=" Add Last Name"]')
    }
	verifyingTheThirdHeaderOfInputField() {
        this.seesDomContainText('label[class="pt-2"] span','Phone Number')
    }
	seesPhoneNumberInputFiled() {
        this.seesDomVisible('[placeholder=" Add Phone Number"]')
    }

	verifyingTheFourthHeaderOfInputField() {
        this.seesDomContainText('label[class="pt-2"] span','Phone Number')
    }
	seesEmailAddressInputFiled() {
        this.seesDomVisible('[placeholder=" Add Email Address"]')
    }
	seesRoleHeader() {
        this.seesDomVisible	('.MuiFormLabel-root > .MuiTypography-root')   
    }
	VerifyingTheTextOfRoleHeader() {
        this.seesDomContainText('.MuiFormLabel-root > .MuiTypography-root','Role')
    }
	seesAdminRadioButtonIsVisible() {
        this.seesDomVisible('.MuiFormLabel-root > .MuiTypography-root')
    }
	seesCreateUserButtonIsEnabled() {
        this.seesDomEnabled('.MuiButton-contained > .MuiTypography-root')
    }
    seesSaveUserButtonIsEnabled() {
        this.seesDomEnabled('.MuiButton-contained')
    }
	seesCancelButtonIsVisible() {
        this.seesDomVisible('.MuiButton-outlined > .MuiTypography-root')
    }
	seesEditUsersHeader() {
        this.wait(5000)
        this.seesDomVisible('.MuiTypography-body2 > .MuiTypography-root')
    }

	verifyingTheHeaderOfEditUserPopUp() {
        this.seesDomContainText('.MuiTypography-body2 > .MuiTypography-root','Edit User')
    }
    
}

export class RobotHands extends BaseHands {
    clickOnWashmetrixCarWashOrg() {
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}
	scrollingIntoOrganisation() {
		this.wait(10000)
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}	
    clicksOnConfigurationIcon() {
        this.clickOnDomElement('[aria-label="Configuration"]')
    }
    clicksOnUsersTab() {
        cy.wait(5000)
		this.clickOnDomElement(('[id="users"]'))
    }
	clicksOnCreateUserButton() {
        this.clickOnDomElement('.grid-flow-col > .MuiButtonBase-root')
    }
    scrollingIntoVerifyingTheCreateUserButton() {
        cy.get('.grid-flow-col > .MuiButtonBase-root').scrollIntoView()
             
	}
	scrollingToSeeThreeDotMenu() {
		cy.get(':nth-child(1) > :nth-child(6) > .MuiTypography-root > div > #long-button').scrollIntoView()
	}
	clicksOnThreeDotVerticalMenu() {
		cy.get(':nth-child(1) > :nth-child(6) > .MuiTypography-root > div > #long-button').click()

	}
	closingTemplateDropDown() {
        cy.wait(3000)
        this.typeTextOnDomElement(
            'div[class*="MuiMenuItem-root"] button',
            '{esc}'
        )
	}
	EntersTextOnFirstNameInputField(text:string) {
			this.typeTextOnDomElement('[placeholder=" Add First Name"]',text)
		}

	EntersTextOnLastNameInputField(text:string) {
			this.typeTextOnDomElement('[placeholder=" Add Last Name"]',text)
		}

	EntersTextOnAddPhoneNumberInputField(text:string) {
			this.typeTextOnDomElement('[placeholder=" Add Phone Number"]',text)
		}
	EntersTextOnEmailAddressInputField(text:string) {
			this.typeTextOnDomElement('[placeholder=" Add Email Address"]',text)
		}

	clicksOnCancelButton() {
			this.clickOnDomElement('.MuiButton-outlined > .MuiTypography-root')
		}

	clicksOnEditTemplateButton() {
			this.clickOnDomElement('[class*="MuiMenuItem-root"][class*="hover:bg-blue-tint-50"][class*="hover:text-primary"]')
		}

    clickOnRadiaoButton() {
			this.clickOnDomElement('.MuiFormLabel-root > .MuiTypography-root')
		}
    
    editTextInputField(dom: string, text: string) {   
        cy.get(dom,)  
          .invoke('removeAttr', 'readonly')
          .clear()
          .type(text)
        
    }    
    
}