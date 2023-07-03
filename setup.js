#!/usr/bin/env node

const select = require("@inquirer/select");
const { Separator } = require("@inquirer/select");

async function startCLI() {
  const answer = await select({
    message: "Select a package manager",
    choices: [
      {
        name: "npm",
        value: "npm",
        description: "npm is the most popular package manager",
      },
      {
        name: "yarn",
        value: "yarn",
        description: "yarn is an awesome package manager",
      },
      new Separator(),
      {
        name: "jspm",
        value: "jspm",
        disabled: true,
      },
      {
        name: "pnpm",
        value: "pnpm",
        disabled: "(pnpm is not available)",
      },
    ],
  });
}

startCLI();
