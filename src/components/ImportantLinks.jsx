import React from "react";
import { Link } from "react-router-dom";

const ImportantLinks = () => {
    return (
        <div>
            <h1>Important Links</h1>
            <div>
                <ul>
                    <li><Link to="/info/about">About</Link></li>
                    <li><Link to="/info/help">Help</Link></li>
                    <li><a href="https://github.com/aaravjain-me/quizwiz-ui.git">Github repo of the frontend of quizwiz</a></li>
                    <li><a href="https://github.com/aaravjain-me/quizwiz-api.git">Github repo of the backend of quizwiz</a></li>
                    <li><Link to="/">Login into quizwiz</Link></li>
                    <li><Link to="/register">Register into quizwiz</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default ImportantLinks;