import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CAPABILITIES, PROCESS_STEPS } from "@/constants/content";
import { TestIds } from "@/constants/testIds";
import { renderWithRouter } from "@/test/renderWithRouter";
import HowWeWorkPage from "./HowWeWorkPage";

describe("HowWeWorkPage", () => {
  it("numbers every capability and process step", () => {
    renderWithRouter(<HowWeWorkPage />, "/how-we-work");

    const capabilities = within(screen.getByTestId(TestIds.CAPABILITY_LIST)).getAllByRole("article");
    const steps = within(screen.getByTestId(TestIds.PROCESS_LIST)).getAllByRole("article");

    expect(capabilities).toHaveLength(CAPABILITIES.length);
    expect(steps).toHaveLength(PROCESS_STEPS.length);
    expect(steps[3]).toHaveTextContent("04");
  });

  it("lists the points under each process step", () => {
    renderWithRouter(<HowWeWorkPage />, "/how-we-work");

    const steps = within(screen.getByTestId(TestIds.PROCESS_LIST)).getAllByRole("article");

    PROCESS_STEPS.forEach((step, index) => {
      expect(within(steps[index]).getAllByRole("listitem")).toHaveLength(step.points?.length ?? 0);
    });
  });
});
