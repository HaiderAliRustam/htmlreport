const { defineConfig } = require("cypress");

const cypressMultiReporters = require('cypress-multi-reporters');

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome') {
      args.push('--disable-gpu');
      return args;
    }
  });
  cypressMultiReporters.installPlugin(on, config);
};


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: false,
  screenshotsFolder: false,

  reporterOptions: {
    charts: true,
    reportPageTitle: "Haider-Report",
    reportFilename: "haider",
    embeddedScreenshots: true,
    inlineAssets: true,
    showPassed: false,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
