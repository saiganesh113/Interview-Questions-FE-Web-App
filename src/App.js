import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NameInput from './NameInput';
import InterviewQuestions from './InterviewQuestions';
import UserReview from './UserReview';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<NameInput />} />
          <Route path="/interview" element={<InterviewQuestions />} />
          <Route path="/UserReview" element={<UserReview />} />
        </Routes>
    </Router>
  );
}

export default App;
