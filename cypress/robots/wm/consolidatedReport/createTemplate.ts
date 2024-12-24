import { BaseDependencies,BaseEyes,BaseHands } from "../../BaseRobot";

export class dependencies extends BaseDependencies {

}export class Dependencies extends BaseDependencies {
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
    seesCreateComparisonButton() {
		// this.seesDomVisible('[class*="flex items-center"] button:nth-child(2)')
        this.seesDomElementWithIndex('[class*="flex items-center"] button:nth-child(2)',1)
	}
	verifyingCreateCompariosnButtonText(text:string) {
		this.seesDomContainText('[class*="flex items-center"] button:nth-child(2) span',text)
	}
    
    seesVerticalThreeDotMenuVisible() {
        this.seesDomElementWithIndex('[class*="flex items-center"] button:nth-child(2)',0)
		// this.seesDomVisible('[class="w-full pr-2 el:pr-4 el:pl-4  flex  items-center justify-between"] button')
	}
    seesEditTemplateOptionVisible() {
		this.seesDomVisible('[class*="flex flex-col"] button:nth-child(3)')
	}
    seesCreateComparisonHeader() {
        this.wait(5000)
        this.seesDomVisible('div[class="flex"] h6')
    }
    seesEditComaprisonHeader() {
        this.wait(5000)
        this.seesDomVisible('div[class="flex"] h6')
    }
    verifyingTheHeaderOfCreateComparisonPopUP() {
        this.seesDomContainText('div[class="flex"] h6','Create Comparison')
    }
    verifyingTheHeaderOfEditComparisonPopUp() {
        this.seesDomContainText('div[class="flex"] h6','Edit Comparison')
    }
    seesNextButtonIsDisabled() {
        this.seesDomDisabled('div[class="flex gap-3"] button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
    }
    seesInputFieldHeader() {
        this.seesDomVisible('label[for="name"]')
    }
    verifyingTheHeaderOfInputField() {
        this.seesDomContainText('label[for="name"] span','Template Name *')
    }
    seesTemplateNameInputFiled() {
        this.seesDomVisible('[placeholder="Template Name"]')
    }
    verifyingPlaceholderForNameInputFiled() {
        this.seesDomContainText('[placeholder="Template Name"]','Template Name')
    }
    seesChooseComparisonHeader() {
        this.seesDomVisible('form div:nth-child(1) label:nth-child(3)')
    }
    VerifyingTheTextOfChooseComparisonHeader() {
        this.seesDomContainText('form div:nth-child(1) label:nth-child(3)','Choose Comparison *')
    }
    seesLocationRadioButtonIsVisible() {
        this.seesDomVisible('[role="radiogroup"] label:nth-child(1)')
    }
    seesSitegroupRadioButtonIsVisible() {
        this.seesDomVisible('[role="radiogroup"] label:nth-child(2)')
    }
    seesNextButtonIsVisbile() {
        this.seesDomVisible('div[class="flex gap-3"] button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
    }
    seesCloseIconIsVisible() {
        this.seesDomVisible('[data-testid="CloseIcon"]')
    }
    seesNextButtonIsEnabled() {
        this.seesDomEnabled('div[class="flex gap-3"] button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
    }
    seesCreateButtonIsDisabled() {
        this.seesDomDisabled('div[class="flex gap-3"] button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
    }
    seesCreateButtonISEnabeld() {
        this.seesDomEnabled('div[class="flex gap-3"] button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
    }
    seesSaveButtonIsDisabled() {
        this.seesDomDisabled('div[class="flex gap-3"] button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
    }
    seesSaveButtonISEnabeld() {
        this.seesDomEnabled('div[class="flex gap-3"] button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
    }
    seesHeaderLocations() {
        this.wait(5000)
        this.seesDomVisible('div[class="flex"] h6')
    }
    verifyingTheHeaderOfLocations() {
        this.seesDomContainText('div[class="flex"] h6','Select Locations')
    }
    seesHeaderOfSiteGroups() {
        this.wait(5000)
        this.seesDomVisible('div[class="flex"] h6')
    }
    verifyingTheHeaderOfSiteGroups() {
        this.seesDomContainText('div[class="flex"] h6','Select Site Groups')
    }
    seesSearchButtonIsVisible() {
        this.seesDomVisible('div[class*="search-box"]')
    }
    seesAllSelectionCheckBox() {
        this.seesDomElementWithIndex('[class*="MuiButtonBase-root MuiCheckbox-root"]',0)
    }
    
    seesLocationCheckBox() {
        this.seesDomElementWithIndex('[class*="MuiButtonBase-root MuiCheckbox-root"]',1)
    }
    seesCancelButtonIsVisible() {
        this.seesDomElementWithIndex('div[class="flex gap-3"] button',1)
    }
    seesBackButtonIsVisible() {
        this.seesDomVisible('div[class*="justify-between"] div button p')
    }
    seesHeaderForMetrics() {
        this.seesDomVisible('div[class="flex"] h6')
    }
    VerifyingHeaderForMetrics() {
        this.seesDomContainText('div[class="flex"] h6','Select KPI')
    }
    seesSalesAndLaborModule() {
        this.wait(15000)
        this.seesDomElementWithIndex('[title="Sales & Labor"]',1)
    }
    seesMembershipModule() {
        this.seesDomElementWithIndex('[title="Membership"]',1)
    }
    seesAccountingModule() {
        this.seesDomElementWithIndex('[title="Financials"]',1)
    }
    seesEditPopUp() {
        this.seesDomElementWithIndex('body > div:nth-child(6) > div:nth-child(3)',0)
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
        this.wait(5000)
	}
    clicksOnCreateComparisonButton() {
        // this.clickOnDomElement('[class="flex gap-3 items-center"] button:nth-child(2)')
        this.clickOnDomElementWithIndex('[class*="flex items-center"] button:nth-child(2)',1)
    }
    EntersTextOnInputField(text:string) {
        this.typeTextOnDomElement('[placeholder="Template Name"]',text)
    }
    clicksOnLocationRadioButton() {
        this.clickOnDomElement('[role="radiogroup"] label:nth-child(1)')
    } 
    clicksOnSiteGroupRadioButton() {
        this.clickOnDomElement('[role="radiogroup"] label:nth-child(2)')
    }
    clicksOnNextButton() {
        this.clickOnDomElement('div[class="flex gap-3"] button[class*="MuiButtonBase-root MuiButton-root MuiButton-contained"]')
    }
    clicksOnSelectAllCheckBox() {
        this.clickOnDomElementWithIndex('[class*="MuiButtonBase-root MuiCheckbox-root"]',0)
    }
    clicksOnBackButton() {
        this.clickOnDomElement('div[class*="justify-between"] div button p')
    }
    clicksOnSalesAndLaborModule() {
        this.clickOnDomElementWithIndex('[title="Sales & Labor"]',1)
    }
    scrollingToSeeCashVsCardMetric() {
        this.scrollIntoElement('[title="Cash v Card (%)"]',1)
    }
    clicksOnCashVsCardMetricCheckbox() {
        this.clickOnDomElement('tbody tr:nth-child(8) td:nth-child(1) span:nth-child(1) div:nth-child(1) span:nth-child(1) input:nth-child(1)')
    }
    clicksOnMembershipModule() {
        this.clickOnDomElementWithIndex('[title="Membership"]',1)
    }
    scrollingToSeeGrowthRateMetric() {
        this.scrollIntoElement('[title="Account Growth Rate (%)"]',1)
    }
    clicksOnGrowthRateMetricCheckBox() {
        this.clickOnDomElement('tbody tr:nth-child(8) td:nth-child(1) span:nth-child(1) div:nth-child(1) span:nth-child(1) input:nth-child(1)')
    }

    clicksOnAccountingModule() {
        this.clickOnDomElementWithIndex('[title="Financials"]',1)
    }
    scrollToSeeNOIMetric() {
        this.scrollIntoElement('[title="NOI ($)"]',1)
    }
    clicksOnNOIMetricCheckBox() {
        this.clickOnDomElement('tbody tr:nth-child(8) td:nth-child(1) span:nth-child(1) div:nth-child(1) span:nth-child(1) input:nth-child(1)')
    }
    clicksOnCancelButton() {
        this.clickOnDomElementWithIndex('div[class="flex gap-3"] button',1)
    }
    clicksOnThreeDotVerticalMenu() {
		this.clickOnDomElementWithIndex('[class*="flex items-center"] button:nth-child(2)',0)
	}
    clicksOnEditTemplateButton() {
        this.clickOnDomElement('[class*="flex flex-col"] button:nth-child(3)')
    }
    clikcsOnSecondLocationCheckBox() {
        this.clickOnDomElement('tbody tr:nth-child(1) td:nth-child(1) span:nth-child(1) div:nth-child(1) span:nth-child(1) input:nth-child(1)')
    }
    clikcsOnSiteGroupCheckBox() {
        this.clickOnDomElement('tbody tr:nth-child(1) td:nth-child(1) span:nth-child(1) div:nth-child(1) span:nth-child(1) input:nth-child(1)')
    }
    scrollingToSeeThreeeDotMenu() {
        this.scrollIntoElement('[class*="flex items-center"] button:nth-child(2)',0)
    }
} 