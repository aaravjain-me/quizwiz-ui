import React, { useState, useRef } from "react";
import "../styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import Tooltip from "./Tooltip";
import { fetchData } from "../functionalities/data";

const Login = () => {
    const navigate = useNavigate();
    const passwordRef = useRef(null); // Step 2: Create a reference for the password input field
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState("password");
    const [showHide, setShowHide] = useState("Show");

    const login = async (event) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            const response = await fetchData({
                email: email,
                password: password,
                username: username
            }, "http://localhost:5000/data/login");

            if (response.error) {
                setError(response.error);
            } else {
                navigate("/home", { state: {
                    username: username,
                    email: email,
                    type: response.type
                }});
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        const passwordField = passwordRef.current;
        const start = passwordField.selectionStart;
        const end = passwordField.selectionEnd;
        setShowHide(showHide === "Show" ? "Hide" : "Show");
        setType(type === "password" ? "text" : "password");
        setTimeout(() => {
            passwordField.focus();
            passwordField.setSelectionRange(start, end);
        }, 0);
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h2>Login</h2>
                <div className="login-form">
                    <form onSubmit={login}>
                        <div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <br />
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <br />
                                <input 
                                    type={type} 
                                    name="password" 
                                    id="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    ref={passwordRef} // Step 2: Attach the reference to the password input field
                                />
                                <button 
                                    className="showPassword" 
                                    type="button" 
                                    onClick={togglePasswordVisibility} // Step 3 & 4: Call the toggle function
                                >
                                    {showHide} password
                                </button>
                            </div>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <br />
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Logging in..." : "Login"}
                        </button>
                        {error && (
                            <Tooltip message={error}>
                                <p className="error-message">{error}</p>
                            </Tooltip>
                        )}
                    </form>
                </div>
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    );
}

export default Login;

