import Home from "./screens/Home/Home";
import courses from "./data/courses";
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import CourseDescription from "./utility/CourseDescription";
import NotFound from "./utility/NotFound";
import { styles } from "./AppStyles";


function App() {
  return (
    <div style={styles.container}>
    <ul style={styles.navigation}>
     <li style={styles.navItem}> <Link to='/' style={styles.link}>Home</Link></li>
      <li style={styles.navItem}> <Link to='/dashboard' style={styles.link}>Dashboard</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home courses={courses.listOfCourses}/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
          {courses.listOfCourses.map((course, index) => (
           <Route key={index} path="/course/:id" element={<CourseDescription/>}/>
          ))}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
