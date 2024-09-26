import { render, screen } from "@testing-library/react";
import GameBoard from "./GameBoard";

test("renders the game board with 9 squares", () => {
  render(<GameBoard />);
  const squares = screen.getAllByRole("button");
  expect(squares.length).toBe(9); // Expecting 9 squares in the game board
});
