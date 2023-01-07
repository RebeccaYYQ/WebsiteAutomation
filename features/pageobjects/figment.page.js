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
        var noSteps = await $('strong');
        console.log("steps: " + await noSteps.getText());
        exploreBtn.click();

        var contentElem = await $('div[class="col-xs-8 flavor"]');
        var contentElemExist = await contentElem.isExisting();
        var contentText;

        while (contentElemExist == false) {
            exploreBtn.click();
            contentElem = await $('div[class="col-xs-8 flavor"]');
            contentElemExist = await contentElem.isExisting();
            await browser.pause(500);
        }

        contentText = await contentElem.getText();
            console.log(contentText);
        

    }
}

export default new Figment();