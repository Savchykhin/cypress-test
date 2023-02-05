const { defineConfig } = require("cypress");
const defaultConfig = require("./cypress.config.js");
const defu = require('defu');

module.exports = defineConfig(
    defu(
        {
            e2e: {
                baseUrl: 'http://prod-url.com',
            },
        },
        defaultConfig
    )
);



