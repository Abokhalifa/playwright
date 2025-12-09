import { Locator, Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { generateRandomText } from "../utils/GeneralPurpose";
import { LandingPage } from "./LandingPage";


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

    async fillinSignupForm(username?:string,password?:string):Promise<void>{
        const randomUsername = generateRandomText(8);
        await console.log("-----------Generated Random Username-----------");
        await console.log(randomUsername);
        await console.log("----------------Environment Variables----------------");
        await console.log('User from env: '+process.env.USER_NAME); // This fetches the value of USER_NAME from the .env file.
        await console.log('Local PC user: '+process.env.USERNAME); // This fetches the value of USERNAME from the system environment variable if exists i.e. the username of the logged in user on the OS.
        await console.log('Password from env: '+process.env.PASSWORD);
        await console.log("----------------Passed params----------------");
        await console.log(username);
        await console.log(password);


        await this.usernameTextBox.fill(username || "Abokhalifa"+randomUsername);
        await this.passwordTextBox.fill(password || "test123");
    }

    async clickSignupButton():Promise<LandingPage>{
        await Promise.all([
            this.signupButton.click(),
            this.page.waitForEvent('dialog').then(dialog => dialog.accept()),
        ]);
        return new LandingPage(this.page);   
    }

    async signupNewUser(username?:string, password?:string):Promise<LandingPage>{
        await this.fillinSignupForm(username, password);
        return this.clickSignupButton();
    }    

}