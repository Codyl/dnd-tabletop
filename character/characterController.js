import characterView from './characterView.js';
import characterModel from './characterModel.js';
/**
 * @class characterController
 * @summary Process input for character pages
 */
export default class characterController {
    constructor() {
        this.characterView = new characterView();
        this.characterModel = new characterModel();
    }
    saveClick() {
        this.characterModel.setCharacter(this.characterView.getFormData());
        this.characterModel.saveCharacter();
        window.location.href = './characterSelect.html';
    }
    uploadImage() {
        const inputElement = document.getElementById("characterImage");
        inputElement.addEventListener("change", () => {
            console.log(inputElement);
            const fileList = this.files; 
            console.log(fileList);
            this.characterView.showImage("characterImage",fileList[i]);
        });
    }
}