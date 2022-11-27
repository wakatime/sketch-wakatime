
var utils = {};

utils.isValidApiKey = function(key) {
  if (!key) return false;
  var re = new RegExp('^(waka_)?[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$', 'i');
  return re.test(key);
};

utils.urlToPath = function(path) {
  path = decodeURIComponent(path.toString());
  if (path.indexOf('file://') == 0)
    path = path.substring(7);
  return path;
};
