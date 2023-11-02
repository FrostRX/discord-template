const { Schema, model, models } = require("mongoose");

const AutoModSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    badwords: {
      enabled: Boolean,
      type: {
        type: String,
        enum: ["exact", "includes"],
      },
      words: [String],
      ignoreRoles: [String],
      ignoreChannels: [String],
      action: {
        type: String,
        enum: ["delete", "warn", "deleteAndWarn", "kick", "ban"],
      },
    },
    invites: {
      enabled: Boolean,
      ignoreRoles: [String],
      ignoreChannels: [String],
      action: {
        type: String,
        enum: ["delete", "warn", "deleteAndWarn", "kick", "ban"],
      },
      whitelist: [String],
    },
    links: {
      enabled: Boolean,
      ignoreRoles: [String],
      ignoreChannels: [String],
      action: {
        type: String,
        enum: ["delete", "warn", "deleteAndWarn", "kick", "ban"],
      },
      whitelist: [String],
    },
    emojis: {
      enabled: Boolean,
      ignoreRoles: [String],
      ignoreChannels: [String],
      maxEmojis: Number,
      action: {
        type: String,
        enum: ["delete", "warn", "deleteAndWarn", "kick", "ban"],
      },
    },
    mentions: {
      enabled: Boolean,
      ignoreRoles: [String],
      ignoreChannels: [String],
      maxMentions: Number,
      action: {
        type: String,
        enum: ["delete", "warn", "deleteAndWarn", "kick", "ban"],
      },
    },
    spam: {
      enabled: Boolean,
      ignoreRoles: [String],
      ignoreChannels: [String],
      maxDuplicates: Number,
      maxDuplicatesInterval: Number,
      action: {
        type: String,
        enum: ["delete", "warn", "deleteAndWarn", "kick", "ban"],
      },
    },
  },
  {
    id: false,
    timestamps: true,
    versionKey: false,
  }
);

module.exports = models.AutoMod || model("AutoMod", AutoModSchema);
