/* eslint-disable no-console */
require('colors');
const shell = require('shelljs');

shell.config.silent = true;
const { createNextApp, updateDefaultTemplates, commitGit, verbose} = require('./steps');

exports.create = async (appName) => {

  await createNextApp(appName);
  await updateDefaultTemplates();
  await commitGit();

  verbose(appName);

  return true;
};
