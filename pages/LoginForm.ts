import { Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import generalPurpose from "../utils/generalPurpose";


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

    async fillinLoginForm():Promise<void>{
        await console.log(process.env.USERNAME);
        await console.log(process.env.PASSWORD);
        await this.usernameTextBox.fill(process.env.USER_NAME  || "Abokhalifa");
        await this.passwordTextBox.fill(process.env.PASSWORD || "test123");
    }

    async fillinLoginForm(username:string,password:string):Promise<void>{
        await this.usernameTextBox.fill(username  || "Abokhalifa");
        await this.passwordTextBox.fill(password || "test123");
    }

    async clickLoginButton():Promise<HomePage>{
        await Promise.all([
            this.loginButton.click()
        ]);
        return new HomePage(this.page);   
    }

    




    

}