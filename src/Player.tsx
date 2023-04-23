import { vec2 } from "../public/Interfaces";
import { Entity } from "./Entity";

export class Player extends Entity {
  // TODO: Change weapon to enum later probably
  private weapon: number;

  constructor(x: number, y: number,
    velocity: vec2, health: number, color: string, weapon: number) {
      // Init variables
      super(x, y, velocity, health, color);
      this.weapon = weapon;
  }

  getWeapon() {
    return this.weapon;
  }

  setWeapon(weapon: number) {
    this.weapon = weapon;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }

  public animate(): void {
    requestAnimationFrame(this.animate);
    
  }

}