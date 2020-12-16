import characterController from './characterController.js';

const myCharacterController = new characterController();
document.getElementById('saveCharacter').addEventListener('click',()=>{myCharacterController.saveClick()});
myCharacterController.uploadImage();
if(window.location.search != "?newCharacter") {
    if(window.location.search)
    myCharacterController.characterView.setFormDataValue("selected character data");
    else
    myCharacterController.characterView.setFormDataValue("current character data");

}
myCharacterController.generateWeaponsDropDown();
myCharacterController.generateSpellsDropDown();
myCharacterController.imageChangeOnClick();
// myCharacterController.spellAddClick();