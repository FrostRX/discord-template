const { Schema, model, models } = require("mongoose");

const GuildSchema = new Schema(
  {
    guildId: String,
    lang: {
      type: String,
      default: "en",
      enum: ["en", "es", "fr"],
    },
    prefix: {
      type: String,
      default: "!",
    },
    slashCommands: {
      type: Boolean,
      default: true,
    },
    staffRoles: [String],
  },
  {
    id: false,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = models.Guild || model("Guild", GuildSchema);
