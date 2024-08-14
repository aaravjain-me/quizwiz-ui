import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from './components/quiz/class4/QuizGKClassF';
import Result from './components/Result';
import quizwizLogo from './assets/logo.webp';
import Register from './components/Register';
import Message from './components/Message';
import Info from './components/Info';
import Login from './components/Login';
import Home from './components/Home';
import Accounts from './components/Accounts';
import Error from './components/Error';
import Status from './components/Status';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/error' element={<Error />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/quiz/:class/:subject" element={
          <div className="content-wrapper">
            <img src={quizwizLogo} alt="QuizWiz Logo" className="logo" />
            <Quiz />
          </div>
        } />
        <Route path='/status' element={<Status />} />
        <Route path="/result" element={<Result />} />
        <Route path="/message" element={<Message timer={5} />} />
        <Route path="/info/*" element={<Info />} />
        <Route path='/accounts' element={<Accounts />} />
      </Routes>
    </div>
  );
}

export default App;
