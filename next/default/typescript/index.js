const tsConfig = require('./templates/tsconfig');
const nextEnv = require('./templates/next-env.d.ts');
const app = require('./templates/_app');

module.exports = {
  name: 'Typescript',
  dependencies: ['typescript', '@types/react', '@types/node'],
  devDependencies: [],
  packageEntries: [],
  templates: [
    { path: 'tsconfig.json', file: tsConfig },
    { path: 'next-env.d.ts', file: nextEnv },
    { path: 'pages/_app.tsx', file: app }
  ]
};
