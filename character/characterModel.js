/**
 * @class CharacterModel
 * @summary Character object data to be used
 */
export default class CharacterModel {
    constructor() {
        //top of paper sheet
        this.characterName ='';
        this.characterImage = '';
        this.level = 1;
        this.exp = 0;
        this.class = '';
        this.race = '';
        this.alignment = '';
        this.armor = 0;
        this.speed = 0;

        //skills
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
    /**
     * @function saveCharacter
     * @summary Saves the edited character to localStorage.
     */
    saveCharacter(){
        localStorage.setItem('character-'+this.characterName,JSON.stringify(this));
        const retrievedObject = localStorage.getItem('character-'+this.characterName);
        console.log('retrievedObject: ', JSON.parse(localStorage.getItem('character-'+this.characterName)));
    }
    /**
     * @function setCharacter
     * @param {object} dataObject
     * @summary Sets form object data as the character object data 
     */
    setCharacter(dataObject) {
        // console.log(dataObject);
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
    /**
     * @function getCharacter
     * @param {string} characterName
     * @summary Pull character from localStorage 
     */
    getCharacter(characterName) {
        return localStorage.getItem('character-'+characterName);
    }
    //get the data for the attacks and spells to choose from
}
