import './App.css';
import CanvasElement from "./CanvasElement";
import React, { useEffect, useState } from 'react';
import { Game } from './Game';
import { Player } from './Player';
import { Entity } from './Entity';

function App() {
  const [game, setGame] = useState<Game | undefined>(undefined);
  const height = 500;
  const width = 500;

  useEffect(() => {
    setGame(new Game(height, width, [
      new Player(100, 100, {x: 0, y: 1}, 100, "green", 0),
      new Entity(100, 150, {x: -1, y: 1}, 100, "red"),
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
