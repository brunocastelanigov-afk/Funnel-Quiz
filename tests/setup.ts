class TestIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin = '0px'
  readonly thresholds: ReadonlyArray<number> = [0]

  constructor(private callback: IntersectionObserverCallback) {}

  disconnect(): void {}

  observe(target: Element): void {
    this.callback([
      {
        boundingClientRect: target.getBoundingClientRect(),
        intersectionRatio: 1,
        intersectionRect: target.getBoundingClientRect(),
        isIntersecting: true,
        rootBounds: null,
        target,
        time: Date.now(),
      },
    ], this)
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  unobserve(): void {}
}

globalThis.IntersectionObserver = TestIntersectionObserver
window.IntersectionObserver = TestIntersectionObserver

window.scrollTo = () => {}
