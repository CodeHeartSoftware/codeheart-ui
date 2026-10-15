import { afterEach, describe, expect, it, vi } from "vitest";
import { getRevealDirection, observeOnce } from "./reveal";

type ObserverCallback = (entries: Pick<IntersectionObserverEntry, "isIntersecting">[]) => void;

const installObserverMock = () => {
  const instance = { observe: vi.fn(), disconnect: vi.fn(), callback: undefined as ObserverCallback | undefined };
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn(function (this: unknown, callback: ObserverCallback) {
      instance.callback = callback;
      return instance;
    }),
  );
  return instance;
};

describe("getRevealDirection", () => {
  it("alternates sides, starting from the right", () => {
    expect([0, 1, 2, 3].map(getRevealDirection)).toEqual(["right", "left", "right", "left"]);
  });
});

describe("observeOnce", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("calls back and stops watching the first time the element intersects", () => {
    const observer = installObserverMock();
    const element = document.createElement("div");
    const onVisible = vi.fn();

    observeOnce(element, onVisible);
    observer.callback?.([{ isIntersecting: false }]);

    expect(observer.observe).toHaveBeenCalledWith(element);
    expect(onVisible).not.toHaveBeenCalled();

    observer.callback?.([{ isIntersecting: true }]);

    expect(onVisible).toHaveBeenCalledTimes(1);
    expect(observer.disconnect).toHaveBeenCalled();
  });

  it("disconnects on cleanup", () => {
    const observer = installObserverMock();

    observeOnce(document.createElement("div"), vi.fn())();

    expect(observer.disconnect).toHaveBeenCalled();
  });

  it("reveals immediately when IntersectionObserver is unavailable", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    const onVisible = vi.fn();

    observeOnce(document.createElement("div"), onVisible);

    expect(onVisible).toHaveBeenCalledTimes(1);
  });
});
