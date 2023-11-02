// Event handler

const { readdirSync } = require("fs");
const { error } = require("../../functions/console");

module.exports = (client) => {
  const eventsFolder = readdirSync("./src/bot/events");

  for (const folder of eventsFolder) {
    const eventFiles = readdirSync(`./src/bot/events/${folder}`).filter(
      (file) => file.endsWith(".js")
    );

    for (const file of eventFiles) {
      const event = require(`../events/${folder}/${file}`);

      if (!event.name) return error(`Event ${file} has no name!`);
      if (!event.run) return error(`Event ${file} has no run function!`);

      if (event.once) {
        client.once(event.name, (...args) => event.run(...args, client));
      } else {
        client.on(event.name, (...args) => event.run(...args, client));
      }
    }
  }
};
