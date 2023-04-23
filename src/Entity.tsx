import { vec2 } from "../public/Interfaces";

export class Entity {
  // TODO: Change color to enum later probably
  public x: number;
  public y: number;
  public velocity: vec2;
  private health: number;
  public color: string;

  constructor(x: number, y: number, velocity: vec2, health: number, color: string) {
    // Init variables
    this.x = x;
    this.y = y;
    this.velocity = velocity;
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

  move() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    console.log(`x: ${this.x}, y: ${this.y}`);
    
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }

  animate(): void {
    requestAnimationFrame(this.animate);
    
  }

}