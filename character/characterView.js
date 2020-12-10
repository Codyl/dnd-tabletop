export default class characterView {
    constructor() {}
    getFormData() {
        return {
            name: document.getElementById('name').innerText,
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
    setFormDataValue(useLocalStorage){
        let data;
        if(useLocalStorage)
        data = JSON.parse(localStorage.getItem(localStorage.getItem('currentCharacter')));
        else
        data = JSON.parse(localStorage.getItem(window.location.search.replace('?','')));
        console.log(data);
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
    setFormDataText(useLocalStorage){
        let myCharacter;
        if(useLocalStorage){
            myCharacter = JSON.parse(localStorage.getItem(localStorage.getItem('currentCharacter')));
        }
        else{
            myCharacter = JSON.parse(localStorage.getItem(window.location.search.replace('?','')));
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
            window.location.href=`./character.html?${characterName}`;
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
    showImage(parentId,imgFile) {
        const characterImageElem = document.createElement('img');
        characterImageElem.src = imgFile;
        document.getElementById(parentId).appendChild(characterImageElem);
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