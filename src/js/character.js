export default class Character {
  constructor(attack) {
    this.baseAttack = attack;
    this.characterStoned = false;
    this.characterDistance = 1;
  }

  get attack() {
    let changedAttack = this.baseAttack * (1 - (this.characterDistance - 1) * 0.1);

    if (this.characterStoned) {
      changedAttack -= Math.log2(this.characterDistance) * 5;
    }

    return changedAttack;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get stoned() {
    return this.characterStoned;
  }

  set stoned(value) {
    this.characterStoned = value;
  }

  get distance() {
    return this.characterDistance;
  }

  set distance(value) {
    this.characterDistance = value;
  }
}
