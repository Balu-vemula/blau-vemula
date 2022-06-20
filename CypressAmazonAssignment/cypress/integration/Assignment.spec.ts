import { RobotEyes, RobotHands, Dependencies } from '/home/balav/cyp/cypress/robots/Assignment/robot';

context('Amazon Assignment', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()

    describe('Amazon Assignment', ()=>{

        it("navigate to Amazon", () => {
            dependencies.visitAmazon();
        });

        it("Without login", () => {
            robotHands.todaysDeals()
            robotHands.clickingOnThirdItem()
            robotHands.selectingAnItemToAddCart()
            robotHands.addingAnItemToCart()
            robotEyes.verifyingTheCart()
            robotHands.searchingForMobiles()
            robotHands.scrolling()
            robotHands.gettingTheLastMobile()
            robotHands.navigatingToMobiles()
            robotHands.navigatingBack()   
        })

        it("With login",() => {
            robotHands.navigatingToLoginPage()
            robotHands.LogIN()
            robotHands.navigatingToOrders()
            robotHands.detailsOfFirstOrder()
            robotEyes.checkingTheDeliveryDate()
            robotEyes.checkingTheDeliveryStatus()
            robotHands.navigatingToOrders()
            robotHands.selectingpastOneYearOrder()
            robotHands.yourAccount()
            robotHands.selectingTheAddressOption()
            robotHands.addingNewAddress()
            robotEyes.assertingAddress()
            robotHands.waitTIme()
            robotHands.yourAccount()
            robotHands.selectingThePaymentOption()
            robotHands.addingNewPaymentMethod()
            robotEyes.assertingPayment()
        })

    });

});