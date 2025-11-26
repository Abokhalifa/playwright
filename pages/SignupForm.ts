import { Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { generateRandomText } from "../utils/GeneralPurpose";


export class SignupForm{
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly signupButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameTextBox = page.locator('#sign-username');
        this.passwordTextBox = page.locator('#sign-password');
        this.signupButton = page.getByRole('button', { name: 'Sign up' });
    }

    async fillinSignupForm(){
        const randomUsername = generateRandomText(8);
        await console.log(randomUsername);
        await console.log(process.env.USERNAME);
        await console.log(process.env.PASSWORD);
        await this.usernameTextBox.fill(randomUsername  || "Abokhalifa");
        await this.passwordTextBox.fill(process.env.PASSWORD || "test123");
    }

    async clickSignupButton():Promise<HomePage>{
        await Promise.all([
            this.signupButton.click(),
            this.page.waitForEvent('dialog').then(dialog => dialog.accept()),
        ]);
        return new HomePage(this.page);   
    }

    




    

}