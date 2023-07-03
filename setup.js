#!/usr/bin/env node

import inquirer from "inquirer";

async function startCLI() {
  console.log("📦 Activated");

  const answer = await inquirer.select({
    message: "What should ArzeroxJS Runtime Perform",
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

if (process.argv[2] === "arzeroxjs") {
  startCLI();
}
