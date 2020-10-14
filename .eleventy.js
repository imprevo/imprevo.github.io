const pluginSass = require('eleventy-plugin-sass');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'assets/images' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/scripts': 'assets/scripts' });
  eleventyConfig.addPlugin(pluginSass, {
    outputDir: 'dist/assets/styles',
    remap: true,
  });

  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  };
};
