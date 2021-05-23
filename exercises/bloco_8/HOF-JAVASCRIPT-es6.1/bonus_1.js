const _ = require('lodash');

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  let dragonAttack = (dragon['damage'] = _.random(15, dragon['strength']));
  return dragon.damage;
};

const warriorAttack = () => {
  let warriorAttack = (warrior.damage = _.random(warrior.strength, warrior.strength * warrior.weaponDmg));
  return warrior.damage;
};

const mageAttack = () => {
  let mageAttack;
  if (mage.mana < 15) {
    mage.damage = 'Not enough mana';
    mage.mana = 0;
  } else {
    mage.mana -= 15;
    mageAttack = mage.damage = _.random(mage.intelligence, mage.intelligence * 2);
  }

  return `${mageAttack}`;
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const x = warriorAttack();
    dragon.healthPoints -= x;
    warrior.damage = x;
    return `Warrior damage: ${warrior.damage}, Dragon health: ${dragon.healthPoints}`;
  },
  mageTurn: (mageAttack) => {
    let y = mageAttack();
    dragon.healthPoints -= y;
    mage.damage = y;
    return `Mage damage: ${mage.damage}, Dragon health: ${dragon.healthPoints}`;
  },
  dragonTurn: (dragonAttack) => {
    let z = dragonAttack();
    mage.healthPoints -= z;
    warrior.healthPoints -= z;
    dragon.damage = z;
    return `Dragon damage: ${dragon.damage}, Warrior health: ${warrior.healthPoints}, Mage health: ${mage.healthPoints}`;
  },
  finalTurn: () => {
    return battleMembers;
  },
};

console.log(gameActions.warriorTurn(warriorAttack));
console.log(gameActions.mageTurn(mageAttack));
console.log(gameActions.dragonTurn(dragonAttack));

console.log(gameActions.finalTurn());
