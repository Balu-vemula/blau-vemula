import { RobotEyes, RobotHands, Dependencies } from '../../robots/wm/robot'
import '../../support/e2e'
import RoleFilter from '../../support/filter'
const robotEyes = new RobotEyes()
const robotHands = new RobotHands()
const dependencies = new Dependencies()

	describe('Loging in to  washmetrix', () => {
		
		context('Verifying the functionality of Login', () => {
			RoleFilter(['smoke', 'regression'], () => {
				before('Login in to WashMetrix', () => {
					cy.clearAllSessionStorage()
					cy.clearAllLocalStorage()
					cy.clearAllCookies()
					dependencies.loginWashmetrix()
					robotHands.scrollToSeeOrg()
					robotEyes.seesWashmetrixOrg()
				})

				it('Selecting washmetrix Car Wash Organization', () => {
					robotHands.clickOnOrg()
				})
			})
		})	
	})
