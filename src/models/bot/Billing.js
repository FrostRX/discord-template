const { Schema, model, models } = require("mongoose");

const BillingSchema = new Schema(
  {
    guildId: String,
    enabled: Boolean,
    paypal: [String],
    products: [
      {
        id: String,
        name: String,
        price: Number,
        description: String,
        image: String,
        content: {
          type: String,
          enum: ["role"],
          default: "role",
        },
        roleId: String,
      },
    ],
    webhooks: {
      enabled: Boolean,
      url: String,
      msg: {
        title: {
          type: String,
          default: "New payment",
        },
        content: {
          type: String,
          default:
            "New payment from {user} ({userId})\n\nProduct: {product}\nPrice: {price}",
        },
        color: {
          type: String,
          default: "#7055D0",
        },
        thumbnail: {
          type: String,
          default: null,
        },
        image: {
          type: String,
          default: null,
        },
        footer: {
          text: {
            type: String,
            default: "Powered by Agoria",
          },
          iconURL: String,
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

module.exports = models.Billing || model("Billing", BillingSchema);
