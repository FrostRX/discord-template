const { Schema, model, models } = require("mongoose");

const CustomCommandSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    customCommands: [
      {
        name: String,
        messageType: {
          type: String,
          enum: ["plain", "embed"],
        },
        sendMessage: {
          type: String,
          enum: ["private", "channel"],
        },
        typeSendMessage: {
          type: String,
          enum: ["ephemeral", "normal"],
        },
        message: String,
        embed: {
          title: String,
          description: String,
          color: String,
          footer: {
            text: String,
            iconURL: String,
          },
          thumbnail: String,
          image: String,
          fields: [
            {
              name: String,
              value: String,
              inline: Boolean,
            },
          ],
        },
        attachments: [String],
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
  models.CustomCommand || model("CustomCommand", CustomCommandSchema);
