const ora = require('ora');
const shell = require('shelljs');

const removeRedundantFiles = () => {
  return new Promise(resolve => shell.exec('rm -rf pages/index.js pages/_app.js', () => resolve()));
};

module.exports = removeRedundantFiles;
