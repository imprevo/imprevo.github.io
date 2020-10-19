const pluginManifest = require('eleventy-plugin-manifest');

// TODO: manifestand favicons
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/static': '/' });
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
