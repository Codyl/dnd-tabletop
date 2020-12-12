export default class RulebookView {
    constructor(){
        this.allButtons = document.querySelectorAll('.infoButton');
    }
    renderTopic(topic, parentElement) {
        let element = document.createElement('div');

        element.textContent = topic.name;
        element.classList.add('subCategory');
        element.id = topic.index;
        element.setAttribute('data-api','/'+element.id.toLowerCase());
        parentElement.appendChild(element);
        return true;
    }
    createDescriptionElement(topic,parentElement) {
        let element = document.createElement('div');
        element.classList.add('hide','ruleInfo');
         element.id = topic.index+"-Desc";
        parentElement.addEventListener('click', function() {
            element.classList.toggle('hide');
        });
        return element;
    }
    renderRuleDescription(topic, description, parentElement) {
        let element =this.createDescriptionElement(topic,parentElement);

        let descSplit = description.split('\n');
        for(let line in descSplit) {
            let lineElement = document.createElement('div');
            lineElement.innerText = descSplit[line];
            if(lineElement.innerText.startsWith('####')){
                lineElement.innerHTML = `<h4>${lineElement.innerText}</h4>`;
            }
            else if(lineElement.innerText.startsWith('###')){
                lineElement.innerHTML = `<h3>${lineElement.innerText}</h3>`;
            }
            else if(lineElement.innerText.startsWith('##')){
                lineElement.innerHTML = `<h2>${lineElement.innerText}</h2>`;
            }
            else if(lineElement.innerText.startsWith('##')){
                lineElement.innerHTML = `<h1>${lineElement.innerText}</h1>`;
            }
            element.appendChild(lineElement);
        }
        parentElement.after(element);
    }
    renderSpellDescription(topic, description, parentElement) {
        let element = this.createDescriptionElement(topic,parentElement);
        element.innerHTML = `<p>${description}</p>`;
        parentElement.after(element);
    }
    renderTitle() {
        let searchName = window.location.search.replace('?find=','').replace('%2F','/');
        let title = searchName.replace('../myJson%2F','').replace('.json','').replace('_',' ').split('/');
        let titleName;
        if(title[0] != 'equipment-categories' && title) titleName = title[0];
        else titleName = title[1];
        let titleElement = document.getElementById('title');
        titleElement.innerText = titleName;
        titleElement.id = searchName;
    }
    renderMonsterDescription(topic, description, parentElement) {
        const descriptionElement = this.createDescriptionElement(topic,parentElement);

        const hitPointElem = document.createElement('div');
        const armorClassElem = document.createElement('div');
        const intElem = document.createElement('div');
        const strElem = document.createElement('div');
        const conElem = document.createElement('div');
        const dexElem = document.createElement('div');
        const wisElem = document.createElement('div');
        hitPointElem.innerText = "Hit points: " + description.hit_points;
        armorClassElem.innerText = "Armor class: " + description.armor_class;
        intElem.innerText = "Int: " + description.intelligence;
        strElem.innerText = "Str: " + description.strength;
        conElem.innerText = "Con: " + description.constitution;
        dexElem.innerText = "Dex: " + description.dexterity;
        wisElem.innerText = "Wis: " + description.wisdom;

        parentElement.after(descriptionElement);
        descriptionElement.append(hitPointElem, armorClassElem, intElem, strElem, conElem, dexElem, wisElem);
    }
    renderWeaponDescription(topic, description, parentElement) {
        const descriptionElement = this.createDescriptionElement(topic,parentElement);
        const rangeElem = document.createElement('div');
        const diceElem = document.createElement('div');
        const costElem = document.createElement('div');
        if(description.category_range != undefined)
        {
            rangeElem.innerText = "Type: "+description.category_range;
        }
        else if(Array.isArray(description))
        {
            description.forEach(desc => {
                const descElem = document.createElement('p');
                descElem.innerText = desc;
                descriptionElement.append(descElem);
            });
        }
        if(description.damage != undefined) 
        {
            diceElem.innerText = "Dice: "+description.damage.damage_dice;
        }
        if(description.cost != undefined)
        {
            costElem.innerText = `Cost: ${description.cost.quantity} ${description.cost.unit}`;
        } 
            
        parentElement.after(descriptionElement);
        descriptionElement.append(rangeElem, diceElem, costElem);
    }
    renderEquipmentDescription(topic, description, parentElement) {
        const descriptionElement = this.createDescriptionElement(topic,parentElement);
        const costElem = document.createElement('div');
        if(description.cost != undefined)
        {costElem.innerText = `Cost: ${description.cost.quantity} ${description.cost.unit}`;}
        if(description[0]) {descriptionElement.innerText = description[0];}
        if(description.contents != undefined){
            for(let i = 0; i < description.contents.length; i++) {
                if(!i) {
                    descriptionElement.innerText += "Contains these items: ";
                }
                else if(i < description.contents.length -1) {
                    descriptionElement.innerText += description.contents[i].item.name + ", ";
                }
                else {
                    descriptionElement.innerText += description.contents[i].item.name;
                }
            }
        }

        parentElement.after(descriptionElement);
        descriptionElement.append(costElem);
    }
    renderRaceDescription(topic, description, parentElement) {
        const descriptionElement = this.createDescriptionElement(topic,parentElement);
        const ageElement = document.createElement('div');
        const alignmentElement = document.createElement('div');
        ageElement.innerText = "Age: " + description.age;
        alignmentElement.innerText = "Alignment: " + description.alignment;

        parentElement.after(descriptionElement);
        descriptionElement.append(ageElement, alignmentElement);
    }
    renderClassDescription(topic, description, parentElement) {
        const descriptionElement = this.createDescriptionElement(topic,parentElement);
        const proficienciesElem = document.createElement('div');
        if(description.proficiencies != undefined){
            for(let i = 0; i < description.proficiencies.length; i++) {
                if(!i){
                    proficienciesElem.innerText += "Is proficient with: "+description.proficiencies[i].name +', ';
                }
                else if(i < description.proficiencies.length -1) {
                    proficienciesElem.innerText += description.proficiencies[i].name + ", ";
                }
                else {
                    proficienciesElem.innerText += description.proficiencies[i].name;
                }
            }
        }
        
        parentElement.after(descriptionElement);
        descriptionElement.append(proficienciesElem);
    }
    renderTopicDescription(searchName, topic, descriptionForTopicDiv)
    {
        switch(searchName)
        {
            case 'rule-sections':
                this.renderRuleDescription(topic, descriptionForTopicDiv,document.getElementById(topic.index));break;
            case 'spells':
                this.renderSpellDescription(topic, descriptionForTopicDiv,document.getElementById(topic.index));break;
            case 'monsters':
                this.renderMonsterDescription(topic, descriptionForTopicDiv,document.getElementById(topic.index));break;
            case 'equipment-categories/weapon':
                this.renderWeaponDescription(topic, descriptionForTopicDiv,document.getElementById(topic.index));break;
            case 'equipment-categories/adventuring-gear':
                this.renderEquipmentDescription(topic, descriptionForTopicDiv,document.getElementById(topic.index));break;
            case 'races':
                this.renderRaceDescription(topic, descriptionForTopicDiv,document.getElementById(topic.index));break;
            case 'classes':
                this.renderClassDescription(topic, descriptionForTopicDiv,document.getElementById(topic.index));
            default:
                console.log('Did not match an expected query');
        }
    }
    isSearchMatch(content)
    {
        return bool(String(content).toLowerCase().startsWith(String(document.getElementById('search').value)));
    }
    makeRuleLinksHidable() {
        document.getElementById('search').addEventListener('input',function() {
            let contentElements = document.getElementsByClassName('subCategory');
            for (let i = 0; i < contentElements.length; i++) {
                if(isSearchMatch(contentElements[i].innerText)) {contentElements[i].classList.remove('hide');}
                else contentElements[i].classList.add('hide');
            }
            if(document.getElementById('search').value == '') 
            for (let i = 0; i < contentElements.length; i++) {
                contentElements[i].classList.remove('hide');
                contentElements[i].nextElementSibling.classList.add('hide');
            }
        });
    }
};
