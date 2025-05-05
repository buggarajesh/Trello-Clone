import Template from "../models/Template.js";
import Board from "../models/Board.js";
import Workspace from "../models/Workspace.js";

// Get all board templates
export const getTemplates = async (req, res) => {
  try {
    const templates = await Template.find();
    res.status(200).json(templates);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get recently viewed boards (for now, return all)
export const getRecentlyViewed = async (req, res) => {
  try {
    const boards = await Board.find().sort({ viewedAt: -1 }).limit(5);
    res.status(200).json(boards);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get user workspaces (stubbed)
export const getWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find().limit(1); // Add filtering by userId later
    res.status(200).json(workspaces);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
