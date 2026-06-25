import { Character } from "./character";

export class Enemy extends Character {
  //TODO: maxHp プロパティを追加する
  readonly maxHp: number;
  //privateにするのは保有できるhpを書き換えられないように保護するため
  //maxHpは変更しないからreadonly

  //TODO: maxHp プロパティの初期化
  constructor(name: string, hp: number) {
    // ← ① ここに「50」が届く
    super(name, hp); //② 親クラスに「50」を渡して、親側の hp を 50 に設定する
    //外から受け取ったデータを親クラスに渡す
    this.maxHp = hp; // ③ ①で届いた「50」を、自分の maxHp にコピーする
  }

  //TODO: maxHp に対する現在の hp の割合を返す getHpRatio メソッドを追加する
  //継承元のattack()メソッドへreturnする
  getHpRatio(): number {
    return this.hp / this.maxHp;
  }

  //TODO: ダメージを受ける takeDamage メソッドを追加する
  takeDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }
  //Math.max()は()内の二つの数値のうち大きい方を返す
  //0以下のときはマイナスではなく0で表示させるため
  //戻り値がないのは、main.ts側でshowStatus()を書けば現在のhpが表示されるから

  //TODO: 残り HP が 30% 以下の場合、行動を変化させる
  // 通常時 : name + "は攻撃してきた！"
  // 残り HP が 30% 以下 : name + "は必死に抵抗している！"
  attack(): void {
    if (this.getHpRatio() <= 0.3) {
      console.log(`${this.name}は必死に抵抗している！`);
    } else {
      console.log(`${this.name}は攻撃してきた！`);
    }
    //getHpRatio()の()は必要、メソッドを呼び出すときは必ずつける
    //0.3と書く（30％ではない）のはgetHpRatioが0〜1の間の数になるから
    //this.をつける
  }
}
...