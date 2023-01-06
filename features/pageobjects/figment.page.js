import Page from './page.js';

class Figment extends Page {
    open() {
        console.log("pleaseseeeeeeeeeeeeeeeeee");
        return super.openFig('login');
    }
}

export default new Figment();