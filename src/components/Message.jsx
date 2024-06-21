import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Message = (props) => {
    const [timer, setTimer] = useState(props.timer);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (timer > 0) {
            const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(timeoutId);  // Cleanup the timeout
        } else {
            navigate("/home", {
                state: location.state
            });
        }
    }, [timer, navigate, location.state]);

    return (
        <p>
            We have received your registration request... Taking you to home page in {timer} seconds ...
        </p>
    );
};

export default Message;
