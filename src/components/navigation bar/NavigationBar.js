import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";


function NavigationBar() {
    // Use hook to manage dropdowns
    const [dropdownVisible, setDropdownVisible] = React.useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

    // Set and use hooks for subjects
    const [subjectMenu1, setSubjectMenu1] = React.useState(false);

    const ss1 = () => {
        setSubjectMenu1(!subjectMenu1);
    }

    return (
        <>
            <div className="navigation">
                <button onClick={toggleDropdown}>Class</button>
                <Link to="#">About</Link>
                <Link to="#">Help</Link>
            </div>
            {/* Show the content based on boolean values */}
            {dropdownVisible && (
                <div className="dropdown">
                    <button onClick={ss1}>Class 1</button>
                    <br />
                    <button>Class 2</button>
                    <br />
                    <button>Class 3</button>
                    <br />
                    <button>Class 4</button>
                    <br />
                    <button>Class 5</button>
                    <br />
                    <button>Class 6</button>
                    <br />
                    <button>Class 7</button>
                    <br />
                    <button>Class 8</button>
                    <br />
                    <button>Class 9</button>
                    <br />
                    <button>Class 10</button>
                    {/* Display defined hooks based on boolean values */}
                    {subjectMenu1 && (
                        <div className="ss1">
                            <Link to="#">Math</Link>
                            <Link to="#">Science</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default NavigationBar;