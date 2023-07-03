import { Client, ActivityType, Collection } from "discord.js";

declare module "discord.js" {
  interface Client {
    events: Collection<string, any>;
    commands: Collection<string, any>;
    subCommands: Collection<string, any>;
    guildConfig: Collection<string, any>;
    aliases: Collection<string, any>;
    userSettings: Collection<string, any>;
    maintenanced: boolean;
  }

  interface ClientUser {
    setPresence(presence: PresenceData): Promise<Presence>;
  }

  interface PresenceData {
    activities?: ActivityOptions[];
    status?: PresenceStatusData;
    shardID?: number | number[];
  }

  interface ActivityOptions {
    name?: string;
    type?: ActivityType | string;
    url?: string | null;
  }

  type PresenceStatusData = "online" | "idle" | "dnd" | "invisible";
}

declare class clientStatus {
  constructor(
    type: ActivityType | string,
    txt: string,
    status: PresenceStatusData
  );
  setStatus(): void;
}

declare function botLogin(token: string): void;

export { botLogin, clientStatus };
