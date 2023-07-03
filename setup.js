#!/usr/bin/env node

const { default: inquirer } = require("inquirer");

function startCLI() {
  console.log("Initialized 📦");

  const choices = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ];

  const selectPrompt = {
    type: "list",
    name: "selectedOption",
    message: "Select an option:",
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
