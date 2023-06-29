import { debug } from '../logger';
import { spawnSync } from './spawnSync';

function validateTimeout(timeout) {
  if (timeout != null && !(Number.isInteger(timeout) && timeout >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.timeout');
  }
}

function validateMaxBuffer(maxBuffer) {
  if (maxBuffer != null && !(typeof maxBuffer === 'number' && maxBuffer >= 0)) {
    throw new Error('ERR_OUT_OF_RANGE options.maxBuffer');
  }
}

export function execFileSync(file, args, options) {
  var defaultOptions = {
    encoding: 'buffer',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null,
    shell: false,
  };

  if (typeof args === 'object' && !Array.isArray(args)) {
    // function (file, options)
    options = Object.assign(defaultOptions, args);
    args = [];
  } else {
    // function (file)
    options = Object.assign(defaultOptions, options || {});
  }

  // Validate the timeout, if present.
  validateTimeout(options.timeout);

  // Validate maxBuffer, if present.
  validateMaxBuffer(options.maxBuffer);

  var child = spawnSync(file, args, {
    cwd: options.cwd,
    env: options.env,
    gid: options.gid,
    uid: options.uid,
    shell: options.shell,
    encoding: options.encoding,
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  if (child.status !== 0) {
    let error = new Error(`Failed to run ${child.status}: ` + String(child.stderr || child.stdout));
    error.pid = child.pid;
    error.status = child.status;
    error.stdout = child.stdout;
    error.stderr = child.stderr;
    throw error;
  }

  return child.stdout;
}
