import { useParams } from "react-router-dom";
import courses from "../data/courses";

const CourseDescription = () => {
  const {id} = useParams();
  const course = courses.listOfCourses[id];
  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div>
      <h2>Course Description</h2>
      <h3>{course.name}</h3>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDescription;