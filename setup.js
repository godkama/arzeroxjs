#!/usr/bin/env node

const inquirer = require("inquirer");

function startCLI() {
  console.log("Initialized 📦");

  const choices = [
    { name: "Initialize", value: "init" },
    { name: "Login", value: "login" },
    { name: "Exit", value: "exit" },
  ];

  const selectPrompt = {
    type: "list",
    name: "selectedOption",
    message: "What action should the AJS Runtime perform :",
    choices: choices,
  };

  inquirer.prompt(selectPrompt).then((answers) => {
    const selectedOption = answers.selectedOption;

    // Handle the selected option here
    console.log(`Selected option: ${selectedOption}`);

    // Call startCLI again to continue the CLI flow
    startCLI();
  });
}

startCLI();
