import { screen, render } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longText = "a".repeat(limit + 1);
  const truncatedText = longText.substring(0, limit) + "...";

  it("should return short text", () => {
    const text = "Short Text";

    render(<ExpandableText text={text}></ExpandableText>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should truncate text is longer than 255 characters", () => {
    render(<ExpandableText text={longText}></ExpandableText>);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/more/i);
  });

  it("should expand text with shoy more button click", async () => {
    render(<ExpandableText text={longText}></ExpandableText>);

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it("should collapse text when show less button click", async () => {
    render(<ExpandableText text={longText}></ExpandableText>);
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    await user.click(button);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });
});
