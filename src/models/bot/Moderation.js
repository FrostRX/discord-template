const { Schema, model, models } = require("mongoose");

const ModerationSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    restrictedChannels: {
      onlyMedia: [String],
      onlyImages: [String],
      onlyVideos: [String],
      onlyCommands: [String],
      sendMessage: {
        enabled: Boolean,
        message: String,
        messageType: {
          type: String,
          enum: ["plain", "embed"],
        },
        messageTypeToSend: {
          type: String,
          enum: ["private", "channel"],
        },
        embedColor: {
          type: String,
          default: "#7055D0",
        },
      },
    },
  },
  {
    id: false,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = models.Moderation || model("Moderation", ModerationSchema);
