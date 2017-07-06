/**
 * Created by xinzhang on 7/6/17.
 */
const _ = require('lodash');
const path = require('path');

const ROOT_FOLDER_NAME = path.basename(process.cwd());

export function clearRequireCache() {
  const cachedModules = Object.keys(require.cache);
  const myArray = _.filter(cachedModules, function(module) {
    const srcFolderRegex = RegExp(`${ROOT_FOLDER_NAME}\/src\/`);
    const tempSrcFolderRegex = RegExp(`${ROOT_FOLDER_NAME}\/\.temp\/src\/`);

    return srcFolderRegex.test(module) || tempSrcFolderRegex.test(module);
  });
  myArray.forEach(function(module) {
    delete require.cache[module];
  });
}
