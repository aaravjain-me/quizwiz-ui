import React, { useState } from "react";
import { fetchData } from "../functionalities/data";
import "../styles/Accounts.css";

const Accounts = () => {
    const [message, setMessage] = useState("Start typing to see accounts");
    const [accounts, setAccounts] = useState([]);
    const [searchWindow, setSearchWindow] = useState("");
    const [loading, setLoading] = useState(false);

    const debounce = (func, delay) => {
        let debounceTimer;
        return function (...args) {
            const context = this;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    const handleSearchWindowChange = async (e) => {
        const value = e.target.value;
        setSearchWindow(value);
        if (value.trim() === "") {
            setMessage("Start typing to see accounts");
            setAccounts([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const response = await fetchData({ typedString: value }, "http://localhost:5000/data/accounts");
            setAccounts(response.accounts);
            setLoading(false);
            if (response.accounts.length === 0) {
                setMessage("No accounts found");
            }
        } catch (error) {
            setLoading(false);
            setMessage("Error fetching accounts");
            console.error("Error fetching accounts:", error);
        }
    };

    const debouncedHandleSearchWindowChange = debounce(handleSearchWindowChange, 300);

    return (
        <div className="accounts-page">
            <div className="search-window">
                <input type="text" onChange={debouncedHandleSearchWindowChange} placeholder="Search accounts..." />
            </div>
            <div className="accounts-list">
                {loading ? (
                    <div className="message">Fetching accounts...</div>
                ) : accounts.length > 0 ? (
                    accounts.map((account, index) => (
                        <div key={index} className="account-item">
                            <p><strong>Username:</strong> {account.username}</p>
                            <p><strong>Email:</strong> {account.user_email}</p>
                            <p><strong>Age:</strong> {account.user_age}</p>
                        </div>
                    ))
                ) : (
                    <div className="message">{message}</div>
                )}
            </div>
        </div>
    );
};

export default Accounts;
