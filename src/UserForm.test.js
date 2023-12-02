import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render form
  render(<UserForm />);

  // get inputs and button
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assertions
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  // mock funtion
  const onUserAdd = jest.fn();

  // render form
  render(<UserForm onUserAdd={onUserAdd} />);

  // get inputs and button
  // const nameInput = screen.getByLabelText(/name/i);
  // const emailInput = screen.getByLabelText(/email/i);
  // above is another option, but RTL recomends to use getByRole
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  const button = screen.getByRole("button");

  // simulate user input
  user.type(nameInput, "odin");
  user.type(emailInput, "odin@gmail.com");

  // simulate form submission
  user.click(button);

  // assertions
  expect(onUserAdd).toHaveBeenCalled();
  expect(onUserAdd).toHaveBeenCalledWith({
    name: "odin",
    email: "odin@gmail.com",
  });
});

test("empties two inputs when form is submitted", () => {
  // render form
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  const button = screen.getByRole("button");

  // simulate user input
  user.type(nameInput, "odin");
  user.type(emailInput, "odin@gmail.com");

  // simulate form submission
  user.click(button);

  // assertions
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
