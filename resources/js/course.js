import React from 'react';
import { createRoot } from 'react-dom/client'
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import AllCourses from './Course/AllCourses';
import CourseDetail from './Course/CourseDetail';
const MainRouter = () => {
    return (
        <HashRouter>
            <Link to="/">All Courses</Link>
            <Link to="/course-details">Course Details</Link>
            <Routes>
                <Route path="/" element={<AllCourses/>}/>
                <Route path="/course-details" element={<CourseDetail/>}/>
            </Routes>
        </HashRouter>
    );
}
 
createRoot(document.querySelector("#some")).render(<MainRouter/>);