export class ProductPageObjects {
    static ADD_PRODUCT_SUCCESS_MESSAGE_TXT = "Product successfully added to your shopping cart\n";

    static QUANTITY_FIELD = '#quantity_wanted';
    static SIZE_DROPDOWN = '#group_1';
    static ADD_TO_CART_BUTTON = "//*[@id = 'add_to_cart']//span[text()='Add to cart']";
    static ADD_PRODUCT_SUCCESS_MESSAGE = "//h2[text()[normalize-space()='Product successfully added to your shopping cart']]";
    static CONTINUE_SHOPPING_BUTTON = "//span[text()[normalize-space()='Continue shopping']]";
    static PROCEED_TO_CHECKOUT_BUTTON = "//a[@title= 'Proceed to checkout']";
    static PRODUCT_PRICE = "#our_price_display";
}