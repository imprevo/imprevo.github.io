const pluginManifest = require('eleventy-plugin-manifest');
const htmlmin = require('html-minifier');
const { baseUrl } = require('./src/data/site');

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

function absoluteUrlFilter(url) {
  return `${baseUrl}${url}`;
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/static': '/' });
  eleventyConfig.addPlugin(pluginManifest);
  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });
  eleventyConfig.addFilter('absoluteUrl', absoluteUrlFilter);

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
