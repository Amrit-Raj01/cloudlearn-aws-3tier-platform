const db = require("../config/db");

const createEnrollment = async (userId, courseId) => {
  const [result] = await db.query(
    `INSERT INTO enrollments (user_id, course_id)
     VALUES (?, ?)`,
    [userId, courseId]
  );

  return result.insertId;
};

const getUserEnrollments = async (userId) => {
  const [rows] = await db.query(
    `SELECT
       e.id,
       e.enrolled_at,
       c.id AS course_id,
       c.title,
       c.description,
       c.instructor,
       c.category,
       c.level,
       c.duration,
       c.price,
       c.image_url
     FROM enrollments e
     JOIN courses c ON e.course_id = c.id
     WHERE e.user_id = ?
     ORDER BY e.enrolled_at DESC`,
    [userId]
  );

  return rows;
};

const checkEnrollment = async (userId, courseId) => {
  const [rows] = await db.query(
    `SELECT id
     FROM enrollments
     WHERE user_id = ? AND course_id = ?`,
    [userId, courseId]
  );

  return rows[0];
};

module.exports = {
  createEnrollment,
  getUserEnrollments,
  checkEnrollment,
};