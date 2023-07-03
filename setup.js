#!/usr/bin/env node

const chalk = require("chalk");
const { clientLogin, clientStatus } = require("./index.js");
const inquirer = require("inquirer");
const password = require("inquirer");

async function startCLI() {
  const choices = [
    { name: "Initialize", value: "init" },
    { name: "Login", value: "login" },
    { name: "Exit", value: "exit" },
  ];

  const selectPrompt = {
    type: "list",
    name: "selectedOption",
    message: `What action should the AJS Runtime perform :`,
    choices: choices,
  };

  inquirer.prompt(selectPrompt).then((answers) => {
    const selectedOption = answers.selectedOption;

    // Handle the selected option here
  });
  switch (selectedOption) {
    case "init":
      console.log(chalk.greenBright("Initialized 📦"));
      break;
    case "login":
      const { token } = await inquirer.prompt({
        type: "password",
        name: "password",
        message: "Enter your password:",
        mask: "*", // Mask the input with asterisks
      });

      clientLogin(token);
    case "exit":
      process.exitCode("Exiting...");
  }
}

startCLI();
