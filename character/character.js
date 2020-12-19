import characterController from './characterController.js';
const myCharacterController = new characterController();

if(!window.location.search) {
    myCharacterController.characterView.setFormDataText("current character data");
}
else {
    myCharacterController.characterView.setFormDataText("selected character data");
}