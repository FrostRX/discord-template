const { Schema, model, models } = require("mongoose");

const TicketSystemSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    panels: [
      {
        panelName: String,
        channelId: String,
        messageId: String,
        categoryId: String,
        managerRolesId: [String],
        panelMessage: {
          messageType: {
            type: String,
            enum: ["plain", "embed"],
          },
          plain: String,
          embed: {},
          actionType: {
            type: String,
            enum: ["button", "dropdown"],
          },
          buttons: [
            {
              id: String,
              label: String,
              emoji: String,

              style: {
                type: String,
                enum: ["PRIMARY", "SECONDARY", "SUCCESS", "DANGER", "LINK"],
              },
            },
          ],
          dropdowns: [
            {
              id: String,
              label: String,
              options: [
                {
                  label: String,
                  value: String,
                  emoji: String,
                },
              ],
            },
          ],
        },
        messageChannel: {
          messageType: {
            type: String,
            enum: ["plain", "embed"],
          },
          plain: String,
          embeds: [{}],
        },
        transcripts: {
          enabled: Boolean,
          channelId: String,
          sendToUser: Boolean,
        },

        createdAt: Date,
      },
    ],
    commands: {
      claim: {
        enabled: Boolean,
        rolesId: [String],
      },
      close: {
        enabled: Boolean,
        rolesId: [String],
      },
      delete: {
        enabled: Boolean,
        rolesId: [String],
      },
      reopen: {
        enabled: Boolean,
        rolesId: [String],
      },
      rename: {
        enabled: Boolean,
        rolesId: [String],
      },
      add: {
        enabled: Boolean,
        rolesId: [String],
      },
      remove: {
        enabled: Boolean,
        rolesId: [String],
      },
    },
  },
  {
    id: false,
    versionKey: false,
    timestamps: true,
  }
);

module.exports =
  models.TicketSystem || model("TicketSystem", TicketSystemSchema);
