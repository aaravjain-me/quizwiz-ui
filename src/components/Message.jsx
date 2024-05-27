import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Message = (props) => {
    const [timer, setTimer] = useState(props.timer);
    const navigate = useNavigate();

    useEffect(() => {
        if (timer > 0) {
            const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(timeoutId);  // Cleanup the timeout
        } else {
            navigate("/home");
        }
    }, [timer, navigate]);

    return (
        <p>
            We have received your registration request... Taking you to home page in {timer} seconds ...
        </p>
    );
};

export default Message;
