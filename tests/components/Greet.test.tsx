import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import UserAccount from "../../src/components/UserAccount";

describe("Greet", () => {
  it("should render Hello with the name", () => {
    render(<Greet name="Reymi"></Greet>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello reymi/i);
  });

  it("should render login", () => {
    render(<Greet name=""></Greet>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});

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
    //querybyRole
    //expect().not.toBeinDocument()
    const user = {
      id: 3243,
      name: "Reymi",
    };

    render(<UserAccount user={user}></UserAccount>);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
