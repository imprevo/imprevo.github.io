/**
 * Sets the real viewport size to the CSS Custom Properties.
 *
 * See: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
export const setViewportSize = () => {
  const vh = window.innerHeight * 0.01;
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
};
