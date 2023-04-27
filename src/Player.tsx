import { vec2 } from "./shared/Interfaces";
import { WeaponType } from "./shared/Enums";
import { Entity } from "./Entity";

export class Player extends Entity {
  private weapon: WeaponType;
  private maxVelocity: number;

  constructor(x: number, y: number,
    velocity: vec2, radius: number, health: number, color: string, weapon: WeaponType) {
      // Init variables
      super(x, y, velocity, radius, health, color);
      this.weapon = weapon;
      this.maxVelocity = 2;
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
      this.triggerCollision();
    }
    
    ctx.stroke();
  }

  triggerCollision() {
    this.hasCollided = false;
    //TODO: Add some collision effect?
  }

  addVelocity(velocity: vec2) {
    if(velocity.x >= 1) {
      if (this.velocity.x <= this.maxVelocity) {
        this.velocity.x += velocity.x;        
      }
    } else if(velocity.x <= -1) {
      if (this.velocity.x >= -this.maxVelocity) {
        this.velocity.x += velocity.x;
      }
    }

    if(velocity.y >= 1) {
      if (this.velocity.y <= this.maxVelocity) {
        this.velocity.y += velocity.y;
      }
    } else if(velocity.y <= -1) {
      if (this.velocity.y >= -this.maxVelocity) {
        this.velocity.y += velocity.y;
      }
    }    
  }
}