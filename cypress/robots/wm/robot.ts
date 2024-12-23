import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot'

export class Dependencies extends BaseDependencies {
	visitWashmetrix() {
		// this.accessUrl('https://qa.washmetrix.com/');
	}

	loginWashmetrix() {
		this.washmetrixLogIn(Cypress.env('APP_URL'))
		cy.screenshot()
	}
}

export class RobotEyes extends BaseEyes {
	seesErrorMessage() {
		this.seesIdVisible('loginErrorMessage')
	}
	seesWashmetrixOrg() {
		this.seesDomVisible(Cypress.env('SelectOrganisation'))
	}
}

export class RobotHands extends BaseHands {
	scrollToSeeOrg(){
		this.wait(3000)
		// this.scrollIntoElementWithOutIndex(Cypress.env('SelectOrganisation'))
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}
	
	clickOnOrg() {
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}
}
