
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function InterviewQuestions() {
  
  const location = useLocation();
  const name = location.state && location.state.name ? location.state.name : 'Guest';

  
  const [answers, setAnswers] = useState(Array(10).fill(''));

  const navigate = useNavigate();

  
  const updateAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('http://localhost:3002/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        throw new Error('Failed to validate answers');
      }

      const data = await response.json();
      const validationResults = data.validationResults;

      
      const correct = Object.values(validationResults).filter((isCorrect) => isCorrect).length;
      const incorrect = Object.values(validationResults).filter((isCorrect) => !isCorrect).length;

      
      navigate(`/UserReview?correctCount=${correct}&incorrectCount=${incorrect}`);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while validating answers. Please try again.');
    }
  };

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <h2>Interview Questions</h2>
      <form onSubmit={handleSubmit}>
      <ol>
        <li>
          What is JSX?
          <input
            type="text"
            value={answers[0]}
            onChange={(e) => updateAnswer(0, e.target.value)}
          />
        </li>
        <li>
          What is a state in React?
          <input
            type="text"
            value={answers[1]}
            onChange={(e) => updateAnswer(1, e.target.value)}
          />
        </li>
        <li>
          What are props in React?
          <input
            type="text"
            value={answers[2]}
            onChange={(e) => updateAnswer(2, e.target.value)}
          />
        </li>
        <li>
          What is the virtual DOM?
          <input
            type="text"
            value={answers[3]}
            onChange={(e) => updateAnswer(3, e.target.value)}
          />
        </li>
        <li>
          Explain the component lifecycle methods in React.
          <input
            type="text"
            value={answers[4]}
            onChange={(e) => updateAnswer(4, e.target.value)}
          />
        </li>
        <li>
          What is a higher-order component (HOC) in React?
          <input
            type="text"
            value={answers[5]}
            onChange={(e) => updateAnswer(5, e.target.value)}
          />
        </li>
        <li>
          What are controlled and uncontrolled components in React forms?
          <input
            type="text"
            value={answers[6]}
            onChange={(e) => updateAnswer(6, e.target.value)}
          />
        </li>
        <li>
          What is the difference between a class component and a functional component?
          <input
            type="text"
            value={answers[7]}
            onChange={(e) => updateAnswer(7, e.target.value)}
          />
        </li>
        <li>
          What is Redux and how does it work?
          <input
            type="text"
            value={answers[8]}
            onChange={(e) => updateAnswer(8, e.target.value)}
          />
        </li>
        <li>
          What are React Hooks?
          <input
            type="text"
            value={answers[9]}
            onChange={(e) => updateAnswer(9, e.target.value)}
          />
        </li>
      </ol>
        <button type="submit">Continue</button> 
      </form>
    </div>
  );
}

export default InterviewQuestions;


