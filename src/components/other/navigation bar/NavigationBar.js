import React from "react";
import './NavigationBar.css';
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <div className="navigation">
            <Link to='../../pages/about/About'>About</Link>
            <Link to='../../pages/help/Help'>Help</Link>
            <Link to='../../pages/home/Home'>Home</Link>
            <Link to='../../pages/login/Login'>Log out</Link>
        </div>
    )
}

export default NavigationBar;