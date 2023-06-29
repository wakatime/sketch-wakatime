import { isDebugEnabled } from './ini';

export const LEVEL = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

export function debug(msg) {
  log(msg, LEVEL.DEBUG);
}

export function info(msg) {
  log(msg, LEVEL.INFO);
}

export function warn(msg) {
  log(msg, LEVEL.WARN);
}

export function error(msg) {
  log(msg, LEVEL.ERROR);
}

export function log(msg, level) {
  if (level == LEVEL.DEBUG && !isDebugEnabled()) return;
  console.log('[WAKATIME] [' + level + '] ' + msg);
}
