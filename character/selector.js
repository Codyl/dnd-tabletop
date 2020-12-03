import characterController from './characterController.js';

const myCharacterController = new characterController();
var foundACharacter = false;
//show all characters
for(let item in localStorage) {
    if(item.startsWith('character-'))
    {
        myCharacterController.characterView.showCharacter(item);
        foundACharacter = true;
    }
    // console.log('getting character',item)

}
if(!foundACharacter) {
    const noCharactersDiv = document.createElement('div');
    noCharactersDiv.innerText = "You have no Character yet. Please add one in order to play the game."
}