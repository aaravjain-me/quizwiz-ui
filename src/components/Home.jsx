import React from "react";
import NavigationBar from "./NavigationBar";
import quizwizLogo from "../assets/logo.webp";
import "../styles/Home.css";

const Home = () => {
    return (
        <>
            <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" />
            <div className="content-wrapper">
                <h1>Hello dear user, Welcome to QuizWiz</h1>
                <div className="whats-new">
                    <h2>What's new</h2>
                    <div>
                        <p>Nothing new right now</p>
                    </div>
                </div>
            </div>
            <NavigationBar />
        </>
    )

}

export default Home;