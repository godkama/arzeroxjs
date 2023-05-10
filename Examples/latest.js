const { botLogin, clientActivity } = require("arzeroxjs");

botLogin("TOKEN");
clientActivity("type", "text", "status");

console.log("This is test code following the Version 1.4.0 guidelines");
