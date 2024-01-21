// const Dashboard = () => {
//     return(
//         <h1>Dashboard</h1>
//     );
// };
import { useState } from "react";
import courses from "../../data/courses";
const enrolledCoursesData = [1,5,6]; // Enrolled course IDs for the current user
// var initialProgress = {};
const initialProgress = new Map();
const coursesData = enrolledCoursesData.map((courseId)=>{
    initialProgress.set(courseId,20);
    return courses.listOfCourses[courseId-1];
});

// console.log(initialProgress);

// const initialProgress = enrolledCoursesData.map((courseID))
// console.log(coursesData);

const Dashboard = () => {
  const [completedList, setCompletedList] = useState([]);
  const [progress,setProgress] = useState(initialProgress);
//   console.log(progress)
//   console.log(progress.get(1));


  const markAsCompleted = (courseId) => {
    // Toggle the course completion status
    if (completedList.includes(courseId)) {
      setCompletedList(completedList.filter(id => id !== courseId));
      setProgress(()=>{
        const temp = progress;
        temp.set(courseId,0);
        return temp;
      })
    //   setProgress(0);
    } else {
      setCompletedList([...completedList, courseId]);
      setProgress(()=>{
        const temp = progress;
        temp.set(courseId,100);
        return temp;
      })
    //   setProgress(100);
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Enrolled Courses</h2>
      <ul>
        {coursesData.map(course => (
          <li key={course.id}>
            <div>
              <img src={course.thumbnail} alt={`Thumbnail for ${course.name}`} style={{ width: '100px', height: 'auto' }} />
            </div>
            <div>
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.duration}</p>
              <p>Progress: {progress.get(course.id)}%</p>
              <div>
                <progress value={progress.get(course.id)} max="100"></progress>
              </div>
              <button onClick={() => markAsCompleted(course.id)}>
                {completedList.includes(course.id) ? 'Mark as Incomplete' : 'Mark as Completed'}
              </button>
              
            </div>
            <hr/>
          </li>
        ))}
        
      </ul>
      
    </div>
  );
};

// export default Dashboard;

export default Dashboard;