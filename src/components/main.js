import React, { useState, useEffect } from 'react';
import './main.css';

const PollApp = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'Option A', votes: 0 },
    { id: 2, text: 'Option B', votes: 0 },
    { id: 3, text: 'Option C', votes: 0 },
  ]);

  const [hasVoted, setHasVoted] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (hasVoted) {
      const maxVotes = Math.max(...options.map(option => option.votes));
      const winningOption = options.find(option => option.votes === maxVotes);
      setWinner(winningOption);
    }
  }, [hasVoted, options]);

  const handleVote = (optionId) => {
    if (!hasVoted) {
      setOptions((prevOptions) =>
        prevOptions.map((option) =>
          option.id === optionId ? { ...option, votes: option.votes + 1 } : option
        )
      );
      setHasVoted(true);
      alert('Thanks for voting!');
    } else {
      alert('You have already voted. Thanks!');
    }
  };

  return (
    <div className="poll-container">
      <h1>ENTER THE VOTES!!</h1>
      <ul className="options-list">
        {options.map((option) => (
          <li key={option.id}>
            <button onClick={() => handleVote(option.id)}>{option.text}</button>
            <span>{option.votes} votes</span>
          </li>
        ))}
      </ul>
      {hasVoted && winner && (
        <div className="winner">
          <h2>Winner: {winner.text}</h2>
        </div>
      )}
    </div>
  );
};

export default PollApp;
