import React, { useState } from "react";
import { Link } from "react-router-dom";

const subjects = [
    ["Math", "Science", "Computers", "English", "General knowledge"],
    ["Math", "Science", "Computers", "English", "General knowledge", "Programming"],
    ["Math", "Science", "Computers", "English", "General knowledge", "Programming", "Social Science"],
    ["Math", "Science", "Computers", "English", "General knowledge", "Programming", "Social Science", "Robotics"],
    ["Math", "Science", "Computers", "English", "General knowledge", "Programming", "Social Science", "Robotics"],
    ["Math", "Phisycs", "Chemistry", "Biology", "Computers", "English", "General knowledge", "Programming", "Sivics", "History", "Geography", "Robotics"],
    ["Math", "Computers", "English", "General knowledge", "Phisycs", "Chemistry", "Biology", "Programming", "Sivics", "History", "Geography", "Robotics"],
    ["Math", "Computers", "English", "General knowledge", "Phisycs", "Chemistry", "Biology", "Programming", "Sivics", "History", "Geography", "Robotics"],
    ["Math", "Computers", "English", "General knowledge", "Phisycs", "Chemistry", "Biology", "Programming", "Sivics", "History", "Geography", "Robotics"],
    ["Math", "Computers", "English", "General knowledge", "Phisycs", "Chemistry", "Biology", "Programming", "Sivics", "History", "Geography", "Robotics"]
];

const Dropdown = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleSubjectMenu = (index) => {
        setActiveMenu((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            {subjects.map((subjectList, index) => (
                <div key={index}>
                    <button onClick={() => toggleSubjectMenu(index)}>Class {index + 1}</button>
                    {activeMenu === index && (
                        <div className={`ss${index + 1}`}>
                            {subjectList.map((subject, subIndex) => (
                                <Link key={subIndex} to={`/quiz/class${index + 1}/${subject}`}>{subject}</Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
