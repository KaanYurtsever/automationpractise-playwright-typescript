import {BrowserContext, expect, Page} from "@playwright/test";
import {WebActions} from "../../lib/WebActions";
import BasePage from "./BasePage";
import {SearchPageObjects} from "../objectRepository/SearchPageObjects";

let webActions: WebActions;

export default class SearchPage extends BasePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context)
        webActions = new WebActions(this.page);
    }

    async checkSearchPageIsOpen(): Promise<void> {
        const pageTitleTxt = await this.page.title();
        console.log("Search page title: " + pageTitleTxt);
        await expect(pageTitleTxt).toBe(SearchPageObjects.SEARCH_PAGE_TITLE_TXT);
    }

    async goToProductDetail(): Promise<void> {
        await this.page.waitForSelector(SearchPageObjects.LIST_BUTTON);
        await this.page.hover(SearchPageObjects.LIST_BUTTON);
        await webActions.clickElement(SearchPageObjects.LIST_BUTTON);
        await this.page.locator(SearchPageObjects.PRODUCT_DETAIL).first().click();
    }

    async getProductName(): Promise<any> {
        const result = await Promise.resolve(this.page.locator(SearchPageObjects.PRODUCT_NAME).first().textContent());
        return result?.trim();
    }





}