import React from 'react';
import './popUp.css';

const Popup = ({ message, onRestart, onContinue, timer }) => {
  return (
    <div className="popup">
      <span className='popup-msg'>{message}</span>
      <div className='pop-up-content'>
      {timer === 0 ? (
        <>
          <p>No worries just try again, you got this! </p>
          <button onClick={onRestart=() => window.location.replace("/")} className="start-over-btn">Start Over 👊</button>
        </>
      ) : (
        <>
          <p>If you leave now you’ll lose your progress </p>
          <button onClick={onRestart=() => window.location.replace("/")} className="quit-btn">Quit Quiz 💀</button>
          <button onClick={onContinue} className="continue-btn">Continue Quiz 👊</button>
        </>
      )}
      </div>

      <div className='line-design'>

      </div>
    </div>
  );
};

export default Popup;
