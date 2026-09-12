const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CloudLearn backend is running",
    service: "CloudLearn API",
    status: "healthy",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to CloudLearn API",
  });
});

app.use("/api/courses", courseRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/enrollments", enrollmentRoutes);

module.exports = app;