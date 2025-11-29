import test, { expect } from "@playwright/test";
import { LandingPage } from "../pages/LandingPage";
import { SignupForm } from "../pages/SignupForm";
import { generateRandomText } from "../utils/GeneralPurpose";
import { HomePage } from "../pages/HomePage";
import { LoginForm } from "../pages/LoginForm";

var landingPage:LandingPage;
const username = process.env.USER_NAME+generateRandomText(8) || 'TestUser';
const password = process.env.PASSWORD || 'Test';


 test.beforeEach(async({page})=>{
        landingPage = new LandingPage(page);
        await landingPage.launchLandingPage();
        });

test.describe("Login using a new user signed up from param tests",()=>{    
    test(`Sign up`, async ({ page }) => {
            const signupForm:SignupForm = await landingPage.clickSignupLink();
            await signupForm.fillinSignupForm(username, password);
            //Listen for the dialog and accept it
            page.on('dialog', async dialog => {
                console.log(`Dialog message: ${dialog.message()}`);
                expect(dialog.type()).toBe('alert');
                expect(dialog.message()).toContain('Sign up successful.');
                });
            //Triger the action that causes the dialog to appear.
            landingPage = await signupForm.clickSignupButton();
            // Login
            const loginForm:LoginForm = await landingPage.clickLoginLink();
            await loginForm.fillinLoginForm(username, password);
            const homePage:HomePage = await loginForm.clickLoginButton();
            const welcomeMessage: string = await homePage.getWelcomeMessageText();
            expect(welcomeMessage).toContain('welcome');
            console.log(welcomeMessage);
            });

           });
        });