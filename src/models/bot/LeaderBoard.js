const { Schema, model, models } = require("mongoose");

const LeaderBoardSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    url: String,
    leader: [
      {
        userId: String,
        points: Number,
      },
    ],
  },
  {
    id: false,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = models.LeaderBoard || model("LeaderBoard", LeaderBoardSchema);
