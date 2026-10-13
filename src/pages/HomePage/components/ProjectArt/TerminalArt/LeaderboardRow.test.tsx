import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LeaderboardRow from "./LeaderboardRow";

const entry = { bot: "minimax-mia", record: "21–3" };

describe("LeaderboardRow", () => {
  it("shows the rank, bot, and record", () => {
    render(<LeaderboardRow entry={entry} index={0} />);

    expect(screen.getByRole("listitem")).toHaveTextContent("01minimax-mia21–3");
  });

  it("highlights only the leader", () => {
    const { rerender } = render(<LeaderboardRow entry={entry} index={0} />);
    expect(screen.getByRole("listitem")).toHaveClass("leader");

    rerender(<LeaderboardRow entry={entry} index={1} />);
    expect(screen.getByRole("listitem")).not.toHaveClass("leader");
  });
});
