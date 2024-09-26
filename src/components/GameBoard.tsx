// src/components/GameBoard.tsx

import React, { useState } from "react";
import "./GameBoard.css";

const GameBoard: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>("X");
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  const handleSquareClick = (index: number) => {
    if (squares[index] || winner) return; // Ignore click if square is occupied or there's a winner

    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    if (checkWinner(newSquares)) {
      setWinner(currentPlayer);
    } else if (newSquares.every((square) => square !== null)) {
      setIsDraw(true); // Set draw if all squares are filled
    } else {
      setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    }
  };

  const checkWinner = (squares: string[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return true; // There is a winner
      }
    }
    return false; // No winner
  };

  return (
    <div>
      <div className="winner-message">
        {winner && <div>Player {winner} Wins!🏆</div>}
        {isDraw && <div>It's a draw!🔄</div>}
      </div>
      <div className="game-board">
        {squares.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleSquareClick(index)}
          >
            {square || index + 1} {/* Show X or O or the index */}
          </button>
        ))}
      </div>
      <div className="cur-player-message">Current Player: {currentPlayer}</div>
    </div>
  );
};

export default GameBoard;
