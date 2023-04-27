import { vec2 } from "./shared/Interfaces";
import { getDistance } from "./shared/MathFuncs";

export class Entity {
  // TODO: Change color to enum later probably
  public x: number;
  public y: number;
  public velocity: vec2;
  public radius: number;
  private health: number;
  public color: string;
  public hasCollided: boolean;

  constructor(x: number, y: number, velocity: vec2, radius: number, health: number, color: string) {
    // Init variables
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.radius = radius;
    this.health = health;
    this.color = color;
    this.hasCollided = false;
  }

  damage(health: number): void {
    this.health -= health;

    // TODO: Add death function
  }

  heal(health: number): void {
    this.health += health;
  }

  move(height: number, width: number) {
    let newX = this.x + this.velocity.x;
    let newY = this.y + this.velocity.y;
    
    // **Entity out of bounds after move checks**
    if (newX - this.radius <= 0) { // Left
      newX = this.radius;
      this.velocity.x = -this.velocity.x;
    }
    if (newX + this.radius >= width) { // Right
      newX = width - this.radius;
      this.velocity.x = -this.velocity.x;
    }
    if (newY - this.radius <= 0) { // Up
      newY = this.radius;
      this.velocity.y = -this.velocity.y;
    } 
    if (newY + this.radius >= height) { // Down
      newY = height - this.radius;
      this.velocity.y = -this.velocity.y;
    } 

    this.x = newX;
    this.y = newY;
  }

  collisionHandler(Entities: Entity[]) {
    return new Promise((res) => {
      for (let i = 0; i < Entities.length; i++) {
        if (Entities[i] !== this) {
          const dist = getDistance({x: this.x, y: this.y}, {x: Entities[i].x, y: Entities[i].y});
          if (dist <= (this.radius + Entities[i].radius)) {
            this.hasCollided = true;            
          }
        }
      }
      res(true);
    })
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    if(!this.hasCollided) {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
    } else {
      ctx.strokeStyle = "yellow";
      ctx.fillStyle = "yellow";
      this.hasCollided = false;
    }
    
    ctx.fill();
    ctx.stroke();
  }

  animate(): void {
    requestAnimationFrame(this.animate);
  }

}