import React, { useState, useEffect } from 'react';
import { functionalities } from '../../../functionalities/FuncionalityConsts';
import quizData from '../../../QuizBank/class4_quiz.json';
import '../../../styles/Quiz.css'; // Import the CSS file for styling
import { fetchData } from '../../../functionalities/data';

const QuizGKClassF = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(quizData.timeLimit);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { navigate, location } = functionalities; // Corrected the spread operator usage

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
      setIsQuizStarted(true);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = async () => {
    let score = 0;
    setSubmitting(true);
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

    try {
      await fetchData({
        username: "aaravjain-me",
        resultType: 'quizwiz generated',
        resultQuestions: questions.map(q => q.question),
        resultCorrectAnswers: score,
        resultWrongAnswers: questions.length - score,
        resultAnswers: questions.length,
      }, 'http://localhost:5000/data/quiz');

      navigate('/result', { state: { score, totalQuestions: questions.length, results } });
    } catch (error) {
      console.error('Error submitting quiz results:', error);
    }
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
                <button onClick={handleSubmit} disabled={!isQuizStarted || submitting}>{submitting ? "Submitting" : "Submit"}</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGKClassF;

