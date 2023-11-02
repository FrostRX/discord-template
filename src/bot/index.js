const { Client, IntentsBitField, Collection } = require("discord.js");
const Config = require("../config/bot_config.json");
const { bot } = require("../functions/console");

const client = new Client({
  intents: [
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.Guilds,
  ],
});

client.config = Config;
client.slashCommands = new Collection();

client.login(Config.token).then(() => {
  require("./handlers/commandhandler")(client);
  require("./handlers/eventhandler")(client);
});
