// Command Handler
const { readdirSync } = require("fs");
const { error } = require("../../functions/console");

module.exports = (client) => {
  const commandArray = [];
  const commandsFolder = readdirSync("./src/bot/commands");

  for (const folder of commandsFolder) {
    const commandFiles = readdirSync(`./src/bot/commands/${folder}`).filter(
      (file) => file.endsWith(".js")
    );

    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/${file}`);

      if (!command.data) return error(`Command ${file} has no data!`);
      if (!command.run) return error(`Command ${file} has no run function!`);

      commandArray.push(command.data.toJSON());
      client.slashCommands.set(command.data.name, command);
    }
  }

  client.on("ready", () => {
    client.application.commands.set(commandArray);
  });
};
