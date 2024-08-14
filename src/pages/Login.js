import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import SuccessPopup from '../components/PopUp';
// import Home from './Home';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  
  const [showPopup, setShowPopup] = useState(false);


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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowPopup(true);
  };
};

const handleClosePopup = () => {
  setShowPopup(false);
  // navigate(Home);
};

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <p>By signing in you are agreeing to our <a href="#">Term and privacy policy</a></p>
        <div className="tabs">
          <span className="active">Login</span>
          <span onClick={() => navigate('/register')}>Register</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" id="email" placeholder="Email Address" value={email} onChange={handleEmailChange}/>
            {emailError && <span className="error-text" id='error1'>{emailError}</span>}
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
            <FontAwesomeIcon icon={faEye} />
            {passwordError && <span className="error-text" id='error2'>{passwordError}</span>}
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
        {showPopup && (<SuccessPopup message="Login Successful!" onClose={handleClosePopup}/>)}
      </div>
    </div>
  );
};

export default Login;
