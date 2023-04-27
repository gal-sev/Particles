export let pressedKeys: string[] = [];

//TODO: use onMouseDown & onMouseUp for mouse buttons 
export function onKeyDown(e: any) {
  if(!pressedKeys.includes(e.key)) {
    pressedKeys.push(e.key);
  }
}

export function onKeyUp(e: any) {
  pressedKeys.splice(pressedKeys.indexOf(e.key));
}