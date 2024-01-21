import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses';
import { styles } from './Styles'; 

const CourseDescription = () => {
  const { id } = useParams();
  const course = courses.listOfCourses[id];

  const [isPrerequisitesOpen, setPrerequisitesOpen] = useState(false);
  const [isSyllabusOpen, setSyllabusOpen] = useState(false);

  if (!course) {
    return <div>Course not found.</div>;
  }

  const togglePrerequisites = () => {
    setPrerequisitesOpen(!isPrerequisitesOpen);
  };

  const toggleSyllabus = () => {
    setSyllabusOpen(!isSyllabusOpen);
  };

  const prerequisites = course.prerequisites;
  const syllabus = course.syllabus;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Course Description</h2>
      <h3>{course.name}</h3>
      <div style={styles.courseInfo}>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
        <p><strong>Schedule:</strong> {course.schedule}</p>
        <p><strong>Location:</strong> {course.location}</p>
      </div>
      {/* Prerequisites */}
      <div style={styles.section}>
        <button style={styles.button} onClick={togglePrerequisites}>
          {isPrerequisitesOpen ? 'Hide Prerequisites' : 'Show Prerequisites'}
        </button>
        {isPrerequisitesOpen && (
          <ul style={styles.list}>
            {prerequisites.map((prerequisite, index) => (
              <li key={index} style={styles.listItem}>{prerequisite}</li>
            ))}
          </ul>
        )}
      </div>
      {/* Syllabus */}
      <div style={styles.section}>
        <button style={styles.button} onClick={toggleSyllabus}>
          {isSyllabusOpen ? 'Hide Syllabus' : 'Show Syllabus'}
        </button>
        {isSyllabusOpen && (
          <ul style={styles.list}>
            {syllabus.map((week, index) => (
              <li key={index} style={styles.listItem}>
                <strong>Week {week.week}:</strong> {week.topic}
                <p>{week.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseDescription;