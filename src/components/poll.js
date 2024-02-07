import React, { useState } from 'react';
import './poll.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const CreatePollPage = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [isPollStarted, setIsPollStarted] = useState(false);
const Navigate=useNavigate();
  const handleOptionChange = (index, value) => {
    setOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  const startPolling = () => {
    if (question.trim() === '' || options.some((opt) => opt.trim() === '')) {
      alert('Please fill out the question and all options.');
      return;
    }

    setIsPollStarted(true);
Navigate('/main');
    // Here you can implement logic to send the poll data to the server or perform any other actions.
    // For simplicity, we'll just log the data to the console.
    console.log('Poll created:', { question, options });
  };

  return (
    <div className="create-poll-container">
      <h1>CREATE A POLL!</h1>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={isPollStarted}
        />
      </label>
      <ul className="options-list">
        {options.map((opt, index) => (
          <li key={index}>
            <label>
              Option {index + 1}:
              <input
                type="text"
                value={opt}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                disabled={isPollStarted}
              />
            </label>
          </li>
        ))}
      </ul>
      <button onClick={startPolling} disabled={isPollStarted}>
        START POLLING
      </button>
    </div>
  );
};

export default CreatePollPage;