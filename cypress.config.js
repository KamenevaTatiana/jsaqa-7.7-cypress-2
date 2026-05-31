const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  allowCypressEnv: false,
  e2e: {
    baseUrl: "http://qamid.tmweb.ru/client/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
