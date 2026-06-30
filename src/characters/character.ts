export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number;
  protected power: number;

  constructor(name: string, hp: number, power: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }

  public takeDamage(damage: number): void {
    this.hp -= damage;
  }

  public isDead(): boolean {
    return this.hp <= 0;
  }
  //0以下になったらtrueを返す
  //<=や<はそれだけで真偽値を返す

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  abstract attack(opponent: Character): void;
  //Character=このクラス名
  //opponent=引数
  //Characterクラスという設計図をもとに勇者もモンスターも作る
  //勇者もモンスターも同じように攻撃することができるように継承先でそれぞれの攻撃の詳細を書く
}
