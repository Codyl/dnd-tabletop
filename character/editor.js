import characterController from './characterController.js';
/**
 * 
 */
const myCharacterController = new characterController();
//should I do like line 5 or 6?
document.getElementById('saveCharacter').addEventListener('click',()=>{myCharacterController.saveClick()});
myCharacterController.uploadImage();
if(window.location.search != "?newCharacter")
myCharacterController.characterView.setFormDataValue();
console.log(window.location.search, (window.location.search != "?newCharacter"))