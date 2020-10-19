const pluginManifest = require('eleventy-plugin-manifest');
const pluginSass = require('eleventy-plugin-sass');

// TODO: manifestand favicons
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'assets/images' });
  eleventyConfig.addPlugin(pluginSass, {
    outputDir: 'dist/assets/styles',
    remap: true,
  });
  eleventyConfig.addPlugin(pluginManifest);
  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  return {
    dir: {
      input: 'src',
      data: 'data',
      includes: 'components',
      layouts: 'layouts',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  };
};
