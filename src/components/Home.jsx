import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import quizwizLogo from "../assets/logo.webp";
import "../styles/Home.css";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    const createQuiz = () => {
        navigate('/create-quiz');
    }

    return (
        <>
            <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" />
            <div className="content-wrapper">
                <h1>Hello {state?.username || "User"}, Welcome to QuizWiz</h1>
                <div className="whats-new">
                    <h2>What's new</h2>
                    <div>
                        <p>Nothing new right now</p>
                    </div>
                </div>
            </div>
            <button className="btn-create-quiz" onClick={createQuiz}>Create your own quiz</button>
            <NavigationBar username={state?.username || "User"}/>
        </>
    );
}

export default Home;

