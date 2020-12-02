class Character {
    constructor(name) {
        this.characterName = name;
        this.con = 0;
        this.int = 0;
        this.wis = 0;
        this.str = 0;
        this.dex = 0;
        this.background = '';
        this.weapons;
        this.level;
        this.spells;
        this.skills;
        this.exp;
        this.class;
        this.race;
    }
}
sampleCharacter = new Character();
sampleCharacter.con=12;
localStorage.setItem('character','');