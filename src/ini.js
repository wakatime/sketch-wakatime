import fs from '@skpm/fs';

import { getHomeDirectory } from './utils';

export function getConfig(section, key) {
  const file = getHomeDirectory() + '/.wakatime.cfg';
  let contents = '';
  try {
    contents = fs.readFileSync(file, { encoding: 'utf-8' });
  } catch (e) { }
  if (contents) {
    let currentSection = '';
    let lines = contents.split('\n');
    for (let i in lines) {
      let line = lines[i];
      if (line) {
        if (line.trim().indexOf('[') == 0 && line.trim().indexOf(']') == line.length - 1) {
          currentSection = line
            .trim()
            .substring(1, line.trim().length - 1)
            .toLowerCase();
        } else if (section.toLowerCase() == currentSection) {
          const parts = line.split('=');
          if (parts.length == 2 && parts[0].trim() == key) {
            return parts[1].trim();
          }
        }
      }
    }
  }
  return null;
}

export function setConfig(section, key, val) {
  const file = getHomeDirectory() + '/.wakatime.cfg';
  let output = [];
  let currentSection = '';
  let found = false;
  let contents = '';
  try {
    contents = fs.readFileSync(file, { encoding: 'utf-8' });
  } catch (e) { }
  if (contents) {
    let lines = contents.split('\n');
    for (let i in lines) {
      const line = lines[i];
      if (line && line.trim().indexOf('[') == 0 && line.trim().indexOf(']') == line.length - 1) {
        if (section.toLowerCase() == currentSection && !found) {
          output.push(key + ' = ' + val);
          found = true;
        }
        currentSection = line
          .trim()
          .substring(1, line.trim().length - 1)
          .toLowerCase();
        output.push(line);
      } else if (line && section.toLowerCase() == currentSection) {
        const parts = line.split('=');
        const currentKey = parts[0].trim();
        if (currentKey == key) {
          if (!found) {
            output.push(key + ' = ' + val);
            found = true;
          }
        } else {
          output.push(line);
        }
      } else {
        output.push(line);
      }
    }
  }
  if (!found) {
    if (section.toLowerCase() != currentSection) {
      output.push('[' + section.toLowerCase() + ']');
    }
    output.push(key + ' = ' + val);
  }
  fs.writeFileSync(file, output.join('\n'), { encoding: 'utf8' });
}
