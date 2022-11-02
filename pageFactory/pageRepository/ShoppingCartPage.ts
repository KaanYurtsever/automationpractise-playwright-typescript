import {BrowserContext, expect, Page} from "@playwright/test";
import {WebActions} from "../../lib/WebActions";
import {ShoppingCartPageObjects} from "../objectRepository/ShoppingCartPageObjects";
import BasePage from "./BasePage";
import {SearchPageObjects} from "../objectRepository/SearchPageObjects";

let webActions: WebActions;

export default class ShoppingCartPage extends BasePage{

    constructor(page: Page, context: BrowserContext) {

        super(page, context);
        webActions = new WebActions(this.page);
    }

    async checkShoppingCartPageIsOpen(): Promise<void> {
        const pageTitleTxt = await this.page.title();
        console.log("Shopping-Cart Page Title: " + pageTitleTxt);
        await expect(pageTitleTxt).toContain(ShoppingCartPageObjects.SHOPPING_CART_PAGE_TITLE_TXT);
    }

    async removeProductFromCart(productName: string): Promise<void> {
        await webActions.clickElement("//td//a[contains(text(), '" + productName + "')]//..//..//..//i[@class = 'icon-trash']");
    }

    async increaseProductQuantity(productName: string): Promise<void> {
        await webActions.clickElement("//td//a[contains(text(), '" + productName + "')]//..//..//..//i[@class = 'icon-plus']");


    }

    async checkEachProductTotalPrice(productName: string, totalPrice: string): Promise<void> {
        const productTotalPrice = await this.page.locator("//td//a[contains(text(), '" + productName + "')]//..//..//..//span[contains(@id, 'total_product_price')]").textContent();
        await expect(productTotalPrice?.trim()).toBe(totalPrice);
    }

    async checkTotalPrice(): Promise<void> {
        //const productTotalPrice1 = await this.page.locator("//td//a[contains(text(), '" + productName + "')]//..//..//..//span[contains(@id, 'total_product_price')]").textContent();
        //const productPrice1 = productTotalPrice1?.trim().replace(/\$/g, '');
        //const productTotalPrice2 = await this.page.locator("//td//a[contains(text(), '" + productName2 + "')]//..//..//..//span[contains(@id, 'total_product_price')]").textContent();
        //const productPrice2 = productTotalPrice2?.trim().replace(/\$/g, '');
        await this.page.waitForTimeout(5000);
        const totalProduct = await this.page.locator(ShoppingCartPageObjects.TOTAL_PRODUCT_PRICE).textContent();
        const totalProductPrice = totalProduct?.trim().replace(/\$/g, '');
        const totalShipping = await this.page.locator(ShoppingCartPageObjects.TOTAL_SHIPPING_PRICE).textContent();
        const totalShippingPrice = totalShipping?.trim().replace(/\$/g, '');
        const totalTax = await this.page.locator(ShoppingCartPageObjects.TOTAL_TAX_PRICE).textContent();
        const totalTaxPrice = totalTax?.trim().replace(/\$/g, '');
        const total = Number(totalProductPrice) + Number(totalShippingPrice) + Number(totalTaxPrice);
        const totalWithDollar = "$" + total + ".00";
        console.log("TOTAL: " + totalWithDollar);
        await this.page.hover(ShoppingCartPageObjects.TOTAL_PRICE);
        const expectedTotal = await this.page.locator(ShoppingCartPageObjects.TOTAL_PRICE).textContent();
        const expectedTotalPrice = expectedTotal?.trim();
        await expect(totalWithDollar).toBe(expectedTotalPrice);
    }

}