import { vi, describe, it, expect, beforeEach } from "vitest";

import { renderWithTheme } from "@utils/unit-test-container";

import InfiniteScroll from ".";

interface ObserverInstanceTypeCustom extends IntersectionObserver {
  trigger: (isIntersecting?: boolean) => void;
}

let observerInstance: ObserverInstanceTypeCustom;
const mockLoadMore = vi.fn();

describe("InfiniteScroll Component", () => {
  const mockIntersectionObserver = vi.fn((callback) => {
    observerInstance = {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
      trigger: (isIntersecting = true) => {
        callback([{ isIntersecting }], observerInstance);
      }
    } as unknown as ObserverInstanceTypeCustom;
    return observerInstance;
  });

  window.IntersectionObserver = mockIntersectionObserver;

  beforeEach(() => {
    mockLoadMore.mockClear();
    mockIntersectionObserver.mockClear();
  });

  it("render component", () => {
    renderWithTheme(<InfiniteScroll loadMore={mockLoadMore} />);

    expect(mockLoadMore).not.toHaveBeenCalled();

    observerInstance.trigger(true);

    expect(mockLoadMore).toHaveBeenCalledTimes(1);
  });
});
