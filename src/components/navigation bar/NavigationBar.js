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
    const [subjectMenus, setSubjectMenus] = React.useState({
        subjectMenu1: false,
        subjectMenu2: false,
        subjectMenu3: false,
        subjectMenu4: false,
        subjectMenu5: false,
        subjectMenu6: false,
        subjectMenu7: false,
        subjectMenu8: false,
        subjectMenu9: false,
        subjectMenu10: false
    })

    const closeAllSubjectMenus = () => {
        setSubjectMenus({
            subjectMenu1: false,
            subjectMenu2: false,
            subjectMenu3: false,
            subjectMenu4: false,
            subjectMenu5: false,
            subjectMenu6: false,
            subjectMenu7: false,
            subjectMenu8: false,
            subjectMenu9: false,
            subjectMenu10: false
        })
    }

    const toggleSubjectMenu = (subjectMenu) => {
        setSubjectMenus((prevMenus) => ({
            ...prevMenus,
            [subjectMenu]: !prevMenus[subjectMenu]
        }))
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
                    {subjectMenus && (
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