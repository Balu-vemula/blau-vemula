import { attempt } from "cypress/types/bluebird";
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
    seesConfigurationICon() {
        this.seesDomVisible('[aria-label="Configuration"]')
    }
    seesConfiguarationPageTitle() {
        this.wait(5000)
        this.seesDomVisible('div h5')
    }
    verifeisTheConfigurationPageTitle(title:string) {
        this.seesDomContainText('div h5',title)
    }
    seesSubtitleOfConfiguration() {
        this.seesDomVisible('div h6')
    }
    VerifiesSubtitleOfConfiguration(subtitle:string) {
        this.seesDomContainText('div h6',subtitle)
    }
    seesPermissionTab() {
        this.seesIdVisible('permissions')
    }
    verifiesTheTextOfPermissionTab(text:string) {
        this.seesDomContainText('button[id="permissions"] span',text)
    }
    verifiesPermissionTabIsSelected() {
        cy.get('#permissions').invoke('attr','aria-selected').then((attrValue) => {
            expect(attrValue).to.equal('true')
        })
    }
    verifiesUserTabIsNotSelected() {
        cy.get('#users').invoke('attr','aria-selected').then((attrValue) =>{
            expect(attrValue).to.equal('false')
        })
    }
    verifiesTheTitleOfPermissionTable(text:string) {
        this.seesDomVisible('div div div div:nth-child(1) div p')
        this.seesDomContainText('div div div div:nth-child(1) div p',text)
    }
    verifiesSubtextOfTitleOfPermissionTable(text:string) {
        this.seesDomVisible('div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) span')
        this.seesDomContainText('div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) span',text)
    }
    seesSearchBox() {
        this.seesDomVisible('div[class*="search-box"]')
    }
    seesSearchIcon() {
        this.seesDomVisible('div[class*="search-box"] svg')
    }
    verifiesInputFiledTextOfSearchBox(text:string) {
        this.seesDomVisible('div[class*="search-box"] input')
        cy.get('div[class*="search-box"] input').invoke('attr','placeholder').then((attrValue) => {
            expect(attrValue).to.equal(text)
        })
    }
    seesPermissionTypeDropDown() {
        this.seesIdVisible('dropdown')
    }
    VerifiesDefaultSelectionForPermissionTypeDropDown(text:string) {
        this.seesDomContainText('div[id="dropdown"] span',text)
    }
    VerifiesPermissionDropDownElements(text1:string,text2:string,text3:string) {
        const permissionType: string[] = [text1,text2,text3]
        for(let i=0;i<permissionType.length;i++) {
            this.seesDomContainText('div[role="presentation"] div ul li span',permissionType[i])
        }
    }
    seesCreatePermissionButton() {
        this.seesDomElementWithIndex('div div div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) button',0)
    }
    seesPlusButtonOnCreatePermissionButton() {
        this.seesDomVisible('div div div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) button span')
    }
    verifiesCreatePermissionButtonText(text:string) {
        this.sessTextWithDomAndIndex('div div div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) button',0,text)
    }
    seesFirstColumn() {
        this.seesDomVisible('thead> tr> th:nth-child(1)')
    }
    VerifiesSecondColumnHeader(text:string) {
        this.seesDomVisible('thead> tr> th:nth-child(2) > div:nth-child(1) > span:nth-child(1)')
        this.seesDomContainText('thead> tr> th:nth-child(2) > div:nth-child(1) > span:nth-child(1)',text)
    }
    verifiesThirdColumnHeader(text:string) {
        this.seesDomVisible('thead> tr> th:nth-child(3) > div:nth-child(1) > span:nth-child(1)')
        this.seesDomContainText('thead> tr> th:nth-child(3) > div:nth-child(1) > span:nth-child(1)',text)
    }
    verifiesFourthColumnHeader(text:string) {
        this.seesDomVisible('thead> tr> th:nth-child(4) > div:nth-child(1) > span:nth-child(1)')
        this.seesDomContainText('thead> tr> th:nth-child(4) > div:nth-child(1) > span:nth-child(1)',text)
    }
    seesFifthColumnHeader() {
        this.seesDomVisible('thead> tr> th:nth-child(1)')
    }
    verifiesAllModulePermission(permissionName:string,permissionType:string,PermissionDescription:string) {
        this.seesDomVisible('div[title="All Module"]')
        this.seesDomContainText('div[title="All Module"]',permissionName)
        this.seesDomVisible('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1) > div:nth-child(1) > span:nth-child(1)')
        this.seesDomContainText('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1) > div:nth-child(1) > span:nth-child(1)',permissionType)
        this.seesDomVisible('div[title="All Module Permissions"]')
        this.seesDomContainText('div[title="All Module Permissions"]',PermissionDescription)
    }
    verifiesAllLocationPermission(permissionName:string,permissionType:string,PermissionDescription:string) {
        this.seesDomVisible('div[title="All Location"]')
        this.seesDomContainText('div[title="All Location"]',permissionName)
        this.seesDomVisible('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3) > span:nth-child(1) > div:nth-child(1) > span:nth-child(1)')
        this.seesDomContainText('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3) > span:nth-child(1) > div:nth-child(1) > span:nth-child(1)',permissionType)
        this.seesDomVisible('div[title="All Location Permissions"]')
        this.seesDomContainText('div[title="All Location Permissions"]',PermissionDescription)
    }
    verifiesTitleOfCreatePermissionForm(title:string) {
        this.seesDomVisible('h2[id="customized-dialog-title"] div span')
        this.seesDomContainText('h2[id="customized-dialog-title"] div span',title)
    }
    verifiesTitleOfNameInputFiled(title:string) {
        this.seesDomVisible('label[for="name"] span[class*="Mui"]')
        this.seesDomContainText('label[for="name"] span[class*="Mui"]',title)
    }
    verifiesNameInputField(){
        this.seesIdVisible('name')
        cy.get('#name').invoke('attr','placeholder').then((attrValue) =>{
            expect(attrValue).to.contain('Add Name')
        })
    }
    seesDescrpitonFieldTitle(title:string) {
        this.seesDomVisible('div[role="dialog"] div form div:nth-child(3) label span')
        this.seesDomContainText('div[role="dialog"] div form div:nth-child(3) label span',title)
    }
    seesDescriptionFiledCharacterLimit(limit:string) {
        this.seesDomVisible('div[role="dialog"] div form div:nth-child(3) span:nth-child(2)')
        this.seesDomContainText('div[role="dialog"] div form div:nth-child(3) span:nth-child(2)',limit)
    }
    verifiesDescriptionField(placeHolder:string) {
        this.seesDomVisible('div[role="dialog"] div form div:nth-child(4)')
        cy.get('div[role="dialog"] div form div:nth-child(4) textarea:nth-child(1)').invoke('attr','placeholder').then((attrValue) =>{
            expect(attrValue).to.contain(placeHolder)
        })
    }
    verifiesTitleOfPermissionTypeSelection(title:string) {
        this.seesDomVisible('form div label:nth-child(5)')
        this.seesDomContainText('form div label:nth-child(5)',title)
    }
    verifiesLocationRadioButton(text:string) {
        this.seesDomVisible('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(1)')
        this.seesDomContainText('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)',text)
        this.seesDomVisible('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(1) > span:nth-child(1)')
    }
    verifiesModuleRadioButton(text:string) {
        this.seesDomVisible('form div:nth-child(6) label:nth-child(2)')
        this.seesDomContainText('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(2) > span:nth-child(2)',text)
        this.seesDomVisible('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(2) > span:nth-child(1)')
    }
    verifiesTitleOfDropDown(text:string) {
        this.seesDomVisible('form div:nth-child(7) label')
        this.seesDomContainText('form div:nth-child(7) label span',text)
    }
    verifiesDefaultSelectionCountOfDropDown(text:string) {
        this.seesDomVisible('form div:nth-child(7) span:nth-child(2)')
        this.seesDomContainText('form div:nth-child(7) span:nth-child(2)',text)
    }
    seesDropDown(){
        this.seesDomVisible('form div:nth-child(8)')
    }
    verifiesSearchBoxOnDrillDown(placeHolder:string) {
        this.seesDomVisible('ul div input[id="searchbox"]')
        cy.get('ul div input[id="searchbox"]').invoke('attr','placeholder').then((attrValue)=>{
            expect(attrValue).to.contain(placeHolder)
        })
    }
    VerifiesCreatePermissionButton(text:string) {
        this.seesDomVisible('div[role="dialog"] div button:nth-child(2)')
        this.seesDomContainText('div[role="dialog"] div button:nth-child(2) span',text)
    }
    verifiesCreatePermissionButtonIsDisabled() {
        this.seesDomDisabled('div[role="dialog"] div button:nth-child(2)')
    }
    verifiesCreatePermissionButtonIsEnabled() {
        this.seesDomEnabled('div[role="dialog"] div button:nth-child(2)')
    }
    verifiesCancelButton(text:string) {
        this.seesDomVisible('div[role="dialog"] div button:nth-child(1)')
        this.seesDomContainText('div[role="dialog"] div button:nth-child(1) span',text)
    }
    verifiesSaveButtonIsDisabled() {
        this.seesDomVisible('div[role="dialog"] div button:nth-child(2)')
        this.seesDomDisabled('div[role="dialog"] div button:nth-child(2)')
    }
    verifiesSaveButton(text:string) {
        this.seesDomContainText('div[role="dialog"] div button:nth-child(2) span',text)
    }
    verifiesSaveButtonIsEnabled() {
        this.seesDomEnabled('div[role="dialog"] div button:nth-child(2)')
    }
    seesLocationRadioButtonDisabled() {
        this.seesDomDisabled('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(1) > span:nth-child(1)')
    }
    seesModuleRadiobuttonIsDisabled() {
        this.seesDomDisabled('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(2) > span:nth-child(1)')
    }
    seesPermissionDetailPageHeader() {
        this.wait(5000)
        this.seesDomVisible('div h4')
    }
    verifyingTheTitleOfPermissionDetailPage(text:string) {
        this.seesDomContainText('div h4',text)
    }
    seesBackToPermissionButton() {
        this.seesDomVisible('div:nth-child(2) div:nth-child(1) button:nth-child(1) span')
    }
    verifiesTextOfBackToPermissionButton(text:string) {
        this.seesDomContainText('div:nth-child(2) div:nth-child(1) button:nth-child(1) span',text)
    }
    seesSummaryField() {
        this.seesDomVisible('div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(2) p')
    }
    verfyingTheTextOfSummaryHeader(text:string) {
        this.seesDomContainText('div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(2) p',text)
    }
    verifyingTheSummaryOfPermission(createdDate:string) {
        this.seesDomVisible('div[class="flex flex-col gap-2"] div:nth-child(2) span:nth-child(1)')
        this.seesDomContainText('div[class="flex flex-col gap-2"] div:nth-child(2) span:nth-child(1)','Created On-')
        this.seesDomContainText('div[class="flex flex-col gap-2"] div:nth-child(2) span:nth-child(2)',createdDate)
    }
    verifyingDescriptionHeader(title:string) {
        this.seesDomVisible('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)')
        this.seesDomContainText('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > p',title)
    }
    verifyingTheDescriptionOfPermission(text:string) {
        this.seesDomVisible('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)')
        this.seesDomContainText('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > span',text)
    }
    verifyingTheThirdFieldInThePermissionDetailPage(title:string) {
        this.seesDomVisible('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4)')
        this.seesDomContainText('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > p',title)
        this.seesDomVisible('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2)')
    }
    verifiesHeaderOfTable(title:string) {
        this.seesDomVisible('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div > div > p')
        this.seesDomContainText('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div > div > p',title)
    }
    verifyingTheSearchBoxOfTheTable(placeHolder:string) {
        this.seesDomVisible('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div  > div:nth-child(2) > div:nth-child(1)')
        cy.get('div[class*="search-box"] input').invoke('attr','placeholder').then((attrValue)=>{
            expect(attrValue).to.contain(placeHolder)
        })
    }
    seesPermissionDropDown() {
        this.seesDomVisible('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div  > div:nth-child(2) > div:nth-child(2)')
    }
    verifyingTheDropdownOfUserType() {
        const userType : string[] = ['All','Active','Inactive']

        for(let i=0;i<userType.length;i++) {
            this.seesDomContainText('div ul[role="listbox"] li',userType[i])
        }
    }
    verifyingTheAddUserButton(text:string) {
        this.seesDomVisible('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div  > div:nth-child(2) > button')
        this.seesDomContainText('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div  > div:nth-child(2) > button > span:nth-child(2)',text)
    }
    veifyingTheHeaderOfFirstColumn(text:string) {
        this.seesDomVisible('thead tr th:nth-child(1)')
        this.seesDomContainText('table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1) > div:nth-child(1) > span:nth-child(1)',text)
    }
    verifyingTheHeaderOfSecondColumn(text:string) {
        this.seesDomVisible('thead tr th:nth-child(2)')
        this.seesDomContainText('table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2) > div:nth-child(1) > span:nth-child(1)',text)
    }
    verifyingTheHeaderOfThirdColumn(text:string) {
        this.seesDomVisible('thead tr th:nth-child(3)')
        this.seesDomContainText('table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(3) > div:nth-child(1) > span:nth-child(1)',text)
    }
    verifyingTheHeaderOfFourthColumn(text:string) {
        this.seesDomVisible('thead tr th:nth-child(3)')
        this.seesDomContainText('table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(4) > div:nth-child(1) > span:nth-child(1)',text)
    }
}

