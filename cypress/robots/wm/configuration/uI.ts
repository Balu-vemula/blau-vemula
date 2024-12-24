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
    seesConfiguarationPageTitle() {
        this.wait(5000)
        this.seesDomVisible('div h5')
    }
    verifeisTheConfigurationPageTitle(text:string) {
        this.seesDomContainText('div h5',text)
    }
    seesSubtitleOfConfiguration() {
        this.seesDomVisible('div h6')
    }
	VerifiesSubtitleOfConfiguration(subtitle:string) {
        this.seesDomContainText('div h6',subtitle)
    }
    verifiesTheNameOfTheOrganization() {
        this.seesDomContainText('div h6',Cypress.env('orgName'))
    }
    seesThePermissionsTab() {
        this.seesDomVisible('[id="permissions"]')
    }
    seesTheUserTab() {
        this.seesDomVisible('[id="users"]')
    }
    verifiesTheTextForThePermissionsTab() {
        this.seesDomVisible('[id="permissions"]')
	}
    verifiesTheTextForTheUsersTab() {
        this.seesDomVisible('[id="users"]')
    }
    seesTitleOfTheUserTab() {
        this.wait(5000)
        this.seesDomContainText(
			'[class="MuiTypography-root MuiTypography-body1 text-high css-1fh8jo7"]',
			'Users'
		)
    }
    verifiesTheHeaderInTheUserTab(text:string) {
        this.seesDomContainText('[class="MuiTypography-root MuiTypography-body1 text-high css-1fh8jo7"] ', text)
    }
    seesTheNameOfTheSubTitleInTheUserTab(text:string) {
        this.seesDomContainText('[class="MuiTypography-root MuiTypography-caption2 text-medium css-1biv9zo"] ', text)
    }
    seesSearchButtonIsVisible() {
        this.seesDomVisible('div[class*="search-box"]')
    }
    seesSearchIconIsVisible() {
        this.seesDomElementWithIndex('[data-testid="SearchIcon"]',0)
    }
    VerifiesTheSearchOptionInTheUsersTab() {
        this.seesDomVisible('[placeholder="Search"]')
    }
    seesTheActiveInactiveDropdown() {
        this.seesIdVisible('dropdown')
    }
    seesDropDownIconOnActiveInactiveDropDown() {
        this.seesDomElementWithIndex('[data-testid="ArrowDropDownIcon"]',0)
    }
    seesDropDownList() {
		this.seesDomVisible('[role="listbox"]')
	}   
    verifesDefaultSelectionOnActiveInactiveDropDown(text: string) {
        this.seesDomContainText('div[id="dropdown"] span',text)
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

    verifyingTheFirstColumnHeaderOfTable(text:any) {
		this.seesDomContainText('tr th:nth-child(1) span',text)
	}
	seesTheSortButtonsForFirstName() {
		this.seesDomVisible('th:nth-child(1) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheSecondColumnHeaderOfTable(text: any) {
		this.seesDomContainText('tr th:nth-child(2) span',text)
	}
	seesTheSortButtonsForLastName() {
		this.seesDomVisible('th:nth-child(2) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheThirdColumnHeaderOfTable(text: any) {
		this.seesDomContainText('tr th:nth-child(3) span',text)
	}
	seesTheSortButtonsForPhoneNumber() {
		this.seesDomVisible('th:nth-child(3) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFourthColumnHeaderOfTable(text: any) {
		this.seesDomContainText('tr th:nth-child(4) span',text)
	}
	seesTheSortButtonsForEmailAddress() {
		this.seesDomVisible('th:nth-child(4) span:nth-child(1) span:nth-child(1)')
	}
	verifyingTheFifthColumnHeaderOfTable(text: any) {
        this.wait(3000)
		this.seesDomContainText('tr th:nth-child(5) span',text)
	}
    verifyingThePagenavigationOfTheTable(text:string) {
        this.seesDomContainText('[class="MuiPagination-ul css-1t298tj"] ', text)
    }
	seesCloseIconIsVisible() {
        this.seesDomVisible('[data-testid="CloseIcon"]')
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
        this.clickOnDomElement('[class*="MuiButton-outlinedPrimary"][class*="css-7jah7v"]')
    }

    clicksOnActiveInactiveDropDown() {
		this.clickOnDomElementWithIndex('div[id="dropdown"]',0)
	}
    clicksOnDefaulttemplate(){
		this.clickOnDomElement('[data-value="all"]')
		
	}

    clicksOnAscendingOrderFirstNameButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			1
		)
	}
	clicksOnDescendingOrderFirstNameButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			0
		)
	}
	clicksOnAscendingOrderLastNameButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			3
		)
	}
	clicksOnDescendingOrderLastNameButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			2
		)
	}
	clicksOnAscendingOrderPhoneNumberButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			5
		)
	}
	clicksOnDescendingOrderPhoneNumberButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			4
		)
	}
	clicksOnAscendingOrderEmailAddressButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			7
		)
	}
	clicksOnDescendingOrderEmailAddressButton() {
		this.clickOnDomElementWithIndex(
			'[class*="line-flex flex-col gap"] svg path',
			6
		)
	}
    scrollingIntoVerifyingTheContextOfHeaderOfTable() {
        cy.get('.MuiPagination-ul > :nth-child(1) > .MuiButtonBase-root').scrollIntoView()
      
        
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

	clicksOnEditTemplateButton() {
		this.clickOnDomElement('[class*="MuiMenuItem-root"][class*="hover:bg-blue-tint-50"][class*="hover:text-primary"]')
	}

	clicksOnCloseIcon() {
		this.clickOnDomElement('[data-testid="CloseIcon"]')
	}

	closingTemplateDropDown() {
        cy.wait(3000)
        this.typeTextOnDomElement(
            'div[class*="MuiMenuItem-root"] button',
            '{esc}'
        )
	}
	
}