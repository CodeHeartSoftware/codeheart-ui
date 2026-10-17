import { describe, expect, it } from "vitest";
import type { Service } from "@/types/content";
import { buildServicePanelId, buildServiceSpineId, getDefaultServiceId } from "./serviceStack";

const buildService = (id: string, isFeatured?: boolean): Service => ({
  id,
  kicker: id,
  title: id,
  headline: id,
  summary: id,
  details: [],
  idealFor: id,
  ctaLabel: id,
  isFeatured,
});

describe("getDefaultServiceId", () => {
  it("picks the featured service", () => {
    expect(getDefaultServiceId([buildService("a"), buildService("b", true)])).toBe("b");
  });

  it("falls back to the first service", () => {
    expect(getDefaultServiceId([buildService("a"), buildService("b")])).toBe("a");
  });

  it("returns an empty id for an empty list", () => {
    expect(getDefaultServiceId([])).toBe("");
  });
});

describe("service element ids", () => {
  it("builds distinct spine and panel ids", () => {
    expect(buildServiceSpineId("rescue")).toBe("service-spine-rescue");
    expect(buildServicePanelId("rescue")).toBe("service-panel-rescue");
  });
});
