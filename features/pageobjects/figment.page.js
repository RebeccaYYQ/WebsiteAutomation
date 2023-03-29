import Page from './page.js';
import loginInfo from '../pageobjects/userDetails.js';

class Figment extends Page {
    open(page) {
        return super.openFig(page);
    }

    async login() {
        var getUsername = await $('input[id="email"]');
        var getPassword = await $('input[id="password"]');
        var getButton = await $('input[type="submit"]');

        await getUsername.setValue(loginInfo.Figment_username);
        await getPassword.setValue(loginInfo.Figment_password);
        await getButton.click();
    }

    //switch to a random pet that is not my main one
    async getPet(type) {
        //if the pet wanted is my main, change the filter so its by age.
        if (type == "main") {
            console.log("main");
        }

        var getMakeActiveButton = await $('a[class="btn btn-sm btn-primary btn-block"]');

        await getMakeActiveButton.click();
    }

    async exploreSpooky() {
        var exploreBtn = await $('a[class="explore-main-button"]');
        var noSteps = eval(await (await $('strong')).getText());
        console.log("steps: " + noSteps);
        await browser.pause(2000);
        await exploreBtn.click();

        var contentElem;
        var contentElemExist = false;
        var contentText;

        while (contentElemExist == false) {
            await exploreBtn.click();
            await browser.pause(2000);
            contentElem = await $('div[class="col-xs-8 flavor"]');
            contentElemExist = await contentElem.isExisting();
        }

        contentText = await contentElem.getText();
        console.log(contentText);
    }
}

export default new Figment();