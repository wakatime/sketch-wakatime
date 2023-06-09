import path from 'path';
import process from '@skpm/process';
import child_process from '@skpm/child_process';

import { getHomeDirectory } from './utils';

export function sendHeartbeat(context, file, isWrite) {
  // console.log('Sending heartbeat:' + file);
  const sketchVersion = NSBundle.mainBundle().infoDictionary().CFBundleShortVersionString;
  const bin = getHomeDirectory() + '/.wakatime/wakatime-cli';
  const args = ['--entity', file, '--plugin', 'sketch/' + sketchVersion + ' sketch-wakatime/' + context.plugin.version()];
  if (isWrite) args.push('--write');

  // console.log(bin + ' ' + args.join(' '));
  child_process.execFile(bin, args);
}
