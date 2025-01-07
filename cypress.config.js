const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    projectId: "m5r318",
    video: true,
    reporterOptions: {
        reporterEnabled: 'cypress-mochawesome-reporter',
        cypressMochawesomeReporterReporterOptions: {
            charts: true,
            reportPageTitle: 'Relatório de Testes',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false
        }
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
    env: {
        urlSite: 'https://www.saucedemo.com/',
        urlApiLocal: 'http://localhost:3000',
        urlApiWeb: 'https://serverest.dev'
    }
});
