export class SearchPageObjects {
    static SEARCH_PAGE_TITLE_TXT = "Search - My Store";

    static PRODUCT_DETAIL = '//div[contains(@class,\'center-block\')]//a';
    static IFRAME = "//iframe[contains(@id, 'fancybox')]";  //We can use this object if we want to use another product detail
    static LIST_BUTTON = "a[title='List']";
    static PRODUCT_NAME = '.product-container .product-name';
}