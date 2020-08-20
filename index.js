#!/usr/bin/env node
const inquirer = require('inquirer');
const next = require('./next');

const askAppQuestions = () => {
  const questions = [
    {
      type: 'input',
      name: 'appName',
      message:
        'Enter name of your app: '
    }
  ];
  return inquirer.prompt(questions);
};

const run = async () => {
  const answer = await askAppQuestions();
  const { appName } = answer;

  if (!appName || appName.length <= 0) {
    console.log('Please enter a valid name for your new app.'.red);
    return process.exit(0);
  }

  const appDirectory = `${process.cwd()}/${appName}`;

  const res = await next.create(appName, appDirectory);

  if (!res) {
    console.log('There was an error generating your app.'.red);
    return process.exit(0);
  }

  return process.exit(0);
};

run();
