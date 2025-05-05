import express from "express";
import {
  getTemplates,
  getRecentlyViewed,
  getWorkspaces,
} from "../controllers/boardController.js";

const router = express.Router();

router.get("/templates", getTemplates);
router.get("/recently-viewed", getRecentlyViewed);
router.get("/workspaces", getWorkspaces);

export default router;

