import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

export const renderWithRouter = (ui: ReactElement, initialPath = "/") =>
  render(<MemoryRouter initialEntries={[initialPath]}>{ui}</MemoryRouter>);
