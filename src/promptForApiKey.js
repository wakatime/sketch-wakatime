import sketch from 'sketch';

import { getConfig, setConfig } from './ini';
import { isValidApiKey } from './utils';

export default function () {
  let apiKey = getConfig('settings', 'api_key');
  if (!isValidApiKey(apiKey)) apiKey = '';

  sketch.UI.getInputFromUser(
    'WakaTime API Key',
    {
      initialValue: apiKey,
    },
    (err, value) => {
      if (err) return;
      if (!isValidApiKey(value)) return;
      setConfig('settings', 'api_key', value);
    },
  );
}
