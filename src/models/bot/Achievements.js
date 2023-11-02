const { Schema, model, models } = require("mongoose");

const AchievementsSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    config: {
      channelId: String,
      messageSendType: {
        type: String,
        enum: ["dm", "channel"],
      },
      messageType: {
        type: String,
        enum: ["plain", "embed"],
      },
      plain: {
        type: String,
        default:
          "Congratulations {user}, you have unlocked the {achievement} achievement!",
      },
      embed: {
        type: Object,
        default: {},
      },
    },
    achievements: [
      {
        name: String,
        description: String,
        badgeImage: String,
        activator: {
          type: String,
          enum: [
            "userSendMessage",
            "userBoostServer",
            "userAddReaction",
            "userJoinVCChannel",
            "userJoinTXChannel",
            "userJoinGiveaway",
          ],
        },
        reward: {
          role: String,
          xp: Number,
          coins: Number,
        },
      },
    ],
  },
  {
    id: false,
    versionKey: false,
    timestamps: true,
  }
);

module.exports =
  models.Achievements || model("Achievements", AchievementsSchema);
