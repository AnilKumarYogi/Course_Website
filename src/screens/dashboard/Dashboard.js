import React, { useState } from 'react';
import courses from '../../data/courses';
import { styles } from './Styles'; 


const enrolledCoursesData = [1,5,6]; // Enrolled course IDs for the current user

const initialProgress = new Map();
const coursesData = enrolledCoursesData.map((courseId) => {
  initialProgress.set(courseId, 20);
  return courses.listOfCourses[courseId - 1];
});

const Dashboard = () => {
  const [completedList, setCompletedList] = useState([]);
  const [progress, setProgress] = useState(initialProgress);

  const markAsCompleted = (courseId) => {
    // Toggle the course completion status
    if (completedList.includes(courseId)) {
      setCompletedList(completedList.filter((id) => id !== courseId));
      setProgress((prevProgress) => {
        const temp = new Map(prevProgress);
        temp.set(courseId, 0);
        return temp;
      });
    } else {
      setCompletedList([...completedList, courseId]);
      setProgress((prevProgress) => {
        const temp = new Map(prevProgress);
        temp.set(courseId, 100);
        return temp;
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>User Dashboard</h1>
      <h2 style={styles.heading}>Enrolled Courses</h2>
      <ul style={styles.courseList}>
        {coursesData.map((course) => (
          <li key={course.id} style={styles.courseItem}>
            <div>
            <img src={course.thumbnail} alt={`Thumbnail for ${course.name}`} style={styles.thumbnail} />
            </div>
            <div style={styles.courseDetails}>
              <h2 style={styles.courseName}>{course.name}</h2>
              <p style={styles.instructor}>Instructor: {course.instructor}</p>
              <p style={styles.dueDate}>Due Date: {course.duration}</p>
              <div style={styles.progress}>
                <p>Progress: {progress.get(course.id)}%</p>
                <div style={styles.progressBar}>
                  <progress value={progress.get(course.id)} max="100"></progress>
                </div>
              </div>
              <button style={styles.button} onClick={() => markAsCompleted(course.id)}>
                {completedList.includes(course.id) ? 'Mark as Incomplete' : 'Mark as Completed'}
              </button>
            </div>
            <hr style={styles.hr} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;