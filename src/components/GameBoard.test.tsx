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
