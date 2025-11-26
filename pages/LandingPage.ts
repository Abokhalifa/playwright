import { Locator, Page } from "@playwright/test";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";


export class LandingPage{
    readonly page: Page;
    readonly homeLink: Locator;
    readonly contactLink: Locator;
    readonly aboutUsLink: Locator;
    readonly cartLink: Locator;
    readonly loginLink: Locator;
    readonly signupLink: Locator;
    readonly landingPageURL: string;

    constructor (page: Page){
        this.page = page;
        this.homeLink = page.locator('a',{hasText: 'Home'});
        this.contactLink = page.locator('a',{hasText: 'Contact'});
        this.aboutUsLink = page.locator('a',{hasText: 'About us'});
        this.cartLink = page.locator('a',{hasText: 'Cart'});
        this.loginLink = page.locator('a', {hasText: 'Log in'});
        this.signupLink = page.locator('a',{hasText: 'Sign up'});
        this.landingPageURL = process.env.BASE_URL || 'http://localhost:3000';
    }

    async launchLandingPage(){
        //This will take the baseURL from the config file. 
        //And the config file is taking the baseURL from the .env file.
        // And the .env file is determined by the NODE_ENV variable in the command line.
        // If there is a resource to go to, append to the baseURL in the goto() method.
        // For example, await this.page.goto('/products');
        await this.page.goto(''); 
    }

    async clickHomeLink(){
        await this.homeLink.click();
    }

    async clickContactLink(){
        await this.contactLink.click();
    }

    async clickAboutUsLink(){
        await this.aboutUsLink.click();
    }

    async clickCartLink(){
        
        this.cartLink.click()
        
    }

    async clickLoginLink():Promise<LoginForm>{
        await Promise.all([
            this.loginLink.click()
        ]);
        return new LoginForm(this.page);
    }

    async clickSignupLink(){
        await Promise.all([
            this.signupLink.click()
        ]); 
        return new SignupForm(this.page);
    }
}