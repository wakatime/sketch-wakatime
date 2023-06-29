import path from 'path';
import child_process from '@skpm/child_process';

import promptForApiKey from './promptForApiKey';
import { getConfig } from './ini';
import { info } from './logger';
import { isValidApiKey } from './utils';

export function onStartup(context) {
  info('Initializing WakaTime v' + context.plugin.version());
  const installScript = path.dirname(path.dirname(context.scriptPath)) + '/Resources/install_cli.py';
  const bin = '/usr/bin/python3';
  const args = [installScript];
  child_process.execFile(bin, args);

  const apiKey = getConfig('settings', 'api_key');
  if (!isValidApiKey(apiKey)) promptForApiKey();
}
