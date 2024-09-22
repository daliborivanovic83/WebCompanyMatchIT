/*
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl:"https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f",

    },
  },
});

*/ 
const { defineConfig } = require("cypress");
const gmailTester = require("gmail-tester");
const path = require("path");

module.exports = defineConfig({
  pageLoadTimeout: 12000,
  defaultCommandTimeout: 9000,
  viewportWidth: 2000,
  viewportHeight: 2000,

  e2e: {
    setupNodeEvents(on, config) { 
       on("task", {
        "gmail:check": async (args) => {
          const { from, to, subject } = args;
          const email = await gmail.check_inbox(
          path.resolve(__dirname, "OAuth.json"),
          path.resolve(__dirname, "AccessToken.json"),
          args.options
        );
        return email;
      },
    });},
    baseUrl:
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f",
  },
});



    
    

