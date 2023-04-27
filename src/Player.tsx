import { vec2 } from "./shared/Interfaces";
import { WeaponType } from "./shared/enums";
import { Entity } from "./Entity";

export class Player extends Entity {
  // TODO: Change weapon to enum later probably
  private weapon: WeaponType;

  constructor(x: number, y: number,
    velocity: vec2, health: number, radius: number, color: string, weapon: WeaponType) {
      // Init variables
      super(x, y, velocity, radius, health, color);
      this.weapon = weapon;
  }

  getWeapon(): WeaponType {
    return this.weapon;
  }

  setWeapon(weapon: WeaponType) {
    this.weapon = weapon;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }

  animate(): void {
    requestAnimationFrame(this.animate);
    
  }

}