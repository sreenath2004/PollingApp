
import React, { useState } from 'react';
import './login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const Navigate=useNavigate();
  const handleLogin = () => {

    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }

 
    if (username === 'sreenath' && password === '771') {
      console.log('Login successful!');
      alert('Login successful!');
      Navigate('/poll')
   
    } else {
      console.log('Invalid username or password. Please try again.');
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
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

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
