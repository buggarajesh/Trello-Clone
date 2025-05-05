import User from "../models/User.js";

// Signup (already implemented)
export const signup = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists." });
    }

    const newUser = new User({ email });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
};

//New Login controller
export const login = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or user does not exist." });
    }

    // In a real app, you'd verify a password and return a token here.
    res.status(200).json({ message: "Login successful." });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
};
