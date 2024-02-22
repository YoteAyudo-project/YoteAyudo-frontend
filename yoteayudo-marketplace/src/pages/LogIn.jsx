import React, { useState } from 'react';
import './login.css';
import <AuthStore>   

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onButtonClick = () => {
    
    setEmailError('');
    setPasswordError('');

  
    if ('' === email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }


    console.log('Authenticating...');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <div className="inputContainer">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputBox" />
        {emailError && <div className="errorLabel">{emailError}</div>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputBox" />
        {passwordError && (
          <div className="errorLabel">{passwordError}</div>
        )}
      </div>
      <div className="buttonContainer">
        <input type="button" value="Login" onClick={onButtonClick} />
      </div>
    </div>
  );
}