const { bot } = require("../../../functions/console");

module.exports = {
  name: "ready",
  run(client) {
    bot(`Logged in as ${client.user.tag}`);
  },
};
