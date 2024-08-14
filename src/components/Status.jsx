import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchData } from "../functionalities/data";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
import quizwizLogo from "../assets/logo.webp";
import "../styles/Status.css";

// Register the components with Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Status = () => {
    const location = useLocation();
    const username = location.state?.username;
    const [activeMode, setActiveMode] = useState("table");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (username) {
            const fetchResults = async () => {
                try {
                    const response = await fetchData({ username }, "http://localhost:5000/data/results");
                    if (response.results && Array.isArray(response.results)) {
                        setResults(response.results);
                    } else {
                        console.error("Unexpected response format:", response);
                    }
                } catch (error) {
                    console.error("Error fetching results:", error);
                }
            };

            fetchResults();
        }
    }, [username]);

    const handleModeChange = (mode) => {
        setActiveMode(mode);
    };

    const data = {
        labels: results.map(result => result.result_id),
        datasets: [
            {
                label: 'Correct Answers',
                data: results.map(result => result.result_correct_answers),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Wrong Answers',
                data: results.map(result => result.result_wrong_answers),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Total Answers',
                data: results.map(result => result.result_answers),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="status-container">
            <header className="status-header">
                <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" />
            </header>
            <div className="status-controls">
                <button
                    className={`status-button ${activeMode === "table" ? "active" : ""}`}
                    onClick={() => handleModeChange("table")}
                >
                    Table
                </button>
                <button
                    className={`status-button ${activeMode === "graph" ? "active" : ""}`}
                    onClick={() => handleModeChange("graph")}
                >
                    Graph
                </button>
            </div>
            <div className="status-content">
                {activeMode === "table" ? (
                    <table className="status-table">
                        <thead>
                            <tr>
                                <th>Result ID</th>
                                <th>Username</th>
                                <th>Result Type</th>
                                <th>Questions</th>
                                <th>Correct Answers</th>
                                <th>Wrong Answers</th>
                                <th>Total Answers</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map(result => (
                                <tr key={result.result_id}>
                                    <td>{result.result_id}</td>
                                    <td>{result.username}</td>
                                    <td>{result.result_type}</td>
                                    <td>{result.result_questions.join(", ")}</td>
                                    <td>{result.result_correct_answers}</td>
                                    <td>{result.result_wrong_answers}</td>
                                    <td>{result.result_answers}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="status-graph">
                        <Bar data={data} options={options} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Status;
