import React from "react";
import { Link } from "react-router-dom";
import "../styles/Help.css";

const Help = () => {
    const questionAnswerData = [
        { question: "How do I login?", answer: "Enter your email and password." },
        { question: "How do I start a quiz?", answer: "Click on the class button in the navigation bar and select your class. Select the desired subject from the subject menu." },
        { question: "How do I view my results?", answer: "Submit the quiz." }
    ];

    const steps = [
        { title: "Login", description: "Enter your email and password." },
        { title: "Select Class", description: "Click on the class button in the navigation bar and select your class. Select the desired subject from the subject menu." },
        { title: "Enter your password", description: "Enter your password." },
        { title: "Start Quiz", description: "Click on the start quiz button." },
        { title: "Answer the questions in the quiz", description: "Answer the questions in the quiz." },
        { title: "Submit Quiz", description: "Click on the submit button." },
        { title: "View Results", description: "View your results." }
    ];

    return (
        <div className="help-page">
            <div className="help-container">
                <h1>Help</h1>
                <div>
                    <p>Here are some frequently asked questions:</p>
                    <ul>
                        {questionAnswerData.map((questionAnswer, index) => (
                            <li key={index}>{questionAnswer.question}</li>
                        ))}
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
                            {questionAnswerData.map((questionAnswer, index) => (
                                <tr key={index}>
                                    <td>{questionAnswer.question}</td>
                                    <td>{questionAnswer.answer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>Here is a step-by-step guide on how to use QuizWiz:</p>
                    <ol>
                        {steps.map((step, index) => (
                            <li key={index}>
                                <h2>{step.title}</h2>
                                <p>{step.description}</p>
                            </li>
                        ))}
                    </ol>
                    <p>If you have any questions, feel free to email us at aaravjain.me@gmail.com.</p>
                </div>
                <Link to="/home">Go back to the home page</Link>
            </div>
        </div>
    );
};

export default React.memo(Help);

