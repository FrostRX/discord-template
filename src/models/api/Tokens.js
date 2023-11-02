const { Schema, model, models } = require("mongoose");

const TokensSchema = new Schema(
  {
    guildId: String,
    token: String,
  },
  {
    versionKey: false,
  }
);

module.exports = models.Tokens || model("Tokens", TokensSchema);
