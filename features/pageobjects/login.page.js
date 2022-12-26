

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        var getUsername = await $('input[type="text"]'); 
        var getPassword = await $('input[type="password"]');
        var getButton = await $('button[type="submit"]');
        
        await getUsername.setValue(username);
        await getPassword.setValue(password);
        await getButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
