import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot'

export class Dependencies extends BaseDependencies {
	visitWashmetrix() {
		// this.accessUrl('https://qa.washmetrix.com/');
	}

	loginWashmetrix() {
		this.washmetrixLogIn(Cypress.env('APP_URL'))
		// cy.screenshot()
	}
}

export class RobotEyes extends BaseEyes {
	seesErrorMessage() {
		this.seesIdVisible('loginErrorMessage')
	}
	seesWashmetrixOrg() {
		this.seesDomVisible('img[alt="WashMetrix Car Wash"]')
	}
}

export class RobotHands extends BaseHands {
	clickOnWashmetrixCarWashOrg() {
		this.clickOnDomElement('img[alt="WashMetrix Car Wash"]')
		this.wait(3000)
	}
}
