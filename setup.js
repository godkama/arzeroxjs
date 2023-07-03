#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const chalk = require("chalk");
const { botLogin, clientStatus } = require("./index.js");
const inquirer = require("inquirer");
const password = require("inquirer");

async function startCLI() {
  console.clear();
  process.title = "AJS Runtime";
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
      const fs = require("fs");
      const path = require("path");

      const rootPath = process.cwd(); // Get the current working directory
      const folderPath = path.join(rootPath, "Commands");
      const indexFilePath = path.join(rootPath, "index.js");
      const sampleCode = `console.log('Hello, world!');`;

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log("Created folder: Commands");
      }
      console.log(chalk.bgBlue('"Commands" folder already exists.'));
      if (!fs.existsSync(indexFilePath)) {
        fs.writeFileSync(indexFilePath, sampleCode);
        console.log(chalk.bgBlue("Created index.js file."));
      }
      console.log(
        chalk.bgBlue("index.js file already exists. Editing the file.")
      );

      fs.writeFileSync(indexFilePath, sampleCode);
      console.log(chalk.bgBlue("Updated index.js file."));

      console.log("Process finished.");

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

// Check if launched using Git Bash
const isGitBash = process.env.SHELL && process.env.SHELL.includes("bash.exe");

if (isGitBash) {
  console.error(
    "This script is currently not compatible with Git Bash for application issues. Please use a different terminal while we are looking into resolving the problem."
  );
  process.exit(1);
}

startCLI();
