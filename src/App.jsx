import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from './components/quiz/class4/QuizGKClassF';
import Result from './components/Result';
import quizwizLogo from './assets/logo.webp';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path="/home" element={
          <>
            <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" /> 
            <NavigationBar />
          </> 
        } /> 
        <Route path="/quiz" element={
          <div className="content-wrapper">
            <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" />
            <Quiz />
          </div>
        } />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  )
}

export default App;

