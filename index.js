var discord = require("discord.js");
var {
  Client,
  ActivityType,
  Partials,
  GatewayIntentBits,
  Collection,
} = require("discord.js");
var fs = require("fs");
var { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits;
var { User, Message, GuildMember, ThreadMember } = Partials;

function botLogin(string) {
  if (!string) return console.log("No Token Specified", "color: red;");
  const client = new discord.Client({
    intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
    partials: [User, Message, GuildMember, ThreadMember],
  });
  client.login(string);
}

module.exports = botLogin;
