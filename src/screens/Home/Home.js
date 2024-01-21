import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles.js";

function Home({ courses }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) => {
    return (
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Choose a course</h1>
      <input
        type="text"
        placeholder="Search by course or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <nav>
        <ul style={styles.courseList}>
          {filteredCourses.map((course, index) => (
            <li key={index} style={styles.courseItem}>
              <Link to={`/course/${course.id}`} style={styles.link}>
                <strong>Course:</strong> {course.name} <br />
                <strong>Instructor:</strong> {course.instructor}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Home;
