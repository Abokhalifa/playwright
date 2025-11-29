import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { HomePage } from '../pages/HomePage';
import { SignupForm } from '../pages/SignupForm';

var landingPage:LandingPage;
const randomNumber = `${Math.floor(Math.random() * 10000)}`;

[
  { username: 'Alice', password: 'Hello, Alice!' },
  { username: 'Bob', password: 'Hello, Bob!' },
  { username: 'Charlie', password: 'Hello, Charlie!' },
].forEach(({ username, password }) => {
    test.describe( () => {
        test.beforeEach(async({page})=>{
        landingPage = new LandingPage(page);
        await landingPage.launchLandingPage();
        });
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
        test(`Sign up ${username}`, async ({ page }) => {
                const signupForm:SignupForm = await landingPage.clickSignupLink();
                await signupForm.fillinSignupForm(username+randomNumber, password);
                //Listen for the dialog and accept it
                page.on('dialog', async dialog => {
                    console.log(`Dialog message: ${dialog.message()}`);
                    expect(dialog.type()).toBe('alert');
                    expect(dialog.message()).toContain('Sign up successful.');
                });

        //Triger the action that causes the dialog to appear.
        const landingPage:LandingPage = await signupForm.clickSignupButton();
    });
});
});