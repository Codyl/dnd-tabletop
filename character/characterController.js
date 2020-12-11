import characterView from './characterView.js';
import characterModel from './characterModel.js';
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
            const fileList = this.files; 
            this.characterView.showImage("characterImage",fileList[i]);
        });
    }
    generateWeaponsDropDown() {
        this.characterView.renderWeaponDropDown(this.characterModel.getWeaponsForSelection());
    }
}