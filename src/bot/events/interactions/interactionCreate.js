// interactionCreate

const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { error } = require("../../../functions/console");

module.exports = {
  name: "interactionCreate",
  async run(interaction, client) {
    const command = client.slashCommands.get(interaction.commandName);
    if (!command) return;
    try {
      await command.run(interaction);
    } catch (err) {
      error(err);
      const embed = new MessageEmbed()
        .setTitle("Error")
        .setDescription("There was an error while executing this command!")
        .setColor("Red");

      await interaction.reply({ embeds: [embed], ephemeral: true });
    }
  },
};
