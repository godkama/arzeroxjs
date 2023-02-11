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
var client = new discord.Client({
  intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
  partials: [User, Message, GuildMember, ThreadMember],
});

function botLogin(string) {
  if (!string) return console.log("No Token Specified", "color: red;");
  client.login(string);
  console.log(
    `Logged into ${client.user.tag}\n${client.user.username}'s ID is ${client.user.id}\nChange options in ./config.json\n${client.user.username} is now online.\nSuccesfully reloaded`
  );
}
function setStatus(text, type) {
  client.user.setPresence({
    activities: [
      {
        name: `Currently undergoing maintenance. || Dev By Kama`,
        type: "LISTENING",
      },
    ],
    status: "dnd",
  });
}
module.exports = botLogin;
