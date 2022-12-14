# Global Automation Project
## Description of the Test
Test website is: http://automationpractice.com/index.php \
Test steps; 
- Add to the cart a Faded Short Sleeve T Shirt, size medium, colour blue (this product is called Faded Short Sleeve T-shirts and its price is $16.51)
- Add to the cart an Evening Dress, size small, colour beige (this product is called Printed Dress and its price is $50.99)
- Add to the cart a Printed Summer Dress, size medium, colour orange (this product is called Printed Summer Dress and its price is $28.98 with 5% discount)
- Go to Checkout
- Remove the Evening Dress from the cart
- Add a second Faded Short Sleeve T Shirt of the same size and colour
- Assert the total for each line in the cart
- Assert the cart total is $64.00 (It is not $65.53, because one of the product has 5% discount)
## Video of the test

[video.webm](https://user-images.githubusercontent.com/89412371/199796496-254326bd-4b1e-48ac-8e0e-8d1846306174.webm)

## How to run the scenario?
You can run your tests with "npm test" on terminal, and you can choose the test you want to run on playwright.config file. Also, there are other scripts to run tests on package.json file.
## How to run the scenario with GitHub Action?
There is also the GitHub action file. You can find it at workflows. With this CI/CD, you can run your test, which is defined on github.config file.
## How to see the report of the test?
- Write on terminal 'allure serve' to see the report.
- Note: If you are using Windows, you should download allure from: 'https://docs.qameta.io/allure/', and go to environment variables then add to path.

Also, you can see reports on; playwright-report, test-results.json. 
