import React from "react";

const Board = () => {

  let boardData = {};

  // let blocks = [];
  // const fillBlocks = () => {
  //   for(let i = 0; i < 9; i++){
  //     blocks.push({
  //       value: i,
  //     })
  //   }
  // };

  // fillBlocks();

  let blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let groups = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function renderBoard() {

    return (
      <div className="full-board">
        {groups.map((group, i) => (
          <div key={`group-${i}`} className="board-group">
            {blocks.map((block, j) => (
              <div key={`block-${i}-${j}`} className="board-block">
                {/* {`${i}-${j}`} */}
                <input className='number-input' type="number" min={1} max={9}></input>
                </div>
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