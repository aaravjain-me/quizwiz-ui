import React from "react";
import Help from "./Help";
import About from "./About";
import { Route, Routes } from "react-router-dom";

const Info = () => {
    return (
        <Routes>
            <Route path="about" element={<About />} />
            <Route path="help" element={<Help />} />
        </Routes>
    )
}

export default Info;
