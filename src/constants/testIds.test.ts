import { describe, expect, it } from "vitest";
import { buildProjectCardTestId } from "./testIds";

describe("buildProjectCardTestId", () => {
  it("namespaces the project id", () => {
    expect(buildProjectCardTestId("kite")).toBe("project-card-kite");
  });
});
