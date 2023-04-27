import { vec2 } from "./shared/Interfaces";
import { WeaponType } from "./shared/Enums";
import { Entity } from "./Entity";

export class Player extends Entity {
  private weapon: WeaponType;

  constructor(x: number, y: number,
    velocity: vec2, radius: number, health: number, color: string, weapon: WeaponType) {
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

    if(!this.hasCollided) {
      ctx.strokeStyle = this.color;
    } else {
      ctx.strokeStyle = "yellow";
      this.hasCollided = false;
    }
    
    ctx.stroke();
  }

  animate(): void {
    requestAnimationFrame(this.animate);
    
  }

}