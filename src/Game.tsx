import { Entity } from "./Entity";
import { Player } from "./Player";
import { vec2 } from "./shared/Interfaces";
import { pressedKeys } from "./shared/KeyEvents";

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

  animate = async (ctx: CanvasRenderingContext2D, player: Player) => {
    //TODO: remove the collision, moving and player velocity handling to server when adding one..
    requestAnimationFrame(() => this.animate(ctx, player));
    ctx.clearRect(0, 0, this.width, this.height);
    
    for (let i = 0; i < this.Entities.length; i++) {
      await this.Entities[i].collisionHandler(
        this.spliceNoMutate(this.Entities, i)
      );
      this.Entities[i].move(this.height, this.width);
      this.Entities[i].draw(ctx);
    }
    // Change player velocity
    player.addVelocity(this.getKeyVelocity());
    
  }

  getKeyVelocity(): vec2 {
    let outVelocity = {x: 0, y: 0};
    if (pressedKeys.includes("a")) {
      outVelocity.x -= 1; 
    }
    if (pressedKeys.includes("d")) {
      outVelocity.x += 1; 
    }
    if (pressedKeys.includes("s")) {
      outVelocity.y += 1; 
    }
    if (pressedKeys.includes("w")) {
      outVelocity.y -= 1; 
    }

    return outVelocity;
  }

}