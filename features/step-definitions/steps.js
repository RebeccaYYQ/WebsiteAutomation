import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import LouiseTown from '../pageobjects/louise.page.js';
import Figment from '../pageobjects/figment.page.js';

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
        case "figLogin":
            await Figment.open('login');
            break;
    }
});

/*****************
    Login page
*****************/

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I login to Figment$/, async () => {
    await Figment.login();
});

/*****************
    Louise Hill page
*****************/

When(/^I do the (.*) dailies$/, async (page) => {
    switch(page) {
        case "Louise":
            await LouiseTown.dailies();
            break;
    }
});

/*****************
    For Figment
*****************/

When(/^I change active figment pet to "([^"]*)"$/, async (petType) => {
    switch(petType) {
        case "random":
            await Figment.openFig("mypets");
            await Figment.getPet("random");
            break;
    }
});