import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import quizwizLogo from './assets/logo.webp'; // Import the logo
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <div className="content-wrapper">
            <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" />
            <Quiz />
          </div>
        } />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
