class ForagerBee extends Bee{
  constructor(food, age, color, job) {
  super(food)
  this.age = 10
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
  }
  forage(treasure) {this.treasureChest.push(treasure)};
};
