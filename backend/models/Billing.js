// models/Billing.js
const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  workspaceName: String,
  plan: String,
  paymentMethod: {
    type: String, // e.g., "Visa ending in **** 4242"
    required: true,
  },
  invoices: [
    {
      date: Date,
      amount: Number,
      invoiceUrl: String,
    },
  ],
});

module.exports = mongoose.model("Billing", billingSchema);
