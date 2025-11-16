import { Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";


export class LoginForm{
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameTextBox = page.locator('#loginusername');
        this.passwordTextBox = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async fillinLoginForm(){
        await this.usernameTextBox.fill("Pavanol");
        await this.passwordTextBox.fill("test@123");
    }

    async clickLoginButton():Promise<HomePage>{
        await Promise.all([
            this.loginButton.click()
        ]);
        return new HomePage(this.page);   
    }

    




    

}