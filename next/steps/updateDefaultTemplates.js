const fse = require('fs-extra');
const ora = require('ora');
const configList = require('../default');

const installPackages = require('./installPackages');
const removeRedundantFiles = require('./removeRedundantFiles');

const updateDefaultTemplates = async () => {
  const spinner = ora('📝 Updating default templates...');

  await installPackages(configList);
  await removeRedundantFiles();

  const templateList = configList.reduce(
    (acc, val) => [...acc, ...val.templates],
    []
  );

  return new Promise((resolve) => {
    templateList.forEach((template) => {
      // OutputFile creates a directory when it doesn't exist
      fse.outputFile(template.path, template.file, (err) => {
        if (err) {
          return console.log(err);
        }
      });
    });

    spinner.succeed();
    resolve();
  });
};

module.exports = updateDefaultTemplates;
