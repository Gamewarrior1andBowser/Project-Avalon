let isPaused = false;
let inBattle = true;
let timeout = false;
let enemies = 0;
const spritesLeo = ["leo_idle0", "leo_idle1"];
const spritesGoblin = ["goblin_idle0", "goblin_idle1"];
const spritesSkeleton = ["skeleton_idle0", "skeleton_idle1"];
const spritesBlaster = ["blaster_idle0", "blaster_idle1"];
const iconLeo = document.getElementById('Leo');
const iconEnemy1 = document.getElementById('Enemy1');
const iconEnemy2 = document.getElementById('Enemy2');
const iconEnemy3 = document.getElementById('Enemy3');

const objects = [iconLeo, iconEnemy1];
const characters = [];

class Hero {
  constructor(firstName, lastName, race, job, spriteSheet) {
    characters.push(this);
    this.lName = lastName;
    this.fName = firstName;
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
  animate(target) {
    if (this.animation == 'idle') {
      target.classlist.toggle(this.sprites[0]);
      target.classlist.toggle(this.sprites[1]);
    } else {
      
    }
  }
  
  getBio() {
    return `${this.fName} ${this.lName} (Level: ${this.level} ${this.race} ${this.job})`;
  }
}
class Enemy {
  constructor(name, spriteSheet, icon) {
    characters.push(this);
    enemies += 1;
    this.name = name;
    this.maxHealth = 10;
    this.health = 10;
    this.atk = 1;
    this.defense = 1;
    this.animation = 'idle';
    this.sprites = spriteSheet;
  }

  //methods
  animate(target) {
    if (this.animation == 'idle') {
      target.classlist.toggle(this.sprites[0]);
      target.classlist.toggle(this.sprites[1]);
    } else {

    }
  }
}

const Leo = new Hero(
  'Leo', 'Northstar', 'Eternian-Cat', 'Adventurer', spritesLeo
);
const Goblin = new Enemy(
  'Goblin', spritesGoblin, iconEnemy1
)
const Skeleton = new Enemy(
  'Skeleton', spritesSkeleton, iconEnemy3
)
const Blaster = new Enemy(
  'Blaster', spritesBlaster, iconEnemy2
)

console.log(Leo.getBio());

while (isPaused == false && timeout == false) {
  timeout = true;
  setTimeout(() => {
    for (let i = 0; i++; i < characters.length) {
      characters[i].animate(objects[i]);
    }
    timeout = false;
  }, 1000)
}