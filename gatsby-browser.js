/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const { setViewportSize } = require('./src/utils/viewport');

exports.onClientEntry = () => {
  setViewportSize();
  window.addEventListener('resize', setViewportSize);
};
