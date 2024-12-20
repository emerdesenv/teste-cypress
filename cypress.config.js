const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "cxo83w",
    video: true,
    e2e: {
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
    },
    env: {
        urlLocal: 'https://saas2-beta.jelastic.saveincloud.net',
        urlApiLocal: 'http://localhost:3000'
    }
});
