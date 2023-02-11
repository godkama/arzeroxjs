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

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();
client.guildConfig = new Collection();
client.aliases = new Collection();
client.userSettings = new Collection();
client.maintenanced = false;

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
        name: `${text}`,
        type: "LISTENING",
      },
    ],
    status: `${type}`,
  });
}
(module.exports = botLogin), setStatus;
