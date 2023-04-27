import { vec2 } from "./shared/Interfaces";

export class Entity {
  // TODO: Change color to enum later probably
  public x: number;
  public y: number;
  public velocity: vec2;
  public radius: number;
  private health: number;
  public color: string;

  constructor(x: number, y: number, velocity: vec2, radius: number, health: number, color: string) {
    // Init variables
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.radius = radius;
    this.health = health;
    this.color = color;
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
    console.log(`x: ${this.x}, y: ${this.y}`);
  }

  // isOutOfBounds(height: number, width: number): CollisionDirection[] {
  //   let outDirections: CollisionDirection[]  = [];
  //   if (this.x - this.radius <= 0) {
  //     outDirections.push(CollisionDirection.LEFT);
  //   }
  //   if (this.x + this.radius >= width) {
  //     outDirections.push(CollisionDirection.RIGHT);
  //   }
  //   if (this.y - this.radius <= 0) {
  //     outDirections.push(CollisionDirection.UP);
  //   } 
  //   if (this.y + this.radius >= height) {
  //     outDirections.push(CollisionDirection.DOWN);
  //   } 
  //   return outDirections;
  // }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }

  animate(): void {
    requestAnimationFrame(this.animate);
    
  }

}