import {BrowserContext, expect, Page} from "@playwright/test";
import {WebActions} from "../../lib/WebActions";
import {BasePageObjects} from "../objectRepository/BasePageObjects";
import {testConfig} from "../../testConfig";
import {SearchPageObjects} from "../objectRepository/SearchPageObjects";

let webActions: WebActions;

export default class BasePage {

    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {

        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(testConfig.prod);
    }

    async goToHomePage(): Promise<void> {
        await this.page.hover(BasePageObjects.YOUR_LOGO_IMG);
        await webActions.clickElement(BasePageObjects.YOUR_LOGO_IMG);
    }

    async checkUrlCorrect(): Promise<void> {
        const pageTitleTxt = await this.page.title();
        console.log("Base page title: " + pageTitleTxt);
        await expect(pageTitleTxt).toBe(BasePageObjects.HOME_PAGE_TITLE_TXT);
    }

    async searchProduct(productName: string): Promise<void> {
        await webActions.enterElementText(BasePageObjects.SEARCH_FIELD, productName);
        await webActions.clickElement(BasePageObjects.SEARCH_BUTTON);
    }
}