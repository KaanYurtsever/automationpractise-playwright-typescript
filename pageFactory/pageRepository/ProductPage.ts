import {BrowserContext, expect, Page} from "@playwright/test";
import {WebActions} from "../../lib/WebActions";
import {ProductPageObjects} from "../objectRepository/ProductPageObjects";
import BasePage from "./BasePage";

let webActions: WebActions;

export default class ProductPage extends BasePage{

    constructor(page: Page, context: BrowserContext) {

        super(page, context);
        webActions = new WebActions(this.page);
    }

    async getProductPrice(): Promise<any> {
        const result = await Promise.resolve(this.page.locator(ProductPageObjects.PRODUCT_PRICE).textContent());
        return result?.trim();
    }

    async changeQuantity(quantity: string): Promise<void> {
        await webActions.enterElementText(ProductPageObjects.QUANTITY_FIELD, quantity);
        //await this.page.frameLocator(SearchPageObjects.IFRAME).locator(SearchPageObjects.QUANTITY_FIELD).fill(quantity); //Another product detail frame
    }

    async changeSize(size: string): Promise<void> {
        await this.page.selectOption((ProductPageObjects.SIZE_DROPDOWN),{
            value: size
        });
    }

    async changeColor(color: string): Promise<void> {
        await webActions.clickElement("a[name='" + color + "']");
    }

    async addToCart(): Promise<void> {
        await webActions.clickElement(ProductPageObjects.ADD_TO_CART_BUTTON);
    }

    async checkProductIsAdded(): Promise<void> {
        await this.page.waitForSelector(ProductPageObjects.ADD_PRODUCT_SUCCESS_MESSAGE);
        const successfulMsg = await this.page.locator(ProductPageObjects.ADD_PRODUCT_SUCCESS_MESSAGE).textContent();
        console.log(successfulMsg?.trim());
        expect(successfulMsg).toContain(ProductPageObjects.ADD_PRODUCT_SUCCESS_MESSAGE_TXT);
    }

    async continueShopping(): Promise<void> {
        await webActions.clickElement(ProductPageObjects.CONTINUE_SHOPPING_BUTTON);
    }

    async proceedToCheckout(): Promise<void> {
        await webActions.clickElement(ProductPageObjects.PROCEED_TO_CHECKOUT_BUTTON);
    }
}