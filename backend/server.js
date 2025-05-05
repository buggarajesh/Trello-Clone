const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Board routes working!");
});

module.exports = router;


const boardRoutes = require("./routes/boardRoutes.js");
const templateRoutes = require("./routes/templateRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const taskRoutes = require("./routes/taskRoutes.js");
const billingRoutes = require("./routes/billingRoutes.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

router.get("/", (req, res) => {
  res.send("Board routes working!");
});

module.exports = router;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/boards", boardRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/auth", authRoutes); // Missing slash "/" fixed here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
