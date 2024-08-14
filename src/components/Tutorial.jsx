import React from "react";
import quizwizLogo from "../assets/logo.webp";
import "../styles/Tutorial.css";

const Tutorial = () => {
    const text = [
        {
            headingText: "Register into quizwiz (Optional)",
            mainText: "Register into quizwiz using some parameters, you can chose an account type based on wheter or wheter not you want people to see your account"
        },
        {
            headingText: "Login into quizwiz",
            mainText: "If you have already registered then login based on the email address, password and username that you selected on your register"
        },
        {
            headingText: "Intro to the home page",
            mainText: "At the home page you will see the quizwiz logo and a greeting, there is a naviation bar as well"
        },
        {
            headingText: "What to do next",
            mainText: "You can click on any link such as about, help, past results . etc.If you want to do a quiz then click on the class button and select the desired class and subject"
        },
        {
            headingText: "Finaly",
            mainText: "You can view your results directly after submitting the quiz, if you want to view past results you can click on the past results on the home page"
        }
    ];

    return (
        <div className="tutorial-page">
            <h1>A step by step tutorial on how to use quizwiz</h1>
            <div>
                <ol>
                    {text.map((item, index) => (
                        <li key={index}>
                            <h2>{item.headingText}</h2>
                            <p>{item.mainText}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Tutorial;
