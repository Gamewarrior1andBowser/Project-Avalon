let isPaused = false;

class Hero {
  constructor(name, race, job) {
    this.name = name;
    this.race = race;
    this.job = job;
    this.level = 1;
    this.maxHealth = 10;
    this.health = 10;
    this.atk = 1;
    this.defense = 1;
    this.animation = 'idle';
  }

  //methods
  getBio() {
    return `${this.name} (Level: ${this.level} ${this.race} ${this.job})`;
  }
}

const Leo = new Hero(
  'Leo', 'Eternian-Cat', 'Adventurer' 
);

console.log(Leo.getBio());

