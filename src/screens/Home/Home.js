
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
// import CourseId1 from '../course/1';
// import CourseId2 from '../course/2';
import CourseDescription from '../../utility/CourseDescription';
function Home({courses}) {
    // console.log("anil->",courses);
    // console.log("anil->",typeof(courses));

    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = courses.filter(course => {
        return (
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    // console.log(courses)
    return (
    <>
      <h1>Choose a course</h1>
      <input
        type="text"
        placeholder="Search by course or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <nav>
        <ul style={{ maxHeight: '300px', overflowY: 'auto', listStyle: 'none', padding: 0 }}>
          {filteredCourses.map((course, index) => (
            <li key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
              <Link to={`/course/${course.name}`}>
                <strong>Course:</strong> {course.name} <br />
                <strong>Instructor:</strong> {course.instructor}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
          {filteredCourses.map((course, index) => (
           <Route key={index} path={`/course/${course.name}`} element={<CourseDescription course={course}/>}/>
          ))}
      </Routes>
      

    </>
    )
}

export default Home;