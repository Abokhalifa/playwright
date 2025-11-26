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

    [
        {
            name: 'Alice',
            password: 'alice123'
        },
        {
            name: 'Bob',
            password: 'bob123' 
        }
    ].forEach(({name, password})=>{
        test(`Verify the welcome message for ${name}.`, async ({ page }) => {
            const loginForm:LoginForm = await landingPage.clickLoginLink();
            await loginForm.fillinLoginForm(name, password);
            const homePage:HomePage = await loginForm.clickLoginButton();
    ]
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
         const homePage:HomePage = await signupForm.clickSignupButton();

    });
});

test.describe('Landing page links',()=>{
    test('Click the Home link.',async({page})=>{
        const landingPage = new LandingPage(page);
        await landingPage.launchLandingPage();
        await landingPage.clickHomeLink();

    });
});



