import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render userName", () => {
    const user = {
      id: 3243,
      name: "Reymi",
    };

    render(<UserAccount user={user}></UserAccount>);

    const username = screen.getByText(/Reymi/i);
    expect(username).toBeInTheDocument();
  });

  it("should render edit button", () => {
    const user = {
      id: 3243,
      name: "Reymi",
      isAdmin: true,
    };

    render(<UserAccount user={user}></UserAccount>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Edit/i);
  });

  it("should not render edit button if user is not Admin", () => {
    const user = {
      id: 3243,
      name: "Reymi",
    };

    render(<UserAccount user={user}></UserAccount>);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
