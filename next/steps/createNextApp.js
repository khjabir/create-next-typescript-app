/* eslint-disable no-console */
const ora = require('ora');
const shell = require('shelljs');

const createNextApp = (appName) => {
  const spinner = ora('Creating a basic nextjs app... (May take more than 60 seconds)').start();

  return new Promise((resolve, reject) => {
    shell.exec(
      `npx create-next-app ${appName} -y`,
      () => {
        const cdRes = shell.cd(appName);

        if (cdRes.code !== 0) {
          const error = `Error changing directory to: ${appName}`;
          console.log(error.red);
          reject(new Error(error));
        }

        spinner.succeed();
        resolve();
      }
    );
  });
};

module.exports = createNextApp;
