//Not currently used, will be used to allow the user to add images for maps
export default class MainScreenModel {
    constructor() {
        this.startingTile = {x:5, y:5};
        this.characterTokens = [];
        this.maps = [];
        this.content = "";
    }
    // getImageSize(imageUrl) {
    //     let dimension, image;

    //     image = new Image();
    //     image.src = imageUrl;
    //     image.onload = function() {
    //         dimension = {
    //             width: image.naturalWidth,
    //             height: image.naturalHeight
    //         };
    //     };
    //     return dimension;
    // }
}
