import { requestData} from '../utilities.js';
// import {fs} from 'fs';
export default class characterView {
    constructor() {}
    getFormData() {
        return {
            name: document.getElementById('name').value,
            image: document.getElementById('characterImageSelect').files[0],
            level: document.getElementById('level').value,
            className: document.getElementById('class').value,
            race: document.getElementById('race').value,
            alignment: document.getElementById('alignment').value,
            exp: document.getElementById('exp').value,
            armor: document.getElementById('armor').value,
            speed: document.getElementById('speed').value,
            str: document.getElementById('str').value,
            dex: document.getElementById('dex').value,
            wis: document.getElementById('wis').value,
            int: document.getElementById('int').value,
            con: document.getElementById('con').value,
            cha: document.getElementById('cha').value,
            background: document.getElementById('background').value
        };
    }
    setFormDataValue(dataSelectString){
        let data;
        if(dataSelectString == "selected character data")
        {
            data = JSON.parse(localStorage.getItem(window.location.search.replace('?','')));
        }
        else if(dataSelectString == "current character data")
        {
            data = JSON.parse(localStorage.getItem(localStorage.getItem('currentCharacter')));
        }
        document.getElementById('name').value = data.characterName;
        document.getElementById('level').value = data.level;
        document.getElementById('class').value = data.class;
        document.getElementById('race').value = data.race;
        document.getElementById('alignment').value = data.alignment;
        document.getElementById('exp').value = data.exp;
        document.getElementById('armor').value = data.armor;
        document.getElementById('speed').value = data.speed;
        document.getElementById('str').value = data.str;
        document.getElementById('dex').value = data.dex;
        document.getElementById('con').value = data.con;
        document.getElementById('int').value = data.int;
        document.getElementById('wis').value = data.wis;
        document.getElementById('cha').value = data.cha;
    }
    setFormDataText(dataSelectString){
        let myCharacter;
        if(dataSelectString == "selected character data")
        {
            myCharacter = JSON.parse(localStorage.getItem(window.location.search.replace('?','')));
        }
        else if(dataSelectString == "current character data")
        {
            myCharacter = JSON.parse(localStorage.getItem(localStorage.getItem('currentCharacter')));
        }
        
        document.getElementById('name').innerText = myCharacter.characterName;
        document.getElementById('level').innerText = myCharacter.level;
        document.getElementById('class').innerText = myCharacter.class;
        document.getElementById('race').innerText = myCharacter.race;
        document.getElementById('alignment').innerText = myCharacter.alignment;
        document.getElementById('exp').innerText = myCharacter.exp;
        document.getElementById('armor').innerText = myCharacter.armor;
        document.getElementById('speed').innerText = myCharacter.speed;
        document.getElementById('str').innerText = myCharacter.str;
        document.getElementById('dex').innerText = myCharacter.dex;
        document.getElementById('con').innerText = myCharacter.con;
        document.getElementById('int').innerText = myCharacter.int;
        document.getElementById('wis').innerText = myCharacter.wis;
        document.getElementById('cha').innerText = myCharacter.cha;
    }
    renderCharacterOption(characterName) {
        const characterData = JSON.parse(localStorage.getItem(characterName));
        const characterElement = document.createElement('div');
        const editCharacterElement = document.createElement('button');
        const selectCharacterElement = document.createElement('button');
        editCharacterElement.innerText = 'Edit';
        editCharacterElement.addEventListener('click',()=> {
            window.location.href=`./characterEdit.html?${characterName}`;
        }); 
        selectCharacterElement.innerText = 'Use this character';
        selectCharacterElement.addEventListener('click',()=> {
            localStorage.setItem('currentCharacter',characterName);
            window.location.href=`../mainScreen/mainScreen.html?${characterName}`;
        }); 
        characterElement.classList.add('characterSelectable');
        characterElement.innerText = characterData.characterName;
        characterElement.append(editCharacterElement,selectCharacterElement);
        document.getElementById('selector').appendChild(characterElement);
    }
    testForCurrentCharacter() {
        if (localStorage.getItem('currentCharacter') != null) {
            const returnElemParent = document.getElementById('returnToMainScreen');
            const returnElem = document.createElement('a');
            returnElem.href = '../mainScreen/mainScreen.html';
            returnElem.innerText = 'Back to map screen'
            returnElemParent.appendChild(returnElem);
        }
        else {
            const noCharactersDiv = document.createElement('div');
            noCharactersDiv.innerText = "You have no selected Character yet. Please add one in order to play the game.";
            document.getElementById('error').appendChild(noCharactersDiv);
        }
    }
    showImage(imgElem,imgFile) {
        const reader  = new FileReader();
        reader.onloadend = function () {
            imgElem.src = reader.result;
        }
        if (imgFile) {
            reader.readAsDataURL(imgFile);
        } else {
            imgElem.src = "";
        }
    }
    renderProvidedImages(){
            //render image

            const dir = '../img/'
            const files = fs.readdirSync(dir)
            
            for (const file of files) {
              console.log(file)
              const imgElem = document.createElement('img');
              imgElem.src = file;
              document.getElementById('defaultImages').appendChild(imgElem);
            }
        
    }
    renderWeaponDropDown(weapons) {
        weapons.forEach(weapon => {
            let option = document.createElement('option');
            option.innerText = weapon.name;
            document.getElementById("weaponDropDown").appendChild(option);
        });
    }
    renderSpellDropDown(spells) {
        spells.forEach(spell => {
            let option = document.createElement('option');
            option.innerText = spell.name;
            document.getElementById("spellDropDown").appendChild(option);
        });
    }
    addSpell(spellData) {
        const attackTableElem = document.getElementById('attackTableRows');
        const rowElem = document.createElement('tr');
        const nameDataElem = document.createElement('td');
        const bonusDataElem = document.createElement('td');
        const typeDataElem = document.createElement('td');
        const rangeDataElem = document.createElement('td');
        nameDataElem.innerText = spellData.name;
        bonusDataElem.innerText = "+[]";
        typeDataElem.innerText = spellData.damage.damage_type.name;
        rangeDataElem.innerText = spellData.range;
        rowElem.append(nameDataElem, bonusDataElem, typeDataElem, rangeDataElem);
        attackTableElem.appendChild(rowElem);
    }
    // function readURL(input) {//preview character image
    //     if (input.files && input.files[0]) {
    //       var reader = new FileReader();
          
    //       reader.onload = function(e) {
    //         $('#blah').attr('src', e.target.result);
    //       }
          
    //       reader.readAsDataURL(input.files[0]); // convert to base64 string
    //     }
    //   }
      
    //   $("#imgInp").change(function() {
    //     readURL(this);
    //   });
}