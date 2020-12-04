/**
 * @class RulebookView renders the elements for dynamic data.
 */
export default class RulebookView {
    constructor(){
        this.allButtons = document.querySelectorAll('.infoButton');
    }
    /**
     * 
     * @param {object} topic 
     * @param {element} parent 
     */
    createDescElem(topic,parent) {
        let elem = document.createElement('div');
        elem.classList.add('hide','ruleInfo');
         elem.id = topic.index+"-Desc";
        parent.addEventListener('click', function() {
            elem.classList.toggle('hide');
        });
        return elem;
    }
    /**
     * 
     * @param {object} topic 
     * @param {element} parent 
     */
    renderTopic(topic, parent) {
        let elem = document.createElement('div');

        elem.textContent = topic.name;
        elem.classList.add('subCategory');
        elem.id = topic.index;
        elem.setAttribute('data-api','/'+elem.id.toLowerCase());
        parent.appendChild(elem);
        return true;
    }
    /**
     * 
     * @param {object} topic 
     * @param {string} desc full data from query describing a topic 
     * @param {element} parent The element for the topic to contain the description
     */
    renderRuleDesc(topic, desc, parent) {
        let elem =this.createDescElem(topic,parent);

        let descSplit = desc.split('\n');
        for(let line in descSplit) {
            let lineElem = document.createElement('div');
            lineElem.innerText = descSplit[line];
            if(lineElem.innerText.startsWith('####')){
                lineElem.innerHTML = `<h4>${lineElem.innerText}</h4>`;
            }
            else if(lineElem.innerText.startsWith('###')){
                lineElem.innerHTML = `<h3>${lineElem.innerText}</h3>`;
            }
            else if(lineElem.innerText.startsWith('##')){
                lineElem.innerHTML = `<h2>${lineElem.innerText}</h2>`;
            }
            else if(lineElem.innerText.startsWith('##')){
                lineElem.innerHTML = `<h1>${lineElem.innerText}</h1>`;
            }
            elem.appendChild(lineElem);
        }
        parent.after(elem);
    }
    /**
     * 
     * @param {object} topic 
     * @param {string} desc full data from query describing a topic 
     * @param {element} parent The element for the topic to contain the description
     */
    renderSpellDesc(topic, desc, parent) {
        let elem = this.createDescElem(topic,parent);

        elem.innerHTML = `<p>${desc}</p>`;
        parent.after(elem);
    }

    /**
     * @function renderTitle Displays h1 title based on the search query.
     */
    renderTitle() {
        let searchName = window.location.search.replace('?find=','');
        searchName = searchName.replace('%2F','/');
        let titleName;
        //Get the title from the search
        let title = searchName.replace('../myJson%2F','').replace('.json','').replace('_',' ').split('/');
        if(title[0] != 'equipment-categories' && title) titleName = title[0];
        else titleName = title[1];
        let titleElem = document.getElementById('title');
        titleElem.innerText = titleName;
        titleElem.id = searchName;
    }

    /**
     * 
     * @param {object} topic 
     * @param {string} desc full data from query describing a topic 
     * @param {element} parent The element for the topic to contain the description
     */
    renderMonsterDesc(topic, desc, parent) {
        const descElem = this.createDescElem(topic,parent);

        const hitPointElem = document.createElement('div');
        const armorClassElem = document.createElement('div');
        const intElem = document.createElement('div');
        const strElem = document.createElement('div');
        const conElem = document.createElement('div');
        const dexElem = document.createElement('div');
        const wisElem = document.createElement('div');
        hitPointElem.innerText = "Hit points: " + desc.hit_points;
        armorClassElem.innerText = "Armor class: " + desc.armor_class;
        intElem.innerText = "Int: " + desc.intelligence;
        strElem.innerText = "Str: " + desc.strength;
        conElem.innerText = "Con: " + desc.constitution;
        dexElem.innerText = "Dex: " + desc.dexterity;
        wisElem.innerText = "Wis: " + desc.wisdom;

        parent.after(descElem);
        descElem.append(hitPointElem, armorClassElem, intElem, strElem, conElem, dexElem, wisElem);
    }

    /**
     * 
     * @param {object} topic 
     * @param {string} desc full data from query describing a topic 
     * @param {element} parent The element for the topic to contain the description
     */
    renderWeaponDesc(topic, desc, parent) {
        // console.log(desc.cost.quantity);
        const descElem = this.createDescElem(topic,parent);
        const rangeElem = document.createElement('div');
        const diceElem = document.createElement('div');
        const costElem = document.createElement('div');
        rangeElem.innerText = "Type: "+desc.category_range;
        if(desc.damage != undefined) diceElem.innerText = "Dice: "+desc.damage.damage_dice;
        if(desc.cost != undefined) costElem.innerText = `Cost: ${desc.cost.quantity} ${desc.cost.unit}`;

        parent.after(descElem);
        descElem.append(rangeElem, diceElem, costElem);
    }

    /**
     * 
     * @param {object} topic 
     * @param {string} desc full data from query describing a topic 
     * @param {element} parent The element for the topic to contain the description
     */
    renderEquipmentDesc(topic, desc, parent) {
        const descElem = this.createDescElem(topic,parent);
        const costElem = document.createElement('div');
        if(desc.cost != undefined)
        costElem.innerText = `Cost: ${desc.cost.quantity} ${desc.cost.unit}`;
        if(desc[0]) descElem.innerText = desc[0];
        if(desc.contents != undefined){
            for(let i = 0; i < desc.contents.length; i++) {
                if(!i){
                    descElem.innerText += "Contains these items: ";
                }
                else if(i < desc.contents.length -1) {
                    descElem.innerText += desc.contents[i].item.name + ", ";
                }
                else {
                    descElem.innerText += desc.contents[i].item.name;
                }
            }
        }

        parent.after(descElem);
        descElem.append(costElem);
    }

    /**
     * 
     * @param {object} topic 
     * @param {string} desc full data from query describing a topic 
     * @param {element} parent The element for the topic to contain the description
     */
    renderRaceDesc(topic, desc, parent) {
        const descElem = this.createDescElem(topic,parent);
        const ageElem = document.createElement('div');
        const alignElem = document.createElement('div');
        ageElem.innerText = "Age: " + desc.age;
        alignElem.innerText = "Alignment: " + desc.alignment;

        parent.after(descElem);
        descElem.append(ageElem, alignElem);
    }

    /**
     * 
     * @param {object} topic 
     * @param {string} desc full data from query describing a topic 
     * @param {element} parent The element for the topic to contain the description
     */
    renderClassDesc(topic, desc, parent) {
        const descElem = this.createDescElem(topic,parent);
        const proficienciesElem = document.createElement('div');
        if(desc.proficiencies != undefined){
            for(let i = 0; i < desc.proficiencies.length; i++) {
                if(!i){
                    proficienciesElem.innerText += "Is proficient with: "+desc.proficiencies[i].name +', ';
                }
                else if(i < desc.proficiencies.length -1) {
                    proficienciesElem.innerText += desc.proficiencies[i].name + ", ";
                }
                else {
                    proficienciesElem.innerText += desc.proficiencies[i].name;
                }
            }
        }
        
        parent.after(descElem);
        descElem.append(proficienciesElem);
    }
};
