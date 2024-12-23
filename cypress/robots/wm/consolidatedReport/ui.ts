import { BaseDependencies, BaseEyes,BaseHands } from "../../BaseRobot";

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
    
    seesInsightsIconOnLeftNav() {
		this.wait(5000)
        this.seesDomVisible('[alt="Insights"]')
    }
	seesHeaderOfInsights() {
		this.wait(15000)
		this.seesDomVisible('div h5')
	}
	verifiesInsightsHeader(header:string) {
		this.seesDomContainText('div h5',header)
	}
	sessDefaultDateNextToInsightsHeader() {
		this.seesDomVisible('div p:nth-child(2)')
	}
	verifyingDefaultDateNextToInsightsHeader(date:any) {
		this.seesDomContainText('div p:nth-child(2)',date)
	}
	seesOrgName() {
		this.seesDomVisible('div h6')
	}
	verifiesOrgName(orgName:string) {
		this.seesDomContainText('div h6',orgName)
	}
	seesTempalteDropDown() {
		this.seesDomElementWithIndex('div[id="dropdown"] ',0)
	}
	verifyingtheDefaultTemplateWithParameterDefault(parameter:string) {
		this.seesDomContainText('div[id="dropdown"]  span div span:nth-child(2)',parameter)
	}
	seesDropDownOnIconTemplateDropDown() {
		this.seesDomElementWithIndex('[data-testid="ArrowDropDownIcon"]',0)
	}
	seesDropDownList() {
		this.seesDomVisible('[role="listbox"]')
	}
	seesfrequencyDropDown() {
		this.seesDomElementWithIndex('div[id="dropdown"] ',1)
	}
	verifyingDefaultFrequency() {
		this.seesDomContainText('[data-testid="calender-dropdown"] div div[aria-haspopup="listbox"] span','Month')
	}
	seesDropDownIconForFrequencyDropdown() {
		this.seesDomElementWithIndex('[data-testid="ArrowDropDownIcon"]',1)
	}
	verifyingFrequenciesOnFrequencyDropDown() {
		const frequencies: string[] = [
			'Day',
			'Week',
			'Month',
			'Quarter',
			'Year'
		]
		for (let i = 0; i < frequencies.length; i++) {
			// this.seesDomContainText(
			// 	'[role="listbox"] li',
			// 	frequencies[i]
			// )
			this.sessTextWithDomAndIndex('[role="listbox"] li',i,frequencies[i])
		}
	}
	seesCalendarDropDown() {
		// cy.reload()
		// this.wait(15000)
		this.seesDomVisible('button[data-testid="CalendarDropDown"]')
	}
	verifyingDefaultCalendarSelection(defaultDate:string) {
		this.seesDomContainText('button[data-testid="CalendarDropDown"]',defaultDate)
	}
	verifyingDropDownTextAfterSelectingDay(dayText:string ) {
		this.seesDomContainText('button[data-testid="CalendarDropDown"]',dayText)
	}
	seesMonthDropDownOnDayCalendar() {
		this.seesDomVisible('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
	}
	seesYearDropDownOnDayCalendar() {
		this.seesDomVisible('div[class*="react-datepicker__header"] div div:nth-child(2) div[id="dropdown"]')
	}
	verifyingWeekNamesInTheCalendar() {
		const weeknames: string[] = [
			'Sun',
			'Mon',
			'Tue',
			'Wed',
			'Thu',
			'Fri',
			'Sat'
		]
		for(var i=0;i<weeknames.length;i++) {
			this.sessTextWithDomAndIndex('div[class="react-datepicker__day-name"]',i,weeknames[i])
		}
	}
	verifyingDropDownTextAfterSelectingWeek(weekText:string ) {
		this.seesDomContainText('button[data-testid="CalendarDropDown"]',weekText)
	}
	seesMonthDropDownOnWeekCalendar() {
		this.seesDomVisible('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
	}
	seesYearDropDownOnWeekCalendar() {
		this.seesDomVisible('div[class*="react-datepicker__header"] div div:nth-child(2) div[id="dropdown"]')
	}
	verifiesDropDownTextAfterSelectingMonth(monthtText:string ) {
		this.seesDomContainText('button[data-testid="CalendarDropDown"]',monthtText)
	}
	seesyearselectionInMonthCalendar() {
		this.seesDomVisible('[class*="react-datepicker__header"] div[role="combobox"]')
	}
	verifyingDafaultYearInCalendar(year:any) {
		this.seesDomContainText('[class*="react-datepicker__header"] div[role="combobox"]',year)
	}
	verifyingDropDownTextAfterSelectingQuarter(quarterText:string ) {
		this.seesDomContainText('button[data-testid="CalendarDropDown"]',quarterText)
	}
	seesyearselectionInQuarterCalendar() {
		this.seesDomVisible('[class*="react-datepicker__header"] div[role="combobox"]')
	}
	verifyingDropDownTextAfterSelectingYear(yearText:string ) {
		this.seesDomContainText('button[data-testid="CalendarDropDown"]',yearText)
	}
	seesPreviousButtonOnYearCalendar() {
		this.seesDomVisible('[aria-label="Previous Year"]')
	}
	seesNextButtonOnYearCalendar() {
		this.seesDomVisible('[aria-label="Next Year"]')
	}
	
	seesDropDownIconOnYearSelectionInDatePicker() {
		// this.seesDomVisible('[class*="react-datepicker__header"] input svg')
		this.seesDomVisible('[data-testid="KeyboardArrowDownIcon"]')
	}

	seesListofYearsInCalendar() {
		// this.seesDomVisible('body > div:nth-child(7) > div:nth-child(3) > ul:nth-child(1)')
		this.seesDomVisible('ul[aria-labelledby="dropdown"]')
	}
	seesListOfMonthsInDatePicker() {
		const months:string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
		for (let i=0; i<months.length; i++){
			this.sessTextWithDomAndIndex('[class*="react-datepicker__month-text react-datepicker__month"]',i,months[i])
		}
	}
	seesCancelButtonIsVisible() {
		this.seesDomVisible('div[class*="justify-end"] button:first-child')
	}
	VerifyingTheTextOnCancelButton(text:string) {
		this.seesDomContainText('div[class*="justify-end"] button:first-child span',text)
	}
	seesApplyButtonIsVisible() {
		this.seesDomVisible('div[class*="justify-end"] button:last-child')
	}
	VerifyingTheTextOnApplyButton(text:string) {
		this.seesDomContainText('div[class*="justify-end"] button:last-child span',text)
	}
	seesTableColumnHeaders(header1:string,header2:string) {
		cy.reload()
		this.wait(15000)
		this.seesDomContainText('tr th:nth-child(1) span',header1)
		this.seesTextWithDom('tr th:nth-child(2) span',header2)

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
	seesAccordianOnSalesAndLaborMOduleHeader() {
		this.seesDomVisible('[title="Sales & Labor"] span ')
	}
	seesAccordianOnMembershipModuleHeader() {
		this.seesDomVisible('[title="Membership"] span ')
	}
	seesAccordianOnAccountingModuleHeader() {
		this.seesDomVisible('[title="Financials"] span ')
	}
	seesCreateComparisonButton() {
		// this.seesDomVisible('[class="flex gap-3 items-center"] button:nth-child(2)')
		this.seesDomElementWithIndex('[class*="flex items-center"] button:nth-child(2)',1)
	}
	verifyingCreateCompariosnButtonText(text:string) {
		this.seesDomContainText('[class*="flex items-center"] button:nth-child(2) span',text)
	}
	seesVerticalThreeDotMenuVisible() {
		// this.seesDomVisible('[class="w-full pr-2 el:pr-4 el:pl-4  flex  items-center justify-between"] button')
		this.seesDomElementWithIndex('[class*="flex items-center"] button:nth-child(2)',0)
	}
	seesExportOptionVisible() {
		this.seesDomVisible('[class*="flex flex-col"] button:nth-child(1)')
	}
	verifyingTheTextOfExportOption(text:string) {
		this.seesDomContainText('[class*="flex flex-col"] button:nth-child(1) span',text)
	}
	seesMarkAsDefaultOptionVisible() {
		this.seesDomVisible('[class*="flex flex-col"] button:nth-child(2)')
	}
	verifyingTheTextOfMarkAssDefaultOption(text:string) {
		this.seesDomContainText('[class*="flex flex-col"] button:nth-child(2) span',text)
	}
	seesEditTemplateOptionVisible() {
		this.seesDomVisible('[class*="flex flex-col"] button:nth-child(3)')
	}
	verifyingTheTextOfEditTemplatetOption(text:string) {
		this.seesDomContainText('[class*="flex flex-col"] button:nth-child(3) span',text)
	}
	}

export class RobotHands extends BaseHands {
	clickOnOrg() {
		this.clickOnDomElement(Cypress.env('SelectOrganisation'))
		this.wait(3000)
	}
	scrollingIntoOrganisation() {
		// this.scrollIntoElement(Cypress.env('SelectOrganisation'), 0)
		this.scrollIntoElementWithOutIndex(Cypress.env('OrgTitle'))
	}
	clicksOnInsightsIcon() {
		this.clickOnAttribute('alt="Insights"')
	}
	scrollingToSeeFrequencyDropDown() {
		this.scrollIntoElement('div[id="dropdown"]',1)
	}
	clicksOnTemplateDropDown() {
		this.clickOnDomElementWithIndex('div[id="dropdown"]',0)
	}
	clicksOnDefaulttemplate(){
		this.forceClickOnText('(Default)')
	}
	closingTemplateDropDown() {
		// this.forceClickOnDomElement('div[data-testid="template-dropdown"]')
		// this.typeTextOnDomElement('div[data-testid="template-dropdown"]','{esc}')
		// this.typeTextonDom('data-testid','template-dropdown','{esc}')
	}
	// SelectsTemplateFromDropDown() {
	// 	this.clickOnDomElement('[role="option"]:nth-child(5)')
	// }
	clicksOnFrequencyDropdown() {
		this.clickOnDomElementWithIndex('div[id="dropdown"]',1)
	}
	selectDayFrequencyInTheDropDown() {
		this.clickOnDomElementWithIndex('[role="listbox"] li',0)
	}
	clicksOnYearDropDownInDayFrequency() {
		this.clickOnDomElement('div[class*="react-datepicker__header"] div div:nth-child(2) div[id="dropdown"]')
	}
	clciksOnMonthDropDownInDayFrequency() {
		this.clickOnDomElement('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
	}
	selectsFebrauaryFromTheDropDownOnDayCalendar() {
		this.clickOnDomElement('ul[aria-labelledby="dropdown"] li:nth-child(2)')
	}

	selectsDay() {
		this.clickOnDomElement('[class="react-datepicker__day react-datepicker__day--022"]')
	}
	selectWeekFrequencyInTheDropDown() {
		this.clickOnDomElementWithIndex('[role="listbox"] li',1)
	}
	clicksOnYearDropDownInWeekFrequency() {
		this.clickOnDomElement('div[class*="react-datepicker__header"] div div:nth-child(2) div[id="dropdown"]')
	}
	clciksOnMonthDropDownInWeekFrequency() {
		this.clickOnDomElement('div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
	}
	selectsFebrauaryFromTheDropDownOnWeekCalendar() {
		this.clickOnDomElement('ul[aria-labelledby="dropdown"] li:nth-child(2)')
	}
	selectWeek(){
		this.clickOnDomElement('[class="react-datepicker__day react-datepicker__day--022"]')
	}
	selectMonthFrequencyInTheDropDown() {
		this.clickOnDomElementWithIndex('[role="listbox"] li',2)
	}
	selectQuarterFrequencyInTheDropDown() {
		this.clickOnDomElementWithIndex('[role="listbox"] li',3)
	}
	clicksOnYearDropDownOnQuarterCalendarSelection() {
		this.clickOnDomElement('[class*="react-datepicker__header"] div[role="combobox"]')
	}
	selectsQuarter(){
		this.clickOnDomElementWithIndex('[class*="react-datepicker__quarter-text react-datepicker__quarte"]',2)
	}
	selectYearFrequencyInTheDropDown() {
		this.clickOnDomElementWithIndex('[role="listbox"] li',4)
	}
	clicksOnPreviousButtonOnTheYear() {
		this.clickOnDomElement('[aria-label="Previous Year"]')
	}
	clicksOnNextButtonOnYear() {
		this.clickOnDomElement('[aria-label="Next Year"]')
	}
	selectsYear() {
		this.clickOnDomElement('[class="react-datepicker__year"] div div:nth-child(7)')
	}
	clicksOnCalendar() {
		this.clickOnDomElement('button[data-testid="CalendarDropDown"]')
	}
	clicksOnYearDropDownOnMonthCalendarSelection() {
		this.clickOnDomElement('[class*="react-datepicker__header"] div[role="combobox"]')
	}
	selectPreviousYearOnDatePicker() {
		this.clickOnDomElement('ul[aria-labelledby="dropdown"] li:nth-child(2)')
	}
	selectsJulyMonthInPreviousYearOnMonthCalendar() {
		this.clickOnDomElement('[aria-label="Choose July 2023"]')
	}
	clickOnAccordianOnSalesAndLaborModule() {
		this.clickOnDomElement('[title="Sales & Labor"]')
	}
	clickOnAccordinaOnMembershipModule() {
		this.clickOnDomElement('[title="Membership"]')
	}
	
	clickOnAccordianOnAcountingModule() {
		this.clickOnDomElement('[title="Financials"]')
	}
	scrollingToSeeAccordianOnMembershipModule() {
		this.scrollIntoElementWithOutIndex('[title="Membership"]')
		this.wait(5000)
	}
	scrollingToSeeAccordianOnAccountingModule() {
		this.scrollIntoElementWithOutIndex('[title="Financials"]')
		this.wait(5000)
	}
	clicksOnApplyButton() {
		this.clickOnDomElement('div[class*="justify-end"] button:nth-child(2) span')
	}
	scrollingToSeeThreeDotMenu() {
		// this.scrollIntoElementWithOutIndex('[class="w-full pr-2 el:pr-4 el:pl-4  flex  items-center justify-between"] button')
		this.scrollIntoElement('[class*="flex items-center"] button:nth-child(2)',0)
	}
	clicksOnThreeDotVerticalMenu() {
		// this.clickOnDomElement('[class="w-full pr-2 el:pr-4 el:pl-4  flex  items-center justify-between"] button')
		this.clickOnDomElementWithIndex('[class*="flex items-center"] button:nth-child(2)',0)
	}
	clicksOnExportOption() {
		this.clickOnDomElement('[class*="flex flex-col"] button:nth-child(1)')
	}
	clickingOnMarkAsDefaultOPtion() {
		this.clickOnDomElement('[class*="flex flex-col"] button:nth-child(1)')
	}
}