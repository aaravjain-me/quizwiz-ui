import React from "react";
import "./WhatsNew.css";

function WhatsNew(props) {
    return (
        <div className="whatsnew">
            <h1>What's New</h1>
            <div>
                <p>{props.whatsNew}</p>
            </div>
        </div>
    )
}

export default WhatsNew;