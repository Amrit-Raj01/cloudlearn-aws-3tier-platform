import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/courses"
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to fetch courses"
          );
        }

        setCourses(result.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Unable to load courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading courses...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Courses</h1>

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <div
              className="course-card"
              key={course.id}
            >
              {course.image_url && (
                <img
                  src={course.image_url}
                  alt={course.title}
                />
              )}

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <p>
                <strong>Instructor:</strong>{" "}
                {course.instructor}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {course.category}
              </p>

              <p>
                <strong>Level:</strong>{" "}
                {course.level}
              </p>

              <p>
                <strong>Duration:</strong>{" "}
                {course.duration}
              </p>

              <p>
                <strong>Price:</strong>{" "}
                {Number(course.price) === 0
                  ? "Free"
                  : `₹${course.price}`}
              </p>

              <Link to={`/courses/${course.id}`}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;