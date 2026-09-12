const enrollmentModel = require("../models/enrollmentModel");

const enrollInCourse = async (req, res) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "Course ID is required",
      });
    }

    const existingEnrollment =
      await enrollmentModel.checkEnrollment(
        userId,
        courseId
      );

    if (existingEnrollment) {
      return res.status(409).json({
        success: false,
        message: "You are already enrolled in this course",
      });
    }

    const enrollmentId =
      await enrollmentModel.createEnrollment(
        userId,
        courseId
      );

    res.status(201).json({
      success: true,
      message: "Successfully enrolled in course",
      enrollmentId,
    });
  } catch (error) {
    console.error("Enrollment error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to enroll in course",
    });
  }
};

const getMyEnrollments = async (req, res) => {
  try {
    const userId = req.user.id;

    const enrollments =
      await enrollmentModel.getUserEnrollments(userId);

    res.status(200).json({
      success: true,
      count: enrollments.length,
      data: enrollments,
    });
  } catch (error) {
    console.error("Get enrollments error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch enrollments",
    });
  }
};

module.exports = {
  enrollInCourse,
  getMyEnrollments,
};