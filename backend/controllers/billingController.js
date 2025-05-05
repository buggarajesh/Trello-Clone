// controllers/billingController.js
const Billing = require("../models/Billing");

exports.getBillingInfo = async (req, res) => {
  try {
    const billingData = await Billing.findOne();
    res.json(billingData);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving billing info" });
  }
};

exports.updatePaymentMethod = async (req, res) => {
  const { paymentMethod } = req.body;
  try {
    const billingData = await Billing.findOneAndUpdate(
      {},
      { paymentMethod },
      { new: true }
    );
    res.json(billingData);
  } catch (error) {
    res.status(500).json({ error: "Failed to update payment method" });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const billingData = await Billing.findOne();
    res.json(billingData?.invoices || []);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve invoices" });
  }
};
