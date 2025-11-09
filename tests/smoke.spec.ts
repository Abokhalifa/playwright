import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';

test.describe('Smoke test is running.....',()=>{
    test('test', async ({ page }) => {
        await page.goto('https://demoblaze.com/');
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').click();
        await page.locator('#loginusername').fill('pavanol');
        await page.locator('#loginpassword').fill('test@123');
        await page.getByRole('button', { name: 'Log in' }).click();
        await expect(page.locator('#logout2')).toBeVisible();
  
  });
});

test.describe.only('Landing page links',()=>{
    test.only('Click the Home link.',async({page})=>{
        const landingPage = new LandingPage(page);
        await landingPage.launchLandingPage();
        await landingPage.clickHomeLink();

    });
});



