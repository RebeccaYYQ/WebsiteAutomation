import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import LouiseTown from '../pageobjects/louise.page.js';

/*****************
    General
*****************/

Given(/^I am on the (.*) page$/, async (page) => {
    switch(page) {
        case "login":
            await LoginPage.open();
            break;
        case "Louise":
            await LouiseTown.open();
            break;
    }
});

/*****************
    Login page
*****************/

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

/*****************
    Louise Hill page
*****************/

When(/^I do the (.*) dailies$/, async (town) => {
    switch(town) {
        case "Louise":
            await LouiseTown.dailies();
            break;
    }
});