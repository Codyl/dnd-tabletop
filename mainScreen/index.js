import mainScreenController from './mainScreenController.js';

/**
 * @summary Calls the functions
 */

const controller = new mainScreenController();
controller.mainScreenView.generateMap(24,12);
controller.mainScreenView.initPlayer("../img/dragonborn.png",4,1);
// controller.mainScreenView.allowZoom();
// let imageSize = controller.mainScreenModel.getImageSize("../img/map1.jpg");
// let elemSize = document.getElementById('grid');
// let proportion = elemSize.offsetHeight/imageSize.height;
// let width =  proportion * imageSize.width;
// console.log(imageSize);