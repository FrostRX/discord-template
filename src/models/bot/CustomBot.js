const { Schema, model, models } = require("mongoose");

const CustomBotSchema = new Schema(
  {
    guildId: String,
    enabled: {
      type: Boolean,
      default: false,
    },
    token: String,
    botStatus: {
      type: String,
      default: "offline",
      enum: ["online", "idle", "dnd", "offline"],
    },
    activityType: {
      type: String,
      default: "PLAYING",
      enum: ["PLAYING", "STREAMING", "LISTENING", "WATCHING"],
    },
    activityText: String,
  },
  {
    id: false,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = models.CustomBot || model("CustomBot", CustomBotSchema);
