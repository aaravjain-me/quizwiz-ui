import React from "react";
import { Route, Router } from "react-router-dom";
import RegistrationForm from "../../../pages/r/RegistrationForm";
import About from "../../../pages/about/About";
import Home from "../../../pages/home/Home";

function Routese() {
    return(
        <Router>
            <Route path="/pages/r/RegistrationForm" Component={RegistrationForm} />
            <Route path="/pages/about/About" Component={About} />
            <Route path="/pages/home/Home" Component={Home} />
        </Router>
    )    
}

export default Routese;