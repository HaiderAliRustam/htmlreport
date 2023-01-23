


const { defineConfig } = require('cypress');


module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  video:false,
  screenshotsFolder: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Haider-Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    showPassed : false,
    saveAllAttempts: false,
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
  
});

