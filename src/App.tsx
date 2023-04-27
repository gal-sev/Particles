import './App.scss';
import CanvasElement from "./CanvasElement";
import React, { useEffect, useState } from 'react';
import { Game } from './Game';
import { Player } from './Player';
import { Entity } from './Entity';
import { WeaponType } from './shared/Enums';

function App() {
  const [game, setGame] = useState<Game | undefined>(undefined);
  const height = 500;
  const width = 500;
  useEffect(() => {
    setGame(new Game(height, width, [
      new Player(300, 100, {x: -2, y: 0}, 20, 100, "green", WeaponType.HAMMER),
      new Player(400, 100, {x: +2, y: 0}, 20, 100, "green", WeaponType.HAMMER),
      new Entity(500, 100, {x: 1, y: 0}, 20, 100, "green"),
    ]));
  }, []);

  return (
    <div className="App">
      {
      game ? 
        <CanvasElement draw={game.animate} height={height} width={width} id='mainCanvas'></CanvasElement>
        : <h1>Loading Game</h1>
      }
    </div>
  );
}

export default App;
