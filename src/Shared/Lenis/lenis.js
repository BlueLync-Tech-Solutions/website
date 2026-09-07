// Shared handle for the single Lenis instance created in Main.
//
// Lenis takes over the page scroll, so a plain `window.scrollTo` from a
// component gets snapped straight back to Lenis' own position. Components that
// need to scroll programmatically go through `scrollToTarget` instead.

let instance = null;

export const setLenisInstance = (lenis) => {
  instance = lenis;
};

export const getLenisInstance = () => instance;

/**
 * Scroll to an element (or an absolute offset), clearing the sticky navbar.
 *
 * @param {HTMLElement|number|string} target
 * @param {object} [options] forwarded to `lenis.scrollTo`
 */
export const scrollToTarget = (target, options = {}) => {
  const { offset = -100, ...rest } = options;

  if (instance) {
    // Straight after a route change Lenis may still hold the previous page's
    // scroll limit, which would clamp the target away. Re-measure first.
    instance.resize();
    instance.scrollTo(target, { offset, duration: 1.2, ...rest });
    return;
  }

  // Fallback for when Lenis has not been initialised yet.
  const top =
    typeof target === 'number'
      ? target + offset
      : target.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({ top, behavior: 'smooth' });
};
