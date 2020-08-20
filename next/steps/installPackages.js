const ora = require('ora');
const shell = require('shelljs');

const installPackages = async (configList) => {
  let dependencies = [];
  let devDependencies = [];

  configList.forEach((config) => {
    dependencies = [...dependencies, ...config.dependencies];
    devDependencies = [...devDependencies, ...config.devDependencies];
  });

  await new Promise((resolve) => {
    const spinner = ora('🚚 Downloading and Installing additional dependencies...').start();

    shell.exec(`npm install --save ${dependencies.join(' ')}`, () => {
      spinner.succeed();
      resolve();
    });
  });

  await new Promise((resolve) => {
    const spinner = ora('👨‍💻 Downloading and Installing additional dev dependencies...').start();

    shell.exec(`npm install --save-dev ${devDependencies.join(' ')}`, () => {
      spinner.succeed();
      resolve();
    });
  });
};

module.exports = installPackages;
