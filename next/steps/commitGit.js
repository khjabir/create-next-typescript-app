const ora = require('ora');
const shell = require('shelljs');

const commitGit = () => {
  const spinner = ora('🔐 Committing files to Git...');

  return new Promise((resolve) => {
    shell.exec(
      'git add . && git commit --no-verify -m ":tada: Scaffolding commit from Create Next TypeScript App"',
      () => {
        spinner.succeed();
        resolve();
      }
    );
  });
};

module.exports = commitGit;
