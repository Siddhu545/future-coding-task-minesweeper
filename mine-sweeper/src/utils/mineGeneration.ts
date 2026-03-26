import type { Grid } from "../types/mine";


export function mineGeneration(rows: number, cols: number, mines: number): Grid {
  let oneD = Array(mines)
    .fill(-1)
    .concat(Array(rows * cols - mines).fill(0));

  for (let i = oneD.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [oneD[i], oneD[j]] = [oneD[j], oneD[i]];
  }

  const grid: number[][] = [];
  for (let i = 0; i < rows; i++) {
    grid.push(oneD.slice(i * cols, (i + 1) * cols));
  }

  return grid;
}