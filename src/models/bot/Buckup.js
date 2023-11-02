const { Schema, model, models } = require("mongoose");

const BackupSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    data: Object,

    commands: {
      create: {
        enabled: Boolean,
        roles: Array,
      },
      delete: {
        enabled: Boolean,
        roles: Array,
      },
      info: {
        enabled: Boolean,
        roles: Array,
      },
      load: {
        enabled: Boolean,
        roles: Array,
      },
      list: {
        enabled: Boolean,
        roles: Array,
      },
    },
  },
  {
    id: false,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = models.Backup || model("Backup", BackupSchema);
