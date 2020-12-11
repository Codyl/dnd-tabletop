import {requestData} from '../utilities.js';
export default class CharacterModel {
    constructor() {
        this.characterName ='';
        this.characterImage = '';
        this.level = 1;
        this.exp = 0;
        this.class = '';
        this.race = '';
        this.alignment = '';
        this.armor = 0;
        this.speed = 0;

        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.str = 0;
        this.dex = 0;
        this.cha = 0;

        this.background = '';
        this.weapons = {};
        this.spells = {};
    }
    saveCharacter(){
        localStorage.setItem('character-'+this.characterName,JSON.stringify(this));
    }
    setCharacter(dataObject) {
        this.characterName = dataObject.name;
        this.level = dataObject.level;
        this.exp = dataObject.exp;
        this.class = dataObject.className;
        this.race = dataObject.race;
        this.speed = dataObject.speed;
        this.armor = dataObject.armor;
        this.alignment = dataObject.alignment;
        
        this.con = dataObject.con;
        this.int = dataObject.int;
        this.wis = dataObject.wis;
        this.str = dataObject.str;
        this.dex = dataObject.dex;
        this.cha = dataObject.cha;

        this.background = dataObject.background;
        this.weapons;
        this.spells;
    }
    getCharacter(characterName) {
        return localStorage.getItem('character-'+characterName);
    }
    //get the data for the attacks and spells to choose from
    async getWeaponsForSelection() {
        const weapons = await requestData('https://www.dnd5eapi.co/api/equipment-categories/weapon');
        // console.log(weapons)
        return weapons;
}
}