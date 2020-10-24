module.exports = function fullUrl(path) {
  return /^http[s]?:\//.test(path) ? path : new URL(path,metadata.url);
}
