import { Character } from "./character.ts";

export class Mage extends Character {
  constructor(name: string, hp: number) {
    super(name, hp);
    this.power = 40;
  }

  override attack(opponent: Character): void {
    console.log(`${this.name}は魔法を唱えた！`);
    opponent.takeDamage(40);
  }
}
