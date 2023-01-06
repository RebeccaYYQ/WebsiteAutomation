import Page from './page.js';

class Figment extends Page {
    open(page) {
        return super.openFig(page);
    }
}

export default new Figment();