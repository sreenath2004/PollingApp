// Signup.js
import React, { useState } from 'react';
import './signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const Navigate=useNavigate();
  const handleSignup = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all the fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Signup successful for:', username);
    alert('Signup successful!');
Navigate('/signup');
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
