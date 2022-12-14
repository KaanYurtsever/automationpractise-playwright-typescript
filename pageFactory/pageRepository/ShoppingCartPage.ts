import {BrowserContext, expect, Page} from "@playwright/test";
import {WebActions} from "../../lib/WebActions";
import {ShoppingCartPageObjects} from "../objectRepository/ShoppingCartPageObjects";
import BasePage from "./BasePage";

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

    async increaseProductQuantityByOne(productName: string): Promise<void> {
        await webActions.clickElement("//td//a[contains(text(), '" + productName + "')]//..//..//..//i[@class = 'icon-plus']");
        await this.page.waitForSelector("//td//a[contains(text(), '" + productName + "')]//..//..//..//input[@size = '2']");
        await this.page.waitForTimeout(9000);
    }

    async checkEachProductTotalPrice(productName: string, productPrice: string): Promise<void> {
        const productTotalPrice = await this.page.locator("//td//a[contains(text(), '" + productName + "')]//..//..//..//span[contains(@id, 'total_product_price')]").textContent();
        const sumProductPrice = productPrice.trim().replace(/\$/g, '');
        const quantity = await this.page.locator("//td//a[contains(text(), '" + productName + "')]//..//..//..//input[contains(@class, 'cart_quantity')]").inputValue();
        console.log("quantity: " + quantity)
        const newTotalPrice = Number(Number(Number(sumProductPrice).toPrecision(4))*Number(Number(quantity)));
        const newTotalPriceWithDollar = "$" + newTotalPrice;
        console.log("productTotalPrice: "+productTotalPrice +"," + "newTotalPrice: "+newTotalPriceWithDollar)
        await expect(productTotalPrice?.trim()).toBe(newTotalPriceWithDollar);
    }

    async checkTotalPrice(): Promise<void> {
        await this.page.waitForTimeout(9000);
        const totalProduct = await this.page.locator(ShoppingCartPageObjects.TOTAL_PRODUCT_PRICE).textContent();
        const totalProductPrice = totalProduct?.trim().replace(/\$/g, '');
        const totalShipping = await this.page.locator(ShoppingCartPageObjects.TOTAL_SHIPPING_PRICE).textContent();
        const totalShippingPrice = totalShipping?.trim().replace(/\$/g, '');
        const totalTax = await this.page.locator(ShoppingCartPageObjects.TOTAL_TAX_PRICE).textContent();
        const totalTaxPrice = totalTax?.trim().replace(/\$/g, '');
        const total = Number(Number(Number(totalProductPrice).toPrecision(4)) + Number(Number(totalShippingPrice).toPrecision(4)) + Number(Number(totalTaxPrice).toPrecision(4))).toFixed(2);
        const totalWithDollar = "$" + total;
        console.log("TOTAL: " + totalWithDollar);
        await this.page.hover(ShoppingCartPageObjects.TOTAL_PRICE);
        const expectedTotal = await this.page.locator(ShoppingCartPageObjects.TOTAL_PRICE).textContent();
        const expectedTotalPrice = expectedTotal?.trim();
        await expect(totalWithDollar).toBe(expectedTotalPrice);
    }
}