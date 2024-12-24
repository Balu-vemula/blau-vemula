import { mixin } from "cypress/types/lodash";
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
    seesTitleOfMyWorkspacePage() {
        this.seesDomVisible('div h5')
    }
    verifiesTheTitleOfMyWorkspacePage(title:string) {
        this.seesDomContainText('div h5',title)
    }
    seesOrgName() {
        this.seesDomVisible('div h6')
    }
    verifiesOrgName(orgName:string) {
        this.seesDomContainText('div h6',orgName)
    }
    seesSiteGroupBar() {
        this.seesDomVisible('div:nth-child(1) div:nth-child(2) div[class*=mt-2]')
    }
    verifiesDefaultSelectedSiteGroup() {
        cy.get('[title="All Sites"]').invoke('attr','aria-selected').then((attrValue)=>{
            expect(attrValue).contain('true')
        })
    }
    seesLocationDropDown() {
        this.seesDomVisible('div[class*=mt-3] button:nth-child(1)')
    }
    seesDatepickerIsVisibleOnModuleView() {
		this.seesDomVisible('[aria-describedby="4"]')
	}
    seesCarsPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    }
    seesSalesPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    }
    seesPaicngIconOnCarsPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    }
    seesTitleOfCarsPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
    }
    verifiesTheTitleOfCarsPacingTile(title:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)',title)
    }
    seesTableOfCarsPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
    }
    seesFirstColumnHeaderOfCarsPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(1)')
    }
    verifiesFirstColumnHeaderNameOfCarsPacingTile(name:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(1) > span',name)
    }
    seesSecondColumnHeaderOfCarsPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(2)')
    }
    verifiesSecondColumnHeaderNameOfCarsPacingTile(name:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(2) > span',name)
    }
    seesThirdColumnHeaderOfCarsPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(3)')
    }
    verifiesThirdColumnHeaderNameOfCarsPacingTile(name:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(3) > span',name)
    }
    seesFourthColumnHeaderOfCarsPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)')
    }
    verifiesFourthColumnHeaderNameOfCarsPacingTile(name1:string,name2:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)  span:nth-child(1)',name1)
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)  span:nth-child(2)',name2)

    }
    verifiesRowHeaderNamesOfCarsPacingTile(secondrow:string,thirdRow:string,fOurthRow:string,fifthRow:string) {
        const rowHeaders : string[] = [
            secondrow,
            thirdRow,
            fOurthRow,
            fifthRow
        ]
        for(let i=0; i< rowHeaders.length;i++) {
            this,this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > tbody > tr > td:nth-child(1) > span',rowHeaders[i])
        }
    }
    seesPaicngIconOnSalesPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    }
    seesTitleOfSalesPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
    }
    verifiesTheTitleOfSalesPacingTile(title:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)',title)
    }
    seesTableOfSalesPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
    }
    seesFirstColumnHeaderOfSalesPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(1)')
    }
    verifiesFirstColumnHeaderNameOfSalesPacingTile(name:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(1) > span',name)
    }
    seesSecondColumnHeaderOfSalesPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(2)')
    }
    verifiesSecondColumnHeaderNameOfSalesPacingTile(name:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(2) > span',name)
    }
    seesThirdColumnHeaderOfSalesPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(3)')
    }
    verifiesThirdColumnHeaderNameOfSalesPacingTile(name:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(3) > span',name)
    }
    seesFourthColumnHeaderOfSalesPacingTile() {
        this.seesDomVisible('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)')
    }
    verifiesFourthColumnHeaderNameOfSalesPacingTile(name1:string,name2:string) {
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)  span:nth-child(1)',name1)
        this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)  span:nth-child(2)',name2)

    }
    verifiesRowHeaderNamesOfSalesPacingTile(secondrow:string,thirdRow:string,fOurthRow:string,fifthRow:string,sixthRow:string) {
        const rowHeaders : string[] = [
            secondrow,
            thirdRow,
            fOurthRow,
            fifthRow,
            sixthRow
        ]
        for(let i=0; i< rowHeaders.length;i++) {
            this,this.seesDomContainText('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > tbody > tr > td:nth-child(1) > span',rowHeaders[i])
        }
    }
    seesTextForDatePickerFrequency() {
		const frequencies: string[] = [
			'Current',
			'Today',
			'Current Week',
			'Current Month',
			'Current Quarter',
			'Current Year',
			'Yesterday',
			'Last Week',
			'Last Month',
			'Last Quarter',
			'Last Year',
			'Trailing 12',
		]
		for (let i = 0; i < frequencies.length; i++) {
			this.seesDomContainText(
				'div[role="presentation"] div[class]>button>span',
				frequencies[i]
			)
		}
	}
    seesThreeDotVerticalMenu() {
        this.seesDomVisible('div[class*="mt-2"] > div > div:nth-child(2) > button')
    }
    seesRemoveOrAddPacingTileButton() {
        this.seesDomVisible('div[role="presentation"] > div  button')
    }
    verifiesTextofAddOrRemovePacingTileButton(text:string) {
        this.seesDomContainText('div[role="presentation"] > div  button span',text)
    }
    seesConformationPopUpWhileRemovinOrAddingPacing() {
        this.seesDomVisible('div[class*="bottom"]')
    }
    verifiesTextOfConformationPopUpWhielRemovingOrAddingPacing(text:string) {
        this.seesDomContainText('div[class*="bottom"] p',text)
    }
    seesSaveButtonOnPopUp() {
        this.seesDomVisible('div[class*="bottom"] div button:nth-child(1)')
    }
    verifiesTextOfSaveButton(text:string) {
        this.seesDomContainText('div[class*="bottom"] div button:nth-child(1) span',text)
    }
    seesCancelButtonOnPopUp() {
        this.seesDomVisible('div[class*="bottom"] div button:nth-child(2)')
    }
    verifiesTextOfCancelButton(text:string) {
        this.seesDomContainText('div[class*="bottom"] div button:nth-child(2) span',text)
    }
    doesNotSeesCarsPacingTile() {
        this.doesNotseesDom('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    }
    doesNotSeesSalesPacingTile() {
        this.doesNotseesDom('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    }
    

}

export class RobotHands extends BaseHands {
    scrollingIntoOrganisation(){
		this.wait(3000)
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}
	clickOnWashmetrixCarWashOrg() {
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}
    clicksOnDatePicker() {
		this.clickOnDomElement('[aria-describedby="1"]')
	}
    scrollToSeeThreeDotVerticalMenu() {
        this.scrollIntoElementWithOutIndex('div[class*="mt-2"] > div > div:nth-child(2) > button')
    }
    clicksOnThreeDotVerticalMenuu() {
        this.clickOnDomElement('div[class*="mt-2"] > div > div:nth-child(2) > button')
    }
    clickonAddOrRemovePacingButton() {
        this.clickOnDomElement('div[role="presentation"] > div  button')
    }
    clicksonCancelButton() {
        this.clickOnDomElement('div[class*="bottom"] div button:nth-child(2)')
    }
    clicksOnSaveButton() {
        this.clickOnDomElement('div[class*="bottom"] div button:nth-child(1)')
    }

}

export class RobotPacing {
    verifyingThePacingTileAccordingToTheDatePickerSelection() {
        const frequencies: string[] = [
            'Today',
            'Current Week',
            'Current Month',
            'Current Quarter',
            'Current Year',
            'Yesterday',
            'Last Week',
            'Last Month',
            'Last Quarter',
            'Last Year',
            'Trailing 12',
            'Current'
        ]
        const text:string[] = [
            'from last month',
            'from last month',
            'from last month',
            'from last quarter',
            'from last year',
            'from last month',
            'from last month',
            'from last month',
            'from last month',
            'from last month',
            'from last month',
            'from last month'
        ]
        for (let i = 0; i < frequencies.length; i++) {
            cy.get('[aria-describedby="1"]').click()
            cy.get('div[role="presentation"] div[class]>button>span').contains(frequencies[i]).click()
            cy.get('div[role="presentation"] div[class]:nth-child(2)>button:nth-child(2)').click()
            cy.wait(5000)
            cy.get('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)  span:nth-child(1)').should('contain','Var (%)')
            cy.get('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)  span:nth-child(2)').should('contain',text[i])
            cy.get('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)  span:nth-child(1)').should('contain','Var (%)')
            cy.get('div[class*="mt-5"] > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) >  table > thead > tr > th:nth-child(4)  span:nth-child(2)').should('contain',text[i])
            
        }
    }
}