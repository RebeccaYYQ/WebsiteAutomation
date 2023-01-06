import Page from './page.js';

class Figment extends Page {
    open(page) {
        return super.openFig(page);
    }

    async login() {
        var getUsername = await $('input[id="email"]');
        var getPassword = await $('input[id="password"]');
        var getButton = await $('input[type="submit"]');

        await getUsername.setValue('micelover12@gmail.com');
        await getPassword.setValue('');
        await getButton.click();
    }
}

export default new Figment();