import characterController from './characterController.js';

const myCharacterController = new characterController();
//should I do like line 5 or 6?
document.getElementById('saveCharacter').addEventListener('click',()=>{myCharacterController.saveClick()});
myCharacterController.uploadImage();
if(window.location.search) {
    const data = JSON.parse(localStorage.getItem(window.location.search.replace('?','')));
console.log(data);
myCharacterController.characterView.setFormData();
}