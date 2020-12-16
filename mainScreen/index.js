import mainScreenController from './mainScreenController.js';

/**
 * @summary Calls the functions
 */

const controller = new mainScreenController();
controller.mainScreenView.generateMap(24,12, controller.mainScreenModel.getImageSize('../img/map1.jpg'));
controller.mainScreenView.initPlayer(JSON.parse(localStorage.getItem(localStorage.getItem('currentCharacter'))));

const ws = new WebSocket('ws://localhost:5500');
ws.addEventListener('open', () => {
    console.log('We are connected!');
    ws.send('What is up?!')
});


//EXPERIMENTAL: zooming and getting background size.
// controller.mainScreenView.allowZoom();
// let imageSize = controller.mainScreenModel.getImageSize("../img/map1.jpg");
// let elemSize = document.getElementById('grid');
// let proportion = elemSize.offsetHeight/imageSize.height;
// let width =  proportion * imageSize.width;
// console.log(imageSize);