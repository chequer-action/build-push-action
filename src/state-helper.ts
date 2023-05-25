import * as core from '@actions/core';

export const IsPost = !!process.env['STATE_isPost'];
export const tmpDir = process.env['STATE_tmpDir'] || '';

export function setTmpDir(tmpDir: string) {
  core.saveState('tmpDir', tmpDir);
}

if (!IsPost) {
  core.saveState('isPost', 'true');
}

export const imageID = core.getState('imageID');
export function setImageID(imageID: string) {
  core.saveState('imageID', imageID);
}
