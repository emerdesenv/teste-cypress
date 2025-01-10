const { defineConfig } = require("cypress");

const { configurePlugin } = require('cypress-mongodb');

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
            configurePlugin(on);
        },
    },
    env: {
        mongodb: {
            uri: 'mongodb+srv://testek6:LCZ8iX13ur40YCVO@cluster0.r8goc.mongodb.net/',
            database: 'test',
            collection: 'carros'
        },
        urlSite: 'https://www.saucedemo.com/',
        urlApiWeb: 'https://serverest.dev',
        urlApiLocal: 'http://localhost:3000',
        urlApiMongoDB: 'http://localhost:3000'
    }
});
