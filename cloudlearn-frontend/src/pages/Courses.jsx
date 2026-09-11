import { useEffect, useState } from "react";

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

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const result = await response.json();

        setCourses(result.data);
      } catch (error) {
        console.error("Error:", error);
        setError("Unable to load courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <h2>Loading courses...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Courses</h1>

      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            
            <img
              src={course.image_url}
              alt={course.title}
            />

            <h2>{course.title}</h2>

            <p>{course.description}</p>

            <p>
              <strong>Instructor:</strong>{" "}
              {course.instructor}
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
              {course.price === "0.00" || course.price === 0
                ? "Free"
                : `₹${course.price}`}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;