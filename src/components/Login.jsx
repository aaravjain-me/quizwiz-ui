import React from "react";
import "../styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import Tooltip from "./Tooltip";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [error, setError] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [type, setType] = React.useState("password");
    const [showHide, setShowHide] = React.useState("Show");

    const login = async (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}, Username: ${username}`); // Log the form data
        // Login logic here
        setError("");
        setIsLoading(true);
        try {
            // Login logic here
            setIsLoading(false);
            navigate("/home");
        } catch (error) {
            setIsLoading(false);
            setError("An error occurred. Please try again.");
        }
    }

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
                                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <br />
                                <input type={type} name="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
                                <button className="showPassword" type="button" onClick={() => { setShowHide(showHide === "Show" ? "Hide" : "Show"); 
                                setType(type === "password" ? "text" : "password"); }}>{showHide} password</button>
                            </div>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <br />
                                <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} required/>
                            </div>
                        </div>
                        <button type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
                        {error &&
                            <Tooltip message={error}> 
                                <p className="error-message">{error}</p>
                            </Tooltip>
                        }
                    </form>
                </div>
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    )
}

export default Login;