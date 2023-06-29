import path from 'path';
import process from '@skpm/process';

import { debug, error } from './logger';
import { execFileSync } from './child_process/execFileSync';
import { getHomeDirectory } from './utils';

export function sendHeartbeat(context, file, isWrite) {
  debug('Sending heartbeat: ' + file);
  const sketchVersion = NSBundle.mainBundle().infoDictionary().CFBundleShortVersionString;
  const bin = getHomeDirectory() + '/.wakatime/wakatime-cli';
  const args = ['--entiy', file, '--plugin', 'sketch/' + sketchVersion + ' sketch-wakatime/' + context.plugin.version()];
  if (isWrite) args.push('--write');

  debug(bin + ' ' + args.join(' '));
  try {
    const stdout = execFileSync(bin, args);
    if (stdout) debug(stdout);
  } catch (e) {
    error(e);
  }
}
