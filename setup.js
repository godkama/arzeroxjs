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
