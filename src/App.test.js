import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to the game scoring app/i);
  expect(linkElement).toBeInTheDocument();
});
