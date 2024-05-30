import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from './components/quiz/class4/QuizGKClassF';
import Result from './components/Result';
import quizwizLogo from './assets/logo.webp';
import NavigationBar from './components/NavigationBar';
import Register from './components/Register';
import Message from './components/Message';
import Info from './components/Info';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Register />} />
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
        <Route path="/message" element={<Message timer={5} />} />
        <Route path="/info/*" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;

