module.exports = function(eleventyConfig) {
  // Configuration
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setBrowserSyncConfig({ ui: false, ghostMode: false });

  // Plugins
  [
    require('eleventy-plugin-sourcemapped-postcss'),
  ].forEach(plugin => eleventyConfig.addPlugin(plugin));

  // Pass-through copy
  [
    'img',
    'assets/fonts',
  ].forEach(path => eleventyConfig.addPassthroughCopy(path));

  // Filters
  [
    require("./lib/11ty-filter-fullurl"),
  ].forEach(
    // Don't forget to name functions before exporting!
    filter => eleventyConfig.addFilter(filter.name, filter),
  );


  // Configuration
  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts"
    },

    templateFormats: [
      "md",
      "njk",
      "html",
    ],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
