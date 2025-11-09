import { Locator, Page } from "@playwright/test";


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
        this.landingPageURL = 'https://demoblaze.com/';
    }

    async launchLandingPage(){
        await this.page.goto(this.landingPageURL);
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
        await this.cartLink.click();
    }

    async clickLoginLink(){
        await this.loginLink.click();
    }

    async clickSignUpLink(){
        await this.signupLink.click();
    }
}