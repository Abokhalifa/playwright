This is a web automation project built on the Playwright framework in JavaScript. 
To run the project:
* Install npm --> https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* Install playwright -->   
npm i -D @playwright/test
npx playwright install

* To create a full framework directly with folder structure, i.e., npm project with Playwright, run the following commands:
npm init playwright

* Run tests in a headless mode-->           npx playwright test
* Run tests in a headed mode-->             npx playwright test --headed
* Execute tests on a specific browser --> 	npx playwright test --project=chromium
* Execute tests of a specific spec file-->	npx playwright test smoke.spec.js
* where the "smoke.spec.js" is the target file that contains the tests.
* and all the test files are placed in a directory called "tests" in the root directory of the project.
* Debug tests.	"npx playwright test --debug
* or
* PWDEBUG=1 NODE_ENV=staging npx playwright test --project='chromium' --headed smoke.spec.ts"
* Common issues while running the tests in the CMD: 
  * To run tests from cmd, allow running them from cmd.	"* Run a powershell on windows and execute the following command as an admin:
  Set-ExecutionPolicy RemoteSigned
  For security purposes, it is recommended to revert back the execution policy to ""Restricted"" using the following command:
  Set-ExecutionPolicy Restricted"

* Specific test execution with all the options-->	npx playwright test --headed --project=firefox basic-navigation.spec.ts --debug
* Record a session and extract the selectors-->	npx playwright codegen https://playwright/dev
* This is like the record and play that Selenium IDE provides.
* Parametrized tests run only once on the screen, but give as many test reports as the records supplied to the test method.
"[
  { name: 'Alice', expected: 'Hello, Alice!' },
  { name: 'Bob', expected: 'Hello, Bob!' },
  { name: 'Charlie', expected: 'Hello, Charlie!' },
].forEach(({ name, expected }) => {
  test(`testing with ${name}`, async ({ page }) => {
    await page.goto(`https://example.com/greet?name=${name}`);
    await expect(page.getByRole('heading')).toHaveText(expected);
  });
});"

* Pass environment parameters to the tests in the command line--> 	"PWDEBUG=1 NODE_ENV=staging npx playwright test --project='chromium' --headed smoke.spec.ts"
