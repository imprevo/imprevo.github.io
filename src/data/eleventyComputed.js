module.exports = {
  permalink:
    '{% set p = page.filePathStem | replace("/pages/", "/") %}' +
    '{{ (permalink or p) + ".html" }}',
};
