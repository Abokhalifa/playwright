import { Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { LandingPage } from "./LandingPage";


export class LoginForm{
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;
    readonly closeButton: Locator;
    

    constructor(page:Page){
        this.page = page;
        this.usernameTextBox = page.locator('#loginusername');
        this.passwordTextBox = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.closeButton = page.getByLabel('Log in').getByText('Close');
    }

    async fillinLoginForm(username?:string,password?:string):Promise<void>{
        await this.usernameTextBox.fill(username || "Abokhalifa");
        await this.passwordTextBox.fill(password || "test123");
    }

    async clickLoginButton():Promise<HomePage>{
        await Promise.all([
            this.loginButton.click()
        ]);
        return new HomePage(this.page);   
    }

    async clickCloseButton():Promise<LandingPage>{
        await Promise.all([
            this.closeButton.click()
        ]);
        return new LandingPage(this.page);
    }  

}