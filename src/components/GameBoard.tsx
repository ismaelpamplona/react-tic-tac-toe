import React from "react";

const GameBoard: React.FC = () => {
  return (
    <div className="game-board">
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <button key={index} role="button" className="square">
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default GameBoard;
