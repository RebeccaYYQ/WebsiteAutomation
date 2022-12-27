/*****************
    To store commonly used functions
*****************/

class mainDailies {
    //select the NPC's indicator and then which option to do
    async npcSelect(id, type) {
        var npc = await $(`div[data-id="npc-${id}"]`);
        await npc.click();

        switch(type) {
            case "daily":
                var dailiesLink = await $('a[class="quest-a repeatable"]');
                await dailiesLink.click();
                break;
            case "chance":
                var chanceLink = await $('a[class="hl shop-a"]');
                await chanceLink.click();
                break;
        }
    }
    
    //control the menu of the quest box
    async menuControl(type) {

    }
}

export default new mainDailies();