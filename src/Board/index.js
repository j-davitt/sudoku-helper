import React from "react";

const Board = () => {

  let blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let groups = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function renderBoard() {

    return (
      <div className="full-board">
        {groups.map((group, i) => (
          <div key={`group-${i}`} className="board-group">
            {blocks.map((block, j) => (
              <div key={`block-${i}-${j}`} className="board-block">{`${i}-${j}`}</div>
            ))}
          </div>
        ))}
      </div>
    )

  };

  return (
    <div className="board-render-function">{renderBoard()}</div>
  )
};

export default Board;