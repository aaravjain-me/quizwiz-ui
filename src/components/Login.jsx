import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import quizwizLogo from "../assets/logo.webp";
import "../styles/Login.css";
import axios from "axios";

const Login = () => {
    const [formSubmited, setFormSubmited] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const sendEmailTo = (address, message) => {
        // Use axios to send data to backend
        
    }

    const generateVerificationCode = (length) => {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < length; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    }

    const login = (event) => {
        event.preventDefault();
        const emailValue = document.getElementById("email").value;
        const code = generateVerificationCode(6);
        setVerificationCode(code);
        setEmail(emailValue);
        setFormSubmited(true);
        sendEmailTo(emailValue, code + `
            The above code is the verification code for your login into quizwiz.
            Thank you so much for visiting our website!
        `);
    }

    const verifyCode = () => {
        const code = document.getElementById("verification").value;
        if (verificationCode === code) {
            navigate("/message");
        } else {
            alert("Login Failed, please try again");
            setFormSubmited(false);
        }
    }

    return (
        <div className="login-page">
            <img src={quizwizLogo} alt="Quizwiz Logo" className="logo" />
            <div className="form-container">
                <form onSubmit={login}>
                    <div>
                        <div>
                            <label htmlFor="email">E-mail address:</label>
                            <br />
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <br />
                            <input type="password" name="password" id="password" required/>
                        </div>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
            {formSubmited && (
                <>
                    <label htmlFor="verification">Enter your verification code here:</label>
                    <br />
                    <input type="text" name="verification" id="verification" />
                    <br />
                    <button onClick={verifyCode}>Verify</button>
                    <br />
                </>
            )}
            <Link to="/about">Know more about us</Link>
        </div>
    )
}

export default Login;
