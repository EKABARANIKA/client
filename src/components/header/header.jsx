import React from 'react';
import { ExitIcon, ExplanationIcon } from '../../assets/icons';
import './header.css';

export default function Header({ timer, currentPage, totalPages,info , onExitClick, onExplanationClick }) {
  const timerBackgroundColor = timer <= 3 ? '#D44D4D' : '#7A68FF';
  return (
    <div className="header">
      <button onClick={onExitClick} className="exit-icon">
        <ExitIcon />
      </button>
      <div className="timer" style={{ backgroundColor: timerBackgroundColor }}>
        {timer}
      </div>
      <div className='info-page-content'>
        <button className="info-content">
          <ExplanationIcon className="explanation-icon" onClick={onExplanationClick} />
        </button>
        <div className='tooltip-box'>
          Course: <span style={{fontWeight:"100", fontSize:"18px"}}>Pop Culture & Art</span><br />
          Module: <span style={{fontWeight:"100", fontSize:"18px"}}>55 Section 2</span><br />
          Topic: <span style={{fontWeight:"100", fontSize:"18px"}}>The Most Influential</span>
        </div>
       {currentPage} / {totalPages}
      </div>
      
    </div>
  )
}



