import cypress = require('cypress');
import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitAmazon(){
        this.accessUrl('https://amazon.in');
    }
}

export class RobotEyes extends BaseEyes{
    verifyingTheCart(){
        this.seesTextWithClass("a-dropdown-prompt","1")
    }
    checkingTheDeliveryStatus(){
        this.seesTextWithClass("milestone-primaryMessage","Delivered")
    }
    checkingTheDeliveryDate(){
        this.seesTextWithId("primaryStatus","\n    Delivered 13 May\n")
    }
    assertingAddress(){
        this.seesTextWithClass("a-alert-heading","You have submitted an address that is already in your address book")
        
    }
    assertingPayment(){
        this.seesDomVisibleWithCustomMatcher("class","'a-button a-button-base apx-secure-registration-content-trigger-js'")
    }
    }  

export class RobotHands extends BaseHands{

    todaysDeals(){
        this.clickOnText("Today's Deals")
    }
    clickingOnThirdItem(){
        this.clickOnChildDomElementWithIndex('[class="DealGridItem-module__dealItem_2X_WLYkJ3-dM0LtXI9THcu DealGridItem-module__withBorders_2jNNLI6U1oDls7Ten3Dttl DealGridItem-module__withoutActionButton_2OI8DAanWNRCagYDL2iIqN"]',2)
    }
    selectingAnItemToAddCart(){
        this.clickOnChildDom("octopus-dlp-asin-stream","[class='a-list-normal a-spacing-none no-margin-right overflow-hidden octopus-response-li-width']",0)
    }
    addingAnItemToCart(){
        this.clickOnId("add-to-cart-button")
        this.wait(5000)
        this.clickOnAttribute("aria-labelledby='attach-sidesheet-view-cart-button-announce'") //Include the line if the selected item is T.V
        //this.clickOnAttribute("aria-labelledby='attachSiNoCoverage-announce'")//Include the line if the selected item is BlueTooth HeadPhones
        //this.clickOnText("Go to Cart")
    }
    searchingForMobiles(){
        this.typeTextonId("twotabsearchtextbox","Mobiles")
        this.clickOnId("nav-search-submit-button")
    }
    
    scrolling(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        this.scrollIntoElement("a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']",21)
    }
    gettingTheLastMobile(){
        this.clickOnChildDomElementWithIndex("a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']",24)
    }
    navigatingToMobiles(){
        this.clickOnAttribute("data-csa-c-content-id='nav_cs_mobiles'")
    }
    navigatingBack(){
        this.navigatingToBack()
    }
    navigatingToLoginPage(){
        this.navigatingToSigningPage("nav-link-accountList","div[id='nav-flyout-ya-signin'] span[class='nav-action-inner']")
    }
    LogIN(){
        this.amazonLogin("ap_email","continue","ap_password","signInSubmit")
    }
    navigatingToOrders(){
        this.clickOnId("nav-orders")
    }
    detailsOfFirstOrder(){
        this.clickOnId("a-autoid-2-announce")
    }
    selectingpastOneYearOrder(){
        this.selectFilter('[class="a-button-text a-declarative"]',"time-filter_3")
    }
    yourAccount(){
        this.navigatingToYourAccount("nav-link-accountList","a[href='/gp/css/homepage.html?ref_=nav_AccountFlyout_ya']")
    }
    selectingTheAddressOption(){
        this.clickOnAttribute('data-card-identifier="AddressesAnd1Click"')
        this.clickOnId("ya-myab-plus-address-icon")
        //this.clickOnCss(".a-box-inner a-padding-extra-large")
    }
    
    addingNewAddress(){
        this.typeTextonId("address-ui-widgets-enterAddressFullName",Cypress.env("fullName"))
        this.typeTextonId("address-ui-widgets-enterAddressPhoneNumber",Cypress.env("mobileNum"))
        this.typeTextonId("address-ui-widgets-enterAddressPostalCode",Cypress.env("pinCode"))
        this.typeTextonId("address-ui-widgets-enterAddressLine1",Cypress.env("flat"))
        this.typeTextonId("address-ui-widgets-enterAddressLine2",Cypress.env("area"))
        this.typeTextonId("address-ui-widgets-landmark",Cypress.env("landMark"))
        this.typeTextonId("address-ui-widgets-enterAddressCity",Cypress.env("town"))
        this.clickOnCss("span[id='address-ui-widgets-enterAddressStateOrRegion'] span[role='button']")
        this.clickOnId("address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId_31")
        this.clickOnCss("span[id='address-ui-widgets-addr-details-address-type-and-business-hours'] span[role='button']")
        this.clickOnId("dropdown1_1")
        this.clickOnCss("input[aria-labelledby='address-ui-widgets-form-submit-button-announce']")


    }


    selectingThePaymentOption(){
        this.clickOnAttribute("data-card-identifier='PaymentOptions'")
    }
    addingNewPaymentMethod(){
        this.scrollIntoElementWithOutIndex("[class='a-button a-button-base apx-secure-registration-content-trigger-js']")

    }

    waitTIme(){
        this.wait(5000)
    }



}