import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import AboutPage from "./AboutPage/Body.jsx";
import ProjectsPage from "./ProjectsPage/Body.jsx";
import ContactPage from "./ContactPage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegisterPage from "./RegisterPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default Body;