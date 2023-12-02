import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", () => {
  render(<App />);

  // get inputs and button
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  // simulate user input
  user.type(nameInput, "odin");
  user.type(emailInput, "odin@gmail");
  user.click(button);

  // get table cells
  const nameCell = screen.getByRole("cell", { name: "odin" });
  const emailCell = screen.getByRole("cell", { name: "odin@gmail" });

  // assertions
  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});
