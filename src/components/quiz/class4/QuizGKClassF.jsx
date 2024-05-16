import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../../../QuizBank/class4_quiz.json';
import '../../../styles/Quiz.css'; // Import the CSS file for styling

const QuizGKClassF = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(quizData.timeLimit);
  const [isQuizStarted, setIsQuizStarted] = useState(false); // New state to check if the quiz has started
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(quizData.questions);
  }, []);

  useEffect(() => {
    let interval;
    if (isQuizStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (isQuizStarted && timer === 0) {
      handleSubmit();
    }
    return () => clearInterval(interval);
  }, [timer, isQuizStarted]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (!isQuizStarted) {
      setIsQuizStarted(true); // Start the quiz when the first answer is selected
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = () => {
    let score = 0;
    const results = questions.map((question) => {
      const userAnswer = answers[question.id];
      const correctAnswer = question.correctAnswer;
      if (userAnswer === correctAnswer) {
        score += 1;
      }
      return {
        question: question.question,
        userAnswer,
        correctAnswer,
      };
    });

    navigate('/result', { state: { score, totalQuestions: questions.length, results } });
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2>{quizData.quizTitle}</h2>
        <div className="timer">Time remaining: {timer} seconds</div>
        {questions.length > 0 && (
          <div>
            <div className="question-container">
              <h3>{questions[currentQuestionIndex].question}</h3>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="option">
                  <input 
                    type="radio" 
                    name={`question-${questions[currentQuestionIndex].id}`} 
                    value={option} 
                    checked={answers[questions[currentQuestionIndex].id] === option}
                    onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, option)} 
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
            <div className="navigation-buttons">
              <button className="previous" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</button>
              {currentQuestionIndex < questions.length - 1 ? (
                <button onClick={handleNext}>Next</button>
              ) : (
                <button onClick={handleSubmit}>Submit</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGKClassF;
