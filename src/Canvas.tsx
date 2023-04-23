export class Game {
  public canvas : HTMLCanvasElement;
  public ctx : CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    // Init variables
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

  }

}