const db = require("../config/db");

const getAllCourses = async () => {
  const [rows] = await db.query(
    "SELECT * FROM courses ORDER BY created_at DESC"
  );

  return rows;
};

const getCourseById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM courses WHERE id = ?",
    [id]
  );

  return rows[0];
};

module.exports = {
  getAllCourses,
  getCourseById,
};