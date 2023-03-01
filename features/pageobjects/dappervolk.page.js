import Page from './page.js';
import loginInfo from '../pageobjects/userDetails.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Dappervolk extends Page {

    async login () {
        var getUsername = await $('input[type="text"]'); 
        var getPassword = await $('input[type="password"]');
        var getButton = await $('button[type="submit"]');
        
        await getUsername.setValue(loginInfo.DV_username);
        await getPassword.setValue(loginInfo.DV_password);
        await getButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new Dappervolk();
