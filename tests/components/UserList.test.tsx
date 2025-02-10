import { screen, render } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("UserList", () => {
  it("should render an message with no users availables with and empty array", () => {
    render(<UserList users={[]}></UserList>);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render an array with Users and id", () => {
    const users = [
      { id: 1, name: "Mosh" },
      { id: 2, name: "Pablo" },
    ];

    render(<UserList users={users}></UserList>);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
