import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import quizwizLogo from '../assets/logo.webp'; // Import the logo
import '../styles/Result.css'; // Import the CSS file for styling
import jsPDF from 'jspdf';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions, results } = location.state || {};
  const [timer, setTimer] = React.useState(100);

  useEffect(() => {
    if (!location.state) {
      navigate('/home');
    }
  }, [location.state, navigate]);

  if (!location.state) {
    return null;
  }

  useEffect(() => {
    if (timer > 0) {
      const timeoutId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(timeoutId); // Cleanup the timeout
    } else {
      navigate("/home");
    }
  }, [timer, navigate]);

  const downloadCSV = () => {
    // Start with the score in the first cell and a blank row after
    const csvRows = [
        [`Score: ${score}/${totalQuestions}`],
        [], // Blank row
        ['Question', 'Your Answer', 'Correct Answer'] // Header row
    ];

    // Add results to the CSV
    results.forEach(result => {
        csvRows.push([result.question, result.userAnswer, result.correctAnswer]);
    });

    // Convert array to CSV string
    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'quiz-results.csv');
};


  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Your Score: ${score} / ${totalQuestions}`, 10, 10);
    doc.setFontSize(12);

    let yOffset = 30;
    results.forEach((result, index) => {
      doc.setTextColor(0, 0, 0); // Black for questions
      doc.text(`${index + 1}. ${result.question}`, 10, yOffset);
      yOffset += 10;

      // Check if the user's answer is correct
      if (result.userAnswer === result.correctAnswer) {
        doc.setTextColor(34, 139, 34); // Darker Green for correct
      } else {
        doc.setTextColor(220, 20, 60); // Crimson for incorrect
      }
      doc.text(`Your answer: ${result.userAnswer}`, 10, yOffset);
      yOffset += 10;

      doc.setTextColor(0, 0, 0); // Black for correct answer
      doc.text(`Correct answer: ${result.correctAnswer}`, 10, yOffset);
      yOffset += 20;
    });

    doc.save('quiz-results.pdf');
  };

  return (
    <div className="result-container">
      <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" />
      <h2>Your Score: {score} / {totalQuestions}</h2>
      <div className="results-wrapper">
        <div className="results">
          {results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result.question}</h3>
              <p className={result.userAnswer === result.correctAnswer ? 'correct' : 'incorrect'}>
                <strong>Your answer:</strong> {result.userAnswer}
              </p>
              <p>
                <strong>Correct answer:</strong> {result.correctAnswer}
              </p>
            </div>
          ))}
        </div>
        <div className="download-options">
          <button onClick={downloadCSV}>Download CSV</button>
          <button onClick={downloadPDF}>Download PDF</button>
        </div>
        <p>
          Redirecting to home page in {timer} seconds ...
        </p>
      </div>
    </div>
  );
};

export default Result;
