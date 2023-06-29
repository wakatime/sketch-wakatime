import { normalizeSpawnArguments } from './normalizeSpawnArguments';
import { handleData } from './handleData';

export function spawnSync(_command, _args, _options) {
  var opts = normalizeSpawnArguments(_command, _args, _options);

  if (opts.file[0] !== '.' && opts.file[0] !== '/' && opts.file[0] !== '~') {
    // means that someone refered to an executable that might be in the path, let's find it
    var whichChild = spawnSync('/bin/bash', ['-l', '-c', 'which ' + opts.file], { encoding: 'utf8' });
    if (whichChild.err) {
      return whichChild;
    }
    var resolvedCommand = String(whichChild.stdout).trim();
    if (!resolvedCommand.length) {
      return {
        err: new Error(String(opts.file) + ' ENOENT'),
      };
    }
    return spawnSync(resolvedCommand, _args, _options);
  }

  var options = opts.options;

  var pipe = NSPipe.pipe();
  var errPipe = NSPipe.pipe();

  try {
    var task = NSTask.alloc().init();
    task.setLaunchPath(NSString.stringWithString(opts.file).stringByExpandingTildeInPath());
    task.arguments = NSArray.arrayWithArray(opts.args || []);
    if (opts.envPairs) {
      task.environment = opts.envPairs;
    }

    if (options.cwd) {
      task.setCurrentDirectoryPath(NSString.stringWithString(options.cwd).stringByExpandingTildeInPath());
    }

    task.setStandardOutput(pipe);
    task.setStandardError(errPipe);

    task.launch();
    task.waitUntilExit();

    var stdoutIgnored = false;
    var stderrIgnored = false;

    var data;
    var stdoutValue;
    var stderrValue;

    if (opts.stdio[1] === 'ignored') {
      stdoutIgnored = true;
    } else if (opts.stdio[1] === 1) {
      data = pipe.fileHandleForReading().readDataToEndOfFile();
      stdoutValue = handleData(data, options.encoding || 'utf8');
    } else if (opts.stdio[1] === 2) {
      data = pipe.fileHandleForReading().readDataToEndOfFile();
      stdoutValue = handleData(data, options.encoding || 'utf8');
    }

    if (opts.stdio[2] === 'ignored') {
      stderrIgnored = true;
    } else if (opts.stdio[2] === 1) {
      data = errPipe.fileHandleForReading().readDataToEndOfFile();
      stderrValue = handleData(data, options.encoding || 'utf8');
    } else if (opts.stdio[2] === 2) {
      data = errPipe.fileHandleForReading().readDataToEndOfFile();
      stderrValue = handleData(data, options.encoding || 'utf8');
    }

    let stdout = null;
    if (!stdoutIgnored) {
      if (stdoutValue) {
        stdout = stdoutValue;
      } else {
        data = pipe.fileHandleForReading().readDataToEndOfFile();
        stdout = handleData(data, options.encoding || 'utf8');
      }
    }

    let stderr = null;
    if (!stderrIgnored) {
      if (stderrValue) {
        stderr = stderrValue;
      } else {
        data = errPipe.fileHandleForReading().readDataToEndOfFile();
        stderr = handleData(data, options.encoding || 'utf8');
      }
    }

    return {
      pid: String(task.processIdentifier()),
      status: Number(task.terminationStatus()),
      stdout: stdout,
      stderr: stderr,
    };
  } catch (err) {
    return {
      err: err,
    };
  }
}
