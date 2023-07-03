#!/usr/bin/env node

const chalk = require("chalk");
const { botLogin, clientStatus } = require("./index.js");
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
    message: `What action should the AJS Runtime perform:`,
    choices: choices,
  };

  const answers = await inquirer.prompt(selectPrompt);
  const selectedOption = answers.selectedOption;

  // Handle the selected option here
  switch (selectedOption) {
    case "init":
      console.log(chalk.greenBright("Initialized 📦"));
      break;
    case "login":
      const { token } = await inquirer.prompt({
        type: "password",
        name: "token",
        message: "Enter your token:",
        mask: "*", // Mask the input with asterisks
      });
      botLogin(token);

      break;
    case "exit":
      console.log("Exiting...");
      process.exit(0);
  }
}

if (process.argv[2] === "ajsreg") {
  startCLI();
}
