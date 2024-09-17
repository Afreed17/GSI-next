import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import SuccessPopup from '../components/PopUp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const validateForm = () => {
    let valid = true;
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      valid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await axios.post('https://test-server-r5re.onrender.com/login', {
          email,
          password,
        });

        if (response.data.isValid) {
          setShowPopup(true);
        } else {
          setErrorMessage('Invalid email or password.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/dashboard'); // Redirect to a dashboard or home page
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <p>By signing in you are agreeing to our <a href="#">Terms and privacy policy</a></p>
        <div className="tabs">
          <span className="active">Login</span>
          <span onClick={() => navigate('/register')}>Register</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" id="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
            {emailError && <span className="error-text">{emailError}</span>}
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <FontAwesomeIcon icon={faEye} />
            {passwordError && <span className="error-text">{passwordError}</span>}
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember password
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit">Login</button>
          <p>or connect with</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faApple} />
            <FontAwesomeIcon icon={faGoogle} />
          </div>
        </form>
        {showPopup && (<SuccessPopup message="Login Successful!" onClose={handleClosePopup} />)}
        {errorMessage && <div className="error-text">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
