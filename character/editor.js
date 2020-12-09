import characterController from './characterController.js';

const myCharacterController = new characterController();
document.getElementById('saveCharacter').addEventListener('click',()=>{myCharacterController.saveClick()});
myCharacterController.uploadImage();
if(window.location.search != "?newCharacter") myCharacterController.characterView.setFormDataValue();