import rulebookModel from './rulebookModel.js'
import rulebookView from './rulebookView.js'
import { requestData } from '../utilities.js'

export default class rulebookController {
    constructor() {
        this.rulebookView = new rulebookView();
        this.rulebookModel = new rulebookModel();
    }

    setRulebookLinks() {
        const allButtons = document.querySelectorAll('.infoButton');
        allButtons.forEach((button) => {
            let attribute = (button.getAttribute('data-api')) ? button.getAttribute('data-api') : button.getAttribute('data-json');
            button.addEventListener("click", () => {
                let finder = document.getElementById("finder");
                finder.value = attribute;
                document.getElementById("myForm").submit();
            });
        });
    }

    async setRuleLinks() {
        let searchName = window.location.search.replace('?find=','').replaceAll('%2F','/');
        let newUrl = this.rulebookModel.baseUrl+searchName;
        let apiObject, myJsonObject;
        console.log(newUrl)
        if(!searchName.startsWith('..')) apiObject = await requestData(newUrl);
        else myJsonObject = await requestData(searchName);

        //Show each topic as a div on the rulebook page
        if(apiObject)
        apiObject.forEach(async(topic) => {
            this.rulebookView.renderTopic(topic,document.getElementById('content'));
            let descriptionForTopicDiv = await requestData('https://www.dnd5eapi.co'+topic.url);
            this.rulebookView.renderTopicDescription(searchName, topic, descriptionForTopicDiv);
            
        });
        else if(myJsonObject)
        myJsonObject.forEach(topic => {
            this.rulebookView.renderTopic(topic,document.getElementById('content'));
            this.rulebookView.renderSpellDesc(topic,topic.desc,document.getElementById(topic.index));
        });
        this.rulebookView.makeRuleLinksHideable();
    }
  };