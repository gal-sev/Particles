import { vec2 } from "./Interfaces";

export function getDistance(p1: vec2, p2: vec2) {
  return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
}