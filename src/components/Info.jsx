import React from "react";
import Help from "./Help";
import About from "./About";
import ImportantLinks from "./ImportantLinks";
import Tutorial from "./Tutorial";
import { Route, Routes } from "react-router-dom";

const Info = () => {
    return (
        <Routes>
            <Route path="about" element={<About />} />
            <Route path="help" element={<Help />} />
            <Route path="important-links" element={<ImportantLinks />} />
            <Route path="tutorial" element={<Tutorial />} />
        </Routes>
    )
}

export default Info;
