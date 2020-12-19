import CharacterModel from "../character/characterModel.js";
export default class MainScreenModel {
    constructor() {
        this.startingTile = {x:5, y:5};
        this.characters = [];
        this.maps = [];
        this.content = "";
    }
    getImageSize(imageUrl) {
        let dimension, image;

        image = new Image();
        image.src = imageUrl;
        image.onload = function() {
            dimension = {
                width: image.naturalWidth,
                height: image.naturalHeight
            };
        };
        return dimension;
    }
    addPlayer(data) {
        let character = new CharacterModel;
        character.setCharacter(data);
        this.characters.push(character);
    }
}
