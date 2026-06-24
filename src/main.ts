import { Enemy } from "./characters/enemy";

const slime = new Enemy("スライム", 50);
slime.showStatus();
slime.attack();
slime.takeDamage(40);
slime.showStatus();
slime.attack();

console.log("これはpushテスト用のログです");
