const readMe = require('./templates/README');

module.exports = {
  name: 'README',
  dependencies: [],
  devDependencies: [],
  packageEntries: [],
  templates: [
    { path: 'README.md', file: readMe }
  ]
};
