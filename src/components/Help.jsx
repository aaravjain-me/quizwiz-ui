import React from "react";
import { Link } from "react-router-dom";
import "../styles/Help.css";

const Help = () => {
    return (
        <div className="help-page">
            <div className="help-container">
                <h1>Help</h1>
                <div>
                    <p>Here are some frequently asked questions:</p>
                    <ul>
                        <li>How do I login?</li>
                        <li>How do I start a quiz?</li>
                        <li>How do I view my results?</li>
                    </ul>
                    <p>The answers are in the table below:</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>How do I login?</td>
                                <td>Enter your email and password.</td>
                            </tr>
                            <tr>
                                <td>How do I start a quiz?</td>
                                <td>Click on the class button in the navigation bar and select your class. Select the desired subject from the subject menu.</td>
                            </tr>
                            <tr>
                                <td>How do I view my results?</td>
                                <td>Submit the quiz.</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Here is a step-by-step guide on how to use QuizWiz:</p>
                    <ol>
                        <li>
                            <h2>Login</h2>
                            <p>Enter your email and password.</p>
                        </li>
                        <li>
                            <h2>Select Class</h2>
                            <p>Click on the class button in the navigation bar and select your class. Select the desired subject from the subject menu.</p>
                        </li>
                        <li>
                            <h2>Enter your password</h2>
                            <p>Enter your password.</p>
                        </li>
                        <li>
                            <h2>Start Quiz</h2>
                            <p>Click on the start quiz button.</p>
                        </li>
                        <li>
                            <h2>Answer the questions in the quiz</h2>
                            <p>Answer the questions in the quiz.</p>
                        </li>
                        <li>
                            <h2>Submit Quiz</h2>
                            <p>Click on the submit button.</p>
                        </li>
                        <li>
                            <h2>View Results</h2>
                            <p>View your results.</p>
                        </li>
                    </ol>
                    <p>If you have any questions, feel free to email us at aaravjain.me@gmail.com.</p>
                </div>
                <Link to="/">Go back to the home page</Link>
            </div>
        </div>
    );
};

export default Help;
