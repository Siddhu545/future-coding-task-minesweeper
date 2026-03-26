import type { Grid } from "../types/mine";

export function calculateClues(grid: Grid): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      if (grid[i][j] === -1) continue;

      let count = 0;

      for (const [dx, dy] of directions) {
        const ni = i + dx;
        const nj = j + dy;

        if (
          ni >= 0 && ni < rows &&
          nj >= 0 && nj < cols &&
          grid[ni][nj] === -1
        ) {
          count++;
        }
      }

      grid[i][j] = count;
    }
  }

  return grid;
}