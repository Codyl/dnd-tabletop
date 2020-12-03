import mainScreenController from './mainScreenController.js';

const controller = new mainScreenController();
controller.mainScreenView.generateMap(24,12);
controller.mainScreenView.initPlayer("../img/dragonborn.png",4,1);
controller.mainScreenView.allowZoom();
console.log('test');