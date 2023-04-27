import { Entity } from "./Entity";

export class Game {
  public height: number;
  public width: number;
  public Entities: Entity[];

  constructor(height: number, width: number, Entities: Entity[]) {
    // Init variables
    this.Entities = Entities;
    this.height = height;
    this.width = width;
  }

  // Returns the array without the indexToRemove object
  spliceNoMutate(arr: any[], indexToRemove: number) {
    return arr.slice(0,indexToRemove).concat(arr.slice(indexToRemove+1));
  }

  animate = async (ctx: CanvasRenderingContext2D) => {
    requestAnimationFrame(() => this.animate(ctx));
    ctx.clearRect(0, 0, this.width, this.height);
    
    for (let i = 0; i < this.Entities.length; i++) {
      await this.Entities[i].collisionHandler(
        this.spliceNoMutate(this.Entities, i)
      );
      this.Entities[i].move(this.height, this.width);
      this.Entities[i].draw(ctx);
    }    
  }

}