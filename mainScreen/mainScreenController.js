import mainScreenView from './mainScreenView.js';
import mainScreenModel from './mainScreenModel.js';
/**
 * @class mainScreenController
 */
export default class mainScreenController {
    constructor() {
        this.mainScreenView = new mainScreenView();
        this.mainScreenModel = new mainScreenModel();
    }
}