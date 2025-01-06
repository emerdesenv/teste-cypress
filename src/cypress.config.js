const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "m5r318",
    video: true,
    e2e: {
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
    },
    env: {
        urlSite: 'https://www.saucedemo.com/',
        urlApiLocal: 'http://localhost:3000'
    }
});
