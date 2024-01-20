// import logo from './logo.svg';
// import './App.css';
import Home from "./screens/Home/Home";
import courses from "./data/courses";
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom';
// import CourseId1 from "./screens/course/1";
import { Link } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";

// const CourseDescription = () => {
//   // console.log(match);
//   // const courseId = match.id;
//   const params = useParams();
//   console.log(params);
//   const courseId = params.id;
//   const course = courses[courseId];

//   if (!course) {
//     return <div>Course not found.</div>;
//   }

//   return (
//     <div>
//       <h2>Course Description</h2>
//       <h3>{course.name}</h3>
//       <p><strong>Instructor:</strong> {course.instructor}</p>
//       <p>{course.description}</p>
//     </div>
//   );
// };



function App() {
  return (
    <>
    <ul>
     <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/dashboard'>Dashboard</Link></li>
    </ul>
    <Routes>
      <Route path="*" element={<Home courses={courses.listOfCourses}/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>

    </Routes>
    
    
    </>
  );
}

export default App;
