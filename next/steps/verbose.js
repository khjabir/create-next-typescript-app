/* eslint-disable no-console */
const verbose = (appName) => {
  console.log(`\n🎉 Success!\n✨ Created your new Next app with typescript support`.green);

  console.log('\n\tyou can run several commands:\n');
  console.log('\tyarn dev'.cyan);
  console.log('\t\tStarts the development server.');

  console.log('\n\tyarn build'.cyan);
  console.log('\t\tBuilds the app for production.');

  console.log('\n\tyarn start'.cyan);
  console.log('\t\tRuns the built app in production mode.');

  console.log('\n\tWe suggest that you begin by typing:');

  console.log(`\n\tcd ${appName}\n\tyarn dev\n`.cyan);
};

module.exports = verbose;
