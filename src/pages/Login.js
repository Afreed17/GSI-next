import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <p>By signing in you are agreeing to our <a href="#">Term and privacy policy</a></p>
        <div className="tabs">
          <span className="active">Login</span>
          <span>Register</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" id="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <FontAwesomeIcon icon={faEye} />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> 
              Remember password
            </label>
            <a href="#">Forget password</a>
          </div>
          <button type="submit">Login</button>
          <p>or connect with</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faApple} />
            <FontAwesomeIcon icon={faGoogle} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;