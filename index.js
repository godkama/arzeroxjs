var discord = require("discord.js");
var {
  Client,
  ActivityType,
  Partials,
  GatewayIntentBits,
  Collection,
} = require("discord.js");
var { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits;
var { User, Message, GuildMember, ThreadMember } = Partials;
var client = new discord.Client({
  intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
  partials: [User, Message, GuildMember, ThreadMember],
});
const chalk = require("chalk");
client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();
client.guildConfig = new Collection();
client.aliases = new Collection();
client.userSettings = new Collection();
client.maintenanced = false;

function errorHandler(text) {
  console.log(text);
}

function botLogin(token) {
  if (!token) {
    return console.log(chalk.redBright("ERR!"), " No Token Specified");
  } else {
    try {
      client.login(token);
      console.log(
        `Dev by Kama\n\nLogged into ${client.user.tag}\n${client.user.username}'s ID is ${client.user.id}\nChange options in ./config.json\n${client.user.username} is now online.\nSuccesfully reloaded`
      );
    } catch (err) {
      errorHandler(chalk.redBright("ERR! Not a valid token"));
    }
  }
}

class clientStatus {
  constructor(type, txt, status) {
    this.type = type;
    this.txt = txt;
    this.status = status;
  }

  setStatus() {
    try {
      client.user.setPresence({
        activities: [
          {
            name: this.txt,
            type: this.type,
          },
        ],
        status: this.status,
      });
    } catch (err) {}
  }
}

module.exports = { botLogin, clientStatus };
