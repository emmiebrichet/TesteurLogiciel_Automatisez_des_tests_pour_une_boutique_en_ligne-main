const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bb85rz',
  env: {
    apiUrl: "http://localhost:8081/api/doc"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Implémentez ici les écouteurs d'événements si nécessaire
    },
    baseUrl: "http://localhost:8080/",

  
  },
});
