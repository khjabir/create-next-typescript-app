const landingPage = require('./templates/index.js');

module.exports = {
  name: 'Landing Page',
  dependencies: [],
  devDependencies: [],
  packageEntries: [],
  templates: [
    { path: 'pages/index.tsx', file: landingPage }
  ]
};
