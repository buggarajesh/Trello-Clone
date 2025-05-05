import express from "express";
import Template from "../models/Template.js";
import Category from "../models/Category.js";

const router = express.Router();

// GET all featured categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all notable templates
router.get("/templates", async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
