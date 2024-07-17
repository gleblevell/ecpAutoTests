import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'pracf5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
