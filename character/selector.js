import characterController from './characterController.js';
/**
 * @summary displays all stored characters or informs user they need to create one.
 */
const myCharacterController = new characterController();
var foundACharacter = false;

//show all characters
for(let item in localStorage) {
    if(item.startsWith('character-'))
    {
        myCharacterController.characterView.renderCharacterOption(item);
        foundACharacter = true;
    }
}
myCharacterController.characterView.testForCurrentCharacter();