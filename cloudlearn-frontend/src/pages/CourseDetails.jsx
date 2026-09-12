import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/courses/${id}`
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message || "Course not found"
          );
        }

        setCourse(result.data);
      } catch (error) {
        console.error("Error fetching course:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h2>Loading course...</h2>
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

  if (!course) {
    return (
      <div>
        <h2>Course not found</h2>
      </div>
    );
  }

  return (
    <div className="course-details">
      {course.image_url && (
        <img
          src={course.image_url}
          alt={course.title}
        />
      )}

      <h1>{course.title}</h1>

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

      <button>
        Enroll Now
      </button>
    </div>
  );
}

export default CourseDetails;