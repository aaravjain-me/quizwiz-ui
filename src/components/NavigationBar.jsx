import React from "react";
import "../styles/NavigationBar.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavigationBar = ({username}) => {
    // Use hook to manage dropdowns
    const [dropdownVisible, setDropdownVisible] = React.useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }

    return (
        <>
            <div className="navigation">
                <button onClick={toggleDropdown}>Class</button>
                <Link to="/info/about">About</Link>
                <Link to="/info/help">Help</Link>
                <Link to="/info/important-links">Important Links</Link>
            </div>
            {/* Show the content based on boolean values */}
            {dropdownVisible && (
                <div className="dropdown">
                    <Dropdown />
                </div>
            )}
        </>
    )
}

export default React.memo(NavigationBar);