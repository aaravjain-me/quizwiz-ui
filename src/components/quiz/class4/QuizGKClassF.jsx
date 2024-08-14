import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import '../../../styles/Quiz.css'; // Import the CSS file for styling
import { fetchData } from '../../../functionalities/data';

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const QuizGKClassF = () => {
  const { class: className, subject } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [quizTitle, setQuizTitle] = useState('');
  const [timeLimit, setTimeLimit] = useState(300);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timer, setTimer] = useState(timeLimit);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const data = await fetchData({ class: capitalize(className), subject }, 'http://localhost:5000/data/random-questions');
        setQuestions(data.questions);
        setQuizTitle(data.quizTitle);
        setTimeLimit(data.timeLimit);
        setTimer(data.timeLimit);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, [className, subject]);

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
      if (location.state) {
        await fetchData({
          username: location.state.username,
          resultType: 'quizwiz generated',
          resultQuestions: questions.map(q => q.question),
          resultCorrectAnswers: score,
          resultWrongAnswers: questions.length - score,
          resultAnswers: questions.length,
        }, 'http://localhost:5000/data/quiz');
      } else {
        await fetchData({
          username: "Random user",
          resultType: 'quizwiz generated',
          resultQuestions: questions.map(q => q.question),
          resultCorrectAnswers: score,
          resultWrongAnswers: questions.length - score,
          resultAnswers: questions.length,
        }, 'http://localhost:5000/data/quiz');
      }

      navigate('/result', { state: { score, totalQuestions: questions.length, results } });
    } catch (error) {
      console.error('Error submitting quiz results:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2>{quizTitle}</h2>
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
                    value={option.text}
                    checked={answers[questions[currentQuestionIndex].id] === option.text}
                    onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, option.text)}
                  />
                  <label>{option.text}</label>
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
