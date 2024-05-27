import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <h1>About</h1>
                <p>QuizWiz is a quiz application that allows users to take quizzes on various subjects. The application is designed to help students test their knowledge and improve their skills. Users can select a class and subject to start a quiz.</p>
                <h2>Features</h2>
                <ul>
                    <li>Multiple choice questions</li>
                    <li>Randomized questions</li>
                    <li>Responsive design for mobile and desktop</li>
                </ul>
                <Link to="/home">Back to Home</Link>
            </div>
        </div>
    );
}

export default About;