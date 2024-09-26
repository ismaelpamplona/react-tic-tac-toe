import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Tic Tac Toe game board", () => {
  render(<App />);
  const playerText = screen.getByText(/current player/i); // Change this line
  expect(playerText).toBeInTheDocument(); // Check if "Current Player" is displayed
});
