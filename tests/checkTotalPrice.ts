import test from "../lib/BaseTest";
import {testConfig} from "../testConfig";

test.describe("Global Automation", () => {

    test("Check total price @reg",  async ({basePage, searchPage, productPage, shoppingCartPage}) => {

        let firstProductName: string;
        let secondProductName: string;
        let thirdProductName: string;
        let firstProductPrice: string;
        let secondProductPrice: string;
        let thirdProductPrice: string;

        await test.step("User should go to URL", async () => {
            await basePage.navigateToURL();
            await basePage.checkUrlCorrect();
        })

        await test.step("User should search first product, choose details and add the product to cart ", async () =>{
            await basePage.searchProduct(testConfig.productOne);
            await searchPage.checkSearchPageIsOpen();
            firstProductName = await searchPage.getProductName();
            console.log("First product name: " + firstProductName);
            await searchPage.goToProductDetail();
            firstProductPrice = await productPage.getProductPrice();
            console.log("First product price: " + firstProductPrice);
            await productPage.changeQuantity("1");
            await productPage.changeSize(testConfig.mediumSize);
            await productPage.changeColor(testConfig.blueColor);
            await productPage.addToCart();
            await productPage.checkProductIsAdded();
            await productPage.continueShopping();
            await basePage.goToHomePage();
        })

        await test.step("User should search second product, choose details and add the product  to cart", async () =>{
            await basePage.searchProduct(testConfig.productTwo);
            await searchPage.checkSearchPageIsOpen();
            secondProductName = await searchPage.getProductName();
            console.log("Second product name: " + secondProductName);
            await searchPage.goToProductDetail();
            secondProductPrice = await productPage.getProductPrice();
            console.log("Second product price: " + secondProductPrice);
            await productPage.changeQuantity("1");
            await productPage.changeSize(testConfig.smallSize);
            await productPage.changeColor(testConfig.beigeColor);
            await productPage.addToCart();
            await productPage.checkProductIsAdded();
            await productPage.continueShopping();
            await basePage.goToHomePage();
        })

        await test.step("User should search third product, choose details and add the product to cart", async () =>{
            await basePage.searchProduct(testConfig.productThree);
            await searchPage.checkSearchPageIsOpen();
            thirdProductName = await searchPage.getProductName();
            console.log("Third product name: " + thirdProductName);
            await searchPage.goToProductDetail();
            thirdProductPrice = await productPage.getProductPrice();
            console.log("Third product price: " + thirdProductPrice);
            await productPage.changeQuantity("1");
            await productPage.changeSize(testConfig.mediumSize);
            await productPage.changeColor(testConfig.orangeColor);
            await productPage.addToCart();
            await productPage.checkProductIsAdded();
        })

        await test.step("User should go to the shopping-cart page and make some changes", async () =>{
            await productPage.proceedToCheckout();
            await shoppingCartPage.checkShoppingCartPageIsOpen();
            await shoppingCartPage.removeProductFromCart(secondProductName);
            await shoppingCartPage.increaseProductQuantityByOne(firstProductName);
        })

        await test.step("User should check total prices", async () =>{
            await shoppingCartPage.checkEachProductTotalPrice(thirdProductName, thirdProductPrice);
            await shoppingCartPage.checkEachProductTotalPrice(firstProductName, firstProductPrice);
            await shoppingCartPage.checkTotalPrice();
        })
    });
})
