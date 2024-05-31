import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import quizwizLogo from "../assets/logo.webp";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "../styles/Register.css";
import 'react-datepicker/dist/react-datepicker.css';
import isEmail from 'validator/lib/isEmail';

const Register = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState(null);
    const [accountType, setAccountType] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [type, setType] = useState("password");
    const [showHide, setShowHide] = useState("Show");
    const usernameRef = useRef(null);
    const verificationRef = useRef(null);

    const navigate = useNavigate();

    const sendEmailTo = (address, message) => {
        // Email sending logic here
    };

    const generateVerificationCode = (length) => {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < length; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasNumber = /\d/;
        const hasUpperCase = /[A-Z]/;
        const hasLowerCase = /[a-z]/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
        return (
            password.length >= minLength &&
            hasNumber.test(password) &&
            hasUpperCase.test(password) &&
            hasLowerCase.test(password) &&
            hasSpecialChar.test(password)
        );
    };

    const register = async (event) => {
        event.preventDefault();
        setError("");
        if (!isEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters long and include a number, an uppercase letter, a lowercase letter, and a special character.");
            return;
        }
        const code = generateVerificationCode(6);
        const dobValue = dob ? moment(dob).format('YYYY-MM-DD') : '';
        const username = usernameRef.current.value;
        setVerificationCode(code);
        setFormSubmitted(true);
        setIsLoading(true);
        try {
            console.log(`Email: ${email}, Password: ${password}, DOB: ${dobValue}, Account Type: ${accountType}, Username: ${username}`);
            console.log(`Verification code: ${code}`);
            sendEmailTo(email, `${code}\nThe above code is the verification code for your registration into QuizWiz.\nThank you so much for visiting our website!`);
            setIsLoading(false);
        } catch (error) {
            setError("Failed to send verification email. Please try again.");
            setIsLoading(false);
        }
    };

    const verifyCode = () => {
        const code = verificationRef.current.value;
        if (verificationCode === code) {
            navigate("/message");
        } else {
            alert("Verification failed, please try again.");
            setFormSubmitted(false);
        }
    };

    return (
        <div className="register-page">
            <img src={quizwizLogo} alt="Quizwiz Logo" className="logo" />
            <div className="form-container">
                <form onSubmit={register}>
                    <div>
                        <div>
                            <label htmlFor="email">E-mail address:</label>
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
                            />
                            <button
                                className="showPassword"
                                type="button"
                                onClick={() => { setShowHide(showHide === "Show" ? "Hide" : "Show"); setType(type === "password" ? "text" : "password"); }}
                            >{showHide} password</button>
                        </div>
                        <div>
                            <label htmlFor="type">Public or private:</label>
                            <div className="selection">
                                <select
                                    id="type"
                                    value={accountType}
                                    onChange={(e) => setAccountType(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option value="Public" title="Public: Anyone can see your account in the accounts, you can publish your own quiz">Public</option>
                                    <option value="Private" title="Private: To see your account users will have to enter your password, you can't publish your own quiz">Private</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="dob">Date of Birth:</label>
                            <br />
                            <DatePicker
                                selected={dob}
                                onChange={(date) => setDob(date)}
                                dateFormat="MMMM d, yyyy"
                                placeholderText="Select your date of birth"
                                maxDate={new Date()}
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="username">Enter username:</label>
                            <br />
                            <input
                                type="text"
                                name="username"
                                id="username"
                                ref={usernameRef}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Creating account...' : 'Create account'}
                    </button>
                </form>
                {error && <div className="error-message">{error}</div>}
            </div>
            {formSubmitted && !isLoading && (
                <>
                    <label htmlFor="verification">Enter your verification code here:</label>
                    <br />
                    <input
                        type="text"
                        name="verification"
                        id="verification"
                        ref={verificationRef}
                    />
                    <br />
                    <button onClick={verifyCode}>Verify</button>
                    <br />
                </>
            )}
            <Link to="/info/about">Know more about us</Link>
        </div>
    );
};

export default Register;