import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://db.ygoprodeck.com/api/v7/",
    apiCard: "cardinfo.php?num=20&offset=0",
    apiArchetype: "archetypes.php",
    CharactersList: [],
    archetypeList: [],
    archetype: ""
});