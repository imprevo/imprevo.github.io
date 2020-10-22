const pluginManifest = require('eleventy-plugin-manifest');
const htmlmin = require('html-minifier');

const prod = process.env.NODE_ENV === 'production';

function htmlMinTransform(content, outputPath) {
  if (outputPath.endsWith('.html')) {
    return htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
    });
  }

  return content;
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/static': '/' });
  eleventyConfig.addPlugin(pluginManifest);
  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  if (prod) {
    eleventyConfig.addTransform('htmlmin', htmlMinTransform);
  }

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
