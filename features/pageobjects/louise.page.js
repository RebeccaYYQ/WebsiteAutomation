import Page from './page.js';

class LouisePage extends Page {
    async dailies() {
        console.log("wow");
    }

    open () {
        return super.open('world/town/1');
    }
}

export default new LouisePage();