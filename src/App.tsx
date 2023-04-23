import './App.css';
import CanvasElement from "./CanvasElement";

function drawEx(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "blue";
  ctx.fillRect(50,50,100,100);
}

function App() {
  // const [game, setGame] = useState<Game | undefined>(undefined);

  return (
    <div className="App">
      <h1>Particles app</h1>
      <CanvasElement draw={drawEx} height={500} width={500} id='mainCanvas'></CanvasElement>
    </div>
  );
}

export default App;
