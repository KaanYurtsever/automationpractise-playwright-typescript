import { test as baseTest } from '@playwright/test';
import BasePage from "../pageFactory/pageRepository/BasePage";
import ShoppingCartPage from "../pageFactory/pageRepository/ShoppingCartPage";
import ProductPage from "../pageFactory/pageRepository/ProductPage";
import SearchPage from "../pageFactory/pageRepository/SearchPage";

//NOTE: With this class we can use fixtures everywhere in our project

const test = baseTest.extend<{

    basePage: BasePage;
    searchPage: SearchPage;
    shoppingCartPage: ShoppingCartPage;
    productPage: ProductPage;

}>({
    basePage: async ({ page , context}, use) => {
        await use(new BasePage(page, context));
    },
    searchPage: async ({ page, context }, use) => {
        await use(new SearchPage(page, context));
    },
    shoppingCartPage: async ({ page, context }, use) => {
        await use(new ShoppingCartPage(page, context));
    },
    productPage: async ({ page, context }, use) => {
        await use(new ProductPage(page, context));
    }
});

export default test;