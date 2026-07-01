export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number;
  //protectedになおし継承先でアクセスできるようにすると
  //現在のhpのパーセンテージなどの処理がenemy側でできる
  protected power: number;

  constructor(name: string, hp: number, power: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }
  //power=攻撃力

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  abstract attack(opponent: Character): void;

  public takeDamage(damage: number): void {
    this.hp -= damage;
  }

  isDead(): boolean {
    if (this.hp <= 0) return true;
    else return false;
  }
}
