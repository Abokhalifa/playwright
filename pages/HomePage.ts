import { Locator, Page } from "@playwright/test";
import { LandingPage } from "./LandingPage";


export class HomePage{
    readonly page: Page;
    readonly homeLink: Locator;
    readonly contactLink: Locator;
    readonly aboutUsLink: Locator;
    readonly cartLink: Locator;
    readonly logoutLink: Locator;
    readonly welcomeLink: Locator;
    readonly homePageURL: string;
    
    constructor (page: Page){
        this.page = page;
        this.homeLink = page.locator('a',{hasText: 'Home'});
        this.contactLink = page.locator('a',{hasText: 'Contact'});
        this.aboutUsLink = page.locator('a',{hasText: 'About us'});
        this.cartLink = page.locator('a',{hasText: 'Cart'});
        this.logoutLink = page.locator('a', {hasText: 'Log out'});
        this.welcomeLink = page.locator('a',{hasText: 'Welcome'});
        this.homePageURL = 'https://demoblaze.com/';
        } 


        async clickLogoutLink(): Promise<LandingPage>{
            await Promise.all([
                this.logoutLink.click(),
            ])
            return new LandingPage(this.page);
        }

        async getWelcomeMessageText() : Promise<string | null> {
            const welcomeMessage: string = await this.welcomeLink.textContent();
            return welcomeMessage;
            //return welcomeMessage.toLowerCase() ;

        }

    

}