const { Schema, model, models } = require("mongoose");

const PremiumSchema = new Schema(
  {
    userId: String,
    guildId: String,
    premium: Boolean,
    premiumSince: Number,
    premiumUntil: Number,
  },
  {
    id: false,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = models.PremiumUsers || model("PremiumUsers", PremiumSchema);
