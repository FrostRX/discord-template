const { Schema, model, models } = require("mongoose");

const SocialAlertsSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    twitch: {
      enabled: {
        type: Boolean,
        default: false,
      },
      twitchChannels: [
        {
          name: String,
          online: Boolean,
          requirements: {
            enabled: {
              type: Boolean,
              default: false,
            },
            title: String,
            game: String,
            viewers: Number,
          },
          embed: {
            title: String,
            description: String,
            image: String,
            footer: String,
          },
        },
      ],
    },
  },
  { id: false, versionKey: false, timestamps: true }
);

module.exports =
  models.SocialAlerts || model("SocialAlerts", SocialAlertsSchema);
