export default class RulebookView {
    constructor(){
        this.allButtons = document.querySelectorAll('.infoButton');
    }
    renderTopic(topic, parent) {
        let elem = document.createElement('div');
        elem.textContent = topic.name;
        elem.classList.add('subCategory');
        elem.id = topic.index;
        elem.setAttribute('data-api','/'+elem.id.toLowerCase());
        parent.appendChild(elem);
        return true;
        //console.log(result.url);
    }
    renderRuleDesc(topic, desc, parent) {
        let elem = document.createElement('div');
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
        // elem.innerHTML = `<p>${newDesc}</p>`;
        elem.classList.add('hide');
         elem.id = topic.index+"-Desc";
        // elem.setAttribute('data-api','/'+elem.id.toLowerCase());
        parent.addEventListener('click', function() {
            elem.classList.toggle('hide');
        });
        parent.after(elem);
    }
    renderSpellDesc(topic, desc, parent) {
        let elem = document.createElement('div');
        elem.innerHTML = `<p>${desc}</p>`;
        elem.classList.add('hide');
         elem.id = topic.index+"-Desc";
        // elem.setAttribute('data-api','/'+elem.id.toLowerCase());
        parent.addEventListener('click', function() {
            elem.classList.toggle('hide');
        });
        parent.after(elem);
    }
    renderTitle() {
        let searchName = window.location.search.replace('?find=','');
        searchName = searchName.replace('%2F','/');
        let titleElem = document.getElementById('title');
        titleElem.innerText = searchName;
        titleElem.id = searchName;
    }
    renderMonsterDesc(topic, desc, parent) {
        const descElem = document.createElement('div');
        descElem.id = desc.index+"-Desc";
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
        descElem.classList.add('hide');
        parent.addEventListener('click', function() {
            descElem.classList.toggle('hide');
        });
        descElem.append(hitPointElem, armorClassElem, intElem, strElem, conElem, dexElem, wisElem);
        
        // console.log(desc)
    }
    renderWeaponDesc(topic, desc, parent) {
        // console.log(desc.cost.quantity);
        const descElem = document.createElement('div');
        const rangeElem = document.createElement('div');
        const diceElem = document.createElement('div');
        const costElem = document.createElement('div');
        rangeElem.innerText = "Type: "+desc.category_range;
        if(desc.damage != undefined)
        diceElem.innerText = "Dice: "+desc.damage.damage_dice;
        if(desc.cost != undefined)
        costElem.innerText = `Cost: ${desc.cost.quantity} ${desc.cost.unit}`;
        parent.after(descElem);
        descElem.classList.add('hide');
        parent.addEventListener('click', function() {
            descElem.classList.toggle('hide');
        });
        descElem.append(rangeElem, diceElem, costElem);
    }
    renderEquipmentDesc(topic, desc, parent) {
        console.log(desc);
        const descElem = document.createElement('div');
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
        descElem.classList.add('hide');
        parent.addEventListener('click', function() {
            descElem.classList.toggle('hide');
        });
        descElem.append(costElem);
    }
    renderRaceDesc(topic, desc, parent) {
        console.log(desc);
        const descElem = document.createElement('div');
        const ageElem = document.createElement('div');
        const alignElem = document.createElement('div');
        ageElem.innerText = "Age: " + desc.age;
        alignElem.innerText = "Alignment: " + desc.alignment;
        parent.after(descElem);
        descElem.classList.add('hide');
        parent.addEventListener('click', function() {
            descElem.classList.toggle('hide');
        });
        descElem.append(ageElem, alignElem);
    }
    renderClassDesc(topic, desc, parent) {
        console.log(desc);
        const descElem = document.createElement('div');
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
        descElem.classList.add('hide');
        parent.addEventListener('click', function() {
            descElem.classList.toggle('hide');
        });
        descElem.append(proficienciesElem);
    }
};
