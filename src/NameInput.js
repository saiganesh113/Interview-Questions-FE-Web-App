import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NameInput = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/interview', { state: { name } }); 
  };

  return (
    <div>
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default NameInput;
