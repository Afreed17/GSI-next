import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure this path is correct or remove if not needed
import SuccessPopup from '../components/PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // Updated to phoneNumber
  const [errors, setErrors] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePassword1Change = (e) => setPassword1(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value); // Updated to phoneNumber

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
    if (!phoneNumber) { // Updated to phoneNumber
      errors.phoneNumber = 'Phone Number is required'; // Updated to phoneNumber
    } else if (!/^\d{10}$/.test(phoneNumber)) { // Updated to phoneNumber
      errors.phoneNumber = 'Phone Number is invalid'; // Updated to phoneNumber
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
  
    const userData = {
      name,
      email,
      phone_number: phoneNumber,
      password,
    };
  
    try {
      const response = await fetch('https://test-server-r5re.onrender.com/insert/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        setIsPopupVisible(true);
        // Redirect to the login page after registration
        setTimeout(() => {
          navigate('/login');
        }, 3000); // Optional delay to show the success popup before redirecting
      } else {
        // Log the response for debugging purposes
        const errorData = await response.json();
        console.error('Failed to register:', errorData);
        setErrors({ general: errorData.message || 'Failed to register. Please try again.' });
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrors({ general: 'An error occurred during registration. Please try again later.' });
    }
  };
  




  const closePopup = () => {
    setIsPopupVisible(false);
    navigate('/login'); // Redirect to login page after registration
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Register</h2>
        <p>By signing up you are agreeing to our <a href="#">Terms and privacy policy</a></p>
        <div className="tabs">
          <span onClick={() => navigate('/login')}>Login</span>
          <span className="active">Register</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" id="name" placeholder="Full Name" value={name} onChange={handleNameChange} className="full-width-input" />
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
              <input type="text" id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} /> {/* Updated to phoneNumber */}
              {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>} {/* Updated to phoneNumber */}
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
        {isPopupVisible && <SuccessPopup message="Registration Successful" onClose={closePopup} />}
        {errors.general && <p className="error-text">{errors.general}</p>}
      </div>
    </div>
  );
};

export default Register;
