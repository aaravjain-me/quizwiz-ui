import React, { useState } from "react";
import "../styles/NavigationBar.css";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavigationBar = ({ username }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <div className="navigation">
                <div className="burger-menu" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`navigation-links ${menuActive ? 'active' : ''}`}>
                    <button className="button" onClick={toggleDropdown}>Class</button>
                    <Link to="/info/about">About</Link>
                    <Link to="/info/help">Help</Link>
                    <Link to="/info/important-links">Important Links</Link>
                    <Link to="/status" state={{ username: username }}>Past results</Link>
                </div>
            </div>
            {dropdownVisible && (
                <div className="dropdown">
                    <Dropdown username={username} />
                </div>
            )}
        </>
    );
};

export default React.memo(NavigationBar);
