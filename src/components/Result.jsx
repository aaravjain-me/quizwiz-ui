import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import quizwizLogo from '../assets/logo.webp'; // Import the logo
import '../styles/Result.css'; // Import the CSS file for styling

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, results } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!location.state) {
    return null;
  }

  return (
    <div className="result-container">
      <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" />
      <h2>Your Score: {score} / {totalQuestions}</h2>
      <div className="results-wrapper">
        <div className="results">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result.question}</h3>
              <p><strong>Your answer:</strong> {result.userAnswer}</p>
              <p><strong>Correct answer:</strong> {result.correctAnswer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
