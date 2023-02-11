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
var { readdirSync } = require("fs");

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

function textHandler(cmdfolder, PREFIX) {
  const commandFolders = readdirSync(`./${cmdfolder}/`);
  for (const folder of commandFolders) {
    const commands = readdirSync(`./${cmdfolder}/${folder}`).filter((files) =>
      files.endsWith(".js")
    );
    for (const file of commands) {
      const command = require(`./${cmdfolder}/${folder}/${file}`);
      client.commands.set(command.name, command);
    }
  }

  const {
    Client,
    Message,
    MessageEmbed,
    Collection,
    PermissionFlagsBits,
  } = require("discord.js");

  module.exports = {
    name: "messageCreate",
    /**
     * @param {Client} client
     * @param {Message} message
     */
    async execute(message, client, Discord) {
      if (!message.content.startsWith(PREFIX) || message.author.bot) {
        return;
      }
      const args = message.content.slice(PREFIX.length).trim().split(/ + /);
      const commandName = args.shift().toLowerCase();
      const command =
        client.commands.get(commandName) ||
        client.commands.find(
          (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );
      if (!commandName) return;
      if (!command) return;

      command.execute(message, args, commandName, client, Discord);
    },
  };
}

class textCommand {
  constructor({ name: name, code: { code } }) {
    module.exports = {
      name: this.name,
      /**
       *
       * @param {Message} message
       * @param {*} args
       * @param {Client} client
       */
      execute(message, args, commandName, client, Discord) {
        this.code;
      },
    };
  }
}

module.exports = (botLogin, setStatus, textHandler);
