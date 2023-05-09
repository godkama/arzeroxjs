import {
  Client,
  ActivityType,
  Partials,
  GatewayIntentBits,
  Collection,
} from "discord.js";

declare var discord: any;
declare var Guilds: any;
declare var GuildMembers: any;
declare var GuildMessages: any;
declare var MessageContent: any;
declare var User: any;
declare var Message: any;
declare var GuildMember: any;
declare var ThreadMember: any;
declare var client: Client;
declare var chalk: any;

declare function errorHandler(text: string): void;

declare function botLogin(token: string): void;

declare class clientStatus {
  constructor(type: ActivityType, txt: string, status: string);

  type: ActivityType;
  txt: string;
  status: string;

  set(): void;
}

declare const events: Collection<any, any>;
declare const commands: Collection<any, any>;
declare const subCommands: Collection<any, any>;
declare const guildConfig: Collection<any, any>;
declare const aliases: Collection<any, any>;
declare const userSettings: Collection<any, any>;
declare const maintenanced: boolean;

declare module "discord.js" {
  interface Client {
    events: Collection<any, any>;
    commands: Collection<any, any>;
    subCommands: Collection<any, any>;
    guildConfig: Collection<any, any>;
    aliases: Collection<any, any>;
    userSettings: Collection<any, any>;
    maintenanced: boolean;
  }
}

export { botLogin, clientStatus };
