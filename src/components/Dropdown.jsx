import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dropdown.css";

const subjects = [
    ["Math", "Science", "English", "General knowledge"],
    ["Math", "Science", "English", "General knowledge"],
    ["Math", "Science", "English", "General knowledge"],
    ["Math", "Science", "English", "General knowledge"],
    ["Math", "Science", "English", "General knowledge"],
    ["Math", "Physics", "Chemistry", "Biology", "English", "General knowledge"],
    ["Math", "English", "General knowledge", "Physics", "Chemistry", "Biology"],
    ["Math", "English", "General knowledge"],
    ["Math", "English", "General knowledge"],
    ["Math", "English", "General knowledge"]
];

const Dropdown = ({ username }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleSubjectMenu = (index) => {
        setActiveMenu((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <span className="dropdown-container">
            {subjects.map((subjectList, index) => (
                <span key={index}>
                    <button className="button" onClick={() => toggleSubjectMenu(index)}>Class {index + 1}</button>
                    {activeMenu === index && (
                        <span className="dropdown-menu">
                            {subjectList.map((subject, subIndex) => (
                                <Link key={subIndex} to={`/quiz/class ${index + 1}/${subject}`} state={{ username: username }}>
                                    {subject}
                                </Link>
                            ))}
                        </span>
                    )}
                </span>
            ))}
        </span>
    );
};

export default React.memo(Dropdown);
