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
        const inputElement = document.getElementById("characterImageSelect");
        inputElement.addEventListener("change", () => {
            this.characterView.showImage(document.getElementById("characterImage"),inputElement.files[0]);
        });
    }
    async generateWeaponsDropDown() {
        const weapons = await this.characterModel.getWeaponsForSelection();
        this.characterView.renderWeaponDropDown(weapons);
    }
    async generateSpellsDropDown() {
        const spells = await this.characterModel.getSpellsForSelection();
        this.characterView.renderSpellDropDown(spells);
    }
    spellAddClick() {
        document.getElementById('spellAdd').addEventListener('click', event => {
            console.log(event.target)
            // const spellData = await requestData('https://www.dnd5eapi.co/api/spells/'+event.target.id);
            // this.characterView.addSpell();
        });
    }
}