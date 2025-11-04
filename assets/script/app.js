let isPaused = false;
let inBattle = true;
let timeout = false;
const spritesLeo = ["leo_idle0", "leo_idle1"];

class Hero {
  constructor(name, race, job, spriteSheet) {
    this.name = name;
    this.race = race;
    this.job = job;
    this.level = 1;
    this.maxHealth = 10;
    this.health = 10;
    this.atk = 1;
    this.defense = 1;
    this.animation = 'idle';
    this.sprites = spriteSheet;
  }

  //methods
  getBio() {
    return `${this.name} (Level: ${this.level} ${this.race} ${this.job})`;
  }
}

const Leo = new Hero(
  'Leo', 'Eternian-Cat', 'Adventurer', spritesLeo
);

console.log(Leo.getBio());

