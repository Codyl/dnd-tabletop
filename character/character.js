import characterController from './characterController.js';
const myCharacterController = new characterController();
/**
 * Determines if it should pull from the url or the selected character.
 */
if(window.location.search)
myCharacterController.characterView.setFormDataText();
else {
    const data = JSON.parse(localStorage.getItem(localStorage.getItem('currentCharacter')));
    document.getElementById('name').innerText = data.characterName;
        document.getElementById('level').innerText = data.level;
        document.getElementById('class').innerText = data.class;
        document.getElementById('race').innerText = data.race;
        document.getElementById('alignment').innerText = data.alignment;
        document.getElementById('exp').innerText = data.exp;
        document.getElementById('armor').innerText = data.armor;
        document.getElementById('speed').innerText = data.speed;
        document.getElementById('str').innerText = data.str;
        document.getElementById('dex').innerText = data.dex;
        document.getElementById('con').innerText = data.con;
        document.getElementById('int').innerText = data.int;
        document.getElementById('wis').innerText = data.wis;
        document.getElementById('cha').innerText = data.cha;
}