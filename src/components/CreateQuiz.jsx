import React, { useState } from "react";
import { fetchData } from "../functionalities/data";
import "../styles/CreateQuiz.css";

const CreateQuiz = () => {
    const [data, setData] = useState({
        title: "",
        numberOfQuestions: 0,
        numberOfQuestionsM: 0,
        timeLimit: 0,
        questions: []
    });
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const confirm = () => {
        const questions = Array.from({ length: data.numberOfQuestionsM }, (_, index) => ({
            id: index + 1,
            text: "",
            correctAnswer: "",
            options: ["", "", "", ""]
        }));
        setData({ ...data, questions });
        setConfirmed(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleQuestionChange = (e) => {
        const { name, value } = e.target;
        const questions = [...data.questions];
        questions[currentQuestion] = { ...questions[currentQuestion], [name]: value };
        setData({ ...data, questions });
    };

    const handleOptionChange = (index, e) => {
        const { value } = e.target;
        const questions = [...data.questions];
        questions[currentQuestion].options[index] = value;
        setData({ ...data, questions });
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await fetchData(data, "http://localhost:5000/api/quiz");
            console.log("Quiz created successfully:", response);
        } catch (error) {
            console.error("Error creating quiz:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNext = () => {
        if (currentQuestion < data.numberOfQuestionsM - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit();
        }
    };

    return (
        <div className="create-quiz-body">
            {!confirmed ? (
                <div className="form-group">
                    <div className="form-field">
                        <label htmlFor="title">Quiz Name:</label>
                        <input type="text" id="title" name="title" value={data.title} onChange={handleInputChange} required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="numberOfQuestions">Total Questions:</label>
                        <input type="number" id="numberOfQuestions" name="numberOfQuestions" value={data.numberOfQuestions} onChange={handleInputChange} required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="numberOfQuestionsM">Questions per Quiz:</label>
                        <input type="number" id="numberOfQuestionsM" name="numberOfQuestionsM" value={data.numberOfQuestionsM} onChange={handleInputChange} required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="timeLimit">Time Limit:</label>
                        <input type="number" id="timeLimit" name="timeLimit" value={data.timeLimit} onChange={handleInputChange} required />
                    </div>
                    <button className="btn" onClick={confirm}>Confirm</button>
                </div>
            ) : (
                <div className="form-group">
                    <div className="form-field">
                        <label htmlFor={`question-text-${currentQuestion}`}>Question {currentQuestion + 1}:</label>
                        <input
                            type="text"
                            id={`question-text-${currentQuestion}`}
                            name="text"
                            placeholder="Enter question text"
                            value={data.questions[currentQuestion].text || ""}
                            onChange={handleQuestionChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor={`correct-answer-${currentQuestion}`}>Correct Answer:</label>
                        <input
                            type="text"
                            id={`correct-answer-${currentQuestion}`}
                            name="correctAnswer"
                            placeholder="Enter correct answer"
                            value={data.questions[currentQuestion].correctAnswer || ""}
                            onChange={handleQuestionChange}
                        />
                    </div>
                    {data.questions[currentQuestion].options.map((option, index) => (
                        <div key={index} className="form-field">
                            <label htmlFor={`option-${currentQuestion}-${index}`}>Option {index + 1}:</label>
                            <input
                                type="text"
                                id={`option-${currentQuestion}-${index}`}
                                placeholder={`Enter option ${index + 1}`}
                                value={option || ""}
                                onChange={(e) => handleOptionChange(index, e)}
                            />
                        </div>
                    ))}
                    <button className="btn" onClick={handleNext} disabled={isLoading}>
                        {currentQuestion < data.numberOfQuestionsM - 1 ? "Next" : isLoading ? "Submitting..." : "Submit Quiz"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CreateQuiz;
