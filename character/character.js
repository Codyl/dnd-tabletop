import characterController from './characterController.js';
const myCharacterController = new characterController();
/**
 * Determines if it should pull from the url or the selected character.
 */
if(!window.location.search) {
    myCharacterController.characterView.setFormDataText(true);
}
else {//if the user is just viewing the character set the innerText instead
    myCharacterController.characterView.setFormDataText(false);
}