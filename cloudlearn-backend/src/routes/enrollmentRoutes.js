const express = require("express");

const {
  enrollInCourse,
  getMyEnrollments,
} = require("../controllers/enrollmentController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  authenticateToken,
  enrollInCourse
);

router.get(
  "/my-courses",
  authenticateToken,
  getMyEnrollments
);

module.exports = router;