# Minesweeper Generator (React + TypeScript)

A simple Minesweeper grid generator built with **TypeScript** and rendered using **React**. This project focuses on the **core game logic**: random mine placement and clue calculation.

---

## Features

- Random mine placement (no duplicates)
- Automatic clue calculation (1–8 based on surrounding mines)
- 2D grid generation
- React-based UI rendering
- Regenerate grid functionality (optional)

---

## How It Works

### 1. Mine Placement

A 1D array is created with `-1` for mines and `0` for empty cells. The array is shuffled using the **Fisher-Yates algorithm**, then converted into a 2D grid.

### 2. Clue Calculation

For each non-mine cell, all 8 surrounding directions are checked and the count of adjacent mines is assigned as the cell's value (`0–8`).

---

## Project Structure

```
src/
├── component/
│   └── MineSweeperTable.tsx   # UI table component
├── utils/
│   ├── mineGeneration.ts      # Generates grid with mines
│   └── calculateClues.ts      # Calculates numbers
├── types/
│   └── mine.ts                # Type definitions
├── App.tsx
└── App.css
```

---

## Data Representation

```ts
type Grid = number[][];
```

| Value | Meaning |
|-------|---------|
| `-1`  | 💣 Mine |
| `0`   | Empty   |
| `1–8` | Adjacent mine count |

### Example

```
[
  [0, 1, -1],
  [0, 2,  2],
  [0, 1, -1]
]
```

Rendered as:

```
.  1  💣
.  2  2
.  1  💣
```

---

## Usage

```ts
// Generate grid
const mineGrid = mineGeneration(5, 5, 5);
const finalGrid = calculateClues(mineGrid);

// Render in React
<MineSweeperTable grid={finalGrid} />

// Regenerate
const generateNewGrid = () => {
  const mineGrid = mineGeneration(5, 5, 5);
  const finalGrid = calculateClues(mineGrid);
  setGrid(finalGrid);
};
```

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Key Concepts

- 2D array manipulation
- Randomization (Fisher-Yates shuffle)
- Grid traversal (8-directional)
- Separation of concerns
- React state management

---

## Future Improvements

- Interactive gameplay (click to reveal)
- Flagging mines
- Game over / win logic
- Flood fill for empty cells
- Better UI (Tailwind / animations)

---

## Notes

- The grid is generated once on load
- Numbers are calculated from mine positions, not random
- Logic is separated for scalability and testability

---

*Built as a learning project to understand algorithms, TypeScript, and React fundamentals.*