import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faEye } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePassword1Change = (e) => setPassword1(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== password1){
        console.log(alert ("Password do not match"));
        return;
    }
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
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" id="name" placeholder="Full Name" value={name} onChange={handleNameChange} className="full-width-input"/>
          </div>


          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" id="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
          </div>



          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            {/* <FontAwesomeIcon icon={faEye} /> */}
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} />
            <input type="password" id="password1" placeholder="Confrim Password" value={password1} onChange={handlePassword1Change} />
            <FontAwesomeIcon icon={faEye} />
          </div>


          <button type="submit">Register</button>
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

export default Register;