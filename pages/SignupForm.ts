import { Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import generalPurpose from "../utils/generalPurpose";


export class SignupForm{
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameTextBox = page.locator('#sign-username');
        this.passwordTextBox = page.locator('#sign-password');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async fillinLoginForm(){
        await console.log(process.env.USERNAME);
        await console.log(process.env.PASSWORD);
        await this.usernameTextBox.fill(process.env.USER_NAME  || "Abokhalifa");
        await this.passwordTextBox.fill(process.env.PASSWORD || "test123");
    }

    async clickLoginButton():Promise<HomePage>{
        await Promise.all([
            this.loginButton.click()
        ]);
        return new HomePage(this.page);   
    }

    




    

}