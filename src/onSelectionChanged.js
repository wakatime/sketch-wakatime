import { getSelectedDocument } from 'sketch/dom';
import { sendHeartbeat } from './sendHeartbeat';

export function onSelectionChanged(context) {
  // console.log('onSelectionChanged');

  const document = getSelectedDocument();
  if (!document) return;
  const currentFile = document.path;
  if (!currentFile) return;

  const seconds = 120;
  const now = new Date().getTime() / 1000;

  let threadDictionary = NSThread.mainThread().threadDictionary();

  const lastTime = threadDictionary.wakatimeLastTime || now - seconds;
  const lastFile = threadDictionary.wakatimeLastFile;

  const timeElapsed = now - lastTime;
  if (lastFile != currentFile || timeElapsed > seconds) {
    threadDictionary.wakatimeLastFile = currentFile;
    threadDictionary.wakatimeLastTime = now;
    sendHeartbeat(context, currentFile, false);
  }
}
