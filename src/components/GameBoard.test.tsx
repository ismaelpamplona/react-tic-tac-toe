// src/components/GameBoard.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import GameBoard from "./GameBoard";

test("renders the game board with 9 squares", () => {
  render(<GameBoard />);
  const squares = screen.getAllByRole("button");
  expect(squares.length).toBe(9); // Expecting 9 squares in the game board
});

test("switches players on square click", () => {
  render(<GameBoard />);
  const squares = screen.getAllByRole("button");

  // Click the first square
  fireEvent.click(squares[0]);
  expect(screen.getByText("Current Player: O")).toBeInTheDocument(); // Player should switch to O

  // Click the second square
  fireEvent.click(squares[1]);
  expect(screen.getByText("Current Player: X")).toBeInTheDocument(); // Player should switch back to X
});

test("detects a winning condition", () => {
  render(<GameBoard />);
  const squares = screen.getAllByRole("button");

  // Simulate a winning condition: X wins with the first row
  fireEvent.click(squares[0]); // X
  fireEvent.click(squares[3]); // O
  fireEvent.click(squares[1]); // X
  fireEvent.click(squares[4]); // O
  fireEvent.click(squares[2]); // X (Winning Move)

  expect(screen.getByText("Player X Wins!")).toBeInTheDocument(); // Check for win message
});

test("detects a draw condition", () => {
  render(<GameBoard />);
  const squares = screen.getAllByRole("button");

  // Simulate a draw condition: X and O fill the board without a winner
  fireEvent.click(squares[0]); // X
  fireEvent.click(squares[6]); // O
  fireEvent.click(squares[4]); // X
  fireEvent.click(squares[8]); // O
  fireEvent.click(squares[7]); // X
  fireEvent.click(squares[1]); // O
  fireEvent.click(squares[5]); // X
  fireEvent.click(squares[3]); // O
  fireEvent.click(squares[2]); // X (last move)

  expect(screen.getByText("It's a draw!")).toBeInTheDocument(); // Check for draw message
});
