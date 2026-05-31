const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '36x7h2',
  retries: 2,
  allowCypressEnv: false,
  e2e: {
    baseUrl: "http://qamid.tmweb.ru/client/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
