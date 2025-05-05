// routes/billingRoutes.js
const express = require("express");
const {
  getBillingInfo,
  updatePaymentMethod,
  getInvoices,
} = require("../controllers/billingController");

const router = express.Router();

router.get("/", getBillingInfo);
router.put("/payment-method", updatePaymentMethod);
router.get("/invoices", getInvoices);

module.exports = router;
