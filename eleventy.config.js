const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: 'src',
      layouts: '_includes/layouts',
      data: '_data',
    },  
    templateFormats: ['html', 'md', 'njk'],
    htmlTemplateEngine: ['njk'],
    markdownTemplateEngine: 'njk',
  };
};
