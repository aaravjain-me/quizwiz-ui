import React from "react";
import "../styles/NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
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
    
    const toggleSubjectMenu1 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu1");
        } else {
            toggleSubjectMenu("subjectMenu1");
        }
    }

    const toggleSubjectMenu2 = () => {
        if (subjectMenus.subjectMenu1  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu2");
        } else {
            toggleSubjectMenu("subjectMenu1");
        }
    }

    const toggleSubjectMenu3 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu1  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu3");
        } else {
            toggleSubjectMenu("subjectMenu1");
        }
    }

    const toggleSubjectMenu4 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu1  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu4");
        } else {
            toggleSubjectMenu("subjectMenu1");
        }
    }

    const toggleSubjectMenu5 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu1  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu5");
        } else {
            toggleSubjectMenu("subjectMenu5");
        }
    }

    const toggleSubjectMenu6 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu1  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu6");
        } else {
            toggleSubjectMenu("subjectMenu6");
        }
    }

    const toggleSubjectMenu7 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu1  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu7");
        } else {
            toggleSubjectMenu("subjectMenu7");
        }
    }

    const toggleSubjectMenu8 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu1  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu8");
        } else {
            toggleSubjectMenu("subjectMenu8");
        }
    }

    const toggleSubjectMenu9 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu1  || 
            subjectMenus.subjectMenu10  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu9");
        } else {
            toggleSubjectMenu("subjectMenu9");
        }
    }

    const toggleSubjectMenu10 = () => {
        if (subjectMenus.subjectMenu2  || subjectMenus.subjectMenu3  ||  
            subjectMenus.subjectMenu4  || subjectMenus.subjectMenu5  ||
            subjectMenus.subjectMenu6  || subjectMenus.subjectMenu7  || 
            subjectMenus.subjectMenu8  || subjectMenus.subjectMenu9  || 
            subjectMenus.subjectMenu1  
        ) {
            closeAllSubjectMenus();
            toggleSubjectMenu("subjectMenu10");
        } else {
            toggleSubjectMenu("subjectMenu10");
        }
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
                    <button onClick={toggleSubjectMenu1}>Class 1</button>
                    <br />
                    <button onClick={toggleSubjectMenu2}>Class 2</button>
                    <br />
                    <button onClick={toggleSubjectMenu3}>Class 3</button>
                    <br />
                    <button onClick={toggleSubjectMenu4}>Class 4</button>
                    <br />
                    <button onClick={toggleSubjectMenu5}>Class 5</button>
                    <br />
                    <button onClick={toggleSubjectMenu6}>Class 6</button>
                    <br />
                    <button onClick={toggleSubjectMenu7}>Class 7</button>
                    <br />
                    <button onClick={toggleSubjectMenu8}>Class 8</button>
                    <br />
                    <button onClick={toggleSubjectMenu9}>Class 9</button>
                    <br />
                    <button onClick={toggleSubjectMenu10}>Class 10</button>
                    {/* Display defined hooks based on boolean values */}
                    {subjectMenus.subjectMenu1 && (
                        <div className="ss1">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Science</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu2 && (
                        <div className="ss2">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Science</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Programming</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu3 && (
                        <div className="ss3">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Science</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Programming</Link>
                            <Link to="#">Social Science</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu4 && (
                        <div className="ss4">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Science</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Programming</Link>
                            <Link to="#">Social Science</Link>
                            <Link to="#">Robotics</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu5 && (
                        <div className="ss5">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Science</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Programming</Link>
                            <Link to="#">Social Science</Link>
                            <Link to="#">Robotics</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu6 && (
                        <div className="ss6">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Phisycs</Link>
                            <Link to="#">Chemistry</Link>
                            <Link to="#">Biology</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Programming</Link>
                            <Link to="#">Sivics</Link>
                            <Link to="#">History</Link>
                            <Link to="#">Geography</Link>
                            <Link to="#">Robotics</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu7 && (
                        <div className="ss7">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Phisycs</Link>
                            <Link to="#">Chemistry</Link>
                            <Link to="#">Biology</Link>
                            <Link to="#">Programming</Link>
                            <Link to="#">Sivics</Link>
                            <Link to="#">History</Link>
                            <Link to="#">Geography</Link>
                            <Link to="#">Robotics</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu8 && (
                        <div className="ss8">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Phisycs</Link>
                            <Link to="#">Chemistry</Link>
                            <Link to="#">Biology</Link>
                            <Link to="#">Programming</Link>
                            <Link to="#">Sivics</Link>
                            <Link to="#">History</Link>
                            <Link to="#">Geography</Link>
                            <Link to="#">Robotics</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu9 && (
                        <div className="ss9">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Phisycs</Link>
                            <Link to="#">Chemistry</Link>
                            <Link to="#">Biology</Link>
                            <Link to="#">Programming</Link>
                            <Link to="#">Sivics</Link>
                            <Link to="#">History</Link>
                            <Link to="#">Geography</Link>
                            <Link to="#">Robotics</Link>
                        </div>
                    )}
                    {subjectMenus.subjectMenu10 && (
                        <div className="ss10">
                            {/* Add links for each subject */}
                            <Link to="#">Math</Link>
                            <Link to="#">Computers</Link>
                            <Link to="#">English</Link>
                            <Link to="#">General knowledge</Link>
                            <Link to="#">Phisycs</Link>
                            <Link to="#">Chemistry</Link>
                            <Link to="#">Biology</Link>
                            <Link to="#">Programming</Link>
                            <Link to="#">Sivics</Link>
                            <Link to="#">History</Link>
                            <Link to="#">Geography</Link>
                            <Link to="#">Robotics</Link>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default NavigationBar;