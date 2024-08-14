import React from 'react';
import './PopUp.css'; 

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>{message}</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessPopup;
