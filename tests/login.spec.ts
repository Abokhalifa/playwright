import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { LoginForm } from '../pages/LoginForm';
import { HomePage } from '../pages/HomePage';
import { SignupForm } from '../pages/SignupForm';
import { generateRandomText } from '../utils/GeneralPurpose';

var landingPage:LandingPage;
var homePage:HomePage;
var username: string;
var password: string;

//Sign up a new user before each test.
test.beforeEach(async({page})=>{
    username = process.env.USER_NAME+"_"+generateRandomText(8) || 'TestUser';
    password = process.env.PASSWORD || 'Test';
    landingPage = new LandingPage(page);
    await landingPage.launchLandingPage();
    const signupForm:SignupForm = await landingPage.clickSignupLink();
    landingPage = await signupForm.signupNewUser(username, password);
})

test.describe.only('Login tests are executing....',()=>{
    test('Verify successful login.', async ({ page }) => {
        const loginForm:LoginForm = await landingPage.clickLoginLink();
        await loginForm.fillinLoginForm(username, password);
        const homePage:HomePage = await loginForm.clickLoginButton();
        await expect(homePage.logoutLink).toBeVisible();
        const welcomeMessage: string = await homePage.getWelcomeMessageText();
        expect(welcomeMessage).toBe('Welcome '+username); //Case-sensitive
        console.log(welcomeMessage);   
    });

    test('Verify unsuccessful login with invalid password.', async ({ page }) => {
        const loginForm:LoginForm = await landingPage.clickLoginLink();
        await loginForm.fillinLoginForm(username, 'InvalidPassword');

        //Listen for the dialog and accept it.
        page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toContain('Wrong password.');
        });

        await loginForm.clickLoginButton(); //Trigger the alert dialog by clicking login button.
    });

     test.only('Verify unsuccessful login with invalid username.', async ({ page }) => {
        const loginForm:LoginForm = await landingPage.clickLoginLink();
        await loginForm.fillinLoginForm(username+"_Not_Existing", password);

        //Listen for the dialog and accept it.
        page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toContain('User does not exist.');
        });

        await loginForm.clickLoginButton(); //Trigger the alert dialog by clicking login button.
    }); 
});

