import { useEffect, useState } from "react";
import MineSweeperTable from "./component/MineSweeperTable";
import { mineGeneration } from "./utils/mineGeneration";
import { calculateClues } from "./utils/clueGeneration";
import type { Grid } from "./types/mine";
import "./App.css";

function App() {
  const [grid, setGrid] = useState<Grid>([]);

  const generateGrid = () => {
    const rows = 5;
    const cols = 5;
    const mines = 5;

    const mineGrid = mineGeneration(rows, cols, mines);
    const finalGrid = calculateClues(mineGrid);

    setGrid(finalGrid);
  };

  useEffect(() => {
    generateGrid();
  }, []);

  return (
    <div>
      <h1>Minesweeper</h1>
      <MineSweeperTable grid={grid} />
      
      <button onClick={generateGrid}>
        New Game
      </button>
    </div>
  );
}

export default App;