import mainScreenView from './mainScreenView.js';
import mainScreenModel from './mainScreenModel.js';

export default class mainScreenController {
    constructor() {
        this.mainScreenView = new mainScreenView();
        this.mainScreenModel = new mainScreenModel();
    }
}