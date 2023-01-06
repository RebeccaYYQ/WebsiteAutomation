import Page from './page.js';
import mainDailies from './mainDailies.js';

class LouisePage extends Page {
    async dailies() {
        //Old Farmhand first
        mainDailies.npcSelect(4, "daily");
        mainDailies.getDaily();

    }

    open () {
        return super.open('world/town/1');
    }
}

export default new LouisePage();