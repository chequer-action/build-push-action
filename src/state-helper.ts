import * as core from '@actions/core';

export const tmpDir = process.env['STATE_tmpDir'] || '';

export function setTmpDir(tmpDir: string) {
  core.saveState('tmpDir', tmpDir);
}
export const imageID = core.getState('imageID');
export function setImageID(imageID: string) {
  core.saveState('imageID', imageID);
}
