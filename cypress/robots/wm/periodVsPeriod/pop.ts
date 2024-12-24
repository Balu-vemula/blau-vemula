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
    seesTitleOfThePeriodOVerPeriodPage() {
        this.wait(5000)
        this.seesDomVisible('div h4')
    }
    verifiesTheHeaderOfThePriodOverPeriodPage(text:string) {
        this.seesDomContainText('div h4',text)
    }
    seesTheNameOfTheOrganization() {
        this.seesDomVisible('div h6')
    }
    verifiesTheNameOfTeOrganization() {
        this.seesDomContainText('div h6',Cypress.env('orgName'))
    }
    seesTheComparisonTab() {
        this.seesDomVisible('[id="Comparison"]')
    }
    verifiesTheTextForTheComparisonTab(text:string) {
        this.seesDomContainText('[id="Comparison"] span',text)
    }
    seesHeaderOfTheFrequencyFilterDropDown(){
        this.seesDomVisible('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span')
        // this.seesDomVisible('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span')
    }
    verifiesHeaderOfFrequencyFilterDropDown(text:string) {
        this.seesDomContainText('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span',text)
    }
    seesFrequencyFilterDropdown() {
        this.seesIdVisible('dropdown')
    }
    seesDropDownIconOnFrequencyFilterDropDown() {
        this.seesDomVisible('div div svg:nth-child(3)')
    }
    verifesDefaultSelectionOnFrequencyDropDown(text: string) {
        this.seesDomContainText('div[id="dropdown"] span',text)
    }
    seesTheHeaderOfLocationsAndSitegroups() {
        this.seesIdVisible('demo-row-radio-buttons-group-label')
    }
    verifiesTextForTheHeaderOfLocationsAndSitegroups(text:string) {
        this.seesDomContainText('[id="demo-row-radio-buttons-group-label"] span',text)
    }
    veirfiesTheTextOfFirstRadioButton(text:string) {
        this.seesDomVisible('div[role="radiogroup"] label:nth-child(1) span[class*="MuiTypography"]')
        this.seesDomContainText('div[role="radiogroup"] label:nth-child(1) span[class*="MuiTypography"]',text)
    }
    verifiesTheTextOfSecondRadioButton(text:string) {
        this.seesDomVisible('div[role="radiogroup"] label:nth-child(2) span[class*="MuiTypography"]')
        this.seesDomContainText('div[role="radiogroup"] label:nth-child(2) span[class*="MuiTypography"]',text)
    }
    verifyingtheDefaultSelctionOfLocationRadioButton() {
        // this.seesDomVisible('div[role="radiogroup"] label:nth-child(1) input')
        this.seesCheckboxIsSelected('div[role="radiogroup"] label:nth-child(1) input')
    }
    verifyingTheSelectionOfSiteGroupRadioButton() {
        this.seesCheckboxIsSelected('div[role="radiogroup"] label:nth-child(2) input')
    }
    seesLocation1ORSiteGroup1DropDown() {
        this.seesDomVisible('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)')
    }
    VerifiesLocation1ORSiteGRoupDropDownHeader(text:string) {
        this.seesDomVisible(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span')
        this.seesDomContainText(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span',text)
        
    }
    verifiesTheLocation1ORSiteroupDropDownDefaultText(text:string) {
        this.seesDomVisible(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > span:nth-child(1)')
        this.seesDomContainText(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > span:nth-child(1)',text)
    }
    seesPeriod1DropDown() {
        this.seesDomVisible(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div')
    }
    verifiesPeriod1DropDownHeader(text:string) {
        this.seesDomVisible(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span')
        this.seesDomContainText(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span',text)
    }
    verifiesDefaultTextOfPeriod1(text:string) {
        this.seesDomVisible(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > button > span:nth-child(2)')
        this.seesDomContainText(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div > button > span:nth-child(2)',text)
    }
    seesLocation2ORSiteGroup2DropDown() {
        this.seesDomVisible('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2)')
    }
    veriesTheHeaderOfLocation2ORSiteGroupDropDown(text:string) {
        this.seesDomVisible('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1)')
        this.seesDomContainText('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1)',text)
    }
    veirifiesDefaultTextOfLocation2ORSiteGroupDropDown(text:string) {
        this.seesDomVisible('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2) > span:nth-child(1)')
        this.seesDomContainText('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2) > span:nth-child(1)',text)
    }
    seesDropDownForPeriod2() {
        // this.seesDomVisible(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div > button')
        this.seesDomVisible('div:nth-child(3) div:nth-child(2) div:nth-child(3) button:nth-child(1)')
    }
    verifiesTheHeaderOfthePriod2(text:string) {
        this.seesDomVisible(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span')
        this.seesDomContainText(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span',text)
    }
    verifiesDefaultTextOfPeriod2(text: string) {
        // this.seesDomVisible(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div > button > span:nth-child(2)')
        // this.seesDomContainText(' div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div > button > span:nth-child(2)','Select Period 2')
        this.seesDomVisible('div:nth-child(3) div:nth-child(2) div:nth-child(3) button:nth-child(1) span:nth-child(2)')
        this.seesDomContainText('div:nth-child(3) div:nth-child(2) div:nth-child(3) button:nth-child(1) span:nth-child(2)',text)
    }
    seesResetButton(){
        this.seesDomElementWithIndex('div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1)',2)
    }
    verifiesTheTextOfReset(text:string){
        this.sessTextWithDomAndIndex('div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1) span:nth-child(1)',2,text)
    }
    SeesApplyButton(){
        this.seesDomVisible('div:nth-child(3) div:nth-child(2) div:nth-child(2) button:nth-child(2)')
    }
    verifiesTheTextOfApplyButton(text:string) {
        this.seesDomVisible('div:nth-child(3) div:nth-child(2) div:nth-child(2) button:nth-child(2) span')
        this.seesDomContainText('div:nth-child(3) div:nth-child(2) div:nth-child(2) button:nth-child(2) span',text)
    }
    seesLocationsOrSiteGroupsDropDownMenu() {
        this.seesDomVisible('div[class*="h-full w-48"]')
    }
    VerifiesTheSearchOptionInDropDownMenu() {
        this.seesDomVisible('[placeholder="Search Locations"]')
    }
    seesSecondOptinInTheDropDown() {
        this.seesDomVisible('div ul div span:nth-child(3) span')
    }
    seesYearlyOptionInPeriodDropDown() {
        // this.seesDomVisible('input[value="2024"]')
    }
    seesYear2023InTheList() {
        this.seesDomVisible('[data-value="2023"]')
    }
    seesMonthsInTheDatePicker() {
            const monthNames: string[] = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
            for(var i=0;i<monthNames.length;i++) {
                this.sessTextWithDomAndIndex('div[class="react-datepicker__month-wrapper"] div',i,monthNames[i])
            }
    }
    VerifiesFirstColumnHeader(text:string) {
        this.wait(10000)
        this.seesDomVisible('thead tr th:nth-child(1)')
        this.seesDomContainText('thead tr th:nth-child(1) span',text)
    }
    verifiesSecondColumnHeader() {
        this.seesDomVisible('thead tr th:nth-child(2)')
        // this.seesDomContainText('','')
    }
    verifiesThePeriod1Value(text:string) {
        this.seesDomVisible('thead tr th:nth-child(2) span div span:nth-child(2)')
        this.seesDomContainText('thead tr th:nth-child(2) span div span:nth-child(2)',text)
    }
    verifiesThirdColumnHeader() {
        this.seesDomVisible('thead tr th:nth-child(3)')
        // this.seesDomContainText('','')
    }
    verifiesThePeriod2Values(text:string) {
        this.seesDomVisible('thead tr th:nth-child(3) span div span:nth-child(2)')
        this.seesDomContainText('thead tr th:nth-child(3) span div span:nth-child(2)',text)
    }
    verifiesFourthColumnHeader(text:string) {
        this.seesDomVisible('thead tr th:nth-child(4)')
        this.seesDomContainText('thead tr th:nth-child(4) span div span:nth-child(1)',text)
    }
    verifiesFifthColumnHeader(text:string) {
        this.seesDomVisible('thead tr th:nth-child(5)')
        this.seesDomContainText('thead tr th:nth-child(5) span div span:nth-child(1)',text)
    }
    VerifyingModuleHeadersAndMetrics() {
		this.wait(15000)
		// const numbers: number[] = [0,2,3,4,5,6]
		const metrics: string[] = [
			'Sales & Labor',
			'',
			'Cars Washed (#)',
			'Sales ($)',
			'Individual Washes (#)',
			'Individual Washes ($)',
			'Avg. Ticket Individual Washes ($)',
			'Avg. Daily Sales ($)',
			'Avg. Monthly Sales ($)',
			'Cars Per Labor Hour (#)',
			'Labor % of Sales (%)',
            'Labor (hrs)',
			'Labor ($)',
			'Labor Per Car ($)',
			'Busiest Day (#)',
			'Cash v Card (%)',
			'Membership',
			'',
			'Account Growth Rate (%)',
			'Account Churn Rate (%)',
			'Avg. Ticket Membership ($)',
			'Conversion Rate (%)',
			'New Membership Sales ($)',
			'New Membership Sales (#)',
			'Recurring Billing ($)',
			'Membership % of Sales (%)',
			'Avg. Account Club Use (#)',
			'Redemption Rate (%)',
			'Financials',
			'',
			'Income ($)',
			'COGS ($)',
			'Gross Profit ($)',
			'Other Expenses ($)',
			'Total Expenses ($)',
			'Net Income ($)',
			'NOI ($)',
			'Avg. Cost Per Car ($)',
			'Avg. Net Income Per Car ($)',
			'Labor % of Income (%)',
			'Labor Cost Per Car ($)',
			'Chemical Cost Per Car ($)',
			'Supplies Cost Per Car ($)',
			'Water Cost Per Car ($)',
			'Electric Cost Per Car ($)',
			'MAF Cost Per Car ($)',
			'R&M Cost Per Car ($)',
			'Damages Cost Per Car ($)'
		]
		for(var i=0;i<metrics.length;i++) {

			this.sessTextWithDomAndIndex('tbody tr td:nth-child(1) div:nth-child(1) div span',i,metrics[i])
			// this.sessTextWithDomAndIndex('tbody tr td:nth-child(1) div:nth-child(1) div span',numbers[i],metrics[i])
			// this.seesDomContainText('tbody tr:nth-child(1) td:nth-child(1) div:nth-child(1) div span',metrics[i])
		}
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
    clicksOnPeriodOverPeriodIcon() {
        this.clickOnDomElement('[aria-label="Period v Period"]')
    }
    clicksOnFrequencyDropDown() {
        this.clickOnId('dropdown')
    }
    clickOnLocation1ORSiteGroup1DropDown() {
        this.clickOnDomElement('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)')
    }
    selectsFirstOptionInTheDropDown(){
        this.clickOnDomElement('div ul div span:nth-child(2) span')
    }
    selectsSecondOptionInTheDropDown(){
        this.clickOnDomElement('div ul div span:nth-child(3) span')
    }
    clicksOnPeriod1DropDown() {
        this.clickOnDomElement('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div')
    }
    clickOnYearOptionInTheDropDown() {
        // this.forceClickOnDomElement('input[value="2024"]')
        this.clickOnDomElementWithIndex('[id="dropdown"]',1)
    }
    selectsYear2023() {
        this.clickOnDomElement('[data-value="2023"]')
    }
    selectsJune() {
        this.clickOnDomElement('[aria-label="Choose June 2023"]')
    }
    clicksOnLocation2ORSiteGroup2DropDown() {
        this.clickOnDomElement('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2)')
    }
    clicksOnPeriod2DropDown() {
        this.clickOnDomElement('div:nth-child(3) div:nth-child(2) div:nth-child(3) button:nth-child(1)')
    }
    selectsJuly() {
        this.clickOnDomElement('[aria-label="Choose July 2023"]')
    }
    clicksOnApplyButton() {
        this.clickOnDomElement('div:nth-child(3) div:nth-child(2) div:nth-child(2) button:nth-child(2)')
    }
    scrollToSeeVaraincePercentage() {
        this.scrollIntoElementWithOutIndex('thead tr th:nth-child(5)')
    }
    scrollToSeeModuleHeader() {
        this.scrollIntoElementWithOutIndex('thead tr th:nth-child(1)')
    }
    scrollToseeOrgName() {
        this.scrollIntoElementWithOutIndex('div h6')
    }
    clickOnSiteGroupRadioButton() {
        this.clickOnDomElement('div[role="radiogroup"] label:nth-child(2) input')
    }
    clicksOnResetButton() {
        this.clickOnDomElementWithIndex('div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1)',2)
    }

}