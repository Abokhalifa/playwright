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

test.describe('Smoke test is running.....',()=>{
    test('Verify the welcome messaage.', async ({ page }) => {
        const loginForm:LoginForm = await landingPage.clickLoginLink();
        await loginForm.fillinLoginForm();
        const homePage:HomePage = await loginForm.clickLoginButton();
        await expect(homePage.logoutLink).toBeVisible();
        const welcomeMessage: string = await homePage.getWelcomeMessageText();
        expect(welcomeMessage).toContain('Welcome'); //Case-sensitive
        console.log(welcomeMessage);   
        });
    test('Sign up.', async ({page})=>{
         const signupForm:SignupForm = await landingPage.clickSignupLink();
         await signupForm.fillinSignupForm();
         //Listen for the dialog and accept it
         page.on('dialog', dialog => {
             console.log(`Dialog message: ${dialog.message()}`);
             expect(dialog.type()).toBe('alert');
             expect(dialog.message()).toContain('Sign up successful.')
             
         });

         //Triger the action that causes the dialog to appear.
         landingPage = await signupForm.clickSignupButton();
         

        });   
    test('test', async ({ page }) => {
        await page.goto('https://demoblaze.com/');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').fill('Abokhalifa');
        await page.locator('#loginpassword').fill('test123');
        await page.getByRole('button', { name: 'Log in' }).click();
    });
    
});