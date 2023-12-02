import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    {
      name: "odin",
      email: "odin@gmail",
    },
    { name: "samantha", email: "samantha@gmail" },
  ];

  render(<UserList users={users} />);

  return {
    users,
  };
}

test("renders one row per user", () => {
  // prop data
  const { users } = renderComponent();

  // render the component
  // const { container } = render(<UserList users={users} />);
  // screen.logTestingPlaygroundURL();

  // find the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr");

  // assertions
  expect(rows).toHaveLength(users.length);
});

test("renders the email and name of each user", () => {
  const { users } = renderComponent();

  for (const user of users) {
    // find the cells in the row
    const nameCell = screen.getByRole("cell", { name: user.name });
    const emailCell = screen.getByRole("cell", { name: user.email });

    // assertions
    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
  }
});
