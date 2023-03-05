const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
  // disable permalinks
  eleventyConfig.setDynamicPermalinks(false)

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
