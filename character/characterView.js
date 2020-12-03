export default class characterView {
    constructor() {

    }
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
    setFormDataValue(){
        const data = JSON.parse(localStorage.getItem(localStorage.getItem('currentCharacter')));
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
    setFormDataText(){
        console.log(window.location.search.replace('?',''));
        const data = JSON.parse(localStorage.getItem(window.location.search.replace('?','')));
        document.getElementById('name').innerText = data.characterName;
        document.getElementById('level').innerText = data.level;
        document.getElementById('class').innerText = data.class;
        document.getElementById('race').innerText = data.race;
        document.getElementById('alignment').innerText = data.alignment;
        document.getElementById('exp').innerText = data.exp;
        document.getElementById('armor').innerText = data.armor;
        document.getElementById('speed').innerText = data.speed;
        document.getElementById('str').innerText = data.str;
        document.getElementById('dex').innerText = data.dex;
        document.getElementById('con').innerText = data.con;
        document.getElementById('int').innerText = data.int;
        document.getElementById('wis').innerText = data.wis;
        document.getElementById('cha').innerText = data.cha;
    }
    //Used in characterSelect
    showCharacter(characterName) {
        const characterData = JSON.parse(localStorage.getItem(characterName));
        const characterElem = document.createElement('div');
        const editCharacterElem = document.createElement('button');
        const selectCharacterElem = document.createElement('button');
        editCharacterElem.innerText = 'Edit';
        editCharacterElem.addEventListener('click',()=> {
            window.location.href=`./character.html?${characterName}`;
        }); 
        selectCharacterElem.innerText = 'Use this character';
        selectCharacterElem.addEventListener('click',()=> {
            localStorage.setItem('currentCharacter',characterName);
            window.location.href=`../mainScreen/mainScreen.html?${characterName}`;
        }); 
        characterElem.classList.add('characterSelectable');
        characterElem.innerText = characterData.characterName;
        characterElem.append(editCharacterElem,selectCharacterElem);
        document.getElementById('selector').appendChild(characterElem);
    }
    showImage(parentId,imgFile) {
        const characterImageElem = document.createElement('img');
        characterImageElem.src = imgFile;
        console.log('here')
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