export class RobotHands extends BaseHands {
    scrollingIntoOrganisation(){
		this.wait(3000)
		// this.scrollIntoElementWithOutIndex(Cypress.env('SelectOrganisation'))
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}
	clickOnWashmetrixCarWashOrg() {
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}
    clicksOnConfigurationIcon() {
        this.clickOnDomElement('[aria-label="Configuration"]')
    }
    clicksOnPermissionTypeDropDown() {
        this.clickOnId('dropdown')
    }
    selectsAllFromThePermissionType() {
        this.clickOnDomElement('div[role="presentation"] div ul li:nth-child(1)')
    }
    clicksOnCreatePermissionButton() {
        this.clickOnDomElementWithIndex('div div div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) button',0)
    }
    entersPermissionName(PermissionName:string) {
        this.typeTextonId('name',PermissionName)
    }
    clicksOnLocationRadioButton() {
        this.clickOnDomElement('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(1) > span:nth-child(1)')
    }
    clickOnModuleRadioButton() {
        this.forceClickOnDomElement('form> div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > label:nth-child(2) > span:nth-child(1)')
    }
    clicksOnDropDown() {
        this.clickOnDomElement('form div:nth-child(8)')
    }
    closingDropDown() {
        this.typeTextOnDomElement('ul div input[id="searchbox"]','esc')

    }
    entersPermissionNameOnNameField(name:string) {
        this.typeTextOnDomElement('[id="name"]',name)
    }
    entersDescriptionONDescriptionField(description:string) {
        this.typeTextOnDomElement('div[role="dialog"] div form div:nth-child(4)',description)
    }
    selectsFirstOptionFromDropDown() {
        this.clickOnDomElement('ul div:nth-child(2) li:nth-child(1)')
    }
    selectsSecondOptionFromDropDown() {
        this.clickOnDomElement('ul div:nth-child(2) li:nth-child(2)')
    }
    selectsThirdOption() {
        this.clickOnDomElement('ul div:nth-child(2) li:nth-child(3)')
    }
    clicksOnCancelButton() {
        this.clickOnDomElement('div[role="dialog"] div button:nth-child(1)')
    }
    selectLocationFromPermissionTypeDropDown() {
        this.clickOnDomElement('[data-value="location"]')
    }
    selectModuleFromPermissionTypeDropDown() {
        this.clickOnDomElement('[data-value="module"]')
    }
    clickOnFirstEditablePermissionMenu() {
        this.clickOnDomElementWithIndex('[data-testid="MoreHorizIcon"]',0)
    }
    clcikOnEditPermissionButton() {
        this.clickOnDomElement('div ul[role="menu"] li:nth-child(1)')
    }
    clicksOnUserDropdown() {
        this.clickOnDomElement('div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div  > div:nth-child(2) > div:nth-child(2)')
    }
    clickOnALLOption() {
        this.clickOnDomElement('div ul[role="listbox"] li:nth-child(1)')
    }
    scrollToSeeBackToPermissionButton() {
        this.scrollIntoElement('div:nth-child(2) div:nth-child(1) button:nth-child(1) span',0)
    }
    clickOnBacktoPermissionButton() {
        this.clickOnDomElement('div:nth-child(2) div:nth-child(1) button:nth-child(1) span')
    }
    clicksOnAllLocationsPermission() {
        this.clickOnDomElement('[title="All Location"]')
    }
    clicksOnAllModulesPermission() {
        this.clickOnDomElement('[title="All Module"]')
    }
}