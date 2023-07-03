#!/usr/bin/env node

import inquirer from "inquirer";

function startCLI() {
  console.log("📦 Activated");
}

if (process.argv[2] === "arzeroxjs") {
  startCLI();
}
