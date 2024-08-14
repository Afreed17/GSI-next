import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import SuccessPopup from '../components/PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePassword1Change = (e) => setPassword1(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const validate = () => {
    
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Full Name is required';
    }
    if (!email) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email Address is invalid';
    }
    if (!mobile) {
      errors.mobile = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = 'Mobile Number is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (password !== password1) {
      errors.password1 = 'Passwords do not match';
    }

    return errors;
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsPopupVisible(true);
  // console.log('Form submitted successfully');
  };
  
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Register</h2>
        <p>By signing up you are agreeing to our <a href="#">Term and privacy policy</a></p>
        <div className="tabs">
          <span onClick={() => navigate('/login')}>Login</span>
          <span className="active">Register</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" id="name" placeholder="Full Name" value={name} onChange={handleNameChange} className="full-width-input"/>
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" id="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <FontAwesomeIcon icon={faPhone} />
              <input type="text" id="mobile" placeholder="Mobile Number" value={mobile} onChange={handleMobileChange} />
              {errors.mobile && <p className="error-text">{errors.mobile}</p>}
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" id="password1" placeholder="Confirm Password" value={password1} onChange={handlePassword1Change} />
            {errors.password1 && <p className="error-text">{errors.password1}</p>}
          </div>

          <button type="submit">Register</button>
          <p>or connect with</p>

          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faApple} />
            <FontAwesomeIcon icon={faGoogle} />
          </div>
        </form>
        {isPopupVisible && <SuccessPopup message = "Registration Successfull" onClose={closePopup} />}
      </div>
    </div>
  );
};

export default Register;