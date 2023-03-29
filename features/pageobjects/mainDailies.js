/*****************
    To store commonly used functions
*****************/

class mainDailies {
    //select the NPC's indicator and then which option to do
    async npcSelect(id, type) {
        var npc = await $(`div[data-id="npc-${id}"]`);
        await npc.click();
        await browser.pause(2000);

        switch (type) {
            case "daily":
                var dailiesLink = await $('a[class="quest-a repeatable"]');
                //var dailiesLink = await $(`${npc}/div/div[2]/ul/li[2]/a`);
                await dailiesLink.click();
                await browser.pause(2000);
                break;
            case "chance":
                var chanceLink = await $('a[class="hl shop-a"]');
                await chanceLink.click();
                break;
        }
    }

    //navigate to the text that says which daily you need to do
    async getDaily() {
        this.skipChat();
        this.selectOption("a");
        this.skipChat();
        this.backChat();
        return this.readNarration();
    } 

    //read the text in the menu
    async readNarration() {
        await browser.pause(2000);
        var questText = await $('em[class="narration"]');
        var quest = "none";
        
        console.log("the full quest text is " + questText);



        console.log("the quest is " + quest);
        return quest;
    }

    //control the menu of the quest/chat box
    async skipChat() {
        await browser.pause(2000);
        var skipButton = await $('button[title="Fast Forward (\'f\' key)"]');
        await skipButton.click();
    }

    async backChat() {
        await browser.pause(2000);
        var backButton = await $('button[title="Rewind (\'a\' key)"]');
        await backButton.click();
    }

    async selectOption(option) {
        await browser.pause(2000);
        var optionButton = await $(`button[class="option-${option}"]`);
        await optionButton.click();
    }
}

export default new mainDailies();