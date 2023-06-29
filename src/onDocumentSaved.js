import { getSelectedDocument } from 'sketch/dom';

import { debug } from './logger';
import { sendHeartbeat } from './sendHeartbeat';

export function onDocumentSaved(context) {
  if (context.actionContext.autosaved == 1) return;
  debug('onDocumentSaved');

  const document = getSelectedDocument();
  if (!document) return;
  const currentFile = document.path;
  if (!currentFile) return;

  const seconds = 60;
  const now = new Date().getTime() / 1000;

  let threadDictionary = NSThread.mainThread().threadDictionary();

  const lastTime = threadDictionary.wakatimeLastTime || now - seconds;
  const lastFile = threadDictionary.wakatimeLastFileSaved;

  const timeElapsed = now - lastTime;
  if (lastFile != currentFile || timeElapsed > seconds) {
    threadDictionary.wakatimeLastFile = currentFile;
    threadDictionary.wakatimeLastFileSaved = currentFile;
    threadDictionary.wakatimeLastTime = now;
    sendHeartbeat(context, currentFile, true);
  }
}
