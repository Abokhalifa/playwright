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


    const uniqueId= () => Date.now() - Math.floor(Math.random()*1000)
test.describe(`Sign up tests.....`,()=>{
    [
        {
            username: `user`+uniqueId(),
            password: 'pass1234'
        },
        {
            username: `testuser`+uniqueId(),
            password: 'mypassword'
        },
        {
            username: `alice`+uniqueId(),
            password: 'alice123'
        },
    ].forEach(({username, password})=>{
        test(`Sign up ${username}.`, async ({page})=>{
         const signupForm:SignupForm = await landingPage.clickSignupLink();
         await signupForm.fillinSignupForm(username,password);
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
});



