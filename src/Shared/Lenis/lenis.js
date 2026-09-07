// Shared handle for Main's Lenis instance — Lenis owns the scroll, so window.scrollTo gets snapped back.
let instance = null;

export const setLenisInstance = (lenis) => {
  instance = lenis;
};

export const getLenisInstance = () => instance;


export const scrollToTarget = (target, options = {}) => {
  const { offset = -100, ...rest } = options;

  if (instance) {
    // Lenis can still hold the previous page's scroll limit, which would clamp the target.
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
