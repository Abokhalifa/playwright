import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { LoginForm } from '../pages/LoginForm';
import { HomePage } from '../pages/HomePage';

test.describe.only('Smoke test is running.....',()=>{
    test.only('test', async ({ page }) => {
        const landingPage = new LandingPage(page);
        await landingPage.launchLandingPage();
        const loginForm:LoginForm = await landingPage.clickLoginLink();
        await loginForm.fillinLoginForm();
        const homePage:HomePage = await loginForm.clickLoginButton();
        await expect(homePage.logoutLink).toBeVisible();
        const welcomeMessage: string = await homePage.getWelcomeMessageText();
        expect(welcomeMessage).toContain('Welcome');
        console.log(welcomeMessage);
        
  });
});

test.describe('Landing page links',()=>{
    test('Click the Home link.',async({page})=>{
        const landingPage = new LandingPage(page);
        await landingPage.launchLandingPage();
        await landingPage.clickHomeLink();

    });
});



