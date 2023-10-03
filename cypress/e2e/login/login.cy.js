import { RobotEyes, RobotHands, Dependencies } from '../../robots/wm/robot'
// import '../../support/e2e'
const robotEyes = new RobotEyes()
const robothands = new RobotHands()
const dependencies = new Dependencies()
import RoleFilter from '../../support/filter'
context('Verifying the functionality of Login', () => {
	RoleFilter(['smoke','regression'], () =>{
		describe('Loging in to  washmetrix', () => {
			before('Login in to WashMetrix', () => {
				cy.clearAllSessionStorage()
				cy.clearAllLocalStorage()
				cy.clearAllCookies()
				dependencies.loginWashmetrix()
				robotEyes.seesWashmetrixOrg()
			})
	
			it('Selecting washmetrix Car Wash Organization', () => {
				robothands.clickOnWashmetrixCarWashOrg()
			})
	})
	})
		
	
})
