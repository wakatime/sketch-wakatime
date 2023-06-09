import fs from '@skpm/fs';
import os from '@skpm/os';
import process from '@skpm/process';

export function getHomeDirectory() {
  let home = process.env.WAKATIME_HOME;
  if (home && home.trim() && fs.existsSync(home.trim())) return home.trim();
  return process.env['HOME'] || process.cwd();
}

export function quote(str) {
  if (str.includes(' ')) return `"${str.replace('"', '\\"')}"`;
  return str;
}

export function isValidApiKey(key) {
  if (!key) return false;
  var re = new RegExp('^(waka_)?[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$', 'i');
  return re.test(key);
}

export function urlToPath(path) {
  path = decodeURIComponent(path.toString());
  if (path.indexOf('file://') == 0) path = path.substring(7);
  return path;
}
