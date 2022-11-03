# Global Automation Project
## Description of the Test
Website of the test is: http://automationpractice.com/index.php \
Test steps; 
- Add to the cart a Faded Short Sleeve T Shirt, size medium, colour blue (this product called Faded Short Sleeve T-shirts and price is $16.51)
- Add to the cart an Evening Dress, size small, colour beige (this product called Printed Dress and price is $50.99)
- Add to the cart a Printed Summer Dress, size medium, colour orange (this product called Printed Summer Dress and price is $28.98 with %5 discount)
- Go to Checkout
- Remove the Evening Dress from the cart
- Add a second Faded Short Sleeve T Shirt of the same size and colour
- Assert the total for each line in the cart
- Assert the cart total is $64.00 (It is not $65.53, because one of the product has discount)
## Video of the test

[video.webm](https://user-images.githubusercontent.com/89412371/199796496-254326bd-4b1e-48ac-8e0e-8d1846306174.webm)

## How to run scenario?
You can run your tests with "npm test" on terminal, and you can choose which test you want on playwright.config file. Also, there are other scripts to run tests on package.json file.
## How to run scenario in Docker?
you can run your tests on docker with this commands;

- docker build -t playwright-docker .
- docker run -it playwright-docker:latest npm run test

Addition to run tests, There is github action file. You can find it at workflows. With this CI/CD, also you can run your test which is defined on github.config file.
## How to see the report of test?
- Write to terminal 'allure serve' to see the report.
- Note: If you use windows, you should download allure from there 'https://docs.qameta.io/allure/', and go to environment variables then add to path.

Also, you can see reports on; playwright report, test-results.json and report.zip file. 
