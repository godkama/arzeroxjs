const inquirer = require("inquirer");

function startCLI() {
  console.log("📦 Activated");
}

if (process.argv[2] === "arzeroxjs") {
  startCLI();
}
