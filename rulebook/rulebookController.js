import rulebookModel from './rulebookModel.js'
import rulebookView from './rulebookView.js'

export default class rulebookController {
    constructor() {
        this.rulebookView = new rulebookView();
        this.rulebookModel = new rulebookModel();
     }
    setRulebookLinks() {
        const allButtons = document.querySelectorAll('.infoButton');
        allButtons.forEach((b) => {
            let attribute = (b.getAttribute('data-api')) ? b.getAttribute('data-api') : b.getAttribute('data-json');
            b.addEventListener("click", () => {
                let finder = document.getElementById("finder");
                finder.value = attribute;
                document.getElementById("myForm").submit();
            });
        });
    }
    async setRuleLinks() {
        //Create the url string we want to fetch
        let searchName = window.location.search.replace('?find=','');
        searchName = searchName.replaceAll('%2F','/');
        let newUrl = this.rulebookModel.baseUrl+searchName;
        let apiList, myList;
        //fetch the data from the api and assign it to apiList
        if(!searchName.startsWith('..')) apiList = await this.rulebookModel.getList(newUrl);
        else myList = await this.rulebookModel.getList(searchName);

        //Show each topic as a div on the rulebook page
        if(apiList)
        apiList.forEach(async(topic) => {
            //render list of topics
            this.rulebookView.renderTopic(topic,document.getElementById('content'));
            
            let topicName = topic.url;
            
            // create the description for the topic div
            let descData = await this.rulebookModel.getList('https://www.dnd5eapi.co'+topicName);
            
            // console.log('https://www.dnd5eapi.co'+topicName);
            // console.log(document.getElementById(topic.index));
            //render description of each topic
            if(searchName =='rule-sections'){
            this.rulebookView.renderRuleDesc(topic, descData,document.getElementById(topic.index));}
            else if(searchName == 'spells') {
                this.rulebookView.renderSpellDesc(topic, descData,document.getElementById(topic.index));
            }
            else if(searchName == 'monsters')
            {
                // console.log(descData);
                this.rulebookView.renderMonsterDesc(topic, descData,document.getElementById(topic.index));
            }
            else if(searchName == 'equipment-categories/weapon') {
                this.rulebookView.renderWeaponDesc(topic, descData,document.getElementById(topic.index));
            }
            else if(searchName == 'equipment-categories/adventuring-gear') {
                this.rulebookView.renderEquipmentDesc(topic, descData,document.getElementById(topic.index));
                
            }
            else if(searchName == 'races') {
                this.rulebookView.renderRaceDesc(topic, descData,document.getElementById(topic.index));
            }
            else if(searchName == 'classes') {
                this.rulebookView.renderClassDesc(topic, descData,document.getElementById(topic.index));
            }
            else {
                
            }
        });
        if(myList)
        myList.forEach(topic => {
            this.rulebookView.renderTopic(topic,document.getElementById('content'));
            this.rulebookView.renderSpellDesc(topic,topic.desc,document.getElementById(topic.index));
        });
    }
  };