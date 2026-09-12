const courseModel = require("../models/courseModel");

const getCourses = async (req, res) => {
  try {
    const courses = await courseModel.getAllCourses();

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error("Error fetching courses:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
    });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await courseModel.getCourseById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.error("Error fetching course:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch course",
    });
  }
};

module.exports = {
  getCourses,
  getCourse,
};