#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const chalk = require("chalk");
const { botLogin, clientStatus } = require("./index.js");
const inquirer = require("inquirer");
blankCode = "© 2023, DEV BY KAMA\nnull";

async function startCLI() {
  console.clear();
  process.title = "AJS Runtime";

  // Define the available choices
  const choices = [
    { name: "Initialize", value: "init" },
    { name: "Login", value: "login" },
    { name: "Exit", value: "exit" },
  ];

  // Prompt the user to select an option
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
      const rootPath = process.cwd(); // Get the current working directory
      const folderPath = path.join(rootPath, "Commands");
      const indexFilePath = path.join(rootPath, "index.js");

      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      async function createFiles() {
        const loadingAnimation = ["-", "\\", "|", "/"];
        let animationIndex = 0;

        // Start the loading animation
        const loadingInterval1 = setInterval(() => {
          process.stdout.write(
            chalk.bgBlue(
              `\rChecking Folders ${loadingAnimation[animationIndex]}`
            )
          );
          animationIndex = (animationIndex + 1) % loadingAnimation.length;
        }, 100);

        await sleep(3000); // Simulate a 3-second file editing process
        clearInterval(loadingInterval1);

        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
          console.log(chalk.bgGreen("\nCreated folder: Commands"));
        } else {
          console.log(chalk.bgRed('\n"Commands" folder already exists.'));
        }

        await sleep(500);
        const loadingInterval2 = setInterval(() => {
          process.stdout.write(
            chalk.bgBlue(`\rChecking Files ${loadingAnimation[animationIndex]}`)
          );
          animationIndex = (animationIndex + 1) % loadingAnimation.length;
        }, 100);

        await sleep(3000); // Simulate a 3-second file editing process
        clearInterval(loadingInterval2);

        if (!fs.existsSync(indexFilePath)) {
          fs.writeFileSync(indexFilePath, blankCode);
          console.log(chalk.bgGreen('\nCreated "index.js" file.'));
        } else {
          console.log(
            chalk.bgRed('\n"index.js" file already exists. Editing the file.')
          );
        }
        const { token } = await inquirer.prompt({
          type: "password",
          name: "token",
          message:
            "In order to correctly make the index file, we will need your token :",
          mask: "#", // Mask the input with asterisks
        });
        const sampleCode = `const { botLogin, clientActivity } = require("arzeroxjs");\nbotLogin("${token}");\nclientActivity("type", "text", "status");`;
        await sleep(500);
        const loadingInterval3 = setInterval(() => {
          process.stdout.write(
            chalk.bgBlue(`\rProcessing ${loadingAnimation[animationIndex]}`)
          );
          animationIndex = (animationIndex + 1) % loadingAnimation.length;
        }, 100);

        await sleep(3000); // Simulate a 3-second file editing process
        clearInterval(loadingInterval3);

        fs.writeFileSync(indexFilePath, sampleCode);
        console.log(chalk.bgGreen("\nUpdated index.js file."));

        await sleep(500);
        const loadingInterval4 = setInterval(() => {
          process.stdout.write(
            chalk.bgBlue(`\rFinishing ${loadingAnimation[animationIndex]}`)
          );
          animationIndex = (animationIndex + 1) % loadingAnimation.length;
        }, 100);

        await sleep(3000); // Simulate a 3-second file editing process
        clearInterval(loadingInterval4);

        await sleep(1000); // Simulate a 1-second loading time
        console.log(chalk.bgBlue("\nProcess finished."));
      }

      console.log("Creating index.js file and folder...");
      console.log("Please wait...");

      createFiles();

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
