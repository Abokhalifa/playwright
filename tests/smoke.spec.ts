import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { LoginForm } from '../pages/LoginForm';
import { HomePage } from '../pages/HomePage';
import { SignupForm } from '../pages/SignupForm';

var landingPage:LandingPage;
test.beforeEach(async({page})=>{
    landingPage = new LandingPage(page);
    await landingPage.launchLandingPage();
    })

test.describe.only('Smoke test is running.....',()=>{
    test('Verify the welcome messaage.', async ({ page }) => {
        const loginForm:LoginForm = await landingPage.clickLoginLink();
        await loginForm.fillinLoginForm();
        const homePage:HomePage = await loginForm.clickLoginButton();
        await expect(homePage.logoutLink).toBeVisible();
        const welcomeMessage: string = await homePage.getWelcomeMessageText();
        expect(welcomeMessage).toContain('welcome'); //Case-sensitive
        console.log(welcomeMessage);   
  });
    test.only('Sign up.', async ({page})=>{
         const signupForm:SignupForm = await landingPage.clickSignupLink();
         await signupForm.fillinSignupForm();
         //Listen for the dialog and accept it
         page.on('dialog', async dialog => {
             console.log(`Dialog message: ${dialog.message()}`);
             expect(dialog.type()).toBe('alert');
             expect(dialog.message()).toContain('Sign up successful.');
         });

         //Triger the action that causes the dialog to appear.
         landingPage = await signupForm.clickSignupButton();

    });
});

test.describe('Landing page links',()=>{
    test('Click the Home link.',async({page})=>{
        const landingPage = new LandingPage(page);
        await landingPage.launchLandingPage();
        await landingPage.clickHomeLink();

    });
});



