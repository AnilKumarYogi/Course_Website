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
import CourseDescription from "./utility/CourseDescription";



function App() {
  const filteredCourses = courses.listOfCourses
  return (
    <>
    <ul>
     <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/dashboard'>Dashboard</Link></li>
    </ul>
    <Routes>
      <Route path="*" element={<Home courses={courses.listOfCourses}/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
          {filteredCourses.map((course, index) => (
           <Route key={index} path="/course/:id" element={<CourseDescription/>}/>
          ))}
    </Routes>
    </>
  );
}

export default App;
