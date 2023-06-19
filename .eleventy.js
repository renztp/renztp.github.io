module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/dist/css");
  eleventyConfig.addPassthroughCopy("src/dist/js");
};
