const { defineConfig } = require("cypress");
const { configurePlugin } = require('cypress-mongodb');
require('dotenv').config();

module.exports = defineConfig({
    reporter: 'cypress-multi-reporters',
    projectId: process.env.CYPRESS_RECORD_KEY,
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
            uri: process.env.MONGODB_URI,
            database: 'test',
            collection: 'carros'
        },
        urlSite: 'https://www.saucedemo.com',
        urlApiWeb: 'https://serverest.dev',
        urlApiLocal: 'http://localhost:3000',
        urlApiMongoDB: 'http://localhost:3000'
    }
});
