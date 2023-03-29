import Page from './page.js';
import loginInfo from '../pageobjects/userDetails.js';

//for the reading text loop
var oneClick = ['graveyard', 'pond', 'purple', 'caramel', 'undulate'];
var options = ['buzzing', 'fog', 'bowl', 'kids'];
var keyword;
var contentText;

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
        
        //if there is content that is not blank, read it and make a decision
        while (noSteps > 0) {
            await exploreBtn.click();
            await browser.pause(2000);

            contentElem = await $('div[class="col-xs-8 flavor"]');
            contentElemExist = await contentElem.isExisting();

            if (contentElemExist) {
                contentText = await contentElem.getText();

                if (contentText.includes('feathers') == false) {
                    await this.readText(contentText);
                }
            }

            noSteps = eval(await (await $('strong')).getText());
            console.log("steps: " + noSteps);
        }
    }

    async readText(contentText) {
        keyword = 'nothing';

        var oneClickBtn = await $('a[class="btn btn-primary btn-xs"]');

        //for every item in that one click list, find if that keyword is in the contentText
        for (let i = 0; i < oneClick.length; i++) {
            if (contentText.includes(oneClick[i])) {
                keyword = 'oneClick';
            }
        }
        //for every item in that two click list, find if that keyword is in the contentText
        for (let i = 0; i < options.length; i++) {
            if (contentText.includes(options[i])) {
                keyword = options[i];
            }
        }

        console.log("keyword is " + keyword);

        switch(keyword) {
            case 'oneClick':
                await oneClickBtn.click();
                break;
            case 'buzzing':
                await (await $('=Back away, slowly.')).click();
                break;
            case 'fog':
                await (await $('=Enter the mist.')).click();
                break;
            case 'bowl':
                await (await $('=Take just one.')).click();
                break;
            case 'kids':
                await (await $('=Treat!')).click();
                break;
            default:
                break;
        }

        await browser.pause(2000);

    }
}


export default new Figment();