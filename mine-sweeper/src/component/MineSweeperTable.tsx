import React from "react";

type Props = {
  grid: number[][];
};

const MinesweeperTable: React.FC<Props> = ({ grid }) => {
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {grid.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                key={j}
                style={{
                  border: "1px solid #ccc",
                  width: "40px",
                  height: "40px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {cell === -1 ? "*" : cell === 0 ? "" : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MinesweeperTable;
